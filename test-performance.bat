@echo off
REM Performance Testing Script for Windows
REM Tests page load speed and provides actionable recommendations

echo ========================================
echo    Portfolio Performance Test
echo ========================================
echo.

REM Check if images are optimized
echo Checking Image Optimization...
set PNG_COUNT=0
set JPG_COUNT=0
set WEBP_COUNT=0

for %%f in (public\*.png) do set /a PNG_COUNT+=1
for %%f in (public\*.jpg public\*.jpeg) do set /a JPG_COUNT+=1
for %%f in (public\*.webp) do set /a WEBP_COUNT+=1

if %WEBP_COUNT%==0 (
    echo [X] No WebP images found!
    echo     Action: Convert images using IMAGE_OPTIMIZATION_GUIDE.md
) else if %PNG_COUNT% gtr 0 (
    echo [!] Found %PNG_COUNT% PNG and %JPG_COUNT% JPG files
    echo     Recommendation: Convert to WebP for 80-90%% size reduction
) else (
    echo [OK] All images optimized to WebP
)
echo.

REM Check bundle size
echo Checking Bundle Size...
if exist "dist\spa\assets" (
    dir dist\spa\assets /s /-c | find "bytes"
    echo [OK] Build artifacts found
) else (
    echo [!] Run 'npm run build' first
)
echo.

REM Verify caching headers
echo Checking Cache Configuration...
if exist "vercel.json" (
    findstr /C:"Cache-Control" vercel.json >nul
    if %ERRORLEVEL%==0 (
        echo [OK] Cache headers configured
    ) else (
        echo [X] No cache headers found
    )
) else (
    echo [!] vercel.json not found
)
echo.

REM Check for resource hints
echo Checking Resource Hints...
if exist "index.html" (
    findstr /C:"dns-prefetch" index.html >nul && findstr /C:"preconnect" index.html >nul
    if %ERRORLEVEL%==0 (
        echo [OK] DNS prefetch and preconnect configured
    ) else (
        echo [!] Missing resource hints
    )
) else (
    echo [X] index.html not found
)
echo.

REM Check for lazy loading
echo Checking Lazy Loading...
findstr /S /C:"loading=\"lazy\"" client\pages\*.tsx >nul
if %ERRORLEVEL%==0 (
    echo [OK] Lazy loading implemented
) else (
    echo [!] No lazy loading found
)
echo.

REM Performance monitoring
echo Checking Performance Monitoring...
if exist "client\lib\performance.ts" (
    findstr /C:"PerformanceMonitor" client\lib\performance.ts >nul
    if %ERRORLEVEL%==0 (
        echo [OK] Performance monitoring enabled
    ) else (
        echo [!] Basic performance tracking only
    )
) else (
    echo [X] Performance monitoring not found
)
echo.

REM Summary
echo ========================================
echo    SUMMARY ^& NEXT STEPS
echo ========================================
echo.

if %WEBP_COUNT%==0 (
    echo HIGH PRIORITY: Convert images to WebP
    echo   - Expected improvement: 3-4 seconds faster load time
    echo   - See: IMAGE_OPTIMIZATION_GUIDE.md
    echo.
)

if not exist "dist\spa" (
    echo MEDIUM PRIORITY: Build for production
    echo   - Run: npm run build
    echo   - Test production bundle sizes
    echo.
)

echo TO VALIDATE IMPROVEMENTS:
echo   1. Run: npm run build
echo   2. Deploy to Vercel
echo   3. Test with Lighthouse (Chrome DevTools)
echo   4. Check PageSpeed Insights
echo   5. Verify load time ^< 3 seconds
echo.

echo TARGET METRICS:
echo   - Load Time: ^< 3.0s
echo   - LCP: ^< 2.5s
echo   - FID: ^< 100ms
echo   - CLS: ^< 0.1
echo   - Page Size: ^< 2MB
echo.

echo DOCUMENTATION:
echo   - Full details: PERFORMANCE_OPTIMIZATION_SUMMARY.md
echo   - Image guide: IMAGE_OPTIMIZATION_GUIDE.md
echo.

echo Performance testing complete!
pause
