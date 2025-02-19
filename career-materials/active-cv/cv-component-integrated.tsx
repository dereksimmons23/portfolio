import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileDown, Brain, Target, Code, BookOpen } from 'lucide-react';

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  const sections = {
    professional: {
      title: "Professional CV",
      icon: <Target className="w-6 h-6" />,
      content: <ProfessionalCV />
    },
    technical: {
      title: "Technical Profile",
      icon: <Code className="w-6 h-6" />,
      content: <TechnicalProfile />
    },
    projects: {
      title: "Framework Development",
      icon: <Brain className="w-6 h-6" />,
      content: <FrameworkDevelopment />
    }
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
      
      <CardContent className="p-8">
        {/* Header with QR */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">DEREK CLAUDE SIMMONS</h1>
            <p className="text-gray-600">derek@flinthills.io • flinthills.io • linkedin.com/in/dereksimm</p>
          </div>
          <img src="/assets/qr-headshot.png" alt="Contact QR Code with Derek Simmons headshot" className="w-24 h-24 print:w-20 print:h-20" />
        </div>

        <Tabs defaultValue="professional" className="print:hidden">
          <TabsList>
            {Object.entries(sections).map(([key, section]) => (
              <TabsTrigger key={key} value={key}>
                <div className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(sections).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              {section.content}
            </TabsContent>
          ))}
        </Tabs>

        <div className="hidden print:block">
          <ProfessionalCV />
        </div>
      </CardContent>
    </Card>
  );
};

const ProfessionalCV = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-xl font-semibold mb-3">EXECUTIVE PROFILE</h2>
      <p className="text-gray-700">Pattern recognition specialist integrating human wisdom with technological advancement. Pioneered AI ethics frameworks while leading enterprise-wide transformation. Founded The CW Standard, combining traditional pattern recognition with modern AI capabilities. Proven success translating insights across domains - from coaching athletics to leading AI integration, from visual journalism to digital transformation.</p>
    </section>

    {/* Professional Experience Section */}
    <section>
      <h2 className="text-xl font-semibold mb-4">PROFESSIONAL EXPERIENCE</h2>
      <div className="space-y-6">
        {/* Experience items remain the same */}
      </div>
    </section>

    {/* Other sections remain the same */}
  </div>
);

const TechnicalProfile = () => (
  <div className="space-y-6">
    <section className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">AI & Technology Integration</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">AI Ethics & Governance</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Framework development for ethical AI implementation</li>
            <li>Pattern recognition system architecture</li>
            <li>Natural development pathways in AI</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Technical Leadership</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI Task Force leadership</li>
            <li>Cross-functional team development</li>
            <li>Technology integration strategy</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const FrameworkDevelopment = () => (
  <div className="space-y-6">
    <section className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">The CW Standard</h3>
      <p className="text-gray-600 mb-4">Framework for natural development and pattern recognition</p>
      <div className="flex gap-2 flex-wrap mb-4">
        {["AI", "Pattern Recognition", "Process Development"].map((tech, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </section>

    <section className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Film Study Methodology</h3>
      <p className="text-gray-600 mb-4">Pattern recognition system for behavior analysis</p>
      <div className="flex gap-2 flex-wrap">
        {["Analysis", "Documentation", "Training"].map((tech, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export default CV;