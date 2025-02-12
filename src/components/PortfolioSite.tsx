import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, FileText, Medal, BookOpen, Users, Target } from 'lucide-react';

import Overview from './sections/Overview';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Projects from './sections/Projects';

const PortfolioSite = () => {
  const sections = {
    overview: {
      title: "Overview",
      icon: <Users className="w-6 h-6" />,
      component: <Overview />
    },
    projects: {
      title: "Projects",
      icon: <Target className="w-6 h-6" />,
      component: <Projects />
    },
    experience: {
      title: "Experience",
      icon: <Briefcase className="w-6 h-6" />,
      component: <Experience />
    },
    education: {
      title: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      component: <Education />
    },
    contact: {
      title: "Contact",
      icon: <FileText className="w-6 h-6" />,
      component: <Contact />
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 mb-8">
          {Object.entries(sections).map(([key, section]) => (
            <TabsTrigger key={key} value={key}>
              <div className="flex items-center gap-2">
                {section.icon}
                <span className="hidden md:inline">{section.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(sections).map(([key, section]) => (
          <TabsContent key={key} value={key}>
            {section.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PortfolioSite;