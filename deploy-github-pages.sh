#!/bin/bash
# GitHub Pages Deployment Script

echo "🚀 Setting up GitHub Pages deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the portfolio directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📋 Next steps for GitHub Pages:"
    echo "1. Go to your GitHub repository: https://github.com/araviiiman/Portfolio"
    echo "2. Click on 'Settings' tab"
    echo "3. Scroll down to 'Pages' section"
    echo "4. Under 'Source', select 'GitHub Actions'"
    echo "5. The workflow will automatically deploy your site"
    echo ""
    echo "🌐 Your portfolio will be available at:"
    echo "https://araviiiman.github.io/Portfolio/"
    echo ""
    echo "📝 Note: It may take a few minutes for the site to be live"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
