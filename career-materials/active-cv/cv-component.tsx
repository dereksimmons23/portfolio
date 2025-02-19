import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Card className="w-full max-w-4xl relative print:shadow-none">
      <Button 
        onClick={handlePrint}
        className="absolute top-4 right-4 print:hidden"
      >
        <FileDown className="mr-2 h-4 w-4" />
        Export CV
      </Button>
      
      <CardContent className="p-8" id="cv-content">
        {/* Header with QR */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">DEREK CLAUDE SIMMONS</h1>
            <p className="text-gray-600">derek@flinthills.io • flinthills.io • linkedin.com/in/dereksimm</p>
          </div>
          <img src="/assets/qr-headshot.png" alt="Contact QR Code with Derek Simmons headshot" className="w-24 h-24 print:w-20 print:h-20" />
        </div>

        {/* Executive Profile */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">EXECUTIVE PROFILE</h2>
          <p className="text-gray-700">Pattern recognition specialist integrating human wisdom with technological advancement. Pioneered AI ethics frameworks while leading enterprise-wide transformation. Founded The CW Standard, combining traditional pattern recognition with modern AI capabilities. Proven success translating insights across domains - from coaching athletics to leading AI integration, from visual journalism to digital transformation.</p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">PROFESSIONAL EXPERIENCE</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">FOUNDER & CHIEF ARCHITECT</h3>
              <p className="text-gray-600 mb-2">The CW Standard • 2024-Present</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Developing framework integrating human pattern recognition with AI capabilities</li>
                <li>Building investment case for $100M initial funding round</li>
                <li>Leading development of ethical AI implementation standards</li>
                <li>Launched Standard Correspondence publication exploring transformation methodologies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">CHIEF CREATIVE OFFICER & VP, INNOVATION</h3>
              <p className="text-gray-600 mb-2">Major Media Organization • 2022-2024</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Led AI Task Force, establishing ethical frameworks for implementation</li>
                <li>Directed Ad Standards & Policy development for emerging technologies</li>
                <li>Created pattern recognition systems for content and technology integration</li>
                <li>Achieved unprecedented international success in visual journalism</li>
                <li>Built and led cross-functional teams through digital transformation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">EXECUTIVE DIRECTOR, DIGITAL STRATEGY</h3>
              <p className="text-gray-600 mb-2">Major Media Organization • 2017-2022</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Drove digital subscription growth to 100,000+, achieving top 6 ranking nationally</li>
                <li>Developed revenue frameworks through product innovation</li>
                <li>Pioneered "franchise" model for content monetization</li>
                <li>Led organizational transformation while maintaining editorial excellence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pattern Recognition & Development */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">PATTERN RECOGNITION & DEVELOPMENT</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">HEAD COACH & PROGRAM DIRECTOR</h3>
              <p className="text-gray-600 mb-2">Youth Basketball • 2020-Present</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Developed The CW Standard framework through practical application</li>
                <li>Created comprehensive player development methodologies</li>
                <li>Guided six players to collegiate scholarships (D1-JUCO)</li>
                <li>Led organizational transformation as association board president</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">COMMUNITY LEADERSHIP</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Advisory Board Member: Minnesota State CX Program, Z School AI Program</li>
                <li>Pet Therapy Team Member: Reading non-verbal communication patterns</li>
                <li>Youth Sports Development: Applying pattern recognition to player growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">EDUCATION & DEVELOPMENT</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>MIT AI & Data Science Program (2025 Cohort)</li>
            <li>USC Annenberg School - MCM Program (Admitted 2025)</li>
            <li>Kansas State University - BS, Mass Communications (Self-funded)</li>
            <li>Harvard School of Continuing Education - Philosophy (2025)</li>
            <li>Yale School of Management Executive Education (2023)</li>
          </ul>
        </section>

        {/* Expertise */}
        <section>
          <h2 className="text-xl font-semibold mb-4">EXPERTISE</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Pattern Recognition</li>
                <li>Strategic Transformation</li>
                <li>Team Development</li>
                <li>Human-Centered Design</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>AI Ethics & Governance</li>
                <li>Framework Development</li>
                <li>Digital Evolution</li>
                <li>Cross-Domain Integration</li>
              </ul>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default CV;