// Run this in your payload-restaurant-2 folder:
// node create-pages.js

const fs = require('fs');
const path = require('path');

const frontendDir = path.join('src', 'app', '(frontend)');

// Map of template pages to App Router routes
const pages = {
  'about': 'about',
  'menu1': 'menu1',
  'menu2': 'menu2',
  '3col-menu': '3col-menu',
  'reservation': 'reservation',
  'shop': 'shop',
  'shop-details': 'shop-details',
  'cart': 'cart',
  'check-out': 'check-out',
  'blog-standard': 'blog-standard',
  'blog-grid': 'blog-grid',
  'blog-details': 'blog-details',
  'contact': 'contact',
  'chef-expertis': 'chef-expertis',
  'chef-details': 'chef-details',
  'category': 'category',
  'faq': 'faq',
  '2col-gallery': '2col-gallery',
  '3col-gallery': '3col-gallery',
};

// Read each template page and convert it
for (const [templateName, routeName] of Object.entries(pages)) {
  const templatePath = path.join('src', 'pages', `${templateName}.js`);
  
  // Check if original page exists (user may not have copied pages folder)
  // We'll create placeholder pages that import from components
  const dirPath = path.join(frontendDir, routeName);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Read the original template file if it exists
  let originalContent = '';
  const possiblePaths = [
    path.join('src', 'pages', `${templateName}.js`),
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      originalContent = fs.readFileSync(p, 'utf8');
      break;
    }
  }

  if (originalContent) {
    let converted = originalContent;

    // Add "use client" if it uses hooks or browser APIs
    const needsClient = /useState|useEffect|useReducer|useRef|useRouter|useCallback|useMemo|Swiper|ReactPaginate|CountUp|Lightbox|DatePicker/.test(converted);

    // Remove the Layout import and wrapper
    converted = converted.replace(/import Layout from ["'].*?["'];?\n?/g, '');
    converted = converted.replace(/<Layout>\s*/g, '<>\n');
    converted = converted.replace(/\s*<\/Layout>/g, '\n</>');

    // Fix import paths: ../ -> @/
    converted = converted.replace(/from ["']\.\.\/components\//g, 'from "@/components/');
    converted = converted.replace(/from ["']\.\.\/data\//g, 'from "@/data/');
    converted = converted.replace(/from ["']\.\.\/layout\//g, 'from "@/layout/');

    // Remove Head imports and usage (App Router uses metadata)
    converted = converted.replace(/import Head from ["']next\/head["'];?\n?/g, '');
    converted = converted.replace(/<Head>[\s\S]*?<\/Head>\s*/g, '');

    // Replace next/router with next/navigation
    converted = converted.replace(/from ["']next\/router["']/g, 'from "next/navigation"');

    // Remove legacyBehavior
    converted = converted.replace(/ legacyBehavior/g, '');

    // Add "use client" at top if needed
    if (needsClient && !converted.startsWith('"use client"')) {
      converted = '"use client"\n' + converted;
    }

    const pagePath = path.join(dirPath, 'page.jsx');
    fs.writeFileSync(pagePath, converted, 'utf8');
    console.log(`Created: ${pagePath}`);
  } else {
    console.log(`Skipped: ${templateName} (source file not found)`);
  }
}

console.log('\nDone! All pages created.');
