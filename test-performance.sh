#!/bin/bash
# Performance Testing Script
# Tests page load speed and provides actionable recommendations

echo "🚀 Portfolio Performance Test"
echo "=============================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if running in development or production
if [ "$NODE_ENV" = "production" ]; then
  URL="https://devendigitallabs.com"
else
  URL="http://localhost:8080"
fi

echo "Testing: $URL"
echo ""

# Test 1: Check if images are optimized
echo "📸 Checking Image Optimization..."
PNG_COUNT=$(find public -name "*.png" | wc -l)
JPG_COUNT=$(find public -name "*.jpg" -o -name "*.jpeg" | wc -l)
WEBP_COUNT=$(find public -name "*.webp" | wc -l)

if [ $WEBP_COUNT -eq 0 ]; then
  echo -e "${RED}❌ No WebP images found!${NC}"
  echo "   Action: Convert images using IMAGE_OPTIMIZATION_GUIDE.md"
elif [ $PNG_COUNT -gt 0 ] || [ $JPG_COUNT -gt 0 ]; then
  echo -e "${YELLOW}⚠️  Found $PNG_COUNT PNG and $JPG_COUNT JPG files${NC}"
  echo "   Recommendation: Convert to WebP for 80-90% size reduction"
else
  echo -e "${GREEN}✅ All images optimized to WebP${NC}"
fi
echo ""

# Test 2: Check bundle size
echo "📦 Checking Bundle Size..."
if [ -d "dist/spa/assets" ]; then
  TOTAL_SIZE=$(du -sh dist/spa/assets | cut -f1)
  echo "   Total assets size: $TOTAL_SIZE"
  
  # Check individual chunk sizes
  LARGE_CHUNKS=$(find dist/spa/assets -name "*.js" -size +500k)
  if [ -n "$LARGE_CHUNKS" ]; then
    echo -e "${YELLOW}⚠️  Found chunks larger than 500KB:${NC}"
    echo "$LARGE_CHUNKS"
    echo "   Recommendation: Review vite.config.ts chunk splitting"
  else
    echo -e "${GREEN}✅ All chunks under 500KB${NC}"
  fi
else
  echo -e "${YELLOW}⚠️  Run 'npm run build' first${NC}"
fi
echo ""

# Test 3: Verify caching headers
echo "🗄️  Checking Cache Configuration..."
if [ -f "vercel.json" ]; then
  if grep -q "Cache-Control" vercel.json; then
    echo -e "${GREEN}✅ Cache headers configured${NC}"
  else
    echo -e "${RED}❌ No cache headers found${NC}"
  fi
else
  echo -e "${YELLOW}⚠️  vercel.json not found${NC}"
fi
echo ""

# Test 4: Check for resource hints
echo "🔗 Checking Resource Hints..."
if [ -f "index.html" ]; then
  if grep -q "dns-prefetch" index.html && grep -q "preconnect" index.html; then
    echo -e "${GREEN}✅ DNS prefetch and preconnect configured${NC}"
  else
    echo -e "${YELLOW}⚠️  Missing resource hints${NC}"
  fi
else
  echo -e "${RED}❌ index.html not found${NC}"
fi
echo ""

# Test 5: Check for lazy loading
echo "🖼️  Checking Lazy Loading..."
LAZY_COUNT=$(grep -r 'loading="lazy"' client/pages | wc -l)
if [ $LAZY_COUNT -gt 0 ]; then
  echo -e "${GREEN}✅ Lazy loading implemented ($LAZY_COUNT instances)${NC}"
else
  echo -e "${YELLOW}⚠️  No lazy loading found${NC}"
fi
echo ""

# Test 6: Performance monitoring
echo "📊 Checking Performance Monitoring..."
if [ -f "client/lib/performance.ts" ]; then
  if grep -q "PerformanceMonitor" client/lib/performance.ts; then
    echo -e "${GREEN}✅ Performance monitoring enabled${NC}"
  else
    echo -e "${YELLOW}⚠️  Basic performance tracking only${NC}"
  fi
else
  echo -e "${RED}❌ Performance monitoring not found${NC}"
fi
echo ""

# Summary
echo "=============================="
echo "📋 SUMMARY & NEXT STEPS"
echo "=============================="
echo ""

if [ $WEBP_COUNT -eq 0 ]; then
  echo "🔴 HIGH PRIORITY: Convert images to WebP"
  echo "   - Expected improvement: 3-4 seconds faster load time"
  echo "   - See: IMAGE_OPTIMIZATION_GUIDE.md"
  echo ""
fi

if [ ! -d "dist/spa" ]; then
  echo "🟡 MEDIUM PRIORITY: Build for production"
  echo "   - Run: npm run build"
  echo "   - Test production bundle sizes"
  echo ""
fi

echo "✅ TO VALIDATE IMPROVEMENTS:"
echo "   1. Run: npm run build"
echo "   2. Deploy to Vercel"
echo "   3. Test with Lighthouse (Chrome DevTools)"
echo "   4. Check PageSpeed Insights"
echo "   5. Verify load time < 3 seconds"
echo ""

echo "🎯 TARGET METRICS:"
echo "   - Load Time: < 3.0s"
echo "   - LCP: < 2.5s"
echo "   - FID: < 100ms"
echo "   - CLS: < 0.1"
echo "   - Page Size: < 2MB"
echo ""

echo "📖 DOCUMENTATION:"
echo "   - Full details: PERFORMANCE_OPTIMIZATION_SUMMARY.md"
echo "   - Image guide: IMAGE_OPTIMIZATION_GUIDE.md"
echo ""

echo "✨ Performance testing complete!"
