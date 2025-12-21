import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/lib/blog-imports.generated.ts');

// Get all markdown files (base files only, not language-specific)
const files = fs.readdirSync(blogDir)
  .filter(f => {
    // Only include base files (not language-specific like .zh.md)
    return f.endsWith('.md') && 
           !f.includes('README') && 
           !f.includes('IMAGE_GUIDE') &&
           !f.match(/\.\w{2}\.md$/); // Exclude .zh.md, .fr.md, etc.
  })
  .sort();

console.log(`Found ${files.length} blog post files`);

// Get language-specific files
const langFiles = fs.readdirSync(blogDir)
  .filter(f => f.match(/\.\w{2}\.md$/))
  .sort();

console.log(`Found ${langFiles.length} language-specific files`);

// Map language files to their base slugs
const langFileMap = new Map();
langFiles.forEach(file => {
  const match = file.match(/^(.+)\.(\w{2})\.md$/);
  if (match) {
    const [, slug, lang] = match;
    if (!langFileMap.has(slug)) {
      langFileMap.set(slug, {});
    }
    langFileMap.get(slug)[lang] = file;
  }
});

// Generate import statements and post data
const imports = [];
const posts = [];
let importIndex = 0;

files.forEach((file, index) => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);
  const slug = file.replace('.md', '');
  
  // Generate import for base file
  imports.push(`import post${index} from '../content/blog/${file}?raw';`);
  
  // Load language-specific files if they exist
  const langContents = {};
  if (langFileMap.has(slug)) {
    const langFiles = langFileMap.get(slug);
    Object.entries(langFiles).forEach(([lang, langFile]) => {
      const langFilePath = path.join(blogDir, langFile);
      const langContent = fs.readFileSync(langFilePath, 'utf-8');
      const { content: langBody } = matter(langContent);
      
      // Store language-specific content (escape for JSON)
      langContents[lang] = langBody;
    });
  }
  
  // Calculate reading time
  const words = body.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);
  
  // Generate post object
  // Image is required - default to slug-based image if not specified
  const imagePath = data.image || `/blog-images/${slug}.jpg`;
  
  // Build contentByLanguage object if we have translations
  const contentByLanguageCode = Object.keys(langContents).length > 0
    ? `contentByLanguage: ${JSON.stringify(langContents)},`
    : '';
  
  posts.push(`  {
    slug: "${slug}",
    title: ${JSON.stringify(data.title || '')},
    date: "${data.date || new Date().toISOString().split('T')[0]}",
    author: ${JSON.stringify(data.author || 'Knowledge Stack Team')},
    excerpt: ${JSON.stringify(data.excerpt || '')},
    tags: ${JSON.stringify(Array.isArray(data.tags) ? data.tags : [])},
    content: post${index},
    ${contentByLanguageCode}
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

