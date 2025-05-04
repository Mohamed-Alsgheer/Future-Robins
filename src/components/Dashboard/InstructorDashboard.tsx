
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstructorDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
          <p className="text-gray-500">Welcome back, {user?.name}!</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Start New Class</Button>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3</div>
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Next: Algebra at 10:30 AM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assignments to Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">14</div>
              <BookOpen className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">From 3 different classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">78</div>
              <Users className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Across 4 courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">12</div>
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">8 from students, 4 from parents</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your classes and office hours for today</CardDescription>
          </div>
          <Button variant="outline" size="sm">View Full Schedule</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md border border-blue-200">
              <div>
                <div className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mb-1">In Progress</div>
                <p className="font-medium">Algebra Fundamentals</p>
                <p className="text-sm text-gray-500">Grade 10 • Room 203</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">9:00 AM - 10:15 AM</p>
                <p className="text-sm text-gray-500">25 students</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Calculus</p>
                <p className="text-sm text-gray-500">Grade 12 • Room 205</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">11:00 AM - 12:15 PM</p>
                <p className="text-sm text-gray-500">18 students</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Office Hours</p>
                <p className="text-sm text-gray-500">Faculty Office • Room 105</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">1:30 PM - 3:00 PM</p>
                <p className="text-sm text-gray-500">Open to all students</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Applied Mathematics</p>
                <p className="text-sm text-gray-500">Grade 11 • Room 201</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">3:30 PM - 4:45 PM</p>
                <p className="text-sm text-gray-500">22 students</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Submissions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Submissions</CardTitle>
            <CardDescription>Recently submitted assignments to grade</CardDescription>
          </div>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Linear Equations Quiz</p>
                <p className="text-sm text-gray-500">Algebra Fundamentals • Grade 10</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">25 submissions</p>
                <p className="text-sm text-gray-500">Due date: Yesterday</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Limits Problem Set</p>
                <p className="text-sm text-gray-500">Calculus • Grade 12</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">16 submissions</p>
                <p className="text-sm text-gray-500">Due date: 2 days ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Statistics Project</p>
                <p className="text-sm text-gray-500">Applied Mathematics • Grade 11</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">21 submissions</p>
                <p className="text-sm text-gray-500">Due date: 3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstructorDashboard;
