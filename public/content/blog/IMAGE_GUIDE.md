# Blog Image Guide

## Image Requirements

Each blog post should include:

1. **Hero Image** (1200x630px) - For social sharing and post header
2. **2-3 Diagrams/Illustrations** - Explaining concepts
3. **Code Examples** - With syntax highlighting (handled automatically)
4. **Before/After Comparisons** - Where relevant

## Image Naming Convention

Use descriptive, kebab-case names:

```
rag-introduction-hero.png
rag-flow-diagram.png
pdf-parsing-comparison.png
table-complexity.png
ocr-preprocessing.png
```

## Image Placement

All blog images should be placed in:
```
public/blog-images/
```

## Image References in Markdown

Reference images in your markdown files like this:

```markdown
![Alt Text](/blog-images/image-name.png)
```

## Image Creation Guidelines

### Hero Images
- **Size**: 1200x630px (2:1 aspect ratio)
- **Format**: PNG or JPG
- **Content**: Should represent the blog post topic
- **Text**: Minimal or no text (text can be added via CSS if needed)

### Diagrams
- **Size**: 800-1200px wide
- **Format**: PNG (for diagrams with text) or SVG (for scalable graphics)
- **Style**: Consistent with Knowledge Stack branding
- **Colors**: Use brand colors (primary blue, accent green)

### Screenshots
- **Size**: 1200px wide maximum
- **Format**: PNG
- **Quality**: High resolution, clear text
- **Annotations**: Add arrows, highlights, or callouts if needed

## Tools for Creating Images

- **Diagrams**: Figma, Excalidraw, draw.io
- **Screenshots**: CleanShot, Snagit, or built-in screenshot tools
- **Image Editing**: Figma, Photoshop, or free tools like GIMP

## Current Blog Posts and Their Images

### Week 1: Introduction to RAG
- `rag-introduction-hero.png` - Hero image
- `rag-flow-diagram.png` - RAG pipeline diagram

### Week 2: Document Parsing Fundamentals
- `document-parsing-hero.png` - Hero image
- `parsing-pipeline.png` - Parsing pipeline diagram

### Week 3: Text Extraction Formats
- `text-extraction-hero.png` - Hero image
- `pdf-parsing-comparison.png` - PDF parsing comparison

### Week 4: Multi-Format Documents
- `multi-format-hero.png` - Hero image

### Week 5: Why Tables Matter
- `tables-hero.png` - Hero image
- `table-complexity.png` - Table complexity examples

### Week 9: OCR in RAG
- `ocr-hero.png` - Hero image
- `ocr-preprocessing.png` - OCR preprocessing steps

## Adding New Images

1. Create/edit the image using your preferred tool
2. Save to `public/blog-images/` with descriptive name
3. Reference in markdown: `![Alt Text](/blog-images/image-name.png)`
4. Ensure image is optimized (compressed but still high quality)

## Image Optimization

Before uploading:
- Compress images (use tools like TinyPNG, ImageOptim)
- Use appropriate format (PNG for diagrams, JPG for photos)
- Keep file sizes reasonable (<500KB for hero images, <200KB for diagrams)

