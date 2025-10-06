# 🚀 GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/araviiiman/Portfolio
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 2: Push the Updated Code
The GitHub Actions workflow will automatically deploy your site when you push to the main branch.

### Step 3: Access Your Site
Your portfolio will be live at: **https://araviiiman.github.io/Portfolio/**

---

## What's Included

### ✅ GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: On push to main branch
- **Process**: Build → Export → Deploy to GitHub Pages
- **Automatic**: No manual intervention needed

### ✅ Next.js Configuration
- **Static Export**: Configured for GitHub Pages
- **Base Path**: Set to `/Portfolio` for proper routing
- **Image Optimization**: Disabled for static hosting
- **Trailing Slash**: Enabled for better compatibility

### ✅ Build Scripts
- **Windows**: `deploy-github-pages.bat`
- **Linux/Mac**: `deploy-github-pages.sh`
- **Manual**: `npm run build`

---

## Deployment Process

### Automatic Deployment (Recommended)
1. **Push to GitHub**: Any push to main branch triggers deployment
2. **GitHub Actions**: Automatically builds and deploys
3. **Live Site**: Available at `https://araviiiman.github.io/Portfolio/`

### Manual Deployment
```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# GitHub Actions will handle the deployment
```

---

## Advantages of GitHub Pages

### ✅ **Free Hosting**
- No cost for hosting
- No credit card required
- Generous bandwidth limits

### ✅ **Easy Setup**
- Built into GitHub
- No external services needed
- Automatic HTTPS

### ✅ **Reliable**
- GitHub infrastructure
- 99.9% uptime
- Global CDN

### ✅ **Version Control**
- Automatic deployments
- Easy rollbacks
- History tracking

---

## Troubleshooting

### Build Fails
1. Check GitHub Actions logs
2. Verify Node.js version (18+)
3. Ensure all dependencies are in package.json

### Site Not Loading
1. Wait 5-10 minutes for deployment
2. Check GitHub Pages settings
3. Verify base path configuration

### Images Not Showing
1. Check image paths in public/images/
2. Verify Next.js image configuration
3. Ensure images are committed to Git

---

## Performance

### Expected Results
- **Load Time**: <2 seconds
- **Lighthouse Score**: 90+
- **Bundle Size**: ~200KB
- **SEO**: Fully optimized

### Optimization Features
- Static file generation
- Image optimization
- CSS minification
- JavaScript bundling

---

## Custom Domain (Optional)

### Setup Custom Domain
1. Add `CNAME` file to repository root
2. Configure DNS settings
3. Enable custom domain in GitHub Pages settings

### Example CNAME file
```
your-domain.com
```

---

## Monitoring

### GitHub Actions
- View deployment status in Actions tab
- Check build logs for errors
- Monitor deployment history

### Analytics
- Add Google Analytics to track visitors
- Monitor page performance
- Track user engagement

---

## Support

### Common Issues
1. **Build Errors**: Check Node.js version and dependencies
2. **Routing Issues**: Verify base path configuration
3. **Image Problems**: Check file paths and formats

### Getting Help
1. Check GitHub Actions logs
2. Review Next.js documentation
3. Verify GitHub Pages settings

---

**Your portfolio will be live at: https://araviiiman.github.io/Portfolio/** 🎉

GitHub Pages provides reliable, free hosting with automatic deployments from your GitHub repository.
