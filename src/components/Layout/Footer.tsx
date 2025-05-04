
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-lms-dark">ClassHub</h3>
            <p className="text-gray-600 text-sm">
              A comprehensive learning management system for students, parents, and instructors.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lms-dark">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-lms-primary">Home</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-lms-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-lms-primary">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lms-dark">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-600 hover:text-lms-primary">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-lms-primary">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-lms-primary">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lms-dark">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-600 hover:text-lms-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-lms-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ClassHub LMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
