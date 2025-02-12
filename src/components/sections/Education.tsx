import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Education = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current & Upcoming</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <div className="font-medium">MIT AI & Data Science Program</div>
              <div className="text-gray-600">2025 cohort</div>
            </li>
            <li>
              <div className="font-medium">USC Annenberg School</div>
              <div className="text-gray-600">Master of Communication Management (Admitted)</div>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Completed Education</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <div className="font-medium">Kansas State University</div>
              <div className="text-gray-600">BS, Mass Communications</div>
            </li>
            <li>
              <div className="font-medium">Harvard School of Continuing Education</div>
              <div className="text-gray-600">Philosophy (Applied)</div>
            </li>
            <li>
              <div className="font-medium">Yale School of Management</div>
              <div className="text-gray-600">Executive Education</div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;