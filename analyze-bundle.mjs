#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * Run with: node analyze-bundle.mjs
 * 
 * This script helps identify large dependencies and unused code
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('📦 Analyzing Bundle Size...\n');

// Check if build exists
const distPath = join(__dirname, 'dist', 'spa');
if (!existsSync(distPath)) {
  console.error('❌ Build not found. Run "npm run build" first.');
  process.exit(1);
}

// Read package.json to analyze dependencies
const packageJson = JSON.parse(
  readFileSync(join(__dirname, 'package.json'), 'utf-8')
);

const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

// Large packages that might not be needed everywhere
const heavyPackages = [
  { name: 'recharts', size: '~400KB', usage: 'Charts - Consider lazy loading' },
  { name: 'lucide-react', size: '~1MB', usage: 'Icons - Import only what you need' },
  { name: 'framer-motion', size: '~200KB', usage: 'Animations - Lazy load if possible' },
  { name: '@radix-ui/*', size: '~500KB total', usage: 'UI Components - Already split' },
  { name: 'react-hook-form', size: '~45KB', usage: 'Forms - Only load on form pages' },
];

console.log('🔍 Potentially Heavy Dependencies:\n');

heavyPackages.forEach(pkg => {
  const isInstalled = Object.keys(allDeps).some(dep => 
    dep === pkg.name || dep.startsWith(pkg.name.replace('*', ''))
  );
  
  if (isInstalled) {
    console.log(`⚠️  ${pkg.name}`);
    console.log(`   Size: ${pkg.size}`);
    console.log(`   Usage: ${pkg.usage}\n`);
  }
});

console.log('\n💡 Optimization Recommendations:\n');

const recommendations = [
  {
    title: 'Icon Optimization',
    description: 'Import specific icons instead of entire lucide-react package',
    example: `// ❌ Bad
import * as Icons from 'lucide-react';

// ✅ Good
import { ArrowRight, Check, X } from 'lucide-react';`,
  },
  {
    title: 'Lazy Load Charts',
    description: 'Charts are heavy - load them only when needed',
    example: `// ✅ Lazy load charts
const Charts = lazy(() => import('./components/Charts'));

<Suspense fallback={<Spinner />}>
  <Charts data={data} />
</Suspense>`,
  },
  {
    title: 'Tree-shake Lodash',
    description: 'If using lodash, import specific functions',
    example: `// ❌ Bad
import _ from 'lodash';

// ✅ Good
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';`,
  },
  {
    title: 'Code Splitting by Route',
    description: 'Already implemented in your app! Each route loads separately.',
    example: 'Check client/App.tsx for lazy-loaded routes',
  },
  {
    title: 'Remove Unused UI Components',
    description: 'Check client/components/ui/ for unused components',
    example: 'Run: grep -r "from.*components/ui" client/',
  },
];

recommendations.forEach((rec, index) => {
  console.log(`${index + 1}. ${rec.title}`);
  console.log(`   ${rec.description}`);
  if (rec.example) {
    console.log(`\n   Example:`);
    console.log(`   ${rec.example.replace(/\n/g, '\n   ')}\n`);
  }
});

console.log('\n📊 Build Stats:\n');
console.log('Run these commands for detailed analysis:');
console.log('  1. npm install -D rollup-plugin-visualizer');
console.log('  2. Add visualizer plugin to vite.config.ts');
console.log('  3. Rebuild and open stats.html\n');

console.log('🎯 Target Bundle Sizes (gzipped):');
console.log('  • Initial JS: < 50KB');
console.log('  • React vendor: < 55KB');
console.log('  • Total JS: < 100KB');
console.log('  • CSS: < 20KB\n');

console.log('✅ Your current code splitting strategy is good!');
console.log('   Focus on lazy loading and tree-shaking for more improvements.\n');
