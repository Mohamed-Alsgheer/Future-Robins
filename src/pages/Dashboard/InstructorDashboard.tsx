
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import InstructorDashboardContent from '@/components/Dashboard/InstructorDashboard';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const InstructorDashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  // Redirect if not authenticated or wrong role
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'instructor') {
    return <Navigate to={`/dashboard/${user?.role}`} />;
  }

  return (
    <MainLayout>
      <InstructorDashboardContent />
    </MainLayout>
  );
};

export default InstructorDashboardPage;
