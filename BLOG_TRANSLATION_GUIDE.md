# Blog Translation Guide

The blog system now supports dynamic translations for blog post metadata (title, excerpt, tags). Blog content remains in markdown files and can be translated by creating language-specific markdown files in the future.

## How It Works

1. **Blog Metadata Translation**: Blog post titles, excerpts, and tags are stored in translation files (`src/lib/locales/en.json` and `src/lib/locales/zh.json`) under `blog.posts.{slug}`.

2. **Automatic Translation**: When a user changes their language preference, the blog system automatically loads the translated metadata from the appropriate translation file.

3. **Content Translation**: Blog content (markdown) currently uses the English version. To add translated content:
   - Create language-specific markdown files (e.g., `post-slug.zh.md`)
   - Update the blog import script to load language-specific files
   - Or store content in translation files (for smaller posts)

## Adding a New Blog Post

1. Create a markdown file in `src/content/blog/` with frontmatter:
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "2025-01-20"
   author: "Author Name"
   excerpt: "A brief description"
   tags: ["Tag1", "Tag2"]
   ---
   
   # Your Blog Post Title
   
   Your content here...
   ```

2. Run the blog import script:
   ```bash
   npm run generate-blog
   ```

3. Run the translation key generator:
   ```bash
   npm run generate-blog-translations
   ```

4. Translate the metadata in `src/lib/locales/zh.json`:
   ```json
   "blog": {
     "posts": {
       "your-post-slug": {
         "title": "您的博客文章标题",
         "excerpt": "简要描述",
         "tags": {
           "Tag1": "标签1",
           "Tag2": "标签2"
         }
       }
     }
   }
   ```

## Translating Existing Blog Posts

1. Open `src/lib/locales/zh.json`
2. Find the blog post under `blog.posts.{slug}`
3. Translate the `title`, `excerpt`, and `tags` values
4. Save the file

## Translation Structure

```json
{
  "blog": {
    "posts": {
      "post-slug": {
        "title": "English Title",
        "excerpt": "English excerpt",
        "tags": {
          "Tag1": "Tag1",
          "Tag2": "Tag2"
        }
      }
    }
  }
}
```

## Future Enhancements

- Support for language-specific markdown files (e.g., `post-slug.zh.md`)
- Automatic content translation via translation files
- Translation management UI

