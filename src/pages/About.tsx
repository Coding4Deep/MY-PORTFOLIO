
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Me</h1>
            <p className="text-xl text-foreground/80">
              Full-stack developer passionate about creating elegant solutions to complex problems.
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
                Hello! I'm a full-stack developer with over 5 years of experience building web applications and digital experiences. I specialize in JavaScript technologies across the stack and have a passion for clean code, intuitive design, and performance optimization.
              </p>
              <p>
                My journey in software development began when I was in college, where I built small tools to help with my studies. What started as a curiosity quickly grew into a passion, leading me to pursue a career in software development.
              </p>
              <p>
                I've worked with startups and established companies alike, helping them build products that users love. My approach combines technical expertise with a keen eye for user experience, ensuring that the solutions I build are not only functional but also a joy to use.
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

      {/* Experience Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-center mb-12">Work Experience</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                role: "Senior Software Engineer",
                company: "Tech Innovators Inc.",
                period: "2020 - Present",
                description: "Lead the development of the company's flagship product, mentored junior developers, and implemented CI/CD pipelines."
              },
              {
                role: "Full-Stack Developer",
                company: "Digital Solutions Co.",
                period: "2018 - 2020",
                description: "Built responsive web applications for clients across various industries, utilizing React, Node.js, and AWS."
              },
              {
                role: "Front-End Developer",
                company: "Creative Web Agency",
                period: "2016 - 2018",
                description: "Developed user interfaces for client websites and applications, focusing on performance and accessibility."
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
        </div>
      </section>

      {/* Education Section */}
      <section className="section-container">
        <h2 className="text-center mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              degree: "Master of Computer Science",
              institution: "Tech University",
              period: "2014 - 2016",
              description: "Specialized in software engineering with a focus on distributed systems."
            },
            {
              degree: "Bachelor of Science in Information Technology",
              institution: "State University",
              period: "2010 - 2014",
              description: "Graduated with honors. Coursework included web development, algorithms, and database design."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <p className="text-foreground/70">{item.institution}</p>
                </div>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">{item.period}</span>
              </div>
              <p className="text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-center mb-12">Technical Skills</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 gradient-text">Frontend</h3>
                <ul className="space-y-2">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'HTML/CSS', 'Redux'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 gradient-text">Backend</h3>
                <ul className="space-y-2">
                  {['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'GraphQL'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 gradient-text">DevOps & Tools</h3>
                <ul className="space-y-2">
                  {['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Jest', 'Webpack'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-4">Interested in Working Together?</h2>
          <p className="text-foreground/70 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
