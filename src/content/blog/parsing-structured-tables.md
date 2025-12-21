---
title: "Parsing Structured Tables: Preserving Relationships"
date: "2025-09-05"
author: "Knowledge Stack Team"
excerpt: "Learn how to parse structured tables while preserving row and column relationships. Discover techniques for maintaining table structure in RAG systems."
tags: ["RAG", "Tables", "Parsing"]
---

# Parsing Structured Tables: Preserving Relationships

![Structured Tables](/blog-images/structured-tables-hero.png)

Structured tables are the backbone of enterprise data. Financial reports, product catalogs, comparison charts—all rely on tables to organize information. When parsing tables for RAG systems, preserving relationships is crucial for accurate retrieval and answers.

## Understanding Table Structure

### Basic Table Components

A table consists of:

- **Headers**: Column and row labels defining meaning
- **Data Cells**: Actual values or content
- **Relationships**: How cells relate to each other
- **Metadata**: Table title, captions, footnotes

### Relationship Types

**Row Relationships:**
- Items in the same row are related
- Example: Product name, price, and stock level

**Column Relationships:**
- Items in the same column share meaning
- Example: All prices in the "Price" column

**Header Relationships:**
- Headers define what data means
- Example: "Q1 Revenue" header applies to all cells below

**Spatial Relationships:**
- Position conveys meaning
- Example: Leftmost column often contains primary keys

## Parsing Challenges

### Challenge 1: Header Detection

Identifying headers correctly:

- **Single-row headers**: Simple case
- **Multi-row headers**: Hierarchical structure
- **Merged header cells**: Cells spanning multiple columns
- **No headers**: Data tables without explicit headers

**Knowledge Stack Solution:**
- Pattern recognition for header detection
- Hierarchical header parsing
- Automatic header inference when missing

### Challenge 2: Cell Extraction

Accurately extracting cell boundaries:

- **Regular grids**: Easy to parse
- **Irregular spacing**: Variable cell sizes
- **Merged cells**: Cells spanning multiple rows/columns
- **Empty cells**: Handling missing data

**Knowledge Stack Approach:**
- Layout analysis to detect cell boundaries
- Merged cell detection and handling
- Empty cell preservation

### Challenge 3: Relationship Preservation

Maintaining relationships during parsing:

- **Row integrity**: Keeping row data together
- **Column integrity**: Maintaining column structure
- **Header mapping**: Linking headers to data cells
- **Hierarchical structure**: Preserving nested relationships

## Knowledge Stack's Table Parser

### Structure Detection

```python
def parse_table(document, table_region):
    # Detect table boundaries
    boundaries = detect_table_boundaries(table_region)
    
    # Identify headers
    headers = detect_headers(boundaries)
    
    # Extract cells
    cells = extract_cells(boundaries, headers)
    
    # Preserve relationships
    relationships = map_relationships(headers, cells)
    
    return TableStructure(headers, cells, relationships)
```

### Relationship Mapping

We maintain:

- **Row indices**: Which row each cell belongs to
- **Column indices**: Which column each cell belongs to
- **Header mappings**: Which headers apply to each cell
- **Cell coordinates**: Bounding boxes for citations

### Output Format

Parsed tables include:

- **Structured data**: JSON representation
- **Metadata**: Table title, captions, footnotes
- **Relationships**: Row/column mappings
- **Coordinates**: Bounding boxes for citations

## Best Practices

### 1. **Preserve Structure**

Don't flatten tables. Maintain:
- Row and column structure
- Header hierarchies
- Cell relationships
- Spatial information

### 2. **Extract Metadata**

Capture:
- Table titles and captions
- Column descriptions
- Row labels
- Footnotes and annotations

### 3. **Handle Edge Cases**

Prepare for:
- Tables with no headers
- Irregular layouts
- Merged cells
- Split tables (across pages)

### 4. **Validate Quality**

Check:
- Cell extraction completeness
- Relationship accuracy
- Header detection correctness
- Data integrity

## Real-World Example

### Financial Report Table

**Original:**
```
| Product    | Q1    | Q2    | Q3    | Q4    |
|------------|-------|-------|-------|-------|
| Product A  | $100K | $120K | $130K | $140K |
| Product B  | $80K  | $95K  | $105K | $110K |
```

**Parsed Structure:**
```json
{
  "headers": {
    "rows": ["Product"],
    "columns": ["Q1", "Q2", "Q3", "Q4"]
  },
  "rows": [
    {
      "label": "Product A",
      "cells": {
        "Q1": "$100K",
        "Q2": "$120K",
        "Q3": "$130K",
        "Q4": "$140K"
      }
    }
  ]
}
```

This structure allows queries like:
- "What was Product A's Q2 revenue?" → "$120K"
- "Which product had the highest Q4 revenue?" → "Product A"
- "What was the total Q1 revenue?" → "$180K"

## Knowledge Stack's Advantages

✅ **Structure preservation** maintaining all relationships  
✅ **Header detection** for hierarchical structures  
✅ **Cell-level citations** for precise source tracking  
✅ **Query optimization** for table-specific queries  
✅ **Format support** across PDF, Word, Excel, HTML  

When users query table data, Knowledge Stack can retrieve specific cells, rows, or columns with accurate citations.

## What's Next?

Next week, we'll explore **complex tables** with merged cells, nested structures, and irregular layouts—the most challenging parsing scenarios.

---

*Week 6 of our RAG series. [Try Knowledge Stack](https://app.knowledgestack.ai) to see our table parsing.*

