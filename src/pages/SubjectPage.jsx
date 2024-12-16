import React, { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import subjectMapping from './subjectMapping'; // Import the updated subjectMapping

const SubjectPage = () => {
  const { subjectName } = useParams();

  // Normalize the subject name from the URL to match the keys in `subjectMapping`
  const normalizedSubjectName = subjectName.toLowerCase().replace(/\s+/g, '-');
  const SubjectComponent = subjectMapping[normalizedSubjectName];

  // Handle invalid subject names
  if (!SubjectComponent) {
    return (
      <div className="bg-gray-50 min-h-screen py-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-red-600 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Sorry, we couldn't find the subject you're looking for.
          </p>
          <Link
            to="/curriculum"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Back to Curriculum
          </Link>
        </div>
      </div>
    );
  }

  // Render the valid subject page
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          {normalizedSubjectName.replace(/-/g, ' ').toUpperCase()}
        </h1>

        <div className="mb-6">
          <Link
            to="/curriculum"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            &larr; Back to Curriculum
          </Link>
        </div>

        {/* Use Suspense to handle lazy-loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <SubjectComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default SubjectPage;
