
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { AnimatePresence } from 'framer-motion';

export const Layout = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-grow">
            <Outlet />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
