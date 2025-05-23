
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

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
              Building Digital Experiences & Solutions
            </motion.h1>
            
            <motion.p 
              custom={1}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl"
            >
              Full-stack developer specializing in creating beautiful, functional, and user-friendly applications
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
                <Link to="/contact">Get In Touch</Link>
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

      {/* Featured Projects Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="bg-card rounded-xl p-6 border shadow-sm card-hover"
            >
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl mb-2">Project Title {item}</h3>
              <p className="text-foreground/70 mb-4 line-clamp-2">
                A brief description of the project and the technologies used to build it.
              </p>
              <Button asChild variant="outline">
                <Link to={`/projects/${item}`}>View Project</Link>
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

      {/* Skills Section */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">My Skills</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Technologies and tools I work with on a regular basis
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Python', 'AWS', 'Docker', 'GraphQL', 'Git', 'MongoDB', 'PostgreSQL'].map((skill) => (
              <div 
                key={skill} 
                className="bg-card shadow-sm rounded-lg p-4 text-center border card-hover"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    {/* Placeholder for skill icon */}
                  </div>
                </div>
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Latest Articles</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Read my latest thoughts, ideas, and tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="bg-card rounded-xl p-6 border shadow-sm card-hover"
            >
              <div className="text-sm text-foreground/60 mb-2">May {item + 10}, 2023</div>
              <h3 className="text-xl mb-2">Blog Post Title {item}</h3>
              <p className="text-foreground/70 mb-4 line-clamp-3">
                A brief preview of the blog post that gives the reader an idea of what the article is about.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link to={`/blog/${item}`}>Read More</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="secondary">
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-foreground/70 mb-8">
            I'm currently available for freelance work and open to new opportunities.
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
