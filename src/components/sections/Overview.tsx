import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Medal, Code } from 'lucide-react';

const Overview = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Derek Simmons</h1>
        <p className="text-xl text-gray-600">Digital Transformation & AI Ethics Leader</p>
        <div className="mt-4 text-gray-500">
          <p className="text-lg">Transforming organizations through ethical AI innovation and human-centered leadership</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="w-5 h-5" />
              Impact & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Generated $10M+ in New Revenue</li>
              <li>• Grew to 100,000+ Digital Subscriptions</li>
              <li>• Led Enterprise AI Task Force</li>
              <li>• Achieved Global Top 5 Rankings</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Core Focus Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• AI Ethics & Innovation</li>
              <li>• Digital Transformation</li>
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