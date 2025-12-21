---
title: "Text Extraction: Handling PDFs, Word Docs, and Markdown"
date: "2025-08-15"
author: "Knowledge Stack Team"
excerpt: "Learn the intricacies of extracting text from different document formats. Discover the challenges and best practices for PDFs, Word documents, and Markdown files in RAG systems."
tags: ["RAG", "Parsing", "Document Processing"]
---

# Text Extraction: Handling PDFs, Word Docs, and Markdown

![Text Extraction](/blog-images/text-extraction-hero.png)

Different document formats require different extraction strategies. What works for a PDF won't work for a Word document. Understanding these differences is crucial for building effective RAG systems.

## PDF Parsing: The Most Complex Format

PDFs come in two main types, each requiring different approaches:

### Native PDFs

These contain actual text that can be extracted directly:

**Advantages:**
- Text is already digitized
- Font and formatting information available
- Can extract exact coordinates

**Challenges:**
- Complex layouts (multi-column, tables)
- Text extraction order may not match reading order
- Embedded fonts and encoding issues

**Knowledge Stack Approach:**
```python
# We use advanced PDF parsing libraries that:
1. Extract text with position information
2. Analyze layout to determine reading order
3. Preserve formatting and structure
4. Handle complex layouts intelligently
```

### Scanned PDFs

These are essentially images that require OCR:

**Challenges:**
- Image quality varies significantly
- Text orientation issues (rotated pages)
- Multi-language content
- Handwritten notes or annotations

**Knowledge Stack Solution:**
- Automatic detection of scanned vs. native PDFs
- High-quality OCR with preprocessing
- Multi-language OCR support
- Quality scoring to flag problematic pages

![PDF Parsing Comparison](/blog-images/pdf-parsing-comparison.png)

## Word Document Parsing

Word documents (.docx) are structured XML files, making them easier to parse:

### Advantages

- **Structured format**: XML-based structure is predictable
- **Rich metadata**: Author, creation date, modification date
- **Formatting preserved**: Styles, headings, lists maintained
- **Embedded objects**: Tables, images, charts accessible

### Challenges

- **Legacy formats**: .doc files require different handling
- **Complex formatting**: Custom styles, nested structures
- **Track changes**: Comments and revisions need handling
- **Macros and embedded code**: Security considerations

### Knowledge Stack's Word Parser

Our parser extracts:

1. **Document structure**: Headings, paragraphs, lists
2. **Formatting**: Bold, italic, underline, colors
3. **Tables**: With cell relationships preserved
4. **Metadata**: Author, dates, custom properties
5. **Hyperlinks**: Both internal and external links

```markdown
Example extraction:
# Heading 1
Paragraph text with **bold** and *italic* formatting.

- List item 1
- List item 2

[Link text](https://example.com)
```

## Markdown Parsing

Markdown is already structured, but still requires careful parsing:

### Advantages

- **Human-readable**: Easy to understand structure
- **Standardized**: CommonMark specification
- **Lightweight**: Simple syntax

### Challenges

- **Variations**: GitHub Flavored Markdown, CommonMark differences
- **Embedded HTML**: Mixed content
- **Code blocks**: Syntax highlighting preservation
- **Frontmatter**: YAML/TOML metadata handling

### Knowledge Stack's Markdown Parser

We handle:

- **Standard Markdown**: CommonMark compliant
- **GFM extensions**: Tables, strikethrough, task lists
- **Code blocks**: Language detection and preservation
- **Frontmatter**: YAML metadata extraction
- **Links and images**: URL preservation

## Format-Specific Considerations

### Encoding Issues

Different formats use different encodings:

- **PDFs**: May use custom encodings or embedded fonts
- **Word**: UTF-8, but legacy docs may use Windows-1252
- **Markdown**: Typically UTF-8, but can vary

**Knowledge Stack Solution**: Automatic encoding detection and normalization

### Layout Preservation

Maintaining document structure:

- **PDFs**: Use bounding boxes and reading order analysis
- **Word**: Leverage XML structure and styles
- **Markdown**: Parse syntax tree to preserve hierarchy

### Metadata Extraction

Each format has different metadata:

| Format | Available Metadata |
|--------|-------------------|
| PDF | Title, author, subject, keywords, creation date |
| Word | Author, company, creation/modification dates, custom properties |
| Markdown | Frontmatter (YAML/TOML), file system metadata |

## Best Practices

### 1. **Format Detection**

Always detect format before parsing:

```python
def detect_format(file_path):
    # Check file extension
    # Analyze file headers
    # Use MIME type detection
    return format_type
```

### 2. **Error Handling**

Handle parsing failures gracefully:

- Log errors for debugging
- Provide fallback strategies
- Flag problematic documents for review

### 3. **Quality Validation**

Validate extracted content:

- Check for empty extractions
- Verify text quality (OCR confidence scores)
- Validate structure preservation

## Knowledge Stack's Unified Approach

We've built a unified parsing pipeline that:

1. **Automatically detects** document format
2. **Routes to appropriate parser** (PDF, Word, Markdown, etc.)
3. **Normalizes output** to consistent structure
4. **Preserves metadata** and formatting
5. **Handles errors** gracefully with fallbacks

This means you can upload any document format, and Knowledge Stack handles the complexity for you.

## What's Next?

Next week, we'll explore **multi-format document handling** in enterprise environments, where documents come from various sources and formats.

---

*Week 3 of our RAG series. [Try Knowledge Stack](https://app.knowledgestack.ai) to experience our multi-format parsing.*

