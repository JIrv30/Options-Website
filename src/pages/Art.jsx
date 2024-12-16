import React from 'react';
import { Link } from 'react-router-dom';
import Art1 from '../assets/Art1.jpg';
import Art2 from '../assets/Art2.jpg';

const Art = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Curriculum Link */}
        

        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Art</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            There are two GCSE courses available within AQA GCSE Art & Design. 
            Please see below to read about the Art courses offered at each site.
          </p>
        </header>

        {/* Course Options */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Courses</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>
              GCSE Art, Craft & Design
            </li>
            <li>
              <Link
                to="/subjects/textiles"
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                GCSE Textile Design
              </Link>
            </li>
          </ol>
        </section>

        {/* Art, Craft & Design Course */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">GCSE Art, Craft & Design</h2>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img
              src={Art1}
              alt="Art example 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src={Art2}
              alt="Art example 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Course Description */}
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>
              The GCSE Art, Craft & Design course allows pupils to build on their strengths and develop their own interests and skills using a wide range of media. 
              This includes great opportunities for mixed media working, such as photography, printmaking, stenciling, and continuous development in drawing and painting.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Assessment</h3>
            <p>
              Assessment covers four key areas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Artist Research</li>
              <li>Development of Ideas</li>
              <li>Recording Images (Drawing and Annotation)</li>
              <li>Final Outcome</li>
            </ul>
            <p>
              Pupils' work is assessed through a combination of an externally set task (40%) and a portfolio (60%). 
              All work is internally assessed and externally moderated by the exam board.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Subject Information</h3>
            <p>
              All pupils who study Art will experience a variety of media, processes, and techniques. 
              This includes studying at least two areas such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fine Art</li>
              <li>Graphic Communication</li>
              <li>Textile Design</li>
              <li>Three-Dimensional Design</li>
              <li>Photography</li>
            </ul>
            <p>
              Students explore ideas and materials creatively to develop their knowledge and skills. 
              They work on at least two themes/starting points within their 60% portfolio.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Is This Course Right for Me?</h3>
            <p>
              Pupils with a keen interest in the visual arts and a passion for creating their own images and art objects will enjoy this course. 
              Students are encouraged to combine media in innovative ways, reflecting the contemporary art world and multimedia environments.
            </p>
            <p>
              Underpinning all studies is an expectation for drawing and annotation to record ideas.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Future Opportunities</h3>
            <p>
              This course can lead to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A-Level Art and Design courses</li>
              <li>Vocational Art and Design courses at college</li>
              <li>Art and Design degree courses at university</li>
              <li>
                Careers in creative industries such as Fashion, Design, Architecture, Interior Design, Film and TV, Fine Art, Illustration, 
                Teaching, Conservation, Games Design, and Set Design
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Art;
