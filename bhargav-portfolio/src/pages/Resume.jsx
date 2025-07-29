import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">My Resume</h1>
      
      <div className="flex justify-center">
        <iframe
          src="/TBhargavraju_Resume.pdf"
          title="Resume"
          width="100%"
          height="800px"
          className="border-2 border-gray-300 rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Resume;
