
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

