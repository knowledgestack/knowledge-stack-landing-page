# Knowledge Stack Landing Page - Content Editing Guide

Welcome! This guide will help you easily edit all the marketing content on the Knowledge Stack landing page without any technical knowledge required.

## 🚀 Quick Start

### Option 1: Edit Directly in GitHub (Recommended for Non-Technical Users)
1. Go to your repository on GitHub
2. Navigate to the file you want to edit (see file locations below)
3. Click the **pencil icon** (Edit) in the top-right corner
4. Make your changes
5. Scroll down and click **"Commit changes"**

### Option 2: Use GitHub Codespaces (For More Complex Edits)
1. Go to your repository main page
2. Click the green **"Code"** button
3. Select **"Codespaces"** tab
4. Click **"New codespace"**
5. Edit files directly in the browser
6. Save and commit your changes

---

## 📝 Content Areas & How to Edit Them

### 1. Hero Section (Main Banner)
**File:** `src/components/Hero.tsx`

**What you can change:**
- Main headline: "Knowledge You Can Trust"
- Key benefits list:
  - "Multi-Level Source Traceability"
  - "Mission-Critical Accuracy" 
  - "Enterprise Security"
- Button text:
  - "Request Demo"
  - "Try Interactive Demo"

**How to edit:**
1. Open `src/components/Hero.tsx`
2. Find the text you want to change (around lines 67-99)
3. Replace the text between the quotes
4. Save and commit

---

### 2. Problem & Solution Section
**File:** `src/components/ProblemSolution.tsx`

**What you can change:**
- Section title: "Current Challenges" and "Knowledge Stack Solution"
- Problem descriptions:
  - "Scattered PDFs" - "Engineering drawings, tables, and critical documents spread across systems"
  - "Manual Reporting" - "Hours manually extracting data from complex document formats"
  - "AI Hallucinations" - "Unreliable AI outputs without source verification or expert validation"
- Solution descriptions:
  - "Intelligent Ingestion" - "Parse engineering drawings, tables, and complex documents into structured chunks"
  - "Expert Validation" - "Domain experts validate outputs, creating synthetic data for continuous learning"
  - "Trusted Insights" - "Get verifiable answers with complete document-to-chunk traceability"

**How to edit:**
1. Open `src/components/ProblemSolution.tsx`
2. Find the `problems` array (around line 4) to edit problem descriptions
3. Find the `solutions` array (around line 22) to edit solution descriptions
4. Change the `title` and `description` fields
5. Save and commit

---

### 3. Interactive Demo Section
**File:** `src/components/InteractiveDemo.tsx`

**What you can change:**
- Section title: "Complete Source Traceability"
- Demo conversation messages
- Citation examples and data
- Button text and descriptions

**How to edit:**
1. Open `src/components/InteractiveDemo.tsx`
2. Find the `chatMessages` array (around line 9) to edit the demo conversation
3. Find the `citations` object (around line 28) to edit citation examples
4. Change the `content` field for messages and citation details
5. Save and commit

---

### 4. Expert Validation Section
**File:** `src/components/ExpertValidation.tsx`

**What you can change:**
- Section title: "Crowdsourced Trust for Your Organization"
- Subtitle: "Auto-learning Loop for Continuous Improvement"
- Process steps around the circle:
  - "Input" - "Documents processed"
  - "Expert Review" - "Domain experts validate"
  - "Synthetic Data" - "Corrections become training"
  - "Stronger Output" - "Continuously improving"
- Citation hierarchy examples
- Information cards at the bottom

**How to edit:**
1. Open `src/components/ExpertValidation.tsx`
2. Find the main title (around line 129)
3. Find the `steps` array (around line 95) to edit process steps
4. Find the `citationHierarchy` object to edit citation examples
5. Save and commit

---

### 5. Technical Pipeline Section
**File:** `src/components/TechnicalPipeline.tsx`

**What you can change:**
- Section title: "From Complex Documents to Trusted Insights"
- Subtitle: "Delivers accurate verifiable answers using custom state-of-the-art pipeline"
- Pipeline step descriptions:
  - "Parsing" - "Normalizes inputs across formats like PDFs, DOCs, HTML, and media — creating consistent, structured data ready for processing."
  - "Chunking" - "Intelligently segments documents while preserving context and meaning — laying the foundation for accurate retrieval."
  - "Indexing" - "Builds comprehensive vector and keyword indexes — enabling lightning-fast semantic and exact-match searches."
  - "Retrieval" - "Combines semantic understanding with keyword precision — delivering the most relevant context for accurate answers."
  - "Generation" - "Leverages advanced LLMs with retrieved context — producing accurate, well-sourced responses every time."

**How to edit:**
1. Open `src/components/TechnicalPipeline.tsx`
2. Find the `pipelineSteps` array (around line 4)
3. Change the `title` and `description` fields for each step
4. Save and commit

---

### 6. Features Grid Section
**File:** `src/components/FeaturesGrid.tsx`

**What you can change:**
- Section title: "Built for Enterprise Scale"
- Feature cards:
  - "Ingest Anything" - "PDFs, spreadsheets, images, videos, and 50+ connectors. Our intelligent parsing understands structure and context."
  - "Secure & Compliant" - "Enterprise-grade security with end-to-end encryption, granular access controls, and comprehensive audit logs."
  - "Accurate Answers" - "Every response is grounded in your data with AI validation and confidence scoring."
  - "Scalable Architecture" - "Handle millions of documents with enterprise-grade infrastructure, global CDN, and 99.9% uptime SLA."
- Benefits lists for each feature

**How to edit:**
1. Open `src/components/FeaturesGrid.tsx`
2. Find the `features` array (around line 5)
3. Change the `title`, `description`, and `benefits` fields
4. Save and commit

---

### 7. Testimonials Section
**File:** `src/components/TestimonialsSection.tsx`

**What you can change:**
- Customer testimonials (quotes, names, titles, companies)
- Partner logos: "Microsoft", "Salesforce", "AWS", "Google Cloud", "Snowflake", "Databricks"
- Star ratings and testimonial types

**How to edit:**
1. Open `src/components/TestimonialsSection.tsx`
2. Find the `testimonials` array (around line 5)
3. Change the `quote`, `author`, `title`, `company`, and `type` fields
4. Find the `partnerLogos` array (around line 31) to edit partner names
5. Save and commit

---

### 8. Footer Section
**File:** `src/components/Footer.tsx`

**What you can change:**
- Company name: "Knowledge Stack"
- Tagline: "The foundational data layer for enterprise AI - secure, accurate, and scalable."
- Footer links (Product, Company, Security, Legal sections)
- Copyright text: "© 2025 Knowledge Stack. All rights reserved."
- Social media links

**How to edit:**
1. Open `src/components/Footer.tsx`
2. Find the `footerLinks` object (around line 5) to edit link names
3. Find the company name and tagline (around line 45)
4. Find the copyright text (around line 137)
5. Save and commit

---

## 🎨 Styling & Visual Elements

### Colors
The website uses a consistent color scheme defined in the design system. Colors are automatically applied based on the text you use.

### Images
- Hero background: `src/assets/hero-bg-subtle.jpg`
- Icons: Automatically generated from Lucide React icon library
- To change icons, look for lines like `<Database className="w-8 h-8 text-primary" />` and replace `Database` with another icon name

### Buttons
- Primary buttons: Blue gradient
- Secondary buttons: Outlined style
- Button text can be changed by editing the text between the button tags

---

## 🔧 Technical Notes (For Reference)

### File Structure
```
src/
├── components/          # All page sections
│   ├── Hero.tsx        # Main banner
│   ├── ProblemSolution.tsx
│   ├── InteractiveDemo.tsx
│   ├── ExpertValidation.tsx
│   ├── TechnicalPipeline.tsx
│   ├── FeaturesGrid.tsx
│   ├── TestimonialsSection.tsx
│   └── Footer.tsx
├── pages/
│   └── Index.tsx       # Main page layout
└── assets/             # Images and media
```

### Common Patterns
- Text content is usually between quotes: `"Your text here"`
- Arrays of content use square brackets: `["Item 1", "Item 2"]`
- Objects use curly braces: `{ title: "Title", description: "Description" }`

---

## 🚨 Important Tips

1. **Always backup your changes** by committing them to GitHub
2. **Test your changes** by viewing the live site after making edits
3. **Keep text concise** - long text might break the layout
4. **Don't delete quotes** around text - this will break the code
5. **Be careful with special characters** - avoid using quotes inside text content
6. **If something breaks**, you can always revert to a previous version in GitHub

---

## 🆘 Need Help?

If you run into any issues:
1. Check the GitHub repository for recent changes
2. Look at the file history to see what was changed
3. Contact your development team for technical assistance

---

## 📱 Viewing Your Changes

After making changes:
1. Wait 1-2 minutes for the changes to deploy
2. Visit your live website URL
3. Refresh the page to see your updates
4. Check on both desktop and mobile devices

Happy editing! 🎉