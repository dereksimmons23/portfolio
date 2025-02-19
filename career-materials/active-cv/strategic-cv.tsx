import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, Users, Target, RefreshCw } from 'lucide-react';

const StrategicCV = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-white">
      <CardHeader className="text-center border-b">
        <CardTitle className="text-3xl font-bold">Derek Simmons</CardTitle>
        <div className="text-xl text-gray-600">Strategic Builder | Innovation Architect</div>
        <div className="text-sm text-gray-500 mt-2">
          Available for Global Opportunities
        </div>
      </CardHeader>

      <CardContent className="space-y-8 p-6">
        {/* Executive Profile */}
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5" />
            Executive Profile
          </h2>
          <p className="text-gray-700">
            Transformational leader driving organizational growth through human-centered innovation. Pioneer in integrating emerging technologies with ethical development approaches. Proven success leading enterprise-wide digital transformation with $10M+ in new revenue generation. Combines strategic vision with hands-on team development to build sustainable growth across corporate and community environments.
          </p>
        </section>

        {/* Core Competencies */}
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Target className="w-5 h-5" />
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-medium">Strategic Leadership</div>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                <li>Digital transformation architecture</li>
                <li>Revenue framework development</li>
                <li>Cross-functional team leadership</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-medium">Innovation Management</div>
              <ul className="list-disc pl-5 text-gray-600 text-sm">
                <li>AI/ML integration strategy</li>
                <li>Ethical framework development</li>
                <li>Pattern recognition systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <RefreshCw className="w-5 h-5" />
            Transformation Impact
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Executive Director, Digital Strategy & Growth</h3>
              <div className="text-gray-600">Star Tribune Media • 2023-2024</div>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>• Led enterprise-wide digital transformation initiatives as member of senior leadership team</li>
                <li>• Established AI Task Force, developing strategic partnerships with technology firms</li>
                <li>• Created revenue frameworks through digital product innovation</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Chief Creative Officer, Vice President</h3>
              <div className="text-gray-600">Star Tribune Media • 2017-2023</div>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>• Drove digital subscription growth to 100,000+, achieving top 6 ranking nationally</li>
                <li>• Pioneered "franchise" model for content monetization</li>
                <li>• Built and led high-performing teams through significant organizational change</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Assistant Managing Editor, Visuals</h3>
              <div className="text-gray-600">Star Tribune Media • 2013-2020</div>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>• Led 55-person team through digital transformation while maintaining editorial excellence</li>
                <li>• Achieved consistent global Top 5 ranking for visual journalism</li>
                <li>• Established frameworks for data visualization and digital storytelling</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Deputy Design Director</h3>
              <div className="text-gray-600">Los Angeles Times • 2007-2013</div>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>• Led design innovation across editorial platforms</li>
                <li>• Managed key strategic partnerships and major projects</li>
                <li>• Contributed to multiple Pulitzer Prize-winning projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Leadership */}
        <section>
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Users className="w-5 h-5" />
            Additional Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium">Advisory Roles</h3>
              <ul className="mt-2 text-gray-600 text-sm space-y-1">
                <li>• Minnesota State - Mankato, CX Program</li>
                <li>• Z School AI Program</li>
                <li>• Ruff Start Rescue</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Community Impact</h3>
              <ul className="mt-2 text-gray-600 text-sm space-y-1">
                <li>• Youth Sports Development Leadership</li>
                <li>• Licensed Pet Therapy Volunteer</li>
                <li>• Championship Team Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Development */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Education & Development</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• MIT AI & Data Science Program (2025 cohort)</li>
            <li>• USC Annenberg School - Master of Communication Management (Admitted)</li>
            <li>• Kansas State University - BS, Mass Communications</li>
            <li>• Harvard School of Continuing Education - Philosophy</li>
          </ul>
        </section>

        <div className="text-center text-sm text-gray-500 mt-8">
          Available for relocation • Open to remote opportunities • derek@flinthills.io
        </div>
      </CardContent>
    </Card>
  );
};

export default StrategicCV;