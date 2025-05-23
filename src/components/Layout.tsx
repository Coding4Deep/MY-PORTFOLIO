
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-grow" key={location.pathname}>
            <Outlet />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
