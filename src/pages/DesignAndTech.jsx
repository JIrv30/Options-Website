import React from 'react';

import DT1 from '../assets/DT1.png';
import DT2 from '../assets/DT2.jpg';
import DT3 from '../assets/DT3.png';
import DT4 from '../assets/DT4.png';
import DT5 from '../assets/DT5.jpg';
import DT6 from '../assets/DT6.png';

const DesignAndTech = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Design and Technology</h1>
          <h2 className="text-2xl font-semibold text-gray-700">GCSE Design and Technology</h2>
        </div>

        {/* Key Information */}
        <section className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Information</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              GCSE Design and Technology will provide you with an opportunity to develop your knowledge and understanding of how and why the manufactured world around you is made the way it is.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You will learn key practical skills to create outcomes for given design tasks.</li>
              <li>Develop a greater understanding of the physical and working properties of materials, and explore electronic and mechanical systems.</li>
              <li>Research work of designers like Alessi, Heatherwick Studio, Tesla, and Pixar, and use their work to influence your own design thinking.</li>
              <li>Assessment will be through a final written exam and a design and make project, each worth 50%.</li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img src={DT1} alt="Design and Technology Image 1" className="w-full rounded-lg shadow-md" />
          </div>
        </section>

        {/* Assessment Section */}
        <section className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Assessment</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The assessment consists of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>NEA (Non-exam assessment) - 50%</strong>: Submit a design and make project for assessment.</li>
              <li><strong>Core Examination - 50%</strong>: A single examination paper testing knowledge and understanding.</li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img src={DT2} alt="Design and Technology Image 2" className="w-full rounded-lg shadow-md" />
          </div>
        </section>

        {/* Subject Information Section */}
        <section className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subject Information</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The course focuses on the following areas:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Develop practical skills with materials like timber, plastics, metal, paper, and electronic components.</li>
              <li>Learn about commercial processes, career opportunities, and transferable skills like collaboration and communication.</li>
              <li>Gain in-depth knowledge of design principles and apply them to evaluate product sustainability and effectiveness.</li>
              <li>Understand the impact of new technologies, including energy, smart materials, and electronic systems.</li>
            </ul>
          </div>
        </section>

        {/* Is This Course Right For Me? */}
        <section className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Is this course right for me?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              If you enjoy working with a range of materials and have an interest in design principles and creativity, this course is a great fit for you. A good understanding of mathematics is also required for both the NEA and the exam.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img src={DT3} alt="Design and Technology Image 3" className="w-full rounded-lg shadow-md" />
          </div>
        </section>

        {/* What Can This Lead To? */}
        <section className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What can this lead to?</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This course can lead to further study at A Level or in design technology or engineering. Career paths include engineering, architecture, furniture construction, and product design.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img src={DT4} alt="Design and Technology Image 4" className="w-full rounded-lg shadow-md" />
            <img src={DT5} alt="Design and Technology Image 5" className="w-full mt-4 rounded-lg shadow-md" />
            <img src={DT6} alt="Design and Technology Image 6" className="w-full mt-4 rounded-lg shadow-md" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignAndTech;
