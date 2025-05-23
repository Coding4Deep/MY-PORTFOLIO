
# DevOps Portfolio Website

A modern, responsive portfolio website for DevOps Engineers, built with React, TypeScript, and Tailwind CSS.

![DevOps Portfolio Screenshot](screenshot.png)

## 📋 Features

- **Responsive Design**: Looks great on all devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Dark/Light Mode**: Theme switching support
- **Animated Page Transitions**: Powered by Framer Motion
- **Multiple Pages**: Home, About, Projects, Blog, and Contact sections
- **DevOps Focus**: Content tailored for DevOps engineers
- **Interactive Components**: Progress bars, cards, and more
- **Form Validation**: Using React Hook Form and Zod

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devops-portfolio.git
   cd devops-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## 🖌️ Customization

### Personal Information

Edit the data files in `src/data/` to update your information:

- `projects.ts`: Your portfolio projects
- `skills.ts`: Your technical skills
- `blog.ts`: Your blog posts

### Colors and Styling

1. Modify the color scheme in `src/styles/global.css`
2. Adjust Tailwind configuration in `tailwind.config.ts`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a new route in `src/App.tsx`

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## 🔍 Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [React Query](https://tanstack.com/query/latest)
- [Lucide React](https://lucide.dev/) for icons

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

## 📄 License

MIT

## 👨‍💻 Author

[Your Name](https://yourwebsite.com)

