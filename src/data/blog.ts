
// Blog post data focused on DevOps topics
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  content?: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Kubernetes vs. Docker Swarm: A DevOps Perspective",
    date: "May 15, 2023",
    category: "Containers",
    excerpt: "A detailed comparison of Kubernetes and Docker Swarm from a DevOps engineer's perspective, with insights on when to use each orchestration platform.",
    tags: ["Kubernetes", "Docker Swarm", "Container Orchestration"]
  },
  {
    id: 2,
    title: "Setting Up a Zero-Downtime Deployment Pipeline",
    date: "April 22, 2023",
    category: "CI/CD",
    excerpt: "Learn how to implement zero-downtime deployments using blue-green and canary strategies with modern CI/CD tools.",
    tags: ["CI/CD", "Zero Downtime", "Deployment Strategies"]
  },
  {
    id: 3,
    title: "Infrastructure as Code Best Practices with Terraform",
    date: "March 10, 2023",
    category: "Infrastructure",
    excerpt: "Discover best practices for managing infrastructure as code using Terraform, including module organization and state management.",
    tags: ["Terraform", "IaC", "Best Practices"]
  },
  {
    id: 4,
    title: "Monitoring Microservices: The Complete Guide",
    date: "February 28, 2023",
    category: "Monitoring",
    excerpt: "A comprehensive guide to monitoring microservices architectures using Prometheus, Grafana, and other modern observability tools.",
    tags: ["Monitoring", "Microservices", "Observability"]
  },
  {
    id: 5,
    title: "Securing Your CI/CD Pipeline: From Code to Deployment",
    date: "January 15, 2023",
    category: "Security",
    excerpt: "Learn essential security practices for each stage of your CI/CD pipeline to protect your application from development to production.",
    tags: ["Security", "CI/CD", "DevSecOps"]
  },
  {
    id: 6,
    title: "GitOps Workflow for Kubernetes Deployments",
    date: "December 20, 2022",
    category: "GitOps",
    excerpt: "Understanding the GitOps methodology and implementing it for Kubernetes using tools like ArgoCD and FluxCD.",
    tags: ["GitOps", "Kubernetes", "ArgoCD", "FluxCD"]
  }
];

export const categories = ["All", "Containers", "CI/CD", "Infrastructure", "Monitoring", "Security", "GitOps"];
