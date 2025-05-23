
// DevOps-focused project data
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kubernetes CI/CD Pipeline",
    description: "Implemented an end-to-end CI/CD pipeline using Jenkins, Docker, and Kubernetes for microservices deployment with automated testing and rollback capabilities.",
    category: "DevOps",
    image: "k8s-cicd",
    tags: ["Kubernetes", "Jenkins", "Docker", "CI/CD", "ArgoCD"],
    githubUrl: "https://github.com/example/k8s-cicd"
  },
  {
    id: 2,
    title: "Infrastructure as Code Platform",
    description: "Designed and developed a complete infrastructure as code solution using Terraform and Ansible to provision and configure cloud resources on AWS.",
    category: "Infrastructure",
    image: "iac-platform",
    tags: ["Terraform", "Ansible", "AWS", "IaC"]
  },
  {
    id: 3,
    title: "Monitoring & Alerting System",
    description: "Built a comprehensive monitoring system using Prometheus, Grafana and Alertmanager to monitor application performance, system metrics and send alerts.",
    category: "Monitoring",
    image: "monitoring",
    tags: ["Prometheus", "Grafana", "Alertmanager", "Monitoring"]
  },
  {
    id: 4,
    title: "Container Security Scanner",
    description: "Developed an automated container security scanning solution that integrates with CI pipeline to detect vulnerabilities in Docker images.",
    category: "Security",
    image: "container-security",
    tags: ["Docker", "Security", "Trivy", "CI/CD"]
  },
  {
    id: 5,
    title: "Cloud Cost Optimization Tool",
    description: "Created a tool to analyze and optimize cloud resource utilization and costs across AWS services with recommendation engine for right-sizing.",
    category: "Cloud",
    image: "cost-optimization",
    tags: ["AWS", "Python", "Cost Optimization", "CloudWatch"]
  },
  {
    id: 6,
    title: "GitOps Environment Manager",
    description: "Implemented a GitOps approach for environment management using Flux CD and Helm charts for maintaining application configuration consistency.",
    category: "GitOps",
    image: "gitops-manager",
    tags: ["GitOps", "FluxCD", "Helm", "Kubernetes"]
  },
];
