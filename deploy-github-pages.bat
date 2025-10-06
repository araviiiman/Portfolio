@echo off
REM GitHub Pages Deployment Script

echo 🚀 Setting up GitHub Pages deployment...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: Please run this script from the portfolio directory
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the project
echo 🔨 Building project...
npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 📋 Next steps for GitHub Pages:
    echo 1. Go to your GitHub repository: https://github.com/araviiiman/Portfolio
    echo 2. Click on "Settings" tab
    echo 3. Scroll down to "Pages" section
    echo 4. Under "Source", select "GitHub Actions"
    echo 5. The workflow will automatically deploy your site
    echo.
    echo 🌐 Your portfolio will be available at:
    echo https://araviiiman.github.io/Portfolio/
    echo.
    echo 📝 Note: It may take a few minutes for the site to be live
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

pause
