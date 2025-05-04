
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, BookOpen, MessageSquare } from 'lucide-react';

const ParentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Parent Dashboard</h1>
        <p className="text-gray-500">Welcome back, {user?.name}!</p>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Child's Upcoming Classes</CardTitle>
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
            <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
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
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">2</div>
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">From your child's instructors</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Child Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Child's Academic Overview</CardTitle>
          <CardDescription>Current performance and progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Alex Johnson</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-800">Overall Grade</h4>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-bold text-blue-700">A-</span>
                    <span className="text-sm text-blue-600">(91%)</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-medium text-green-800">Attendance</h4>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-bold text-green-700">98%</span>
                    <span className="text-sm text-green-600">(1 absence)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subject Performance */}
            <div>
              <h3 className="text-lg font-medium mb-4">Subject Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Mathematics</p>
                    <div className="h-2 w-48 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <span className="font-medium">B+ (85%)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Science</p>
                    <div className="h-2 w-48 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <span className="font-medium">A- (92%)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">English Literature</p>
                    <div className="h-2 w-48 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-purple-600 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                  <span className="font-medium">A (96%)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">History</p>
                    <div className="h-2 w-48 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <span className="font-medium">B+ (88%)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>Your child's recently submitted assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Mathematics</p>
                <p className="text-sm text-gray-500">Linear Equations Quiz</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Grade: <span className="text-green-600">95%</span></p>
                <p className="text-sm text-gray-500">Submitted 2 days ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">Science</p>
                <p className="text-sm text-gray-500">Chemical Reactions Report</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Grade: <span className="text-green-600">88%</span></p>
                <p className="text-sm text-gray-500">Submitted 5 days ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
              <div>
                <p className="font-medium">English Literature</p>
                <p className="text-sm text-gray-500">Shakespeare Analysis</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Grade: <span className="text-green-600">92%</span></p>
                <p className="text-sm text-gray-500">Submitted 1 week ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentDashboard;
