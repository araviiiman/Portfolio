# Aravind Manoj | Data & AI Engineer Portfolio

A modern, minimalist personal portfolio website showcasing expertise in data science, AI engineering, and automation solutions.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with dark/light theme toggle
- **3D Workflow Visualizations**: Interactive project cards with layered workflow images
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with lazy loading and image optimization
- **SEO Ready**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with reduced motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   └── projects/          # Project detail pages
│       └── [slug]/        # Dynamic project routes
├── components/             # React components
│   ├── Nav.tsx            # Navigation with scroll indicators
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── About.tsx          # About section
│   ├── ProjectCard.tsx    # 3D project cards
│   ├── Skills.tsx          # Skills grid
│   ├── Timeline.tsx       # Experience timeline
│   └── ContactForm.tsx    # Contact form
└── data/                  # Data files
    ├── projects.ts        # Project data
    └── site.ts            # Site configuration
public/
└── images/                # Project workflow images
```

## 🎨 Design System

- **Colors**: Two neutrals + cyan accent (#06b6d4)
- **Typography**: Inter font family
- **Spacing**: Generous whitespace with consistent rhythm
- **3D Effects**: CSS perspective with hover transforms
- **Animations**: Purposeful microinteractions with Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/araviiiman/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The project includes `vercel.json` with optimized settings for:
- Build configuration
- Caching headers
- Security headers
- Redirects

### Manual Deployment

```bash
npm run build
npm run export
```

## 🎯 Key Projects Showcased

1. **Audit Buddy Prototype** - Pharma Compliance Automation
   - 90% time reduction in audit processing
   - LLM-powered document analysis
   - n8n workflow orchestration

2. **Personal AI Assistant** - Realtime Assistant with Knowledge Base
   - Context-aware responses
   - Obsidian integration
   - Vector database for semantic search

3. **Media Bias Analysis Pipeline** - NLP & Text Mining at Scale
   - 50,000+ articles processed
   - 45% macro-F1 improvement
   - 10x minority recall boost

## 🔧 Customization

### Adding New Projects

1. Add project data to `src/data/projects.ts`
2. Create workflow images in `public/images/`
3. Update the project interface if needed

### Updating Content

- Site configuration: `src/data/site.ts`
- Project details: `src/data/projects.ts`
- Styling: `src/app/globals.css`

### Theme Customization

The design system uses CSS custom properties defined in `globals.css`:

```css
:root {
  --accent: #06b6d4;
  --background: #ffffff;
  --foreground: #171717;
  /* ... */
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: <400KB initial load
- **Image Optimization**: WebP with fallbacks
- **Code Splitting**: Automatic with Next.js
- **Caching**: Optimized headers for static assets

## 🔍 SEO Features

- Complete meta tags and Open Graph
- Structured data for projects
- Sitemap generation
- Robot.txt optimization
- Social media previews

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Reduced motion preferences
- High contrast support

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: aravind.manoj@email.com
- **LinkedIn**: [linkedin.com/in/aravindmanoj](https://linkedin.com/in/aravindmanoj)
- **GitHub**: [github.com/aravindmanoj](https://github.com/aravindmanoj)

## 🌐 Live Site

**Portfolio**: https://araviiiman.github.io/Portfolio/

---

Built with ❤️ by Aravind Manoj