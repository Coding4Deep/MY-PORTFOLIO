
## 📁 Project Structure

```
devops-portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn UI components
│   │   ├── Layout.tsx   # Main layout wrapper
│   │   └── ...
│   ├── data/            # Data files (projects, skills, blog posts)
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main App component with routes
│   └── main.tsx         # Entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 📑 Script to Create Project Structure

Save this as `create-project.sh` and run it with `bash create-project.sh`:

```bash
#!/bin/bash

# Create DevOps Portfolio Project Structure
echo "Creating DevOps Portfolio project structure..."

# Create main directory
mkdir -p devops-portfolio
cd devops-portfolio

# Initialize npm project
npm init -y

# Install dependencies
npm install react react-dom react-router-dom @tanstack/react-query framer-motion zod @hookform/resolvers lucide-react tailwind-merge clsx
npm install -D typescript @types/react @types/react-dom vite @vitejs/plugin-react-swc tailwindcss postcss autoprefixer

# Create directory structure
mkdir -p src/components/ui src/data src/lib src/pages src/styles public

# Create initial files
touch src/main.tsx src/App.tsx src/components/Layout.tsx src/styles/global.css src/lib/utils.ts
touch src/pages/Home.tsx src/pages/About.tsx src/pages/Projects.tsx src/pages/Blog.tsx src/pages/Contact.tsx src/pages/NotFound.tsx
touch src/data/projects.ts src/data/skills.ts src/data/blog.ts
touch public/favicon.ico index.html vite.config.ts tailwind.config.ts tsconfig.json

echo "Project structure created successfully!"
echo "Run 'cd devops-portfolio && npm install && npm run dev' to start developing"
```
