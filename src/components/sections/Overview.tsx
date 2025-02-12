import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Medal, Code } from 'lucide-react';

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Derek Simmons</h1>
        <p className="text-xl text-gray-600">Strategic Builder | Innovation Architect</p>
        <div className="mt-4 text-gray-500">
          <p>Available for Global Transformation Leadership Opportunities</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="w-5 h-5" />
              Key Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• $10M+ Revenue Generation</li>
              <li>• 100,000+ Digital Subscriptions</li>
              <li>• AI Task Force Leadership</li>
              <li>• Global Top 5 Rankings</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Core Expertise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Digital Transformation</li>
              <li>• AI Ethics & Innovation</li>
              <li>• Team Development</li>
              <li>• Framework Creation</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;