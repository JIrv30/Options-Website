import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { useParams, Navigate } from 'react-router-dom';
import subjectMapping from './subjectMapping'; // Import your subject-to-component mapping

const SubjectPage = () => {
  const { subjectName } = useParams();

  // Get the subject component from the mapping
  const SubjectComponent = subjectMapping[subjectName.toLowerCase()];

  // If no valid subject is found, redirect to a default page (or show an error)
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

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          {subjectName.toUpperCase()}
        </h1>

        <div className="mb-6">
          <Link
            to="/curriculum"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            &larr; Back to Curriculum
          </Link>
        </div>

        {/* Use Suspense to lazily load the subject component */}
        <Suspense fallback={<div>Loading...</div>}>
          <SubjectComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default SubjectPage;
