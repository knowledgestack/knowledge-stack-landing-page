import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/content/blog');
const enLocaleFile = path.join(__dirname, '../src/lib/locales/en.json');
const zhLocaleFile = path.join(__dirname, '../src/lib/locales/zh.json');

// Get all markdown files
const files = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md') && !f.includes('README') && !f.includes('IMAGE_GUIDE'))
  .sort();

console.log(`Found ${files.length} blog post files`);

// Read existing locale files
const enLocale = JSON.parse(fs.readFileSync(enLocaleFile, 'utf-8'));
const zhLocale = JSON.parse(fs.readFileSync(zhLocaleFile, 'utf-8'));

// Initialize blog.posts if it doesn't exist
if (!enLocale.blog) enLocale.blog = {};
if (!enLocale.blog.posts) enLocale.blog.posts = {};
if (!zhLocale.blog) zhLocale.blog = {};
if (!zhLocale.blog.posts) zhLocale.blog.posts = {};

// Process each blog post
files.forEach((file) => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);
  const slug = file.replace('.md', '');
  
  // Add English translations (from frontmatter)
  enLocale.blog.posts[slug] = {
    title: data.title || '',
    excerpt: data.excerpt || '',
    tags: {}
  };
  
  // Add tag translations (English tags as keys, will be translated later)
  if (Array.isArray(data.tags)) {
    data.tags.forEach(tag => {
      enLocale.blog.posts[slug].tags[tag] = tag;
    });
  }
  
  // Add Chinese translations (placeholder - will need manual translation)
  zhLocale.blog.posts[slug] = {
    title: data.title || '', // TODO: Translate to Chinese
    excerpt: data.excerpt || '', // TODO: Translate to Chinese
    tags: {}
  };
  
  if (Array.isArray(data.tags)) {
    data.tags.forEach(tag => {
      zhLocale.blog.posts[slug].tags[tag] = tag; // TODO: Translate to Chinese
    });
  }
});

// Write updated locale files
fs.writeFileSync(enLocaleFile, JSON.stringify(enLocale, null, 2) + '\n');
fs.writeFileSync(zhLocaleFile, JSON.stringify(zhLocale, null, 2) + '\n');

console.log(`Generated blog translation keys for ${files.length} posts`);
console.log(`Updated ${enLocaleFile}`);
console.log(`Updated ${zhLocaleFile}`);
console.log('\nNote: Chinese translations are placeholders and need to be translated manually.');

