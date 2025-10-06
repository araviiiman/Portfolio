@echo off
REM Deployment script for Aravind Manoj Portfolio
REM Run this script when GitHub connectivity is restored

echo 🚀 Deploying Portfolio to GitHub...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: Please run this script from the portfolio directory
    pause
    exit /b 1
)

REM Check Git status
echo 📋 Checking Git status...
git status

REM Add all files
echo 📁 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy: Portfolio website ready for production

- Modern Next.js 15 + TypeScript + Tailwind CSS
- 3D workflow visualizations with CSS perspective
- Three signature projects with metrics and architecture
- Responsive design with dark/light theme
- SEO optimized with complete metadata
- Performance optimized (166KB first load)
- Production-ready build configuration"

REM Push to GitHub
echo 🌐 Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo ✅ Successfully deployed to GitHub!
    echo.
    echo 🔗 Repository: https://github.com/araviiiman/Portfolio
    echo.
    echo 📋 Next steps for Vercel deployment:
    echo 1. Go to https://vercel.com/dashboard
    echo 2. Click "New Project"
    echo 3. Import from GitHub: araviiiman/Portfolio
    echo 4. Configure build settings:
    echo    - Build Command: npm run build
    echo    - Output Directory: .next
    echo    - Install Command: npm install
    echo 5. Deploy!
    echo.
    echo 🎯 Your portfolio will be live at: https://portfolio-araviiiman.vercel.app
) else (
    echo ❌ Failed to push to GitHub. Please check your connection and try again.
    pause
    exit /b 1
)

pause
