const PDFDocument = require('pdfkit');
const fs = require('fs');

const enrichedFormat = {
  contact: {
    name: "Derek Claude Simmons",
    email: "derek@flinthills.io",
    title: "Transformation Leader & Pattern Recognition Specialist"
  },
  
  summary: "Innovation leader who recognizes and translates patterns across domains - from coaching athletics to leading AI integration, from visual journalism to digital transformation. Proven ability to guide authentic development while maintaining ethical frameworks. Self-funded K-State graduate bringing hands-on experience in media evolution, team development, and community impact.",
  
  experience: [
    {
      title: "Founder & Writer",
      organization: "Standard Correspondence (Substack)",
      period: "2024-Present",
      accomplishments: [
        "Launched publication exploring pattern recognition and authentic development.",
        "Building community around transformation and natural growth principles.",
        "Connecting traditional wisdom with technological advancement."
      ]
    },
    {
      title: "Chief Creative Officer & VP, AI Integration",
      organization: "Star Tribune Media Company",
      period: "2017-2024",
      accomplishments: [
        "Led AI Task Force and ethical framework development.",
        "Directed Ad Standards & Policy, ensuring ethical implementation.",
        "Created pattern recognition systems for content and technology integration.",
        "Guided organizational transformation while protecting core values."
      ]
    },
    {
      title: "Executive Director, New Products & Digital Strategy",
      organization: "Major Media Organization",
      period: "2017-2024",
      accomplishments: [
        "Directed transformation from traditional to digital-first operations.",
        "Achieved unprecedented international success in visual journalism.",
        "Led strategic innovation across multiple business units.",
        "Developed frameworks for sustainable organizational change."
      ]
    }
  ],
  
  additionalExperience: [
    {
      category: "Community Leadership",
      roles: [
        "High School Basketball Coach - Pattern recognition in player development.",
        "Pet Therapy Team Member - Understanding non-verbal communication patterns.",
        "Advisory Board Member - Guiding organizational development."
      ]
    }
  ],
  
  education: {
    degree: "BS, Mass Communications",
    school: "Kansas State University",
    note: "Self-funded education while working full-time."
  },
  
  skills: [
    "Pattern Recognition",
    "AI Ethics & Integration",
    "Digital Transformation",
    "Team Development",
    "Visual Storytelling",
    "Policy & Standards",
    "Change Management",
    "Community Building"
  ]
};

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('Derek_Claude_Simmons_Resume.pdf'));

doc.fontSize(20).text('DEREK CLAUDE SIMMONS', { align: 'center' });
doc.fontSize(12).text('derek@flinthills.io', { align: 'center' });
doc.moveDown();

doc.fontSize(16).text('PROFESSIONAL SUMMARY');
doc.fontSize(12).text(enrichedFormat.summary);
doc.moveDown();

doc.fontSize(16).text('PROFESSIONAL EXPERIENCE');
enrichedFormat.experience.forEach(role => {
  doc.fontSize(14).text(role.title);
  doc.fontSize(12).text(`${role.organization} | ${role.period}`);
  role.accomplishments.forEach(item => {
    doc.text(`• ${item}`);
  });
  doc.moveDown();
});

doc.fontSize(16).text('ADDITIONAL LEADERSHIP');
enrichedFormat.additionalExperience[0].roles.forEach(role => {
  doc.text(`• ${role}`);
});
doc.moveDown();

doc.fontSize(16).text('EDUCATION');
doc.fontSize(12).text(enrichedFormat.education.degree);
doc.text(enrichedFormat.education.school);
doc.text(enrichedFormat.education.note);
doc.moveDown();

doc.fontSize(16).text('SKILLS');
enrichedFormat.skills.forEach(skill => {
  doc.text(`• ${skill}`);
});

doc.end();

console.log("PDF generated: Derek_Claude_Simmons_Resume.pdf");