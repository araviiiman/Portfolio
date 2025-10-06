// ===== PORTFOLIO APP =====
class PortfolioApp {
  constructor() {
    this.projects = [];
    this.modal = null;
    this.scrollObserver = null;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }

  async init() {
    await this.loadProjects();
    this.setupEventListeners();
    this.setupScrollProgress();
    this.setupScrollReveal();
    this.setupMagneticButtons();
    this.setup3DCards();
    this.setupModal();
    this.setupForm();
    this.renderProjects();
  }

  // ===== PROJECT LOADING =====
  async loadProjects() {
    try {
      const response = await fetch('/data/projects.json');
      this.projects = await response.json();
    } catch (error) {
      console.error('Failed to load projects:', error);
      // Fallback data
      this.projects = [
        {
          id: 'audit-buddy',
          title: 'Audit Buddy — Pharma Compliance Automation',
          summary: 'LLM + n8n pipeline that ingests SOPs, performs retrieval-augmented checks, and drafts audit notes.',
          impact: ['Cut manual review time 90%', 'Improved coverage of critical checks', 'Real-time compliance validation'],
          tech: ['LLM', 'RAG', 'n8n', 'Docker', 'Playwright', 'Python', 'FastAPI'],
          architecture: [
            'Document ingestion → OCR preprocessing → chunking → vector store',
            'Query planner → tool router → policy checks → compliance validation',
            'Report composer → audit notes → export → dashboard tracking'
          ],
          imageLayers: ['ab-base.png', 'ab-nodes.png', 'ab-lines.png', 'ab-dashboard.png'],
          caseStudy: '/assets/case/audit-buddy.pdf',
          demoUrl: 'https://demo.auditbuddy.com',
          githubUrl: 'https://github.com/aravindmanoj/audit-buddy'
        }
      ];
    }
  }

  // ===== EVENT LISTENERS =====
  setupEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', this.throttle(() => {
      this.updateActiveNavLink();
    }, 100));

    // Handle window resize
    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, 250));
  }

  // ===== SCROLL PROGRESS =====
  setupScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', this.throttle(() => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }, 16));
  }

  // ===== SCROLL REVEAL =====
  setupScrollReveal() {
    if (this.reducedMotion) return;

    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      this.scrollObserver.observe(element);
    });
  }

  // ===== MAGNETIC BUTTONS =====
  setupMagneticButtons() {
    if (this.reducedMotion) return;

    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.min(rect.width, rect.height) / 2;
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = x * strength * 0.1;
          const moveY = y * strength * 0.1;
          
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
      });
    });
  }

  // ===== 3D CARDS =====
  setup3DCards() {
    if (this.reducedMotion) return;

    const threedElements = document.querySelectorAll('.threed');
    
    threedElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'rotateX(5deg) rotateY(-8deg) translateZ(0)';
      });
    });
  }

  // ===== MODAL =====
  setupModal() {
    this.modal = document.getElementById('project-modal');
    if (!this.modal) return;

    const closeBtn = this.modal.querySelector('.modal-close');
    const backdrop = this.modal.querySelector('.modal-backdrop');

    // Close modal handlers
    [closeBtn, backdrop].forEach(element => {
      if (element) {
        element.addEventListener('click', () => this.closeModal());
      }
    });

    // ESC key handler
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });

    // Focus trap
    this.modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.trapFocus(e);
      }
    });
  }

  openModal(project) {
    if (!this.modal) return;

    const modalContent = this.modal.querySelector('#modal-content');
    modalContent.innerHTML = this.generateModalContent(project);

    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const firstFocusable = this.modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  closeModal() {
    if (!this.modal) return;

    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  trapFocus(e) {
    const focusableElements = this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  generateModalContent(project) {
    return `
      <div class="modal-project">
        <div class="modal-project-header">
          <h4 class="modal-project-title">${project.title}</h4>
          <p class="modal-project-summary">${project.summary}</p>
        </div>

        <div class="modal-project-impact">
          <h5>Key Impact</h5>
          <div class="modal-impact-list">
            ${project.impact.map(impact => `<span class="impact-badge">${impact}</span>`).join('')}
          </div>
        </div>

        <div class="modal-project-tech">
          <h5>Tech Stack</h5>
          <div class="modal-tech-list">
            ${project.tech.map(tech => `<span class="chip">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="modal-project-architecture">
          <h5>Architecture</h5>
          <ul class="modal-architecture-list">
            ${project.architecture.map(arch => `<li class="architecture-item">${arch}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-project-links">
          <h5>Links</h5>
          <div class="modal-links">
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo</a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub</a>` : ''}
            ${project.caseStudy ? `<a href="${project.caseStudy}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Case Study</a>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // ===== FORM HANDLING =====
  setupForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit(form);
    });
  }

  handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simple form validation
    if (!data.name || !data.email || !data.message) {
      this.showNotification('Please fill in all fields', 'error');
      return;
    }

    // Simulate form submission
    this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    form.reset();
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 20px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: '500',
      zIndex: '9999',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // ===== PROJECT RENDERING =====
  renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = this.projects.map((project, index) => `
      <div class="project-row scroll-reveal">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          
          <div class="project-impact">
            ${project.impact.map(impact => `<span class="impact-badge">${impact}</span>`).join('')}
          </div>
          
          <div class="project-tech">
            ${project.tech.map(tech => `<span class="chip">${tech}</span>`).join('')}
          </div>
          
          <div class="project-architecture">
            ${project.architecture.map(arch => `<div class="architecture-item">${arch}</div>`).join('')}
          </div>
          
          <div class="project-actions">
            <button class="btn btn-primary" onclick="app.openModal(${JSON.stringify(project).replace(/"/g, '&quot;')})">
              <span>View Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
                <span>Live Demo</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>
        
        <div class="project-visual">
          <div class="threed">
            <div class="threed-layers">
              ${project.imageLayers.map((layer, layerIndex) => 
                `<img src="/assets/img/${layer}" alt="${project.title} workflow layer ${layerIndex + 1}" data-depth="${layerIndex}" loading="lazy">`
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ===== NAVIGATION =====
  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // ===== UTILITY FUNCTIONS =====
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  handleResize() {
    // Handle responsive adjustments
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
      this.setupScrollReveal();
    }
  }
}

// ===== INITIALIZATION =====
let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new PortfolioApp();
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
