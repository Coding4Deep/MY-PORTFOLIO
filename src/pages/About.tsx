
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/data/skills";

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Me</h1>
            <p className="text-xl text-foreground/80">
              DevOps Engineer passionate about automation, cloud infrastructure, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="mb-4">My Journey</h2>
            <div className="space-y-4">
              <p>
                Hello! I'm a DevOps Engineer with over 5 years of experience building and optimizing CI/CD pipelines, infrastructure automation, and cloud architectures. I specialize in containerization, Kubernetes, and infrastructure as code technologies.
              </p>
              <p>
                My journey in DevOps began when I was working as a system administrator and discovered the power of automation. What started as scripting repetitive tasks quickly grew into a passion for creating efficient, scalable, and reliable systems.
              </p>
              <p>
                I've worked with startups and enterprise organizations alike, helping them implement DevOps practices that improve deployment frequency, reduce time to market, and enhance system reliability. My approach combines technical expertise with a focus on collaboration between development and operations teams.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-square bg-muted rounded-xl overflow-hidden border shadow-sm">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground/30">Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-center mb-12">Technical Skills</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-bold mb-4 gradient-text">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-foreground/70">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-container">
        <h2 className="text-center mb-12">Work Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              role: "Senior DevOps Engineer",
              company: "Cloud Solutions Inc.",
              period: "2021 - Present",
              description: "Lead the implementation of Kubernetes-based CI/CD pipelines, reduced deployment time by 80%, and automated infrastructure provisioning with Terraform and AWS."
            },
            {
              role: "DevOps Engineer",
              company: "Tech Innovations Ltd.",
              period: "2019 - 2021",
              description: "Designed and maintained containerized applications using Docker and Docker Swarm, implemented monitoring solutions with Prometheus and Grafana, and automated deployment processes."
            },
            {
              role: "System Administrator",
              company: "DataTech Services",
              period: "2017 - 2019",
              description: "Managed Linux and Windows servers, implemented backup and recovery solutions, and began automating routine tasks with Bash and Python scripts."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border shadow-sm relative">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-foreground/70">{item.company}</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{item.period}</span>
              </div>
              <p className="text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-center mb-12">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto gap-6">
            {[
              {
                name: "AWS Certified DevOps Engineer - Professional",
                organization: "Amazon Web Services",
                year: "2022"
              },
              {
                name: "Certified Kubernetes Administrator (CKA)",
                organization: "Cloud Native Computing Foundation",
                year: "2021"
              },
              {
                name: "Terraform Certified Associate",
                organization: "HashiCorp",
                year: "2021"
              },
              {
                name: "Microsoft Azure DevOps Engineer Expert",
                organization: "Microsoft",
                year: "2020"
              },
              {
                name: "Docker Certified Associate",
                organization: "Docker, Inc.",
                year: "2019"
              },
              {
                name: "Red Hat Certified Engineer (RHCE)",
                organization: "Red Hat",
                year: "2018"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-card border rounded-xl p-5 text-center">
                <div className="mb-3 mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21.27 10.9c-1.21-.33-2.42-.67-3.63-1.24-1.21-.57-2.32-.45-3.48-.45-1.39 0-2.78-.57-3.34-.57-.56 0-1.12.57-1.68.57-1.08 0-2.17-1.13-3.25-1.13-1.08 0-2.17 1.69-2.17 3.95 0 2.26 1.29 4.14 2.17 5.27.88 1.13 2.17 1.36 3.25 1.36 1.08 0 2.16-1.47 3.25-1.47 1.08 0 2.17.57 3.25 1.47 1.08.9 2.16-.34 3.25-1.47.54-.56 1.52-2.23 1.52-2.23" />
                    <path d="M13.56 1s-.57 1.69-.57 3.39c0 1.69.57 3.38.57 3.38" />
                    <path d="M11.17 1s-.57 1.69-.57 3.39c0 1.69.57 3.38.57 3.38" />
                    <path d="M12.43 22c.68 0 1.35-.09 2-.24" />
                    <path d="M19.71 15.5c.33.43.66 1 .79 1.5" />
                  </svg>
                </div>
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-sm text-foreground/70">{cert.organization}</p>
                <p className="text-xs text-foreground/50 mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-4">Need a DevOps Engineer?</h2>
          <p className="text-foreground/70 mb-8">
            I'm available for consulting, implementation projects, and DevOps transformation initiatives. Let's discuss how I can help optimize your infrastructure and processes.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
