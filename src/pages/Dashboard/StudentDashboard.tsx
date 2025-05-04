
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import StudentDashboardContent from '@/components/Dashboard/StudentDashboard';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const StudentDashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  // Redirect if not authenticated or wrong role
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== 'student') {
    return <Navigate to={`/dashboard/${user?.role}`} />;
  }

  return (
    <MainLayout>
      <StudentDashboardContent />
    </MainLayout>
  );
};

export default StudentDashboardPage;
