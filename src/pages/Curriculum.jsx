import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  const subjects = [
    { name: 'Art', url: 'art' },
    { name: 'History', url: 'history' },
    { name: 'Design and Technology', url: 'design-and-technology' },
    { name: 'Food Preparation and Nutrition', url: 'food-preparation-and-nutrition' },
    { name: 'Textiles', url: 'textiles' },
    { name: 'Enterprise and Marketing', url: 'enterprise-and-marketing' },
    {name: 'Computing', url: 'computing'},
    {name: 'Geography', url: 'geography'},
    {name: 'History', url: 'history'},
    {name: 'Classical Civilisation', url: 'Classical-Civilisation'},
    {name: 'MFL', url: 'mfl'},
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Curriculum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.url}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-bold text-gray-800">{subject.name}</h2>
              <Link
                to={`/subjects/${subject.url}`} // Match the URL structure with `subjectMapping`
                className="text-blue-500 hover:text-blue-700 mt-2 inline-block transition duration-200"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
