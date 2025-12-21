// Tag color mapping for blog post tags
// Each tag gets a specific color variant for visual distinction
// Background colors use /20 opacity, text colors use different shades for contrast

export const tagColors: Record<string, {
  variant: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}> = {
  // Core tags
  "RAG": { variant: "default", className: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  "AI": { variant: "default", className: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  "Enterprise": { variant: "default", className: "bg-green-500/20 text-green-300 border-green-500/30" },
  
  // Technical processing tags
  "Parsing": { variant: "secondary", className: "bg-cyan-500/20 text-cyan-200 border-cyan-500/30" },
  "Tables": { variant: "secondary", className: "bg-orange-500/20 text-orange-200 border-orange-500/30" },
  "OCR": { variant: "secondary", className: "bg-pink-500/20 text-pink-200 border-pink-500/30" },
  "Chunking": { variant: "secondary", className: "bg-indigo-500/20 text-indigo-200 border-indigo-500/30" },
  "Document Processing": { variant: "secondary", className: "bg-teal-500/20 text-teal-200 border-teal-500/30" },
  
  // Content type tags
  "Code": { variant: "secondary", className: "bg-slate-500/20 text-slate-200 border-slate-500/30" },
  "Images": { variant: "secondary", className: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-500/30" },
  "Spreadsheets": { variant: "secondary", className: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30" },
  "Email": { variant: "secondary", className: "bg-violet-500/20 text-violet-200 border-violet-500/30" },
  
  // Meta tags
  "Tutorial": { variant: "outline", className: "bg-amber-500/20 text-amber-200 border-amber-500/30" },
  "Product": { variant: "default", className: "bg-primary/20 text-primary-foreground border-primary/30" },
  "Getting Started": { variant: "outline", className: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30" },
};

// Get tag color configuration, with fallback
export function getTagColor(tag: string): {
  variant: "default" | "secondary" | "destructive" | "outline";
  className?: string;
} {
  return tagColors[tag] || { 
    variant: "secondary",
    className: "bg-muted text-muted-foreground"
  };
}

