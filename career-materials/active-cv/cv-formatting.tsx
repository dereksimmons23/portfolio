import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CV = () => {
  return (
    <Card className="w-full max-w-4xl p-8 space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Derek Claude Simmons</h1>
        <p className="text-lg text-gray-600">derek@flinthills.io</p>
        <p className="text-lg text-gray-800 mt-2">Transformation Leader | AI Ethics & Integration | Human Development</p>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <p className="text-gray-700">
          Leader in digital transformation and human development with unique expertise bridging AI innovation and ethical implementation. 
          Three decades of media evolution experience combined with framework development for pattern recognition and authentic growth. 
          Seeking to leverage this experience to help organizations navigate transformation while maintaining human-centered values.
        </p>
      </div>

      {/* Core Competencies */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">AI & Technology Integration</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>AI Task Force Leadership</li>
            <li>Ethics & Governance</li>
            <li>Pattern Recognition Systems</li>
            <li>Technology Strategy</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Human Development</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Coaching & Mentorship</li>
            <li>Framework Creation</li>
            <li>Natural Development Pathways</li>
            <li>Team Leadership</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Business Transformation</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Digital Evolution Strategy</li>
            <li>Change Management</li>
            <li>Standards Development</li>
            <li>Innovation Leadership</li>
          </ul>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">AI Task Force Lead & Innovation Director (2022-2024)</h3>
          <ul className="list-disc pl-5 text-gray-600 mt-2">
            <li>Spearheaded AI implementation strategy balancing innovation with ethical guidelines</li>
            <li>Developed comprehensive standards for AI integration in media</li>
            <li>Led cross-functional teams in technology adoption and transformation</li>
          </ul>
        </div>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">Executive Director, Innovation & Strategy (2017-2022)</h3>
          <ul className="list-disc pl-5 text-gray-600 mt-2">
            <li>Directed digital transformation initiatives across multiple business units</li>
            <li>Created and implemented pattern recognition frameworks</li>
            <li>Managed strategic planning and innovation development</li>
          </ul>
        </div>
      </div>

      {/* Current Projects */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-3">Current Projects</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium">The CW Standard</h4>
            <p className="text-gray-600">Framework development combining human wisdom with AI capabilities</p>
          </div>
          <div>
            <h4 className="font-medium">Pattern Recognition</h4>
            <p className="text-gray-600">Application of natural development principles across domains</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CV;