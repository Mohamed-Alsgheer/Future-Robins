
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <div className="min-h-screen flex flex-col bg-lms-background">
      <Navbar />
      <main className={`flex-grow ${isDashboard ? 'container mx-auto px-4 py-6' : ''}`}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default MainLayout;
