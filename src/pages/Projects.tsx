
import { PageTransition } from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Web", "Mobile", "UI/UX", "Backend"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce platform with product listings, cart functionality, and payment integration.",
    category: "Web",
    image: "placeholder-1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and team collaboration features.",
    category: "Web",
    image: "placeholder-2",
    tags: ["React", "TypeScript", "Firebase"]
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile app that helps users track their fitness goals, workouts, and nutrition.",
    category: "Mobile",
    image: "placeholder-3",
    tags: ["React Native", "Redux", "GraphQL"]
  },
  {
    id: 4,
    title: "Real Estate Listing Website",
    description: "A modern real estate listing website with advanced search functionality and interactive maps.",
    category: "Web",
    image: "placeholder-4",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL"]
  },
  {
    id: 5,
    title: "Admin Dashboard UI",
    description: "A responsive admin dashboard with customizable widgets, dark mode, and data visualization.",
    category: "UI/UX",
    image: "placeholder-5",
    tags: ["Figma", "HTML/CSS", "JavaScript"]
  },
  {
    id: 6,
    title: "API Service for Content Management",
    description: "A robust API service for content management with authentication, authorization, and caching.",
    category: "Backend",
    image: "placeholder-6",
    tags: ["Node.js", "Express", "MongoDB", "Redis"]
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">My Projects</h1>
            <p className="text-xl text-foreground/80">
              A collection of my work, side projects, and experiments
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col card-hover">
                <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                  <div className={`w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center`}>
                    <span className="text-xl font-bold text-foreground/30">{project.title}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/20">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between pt-4 border-t">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button variant="ghost" size="sm">Demo</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center max-w-3xl">
          <h2 className="mb-4">Have a project in mind?</h2>
          <p className="text-foreground/70 mb-8">
            I'm always interested in hearing about new projects and opportunities. Let's build something amazing together!
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
