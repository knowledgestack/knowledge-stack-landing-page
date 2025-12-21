import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/lib/blog-imports.generated.ts');

// Get all markdown files
const files = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md') && !f.includes('README') && !f.includes('IMAGE_GUIDE'))
  .sort();

console.log(`Found ${files.length} blog post files`);

// Generate import statements and post data
const imports = [];
const posts = [];

files.forEach((file, index) => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);
  const slug = file.replace('.md', '');
  
  // Generate import
  imports.push(`import post${index} from '../content/blog/${file}?raw';`);
  
  // Calculate reading time
  const words = body.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);
  
  // Generate post object
  // Image is required - default to slug-based image if not specified
  const imagePath = data.image || `/blog-images/${slug}.jpg`;
  posts.push(`  {
    slug: "${slug}",
    title: ${JSON.stringify(data.title || '')},
    date: "${data.date || new Date().toISOString().split('T')[0]}",
    author: ${JSON.stringify(data.author || 'Knowledge Stack Team')},
    excerpt: ${JSON.stringify(data.excerpt || '')},
    tags: ${JSON.stringify(Array.isArray(data.tags) ? data.tags : [])},
    content: post${index},
    readingTime: ${readingTime},
    image: ${JSON.stringify(imagePath)}
  }`);
});

// Generate the file
const output = `// Auto-generated file - do not edit manually
// Run: npm run generate-blog-imports

${imports.join('\n')}

export const markdownPosts = [
${posts.join(',\n')}
];
`;

fs.writeFileSync(outputFile, output);
console.log(`Generated ${outputFile} with ${files.length} posts`);

