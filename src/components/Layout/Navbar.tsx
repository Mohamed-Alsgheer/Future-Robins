
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-lms-primary to-lms-secondary p-2 rounded-md">
              <span className="text-white font-bold text-xl">CH</span>
            </div>
            <span className="font-bold text-xl text-lms-dark">ClassHub</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="hidden md:flex items-center gap-3 text-sm">
                  <span className="text-gray-600">Welcome, {user?.name}</span>
                  <span className="px-2 py-1 bg-blue-100 text-lms-primary rounded-full capitalize">
                    {user?.role}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Link to={`/dashboard/${user?.role}`}>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <User size={16} />
                      <span className="hidden md:inline">Dashboard</span>
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={logout}
                    className="flex items-center gap-1 text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    <span className="hidden md:inline">Logout</span>
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
