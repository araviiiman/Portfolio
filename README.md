# Aravind Manoj | Data & AI Engineer Portfolio

A modern, minimalist-but-energetic personal portfolio built with plain HTML, CSS, and JavaScript. Features a tech-inspired design with 3D workflow visualizations, smooth animations, and interactive elements.

## 🚀 Live Site

**https://araviiiman.github.io/Portfolio/**

## ✨ Features

- **Modern Tech Design**: Deep space color palette with cyan/violet accents
- **3D Workflow Cards**: Interactive project visualizations with hover effects
- **Smooth Animations**: Aurora background, tech grid parallax, magnetic buttons
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for speed with lazy loading and efficient animations
- **Interactive Modals**: Detailed project views with architecture diagrams

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Custom properties, Grid, Flexbox, 3D transforms
- **Vanilla JavaScript**: ES6+ with modern APIs
- **GitHub Pages**: Static hosting with automatic deployment

## 📁 Project Structure

```
/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styles and animations
│   ├── js/
│   │   └── app.js         # Interactive functionality
│   └── img/
│       └── *.svg          # Workflow layer images
├── data/
│   └── projects.json      # Project data and metadata
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment
```

## 🎨 Design System

### Color Palette
- `--bg-0: #0b1020` - Deep space background
- `--bg-1: #0f172a` - Slate secondary
- `--card: #111827` - Panel background
- `--text: #e5e7eb` - Primary text
- `--muted: #94a3b8` - Secondary text
- `--cy: #22d3ee` - Cyan accent
- `--vi: #a78bfa` - Violet accent
- `--gn: #10b981` - Emerald accent
- `--am: #f59e0b` - Amber accent

### Typography
- **Font**: Inter (Google Fonts)
- **Hero**: 56px/64px (desktop), 40px/48px (mobile)
- **Headings**: 28px/36px
- **Body**: 16px/28px

### Animations
- **Duration**: 180-320ms with cubic-bezier easing
- **3D Cards**: Perspective 1200px with hover transforms
- **Aurora**: 30s drift animation with opacity changes
- **Tech Grid**: Parallax scrolling effect
- **Magnetic Buttons**: 2-4px cursor-following movement

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/araviiiman/Portfolio.git
   cd Portfolio
   ```

2. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Manual deployment:**
1. Push changes to `main` branch
2. GitHub Actions will build and deploy automatically
3. Site will be available at `https://araviiiman.github.io/Portfolio/`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Color Contrast**: WCAG AA compliant contrast ratios

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 40KB minified JavaScript
- **Images**: Optimized SVG placeholders
- **Loading**: Lazy loading for below-fold content
- **Caching**: Efficient browser caching strategies

## 🔧 Customization

### Adding New Projects

1. **Update `data/projects.json`**:
   ```json
   {
     "id": "project-name",
     "title": "Project Title",
     "summary": "Brief description",
     "impact": ["Metric 1", "Metric 2"],
     "tech": ["Tech1", "Tech2"],
     "architecture": ["Step 1", "Step 2"],
     "imageLayers": ["layer1.svg", "layer2.svg"],
     "caseStudy": "/assets/case/project.pdf",
     "demoUrl": "https://demo.com",
     "githubUrl": "https://github.com/user/repo"
   }
   ```

2. **Add workflow images** to `assets/img/`
3. **Test locally** before deploying

### Modifying Styles

- **Colors**: Update CSS custom properties in `:root`
- **Typography**: Modify font imports and size variables
- **Animations**: Adjust timing and easing functions
- **Layout**: Update Grid and Flexbox properties

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**Aravind Manoj**
- **Email**: aravind.manoj@email.com
- **GitHub**: [github.com/aravindmanoj](https://github.com/aravindmanoj)
- **LinkedIn**: [linkedin.com/in/aravindmanoj](https://linkedin.com/in/aravindmanoj)

---

Built with ❤️ using HTML, CSS, and JavaScript
