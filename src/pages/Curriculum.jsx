import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  // Define the subjects in groups
  const subjectGroups = [
    {
      name: 'EBAC Subjects',
      subjects: [
        { name: 'Geography', url: 'geography' },
        { name: 'History', url: 'history' },
        { name: 'Classical Civilisation', url: 'Classical-Civilisation' },
        { name: 'MFL', url: 'mfl' },
        { name: 'Computing', url: 'computing' },
      ],
    },
    {
      name: 'Arts',
      subjects: [
        { name: 'Art', url: 'art' },
        { name: 'Textiles', url: 'textiles' },
      ],
    },
    {
      name: 'Performing Arts',
      subjects: [
        { name: 'Dance', url: 'dance' },
        { name: 'Drama', url: 'drama' },
        { name: 'Music', url: 'music' },
        { name: 'Film Studies', url: 'film-studies' },
      ],
    },
    {
      name: 'Sports',
      subjects: [
        { name: 'PE', url: 'pe' },
        { name: 'Sports Studies', url: 'sports-studies' },
      ],
    },
    {
      name: 'Technology',
      subjects: [
        { name: 'Food Preparation and Nutrition', url: 'food-preparation-and-nutrition' },
        { name: 'Design and Technology', url: 'design-and-technology' },
        { name: 'Enterprise and Marketing', url: 'enterprise-and-marketing' },
      ],
    },
    
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Curriculum</h1>

        {/* Loop through each subject group */}
        {subjectGroups.map((group) => (
          <div key={group.name} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{group.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Loop through each subject in the group */}
              {group.subjects.map((subject) => (
                <div
                  key={subject.url}
                  className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
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
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
