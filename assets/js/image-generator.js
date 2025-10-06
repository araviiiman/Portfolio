// Simple placeholder image generator
// This creates basic colored rectangles as placeholders for workflow images

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

// Function to create a placeholder image
function createPlaceholderImage(text, color1, color2) {
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 400, 300);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  
  // Fill background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 300);
  
  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 18px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(text, 200, 150);
  
  ctx.font = '14px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillText('Workflow Layer', 200, 180);
  
  return canvas.toDataURL('image/png');
}

// Generate placeholders for all projects
const placeholders = {
  'ab-base.png': createPlaceholderImage('Audit Buddy Base', '#22d3ee', '#0891b2'),
  'ab-nodes.png': createPlaceholderImage('Audit Buddy Nodes', '#a78bfa', '#7c3aed'),
  'ab-lines.png': createPlaceholderImage('Audit Buddy Flow', '#10b981', '#059669'),
  'ab-dashboard.png': createPlaceholderImage('Audit Buddy Dashboard', '#f59e0b', '#d97706'),
  
  'pa-base.png': createPlaceholderImage('AI Assistant Base', '#22d3ee', '#0891b2'),
  'pa-flow.png': createPlaceholderImage('AI Assistant Flow', '#a78bfa', '#7c3aed'),
  'pa-links.png': createPlaceholderImage('AI Assistant Links', '#10b981', '#059669'),
  'pa-obsidian.png': createPlaceholderImage('AI Assistant Obsidian', '#f59e0b', '#d97706'),
  
  'mb-base.png': createPlaceholderImage('Media Bias Base', '#22d3ee', '#0891b2'),
  'mb-topics.png': createPlaceholderImage('Media Bias Topics', '#a78bfa', '#7c3aed'),
  'mb-arrows.png': createPlaceholderImage('Media Bias Flow', '#10b981', '#059669'),
  'mb-dashboard.png': createPlaceholderImage('Media Bias Dashboard', '#f59e0b', '#d97706')
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = placeholders;
}
