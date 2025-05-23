
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Terminal, Server, CloudCog, GitBranch, Database, LineChart } from "lucide-react";

const staggerDelay = 0.1;

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * staggerDelay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const services = [
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description: "Design and implementation of scalable, secure cloud infrastructure on AWS, Azure, and GCP."
  },
  {
    icon: Terminal,
    title: "CI/CD Pipeline Automation",
    description: "Build efficient CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI for faster, reliable deployments."
  },
  {
    icon: Server,
    title: "Containerization & Orchestration",
    description: "Container strategies with Docker and orchestration using Kubernetes for microservices architecture."
  },
  {
    icon: GitBranch,
    title: "Infrastructure as Code",
    description: "Automate infrastructure provisioning with Terraform, Ansible, and CloudFormation."
  },
  {
    icon: LineChart,
    title: "Monitoring & Observability",
    description: "Implement comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack."
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Setup, optimization, and automation of database operations for MySQL, PostgreSQL, and MongoDB."
  }
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1 
              custom={0}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mb-6 gradient-text"
            >
              DevOps Engineering & Cloud Infrastructure
            </motion.h1>
            
            <motion.p 
              custom={1}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl"
            >
              Building reliable, scalable, and automated infrastructure solutions for modern applications
            </motion.p>
            
            <motion.div
              custom={2} 
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild size="lg">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Hire Me</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 z-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">DevOps Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Specialized services to help organizations build efficient, reliable, and automated infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border shadow-sm card-hover"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-container bg-muted py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of my recent DevOps projects and implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Kubernetes CI/CD Pipeline",
              description: "Automated deployment pipeline with Kubernetes, Jenkins, and ArgoCD",
              tags: ["Kubernetes", "CI/CD", "GitOps"]
            },
            {
              title: "AWS Infrastructure as Code",
              description: "Cloud infrastructure automation with Terraform and AWS services",
              tags: ["AWS", "Terraform", "IaC"]
            },
            {
              title: "Monitoring Solution",
              description: "Comprehensive monitoring with Prometheus, Grafana, and Alertmanager",
              tags: ["Monitoring", "Observability", "Alerting"]
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border shadow-sm card-hover"
            >
              <div className="aspect-video bg-muted rounded-lg mb-4 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <span className="text-lg font-medium text-foreground/30">Project {index + 1}</span>
              </div>
              <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary/20 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to={`/projects/${index + 1}`}>View Details</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="secondary">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Client Testimonials</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            What clients say about my DevOps engineering services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              quote: "Their expertise in Kubernetes and CI/CD pipelines transformed our deployment process. We went from monthly releases to multiple deployments per day with confidence.",
              name: "Sarah Johnson",
              role: "CTO, TechStart Inc."
            },
            {
              quote: "The infrastructure as code implementation saved us countless hours of manual configuration and significantly improved our reliability.",
              name: "Michael Chen",
              role: "Engineering Manager, DataFlow Systems"
            },
            {
              quote: "Their monitoring solution has given us unprecedented visibility into our systems. We can now detect and resolve issues before they impact our customers.",
              name: "Jessica Williams",
              role: "VP of Engineering, CloudServe"
            },
            {
              quote: "The containerization strategy they implemented allowed us to scale our application effortlessly during peak traffic periods.",
              name: "Robert Miller",
              role: "Lead Developer, AppScale Inc."
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border shadow-sm"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 inline-block text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="italic mb-4 flex-grow">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-center mb-12">Technologies I Work With</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              'Kubernetes', 'Docker', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible', 
              'AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana', 'ELK Stack',
              'ArgoCD', 'FluxCD', 'Helm', 'Python', 'Bash', 'Linux'
            ].map((tech) => (
              <div 
                key={tech} 
                className="bg-card shadow-sm rounded-lg p-4 text-center border card-hover"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    {/* Placeholder for tech icon */}
                  </div>
                </div>
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Latest DevOps Articles</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Read my thoughts on DevOps practices, tools, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Implementing GitOps with ArgoCD and Kubernetes",
              date: "May 15, 2023",
              preview: "Learn how to implement a GitOps workflow for your Kubernetes clusters using ArgoCD."
            },
            {
              title: "Terraform Best Practices for Large-Scale Infrastructure",
              date: "April 22, 2023", 
              preview: "Tips and best practices for managing complex infrastructure as code with Terraform."
            },
            {
              title: "Building Effective Monitoring Dashboards with Grafana",
              date: "March 10, 2023",
              preview: "A guide to creating informative and actionable monitoring dashboards with Grafana."
            }
          ].map((post, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border shadow-sm card-hover"
            >
              <div className="text-sm text-foreground/60 mb-2">{post.date}</div>
              <h3 className="text-xl mb-2">{post.title}</h3>
              <p className="text-foreground/70 mb-4 line-clamp-3">
                {post.preview}
              </p>
              <Button asChild variant="link" className="p-0">
                <Link to={`/blog/${index + 1}`}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="secondary">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-4">Need DevOps Expertise?</h2>
          <p className="text-foreground/70 mb-8">
            I'm currently available for freelance projects and consulting. Let me help you build reliable, scalable infrastructure.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
