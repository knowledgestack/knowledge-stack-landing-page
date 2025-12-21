# How to Write Blog Posts for Knowledge Stack

## Quick Start

To write a new blog post, you have two options:

### Option 1: Edit the Blog Posts Array (Current Method)

Edit `src/lib/blog.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Blog Post Title",
  date: "2025-01-20",
  author: "Your Name",
  excerpt: "A brief description that appears in the blog listing",
  tags: ["Tag1", "Tag2"],
  content: `# Your Blog Post Title

Write your content here using Markdown syntax.

## Section 1

Your content...

## Section 2

More content...`,
  readingTime: 5 // Will be calculated automatically
}
```

### Option 2: Use Markdown Files (Recommended for Future)

1. Create a new `.md` file in `src/content/blog/`
2. Use this format:

```markdown
---
title: "Your Blog Post Title"
date: "2025-01-20"
author: "Your Name"
excerpt: "A brief description"
tags: ["Tag1", "Tag2"]
---

# Your Blog Post Title

Write your content here using Markdown syntax.

## Section 1

Your content...

## Section 2

More content...
```

3. The file will automatically appear in the blog listing

## Markdown Features Supported

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Lists**: 
  - Unordered: `- Item`
  - Ordered: `1. Item`
- **Links**: `[text](url)`
- **Code**: `` `inline code` `` or code blocks with ```
- **Blockquotes**: `> quote`
- **Tables**: Standard markdown tables

## Example Blog Post

```markdown
---
title: "5 Tips for Better Knowledge Management"
date: "2025-01-20"
author: "Jane Doe"
excerpt: "Learn how to improve your organization's knowledge management practices"
tags: ["Best Practices", "Knowledge Management"]
---

# 5 Tips for Better Knowledge Management

Effective knowledge management is crucial for modern organizations. Here are five tips to get started:

## 1. Centralize Your Documentation

Keep all your important documents in one place. This makes it easier for team members to find what they need.

## 2. Use Clear Naming Conventions

Consistent naming makes documents easier to find and organize.

## 3. Regular Updates

Keep your documentation up to date. Outdated information can be worse than no information.

## 4. Encourage Contributions

Make it easy for team members to contribute and update documentation.

## 5. Leverage AI Tools

Use AI-powered tools like Knowledge Stack to make your knowledge more accessible.

## Conclusion

By following these tips, you can significantly improve your organization's knowledge management.
```

## Adding Images

To add images to your blog posts:

1. Place images in `public/blog-images/`
2. Reference them in markdown: `![Alt text](/blog-images/image-name.jpg)`

## Best Practices

1. **Write clear, descriptive titles** - Make it obvious what the post is about
2. **Use excerpts** - Keep them under 200 characters for best display
3. **Add relevant tags** - Helps readers find related content
4. **Use headers** - Break up content with H2 and H3 headers
5. **Keep it readable** - Use short paragraphs and bullet points
6. **Add a conclusion** - Wrap up your post with key takeaways

## Questions?

If you need help writing blog posts, contact the team or check the example posts in `src/lib/blog.ts`.

