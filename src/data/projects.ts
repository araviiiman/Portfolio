export interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  metrics: string[];
  imageLayers: string[];
  detailMarkdownPath: string;
  problem: string;
  approach: string;
  outcome: string;
  architecture: string[];
  demoUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: "audit-buddy",
    title: "Audit Buddy Prototype",
    summary: "Pharma Compliance Automation",
    tech: ["LLMs", "n8n", "Docker", "Python", "FastAPI"],
    metrics: ["90% time reduction", "Automated document parsing", "Real-time compliance checks"],
    imageLayers: [
      "audit-buddy-layer1.png",
      "audit-buddy-layer2.png", 
      "audit-buddy-layer3.png",
      "audit-buddy-layer4.png"
    ],
    detailMarkdownPath: "/data/projects/audit-buddy.md",
    problem: "Manual pharmaceutical compliance audits require extensive document review and expert knowledge, leading to time-consuming processes and potential oversight errors.",
    approach: "Built an intelligent document processing system using LLMs for automated compliance checking, with n8n orchestrating the workflow and Docker for scalable deployment.",
    outcome: "Reduced audit processing time by 90% while maintaining accuracy through automated document parsing and real-time compliance validation.",
    architecture: [
      "Document ingestion pipeline with OCR preprocessing",
      "LLM-powered compliance rule extraction and validation",
      "n8n workflow orchestration for audit processes",
      "Docker containerized microservices architecture",
      "Real-time dashboard for audit status tracking"
    ],
    demoUrl: "https://demo.auditbuddy.com",
    caseStudyUrl: "/case-studies/audit-buddy.pdf"
  },
  {
    id: "personal-ai-assistant",
    title: "Personal AI Assistant",
    summary: "Realtime Assistant with Knowledge Base",
    tech: ["Python", "Obsidian", "RSE.py", "LLM Integrations", "Vector DB"],
    metrics: ["Context-aware responses", "Knowledge base integration", "Automated note sync"],
    imageLayers: [
      "ai-assistant-layer1.png",
      "ai-assistant-layer2.png",
      "ai-assistant-layer3.png",
      "ai-assistant-layer4.png"
    ],
    detailMarkdownPath: "/data/projects/personal-ai-assistant.md",
    problem: "Existing AI assistants lack personal context and knowledge integration, limiting their effectiveness for personalized task management and information retrieval.",
    approach: "Developed a context-aware AI assistant with integrated knowledge base using Obsidian for note management, RSE.py for research automation, and vector databases for semantic search.",
    outcome: "Created a personalized AI assistant that maintains context across conversations and integrates seamlessly with personal knowledge management workflows.",
    architecture: [
      "Vector database for semantic knowledge storage",
      "Obsidian integration for note synchronization",
      "RSE.py automation for research workflows",
      "LLM integration with context preservation",
      "Real-time query routing and response generation"
    ],
    demoUrl: "https://replit.com/@aravind/personal-ai-assistant",
    caseStudyUrl: "/case-studies/personal-ai-assistant.pdf"
  },
  {
    id: "media-bias-analysis",
    title: "Media Bias Analysis Pipeline",
    summary: "NLP & Text Mining at Scale",
    tech: ["BERTopic", "DistilBERT", "RoBERTa", "Python", "Scikit-learn"],
    metrics: ["50,000+ articles processed", "45% macro-F1 improvement", "10x minority recall boost"],
    imageLayers: [
      "media-bias-layer1.png",
      "media-bias-layer2.png",
      "media-bias-layer3.png",
      "media-bias-layer4.png"
    ],
    detailMarkdownPath: "/data/projects/media-bias-analysis.md",
    problem: "Media bias detection requires processing large volumes of text data with nuanced sentiment analysis, particularly for underrepresented perspectives and minority viewpoints.",
    approach: "Built a comprehensive NLP pipeline using BERTopic for topic modeling, DistilBERT for efficient text classification, and RoBERTa for fine-tuned sentiment analysis on 50,000+ articles.",
    outcome: "Achieved 45% improvement in macro-F1 score and 10x boost in minority emotion recall, enabling more accurate bias detection across diverse media sources.",
    architecture: [
      "Large-scale text ingestion and preprocessing pipeline",
      "BERTopic clustering for topic extraction and bias identification",
      "DistilBERT fine-tuning for efficient text classification",
      "RoBERTa sentiment analysis with minority class optimization",
      "Interactive visualization dashboard for bias metrics"
    ],
    demoUrl: "https://vercel.com/aravind/media-bias-analysis",
    caseStudyUrl: "/case-studies/media-bias-analysis.pdf"
  }
];
