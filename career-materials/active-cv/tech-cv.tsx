import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Target, Globe, Code, BookOpen } from 'lucide-react';

const DigitalCV = () => {
  const sections = {
    profile: {
      title: "Profile",
      icon: <Brain className="w-6 h-6" />,
      content: {
        summary: "Digital transformation leader bridging human wisdom with emerging technology. Specializing in pattern recognition, framework development, and ethical AI implementation.",
        highlights: [
          "AI Task Force Leadership",
          "Framework Development",
          "Digital Transformation",
          "Pattern Recognition Systems"
        ]
      }
    },
    expertise: {
      title: "Areas of Expertise",
      icon: <Target className="w-6 h-6" />,
      content: {
        areas: [
          {
            name: "AI Strategy & Implementation",
            items: [
              "Task Force Leadership",
              "Pattern Recognition Systems",
              "Natural Language Processing",
              "Ethics & Governance"
            ]
          },
          {
            name: "Digital Transformation",
            items: [
              "Change Management",
              "Process Optimization",
              "Technology Integration",
              "User Experience"
            ]
          }
        ]
      }
    },
    experience: {
      title: "Key Experience",
      icon: <Globe className="w-6 h-6" />,
      content: {
        positions: [
          {
            title: "AI Task Force Lead",
            organization: "Major Media Organization",
            period: "2022-2024",
            achievements: [
              "Led AI implementation strategy",
              "Developed pattern recognition systems",
              "Managed digital transformation",
              "Created ethical guidelines"
            ]
          }
        ]
      }
    },
    projects: {
      title: "Frameworks & Projects",
      icon: <Code className="w-6 h-6" />,
      content: {
        projects: [
          {
            name: "The CW Standard",
            description: "Framework for natural development and pattern recognition",
            technologies: ["AI", "Pattern Recognition", "Process Development"]
          },
          {
            name: "Film Study Methodology",
            description: "Pattern recognition system for behavior analysis",
            technologies: ["Analysis", "Documentation", "Training"]
          }
        ]
      }
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">Derek Claude Simmons</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile">
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

          <TabsContent value="profile">
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <p className="text-gray-600 mb-4">{sections.profile.content.summary}</p>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Key Focus Areas:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {sections.profile.content.highlights.map((item, idx) => (
                      <li key={idx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="expertise">
            <div className="space-y-6">
              {sections.expertise.content.areas.map((area, idx) => (
                <div key={idx} className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{area.name}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {area.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <div className="space-y-6">
              {sections.experience.content.positions.map((position, idx) => (
                <div key={idx} className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                  <p className="text-gray-600 mb-4">{position.organization} | {position.period}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {position.achievements.map((achievement, achieveIdx) => (
                      <li key={achieveIdx} className="text-gray-600">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-6">
              {sections.projects.content.projects.map((project, idx) => (
                <div key={idx} className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="px-2 py-1 bg-gray-100 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DigitalCV;