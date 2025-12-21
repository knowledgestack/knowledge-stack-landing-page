import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = `${__dirname}/../public`;

// Ensure public directory exists
await mkdir(publicDir, { recursive: true });

// Helper function to convert SVG to WebP
async function svgToWebp(svgContent, filename, width = 800, quality = 85) {
  try {
    const svgBuffer = Buffer.from(svgContent);
    const webpBuffer = await sharp(svgBuffer)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality })
      .toBuffer();
    
    await writeFile(`${publicDir}/${filename}`, webpBuffer);
    console.log(`✓ Created ${filename} (${(webpBuffer.length / 1024).toFixed(2)} KB)`);
  } catch (error) {
    console.error(`✗ Error creating ${filename}:`, error.message);
  }
}

// Technical Pipeline Diagram
const technicalPipelineSVG = `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#60a5fa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="#0f172a"/>
  <g>
    <rect x="40" y="150" width="120" height="100" rx="12" fill="url(#cardGradient)" stroke="#3b82f6" stroke-width="2"/>
    <rect x="50" y="160" width="100" height="12" rx="2" fill="#3b82f6" opacity="0.3"/>
    <rect x="50" y="180" width="80" height="8" rx="2" fill="#60a5fa" opacity="0.3"/>
    <text x="100" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa" text-anchor="middle">Parsing</text>
    <path d="M 165 200 L 185 200" stroke="url(#pipelineGradient)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <rect x="200" y="150" width="120" height="100" rx="12" fill="url(#cardGradient)" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="240" cy="180" r="8" fill="#38bdf8"/>
    <circle cx="260" cy="180" r="8" fill="#60a5fa"/>
    <text x="260" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa" text-anchor="middle">Extraction</text>
    <path d="M 325 200 L 345 200" stroke="url(#pipelineGradient)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <rect x="360" y="150" width="120" height="100" rx="12" fill="url(#cardGradient)" stroke="#3b82f6" stroke-width="2"/>
    <rect x="375" y="165" width="30" height="20" rx="2" fill="#3b82f6" opacity="0.4"/>
    <rect x="410" y="165" width="30" height="20" rx="2" fill="#60a5fa" opacity="0.4"/>
    <text x="420" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa" text-anchor="middle">Chunking</text>
    <path d="M 485 200 L 505 200" stroke="url(#pipelineGradient)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <rect x="520" y="150" width="120" height="100" rx="12" fill="url(#cardGradient)" stroke="#3b82f6" stroke-width="2"/>
    <rect x="535" y="165" width="20" height="50" rx="2" fill="#3b82f6" opacity="0.5"/>
    <text x="580" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa" text-anchor="middle">Indexing</text>
    <path d="M 645 200 L 665 200" stroke="url(#pipelineGradient)" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
    <rect x="680" y="150" width="120" height="100" rx="12" fill="url(#cardGradient)" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="720" cy="180" r="15" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="740" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#60a5fa" text-anchor="middle">Retrieval</text>
  </g>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#38bdf8"/>
    </marker>
  </defs>
  <text x="400" y="100" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">Technical Pipeline</text>
</svg>`;

// Document Processing Illustration
const documentProcessingSVG = `<svg width="600" height="500" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="500" fill="#0f172a"/>
  <g transform="translate(50, 100)">
    <rect x="0" y="0" width="80" height="100" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
    <rect x="8" y="8" width="64" height="8" rx="2" fill="#64748b"/>
    <rect x="8" y="20" width="48" height="6" rx="1" fill="#475569"/>
    <text x="40" y="145" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">PDF</text>
  </g>
  <g transform="translate(50, 250)">
    <rect x="0" y="0" width="80" height="100" rx="4" fill="#1e293b" stroke="#475569" stroke-width="2"/>
    <rect x="4" y="4" width="72" height="92" rx="2" fill="#0f172a"/>
    <line x1="12" y1="20" x2="76" y2="20" stroke="#334155" stroke-width="1"/>
    <text x="40" y="145" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">Excel</text>
  </g>
  <circle cx="300" cy="250" r="60" fill="url(#docGradient)" opacity="0.9"/>
  <circle cx="300" cy="250" r="50" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.3"/>
  <text x="300" y="340" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#60a5fa" text-anchor="middle">AI Processing</text>
  <g transform="translate(450, 150)">
    <circle cx="60" cy="50" r="20" fill="#38bdf8" opacity="0.9"/>
    <circle cx="20" cy="20" r="15" fill="#60a5fa" opacity="0.8"/>
    <circle cx="100" cy="20" r="15" fill="#60a5fa" opacity="0.8"/>
    <line x1="40" y1="45" x2="75" y2="55" stroke="#38bdf8" stroke-width="2"/>
  </g>
  <path d="M 135 150 Q 200 150 240 200" stroke="#60a5fa" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
  <path d="M 360 250 Q 410 250 450 200" stroke="#38bdf8" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#38bdf8"/>
    </marker>
  </defs>
  <text x="300" y="50" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">Document Processing Pipeline</text>
</svg>`;

// Security Shield
const securityShieldSVG = `<svg width="350" height="400" viewBox="0 0 350 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="350" height="400" fill="#0f172a"/>
  <path d="M 175 50 Q 175 50, 120 70 L 120 180 Q 120 250, 175 320 Q 230 250, 230 180 L 230 70 Q 175 50, 175 50 Z" 
        fill="url(#shieldGradient)" 
        stroke="#10b981" 
        stroke-width="3"/>
  <path d="M 140 160 L 165 185 L 210 140" 
        fill="none" 
        stroke="#ffffff" 
        stroke-width="8" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
  <circle cx="90" cy="100" r="15" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="90" y="107" font-family="Arial, sans-serif" font-size="12" fill="#10b981" text-anchor="middle" font-weight="bold">E2E</text>
  <circle cx="260" cy="100" r="15" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="260" y="107" font-family="Arial, sans-serif" font-size="12" fill="#10b981" text-anchor="middle" font-weight="bold">AES</text>
  <text x="175" y="360" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#10b981" text-anchor="middle">Enterprise Security</text>
</svg>`;

// Architecture Diagram
const architectureSVG = `<svg width="700" height="550" viewBox="0 0 700 550" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="layerGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="700" height="550" fill="#0f172a"/>
  <text x="350" y="40" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">Enterprise Architecture</text>
  <rect x="50" y="80" width="600" height="100" rx="8" fill="url(#layerGradient1)" opacity="0.2" stroke="#3b82f6" stroke-width="2"/>
  <text x="350" y="110" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#60a5fa" text-anchor="middle">Application Layer</text>
  <rect x="120" y="130" width="100" height="40" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
  <text x="170" y="155" font-family="Arial, sans-serif" font-size="12" fill="#60a5fa" text-anchor="middle">API Gateway</text>
  <rect x="280" y="220" width="600" height="120" rx="8" fill="url(#layerGradient1)" opacity="0.2" stroke="#60a5fa" stroke-width="2"/>
  <text x="350" y="250" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#60a5fa" text-anchor="middle">Processing Layer</text>
  <rect x="450" y="380" width="600" height="120" rx="8" fill="url(#layerGradient1)" opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
  <text x="350" y="410" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#38bdf8" text-anchor="middle">Data Layer</text>
</svg>`;

// Hero Background Pattern
const heroPatternSVG = `<svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="heroGradient1" cx="75%" cy="10%">
      <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:0.16" />
      <stop offset="60%" style="stop-color:#38bdf8;stop-opacity:0" />
    </radialGradient>
    <radialGradient id="heroGradient2" cx="15%" cy="85%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.10" />
      <stop offset="65%" style="stop-color:#3b82f6;stop-opacity:0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="#0f172a"/>
  <ellipse cx="900" cy="80" rx="600" ry="300" fill="url(#heroGradient1)"/>
  <ellipse cx="180" cy="680" rx="450" ry="250" fill="url(#heroGradient2)"/>
  <g opacity="0.14" style="mix-blend-mode:screen">
    <path d="M 0 0 L 1200 0 L 1200 60 L 0 60 Z" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" transform="rotate(60)"/>
  </g>
</svg>`;

// Feature Illustration
const featureIllustrationSVG = `<svg width="500" height="400" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="featureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="500" height="400" fill="#0f172a"/>
  <g transform="translate(250, 180)">
    <circle cx="0" cy="0" r="50" fill="url(#featureGradient)" opacity="0.9"/>
    <circle cx="0" cy="0" r="45" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.3"/>
  </g>
  <rect x="175" y="60" width="150" height="80" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="2" opacity="0.8"/>
  <text x="250" y="135" font-family="Arial, sans-serif" font-size="11" fill="#60a5fa" text-anchor="middle" font-weight="bold">Smart Processing</text>
  <rect x="30" y="140" width="130" height="80" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="2" opacity="0.8"/>
  <text x="95" y="235" font-family="Arial, sans-serif" font-size="11" fill="#60a5fa" text-anchor="middle" font-weight="bold">Multi-Format</text>
  <rect x="340" y="140" width="130" height="80" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="2" opacity="0.8"/>
  <text x="405" y="235" font-family="Arial, sans-serif" font-size="11" fill="#60a5fa" text-anchor="middle" font-weight="bold">Scalable</text>
  <text x="250" y="35" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">Enterprise Features</text>
</svg>`;

console.log('🎨 Generating WebP images for landing page...\n');

// Generate all images
await Promise.all([
  svgToWebp(technicalPipelineSVG, 'technical-pipeline.webp', 800, 90),
  svgToWebp(documentProcessingSVG, 'document-processing.webp', 600, 90),
  svgToWebp(securityShieldSVG, 'security-shield.webp', 350, 90),
  svgToWebp(architectureSVG, 'architecture-diagram.webp', 700, 90),
  svgToWebp(heroPatternSVG, 'hero-pattern.webp', 1200, 85),
  svgToWebp(featureIllustrationSVG, 'feature-illustration.webp', 500, 90),
]);

console.log('\n✅ All WebP images generated successfully!');

