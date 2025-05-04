
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import ParentDashboardContent from '@/components/Dashboard/ParentDashboard';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ParentDashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  // Redirect if not authenticated or wrong role
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'parent') {
    return <Navigate to={`/dashboard/${user?.role}`} />;
  }

  return (
    <MainLayout>
      <ParentDashboardContent />
    </MainLayout>
  );
};

export default ParentDashboardPage;
