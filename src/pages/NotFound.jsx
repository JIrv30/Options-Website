import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
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
};

export default NotFound;
a