import React from 'react';

const Experience = () => {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="font-semibold">Executive Director, Digital Strategy & Growth</h3>
        <div className="text-gray-600">Star Tribune Media • 2023-2024</div>
        <ul className="mt-2 text-gray-700 space-y-1">
          <li>• Led enterprise-wide digital transformation initiatives</li>
          <li>• Established AI Task Force, developing strategic partnerships</li>
          <li>• Created revenue frameworks through digital innovation</li>
        </ul>
      </div>

      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="font-semibold">Chief Creative Officer, Vice President</h3>
        <div className="text-gray-600">Star Tribune Media • 2017-2023</div>
        <ul className="mt-2 text-gray-700 space-y-1">
          <li>• Drove digital subscription growth to 100,000+</li>
          <li>• Pioneered "franchise" model for content monetization</li>
          <li>• Built and led high-performing teams through change</li>
        </ul>
      </div>

      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="font-semibold">Deputy Design Director</h3>
        <div className="text-gray-600">Los Angeles Times • 2007-2013</div>
        <ul className="mt-2 text-gray-700 space-y-1">
          <li>• Led design innovation across editorial platforms</li>
          <li>• Managed key strategic partnerships</li>
          <li>• Contributed to multiple Pulitzer Prize-winning projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;