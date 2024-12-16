import React from 'react';
import Textiles1 from '../assets/Textiles1.png';
import Textiles2 from '../assets/Textiles2.png';
import Textiles3 from '../assets/Textiles3.png';
import Textiles4 from '../assets/Textiles4.png';

const Textiles = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            GCSE Textile Design
          </h1>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <img src={Textiles1} alt="Textiles Design 1" className="rounded-lg shadow-md w-full" />
          <img src={Textiles2} alt="Textiles Design 2" className="rounded-lg shadow-md w-full" />
          <img src={Textiles3} alt="Textiles Design 3" className="rounded-lg shadow-md w-full" />
          <img src={Textiles4} alt="Textiles Design 4" className="rounded-lg shadow-md w-full" />
        </div>

        {/* Subject Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subject Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Coursework takes the form of 2 projects meeting 4 Assessment Objectives. Assessment covers four key areas:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Artist Research</li>
            <li>Development of Ideas</li>
            <li>Recording Images (Drawing and Photography)</li>
            <li>Final Outcome</li>
          </ul>
        </section>

        {/* Is This Course Right For Me? */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Is this course right for me?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Pupils should have a keen interest in the visual world and have a passion for textiles, fashion, interiors, designing, and making.
            Some experience of needlework and/or working with and manipulating fabrics would be beneficial, but these can be developed during the course.
          </p>
        </section>

        {/* What Can This Lead To? */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What can this lead to?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This course can lead to an A Level/BTEC in art, design, or textiles, which may then lead onto a degree in textile design, fashion, or interior design.
            There are many careers that make use of textiles. These include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Clothing/Textile Technologist</li>
            <li>Interior and Spatial Designer</li>
            <li>Fashion or Textile Designer</li>
            <li>Buying/Marketing for the Textile Fashion World</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Textiles;
