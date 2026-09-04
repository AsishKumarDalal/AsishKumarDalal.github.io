export const profile = {
  name: "Asish Kumar Dalal",
  role: "Software Engineer || ML Developer",
  bio: "Solo Founder and ML Developer focused on building high-impact products and exploring advanced AI architectures. I specialize in designing scalable systems and implementing state-of-the-art machine learning models from scratch. My work bridges the gap between research and production, focusing on efficiency, scalability, and performance.",
  about: "I am a Software Engineer and ML Developer with a passion for building systems that solve complex problems. My experience ranges from developing solo-engineered products with hundreds of users to implementing complex neural network architectures from scratch. I am constantly exploring new paradigms in AI, from mixture-of-experts to sparse attention mechanisms, and I love documenting my journey through open-source contributions.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lalo", // Placeholder avatar
  github: "https://github.com/AsishKumarDalal",
  linkedin: "https://www.linkedin.com/in/asish-kumar-dalal", 
  twitter: "#", 
  email: "dalalasishkumar23@gmail.com",
};

export const projects = [
  {
    domain: "AI/ML",
    items: [
      {
        name: "Statistical Language Model",
        description: "A high-performance, non-neural statistical language model built from scratch using SVD PPMI embeddings, Kneser-Ney Markov chains, Baum-Welch HMMs, and LDA Gibbs sampling fused via EM interpolation.",
        github: "https://github.com/AsishKumarDalal/statistical-language-model",
        image: "",
        tags: ["Statistical ML", "Python", "SVD", "EM Algorithm", "HMM", "NLP"]
      },
      {
        name: "HSKM-Architecture",
        description: "Hierarchical Sparse Kernel Memory (HSKM) Architecture - A hybrid sequence modeling architecture combining learned kernel-based sparse attention with hierarchical memory banks.",
        github: "https://github.com/AsishKumarDalal/HSKM-Architecture",
        image: "https://raw.githubusercontent.com/AsishKumarDalal/HSKM-Architecture/main/public/arch_overview.png",
        tags: ["PyTorch", "Transformers", "Sparse Attention", "Research"]
      },
      {
        name: "GPTOss",
        description: "A Mixture of Experts (MoE) model built from scratch in PyTorch, exploring sparse computation and expert routing.",
        github: "https://github.com/AsishKumarDalal/gptoss",
        image: "https://raw.githubusercontent.com/AsishKumarDalal/gptoss/main/public/Gemini_Generated_Image_opyjsjopyjsjopyj.png",
        tags: ["MoE", "PyTorch", "LLM", "Scaling"]
      },
      {
        name: "BERT from Scratch",
        description: "Implemented BERT and distillBERT entirely from scratch using PyTorch.",
        github: "https://github.com/AsishKumarDalal/BERT_scratch_pytorch",
        image: "",
        tags: ["PyTorch", "Transformers", "NLP", "Deep Learning"]
      },
      {
        name: "VisualBERT",
        description: "Implemented the VisualBERT vision-language model from scratch, bridging the gap between computer vision and natural language processing.",
        github: "https://github.com/AsishKumarDalal/VisualBERT",
        image: "",
        tags: ["PyTorch", "Vision-Language", "Transformers", "Multimodal"]
      }
    ]
  },
  {
    domain: "Solo Founder",
    items: [
      {
        name: "EnvSecure",
        description: "Encrypted .env sharing platform with zero-knowledge encryption and self-destructing links. Onboarded 200+ users.",
        github: "https://github.com/envsecure/envsecure.github.io",
        liveLink: "https://envsecure.github.io",
        image: "https://raw.githubusercontent.com/envsecure/envsecure.github.io/main/public/lockimage.png",
        tags: ["Security", "Encryption", "React", "Product"]
      },
      {
        name: "ResumeVVC",
        description: "A modern resume building platform designed for developers with real-time preview.",
        github: "https://github.com/ResumevVc/ResumevVc.github.io",
        liveLink: "https://resumevvc.github.io",
        image: "https://raw.githubusercontent.com/ResumevVc/ResumevVc.github.io/main/public/resume-template.png",
        tags: ["Frontend", "React", "UI/UX", "Product"]
      },
      {
        name: "Redis from Scratch",
        description: "A high-performance key-value data store implemented in C++ from the ground up.",
        github: "https://github.com/AsishKumarDalal/Redis_from_scratch",
        image: "",
        tags: ["C++", "Networking", "Data Structures", "Backend"]
      }
    ]
  }
];

export const oss = [
  {
    name: "KeystoneJS",
    description: "Fixed seeding errors in usecase-blog example. Resolved issues with schema fields, Document type transformations, and safety checks during author connection in the seeding script.",
    link: "https://github.com/keystonejs/keystone/pull/9830"
  }
];

export const experience = [
  {
    company: "EnvSecure",
    role: "Solo Founder",
    period: "2026 - Present",
    description: "Built and scaled an encrypted .env sharing platform. Managed the entire product lifecycle from ideation to deployment and user onboarding (200+ users).",
    liveLink: "https://envsecure.github.io"
  },
  {
    company: "ResumeVVC",
    role: "Solo Founder",
    period: "2026 - Present",
    description: "Developed and launched a modern resume builder for developers, optimizing the frontend for a seamless user experience.",
    liveLink: "https://resumevvc.github.io"
  }
];
