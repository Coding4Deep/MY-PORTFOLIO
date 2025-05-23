
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";

const posts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    date: "May 15, 2023",
    category: "Development",
    excerpt: "Learn how to set up a new React project with TypeScript and understand the benefits of using TypeScript in React applications.",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: 2,
    title: "Building Responsive UIs with TailwindCSS",
    date: "April 22, 2023",
    category: "UI/UX",
    excerpt: "Discover how to create responsive and beautiful user interfaces using TailwindCSS without writing custom CSS.",
    tags: ["TailwindCSS", "Responsive Design", "CSS"]
  },
  {
    id: 3,
    title: "Advanced State Management with React Context and Hooks",
    date: "March 10, 2023",
    category: "Development",
    excerpt: "Learn advanced patterns for managing state in React applications using Context API and custom hooks.",
    tags: ["React", "State Management", "Hooks"]
  },
  {
    id: 4,
    title: "Optimizing React Applications for Performance",
    date: "February 28, 2023",
    category: "Development",
    excerpt: "Discover techniques and best practices to optimize your React applications for better performance and user experience.",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 5,
    title: "Introduction to GraphQL with Node.js",
    date: "January 15, 2023",
    category: "Backend",
    excerpt: "Learn the basics of GraphQL and how to build a GraphQL API using Node.js and Apollo Server.",
    tags: ["GraphQL", "Node.js", "API"]
  },
  {
    id: 6,
    title: "Building Accessible Web Applications",
    date: "December 20, 2022",
    category: "Accessibility",
    excerpt: "Understanding the importance of web accessibility and implementing best practices in your applications.",
    tags: ["Accessibility", "Web Development", "ARIA"]
  }
];

const categories = ["All", "Development", "UI/UX", "Backend", "Accessibility"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Blog</h1>
            <p className="text-xl text-foreground/80">
              Thoughts, tutorials, and insights about development and design
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
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
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.id} className="card-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-foreground/60">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                  </Link>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/20">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t">
                  <Button asChild variant="link" className="p-0">
                    <Link to={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 text-center py-12">
              <h3 className="text-xl mb-2">No posts found</h3>
              <p className="text-foreground/70">
                Try adjusting your search or filter criteria.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-4">Stay Updated</h2>
          <p className="text-foreground/70 mb-8">
            Subscribe to my newsletter to get notified when I publish new articles.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
