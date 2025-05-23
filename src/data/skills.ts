
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Container Orchestration",
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Docker Swarm", level: 80 },
      { name: "Helm", level: 85 }
    ]
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 88 },
      { name: "GitLab CI", level: 85 },
      { name: "ArgoCD", level: 80 },
      { name: "FluxCD", level: 75 }
    ]
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", level: 92 },
      { name: "Ansible", level: 88 },
      { name: "CloudFormation", level: 75 },
      { name: "Pulumi", level: 70 }
    ]
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 80 },
      { name: "GCP", level: 75 },
      { name: "Digital Ocean", level: 70 }
    ]
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 90 },
      { name: "ELK Stack", level: 80 },
      { name: "Datadog", level: 75 },
      { name: "New Relic", level: 70 }
    ]
  },
  {
    title: "Scripting & Programming",
    skills: [
      { name: "Bash", level: 90 },
      { name: "Python", level: 85 },
      { name: "Go", level: 75 },
      { name: "JavaScript", level: 70 }
    ]
  }
];
