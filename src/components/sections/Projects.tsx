import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase, Target, Users, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Task Force Leadership",
      icon: <Brain className="w-5 h-5" />,
      period: "2023-2024",
      metrics: [
        "Enterprise-wide AI integration strategy",
        "Strategic partnerships with leading tech firms",
        "Ethical framework development",
        "Cross-functional team leadership"
      ],
      impact: "Led digital transformation through ethical AI implementation"
    },
    {
      title: "Digital Subscription Growth",
      icon: <Target className="w-5 h-5" />,
      period: "2020-2023",
      metrics: [
        "100,000+ digital subscriptions achieved",
        "$10M+ revenue generation",
        "Top 6 national ranking",
        "Sustainable growth model"
      ],
      impact: "Transformed traditional media model to digital-first operation"
    },
    {
      title: "CW Standard Development",
      icon: <Users className="w-5 h-5" />,
      period: "2022-Present",
      metrics: [
        "AI-enhanced coaching platform",
        "Performance optimization framework",
        "Ethical development principles",
        "Community-centered approach"
      ],
      impact: "Building human-centered AI development frameworks"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Transformation Projects</h2>
        <p className="text-gray-600">Key initiatives driving innovation and growth</p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {project.icon}
                {project.title}
              </CardTitle>
              <div className="text-sm text-gray-500">{project.period}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Metrics & Achievements</h4>
                  <ul className="space-y-1 text-gray-600">
                    {project.metrics.map((metric, idx) => (
                      <li key={idx}>• {metric}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <h4 className="font-medium mb-1">Impact</h4>
                  <p className="text-gray-600">{project.impact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;