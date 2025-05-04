
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, Users, MessageSquare } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <p className="text-gray-500">Welcome back, {user?.name}!</p>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3</div>
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Next: Math at 10:30 AM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">5</div>
              <BookOpen className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">2 due in the next 48 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Study Groups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">2</div>
              <Users className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Next: Science Project, Tomorrow</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">8</div>
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">3 from instructors</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Classes */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Classes</CardTitle>
          <CardDescription>All scheduled classes for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Mathematics</p>
                <p className="text-sm text-gray-500">Algebra Fundamentals</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">10:30 AM - 11:45 AM</p>
                <p className="text-sm text-gray-500">Prof. Johnson</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Science</p>
                <p className="text-sm text-gray-500">Physics Lab</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">1:15 PM - 3:00 PM</p>
                <p className="text-sm text-gray-500">Dr. Martinez</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">English Literature</p>
                <p className="text-sm text-gray-500">Modern Poetry Discussion</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">3:30 PM - 4:45 PM</p>
                <p className="text-sm text-gray-500">Ms. Williams</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assignments */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Assignments</CardTitle>
          <CardDescription>Your upcoming assignments and due dates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Mathematics</p>
                <p className="text-sm text-gray-500">Quadratic Equations Problem Set</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-red-500">Due Tomorrow</p>
                <p className="text-sm text-gray-500">11:59 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Science</p>
                <p className="text-sm text-gray-500">Lab Report: Momentum Experiment</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Due in 3 days</p>
                <p className="text-sm text-gray-500">11:59 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">English Literature</p>
                <p className="text-sm text-gray-500">Poetry Analysis Essay</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Due in 5 days</p>
                <p className="text-sm text-gray-500">11:59 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
