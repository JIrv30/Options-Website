import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">The Year 10/11 Curriculum</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            All learners study a core curriculum as well as choosing three additional subjects. Below is an overview of the options available.
          </p>
        </header>

        {/* Core Curriculum */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Curriculum</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>English</li>
            <li>Mathematics</li>
            <li>Science: Combined or Separate</li>
            <li>PSHE (non-examined)</li>
            <li>RE (non-examined)</li>
            <li>Core PE (non-examined)</li>
          </ul>
        </section>

        {/* Subject Options */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subject Options</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to the core curriculum, learners select three further subjects from the following categories:
          </p>

          <SubjectCategory
            title="Art and Technology"
            note="You can only select one from Art or Textiles. You cannot select both."
            subjects={['Art', 'Design and Technology', 'Food Preparation and Nutrition', 'Textiles']}
          />

          <SubjectCategory
            title="Business and Computing"
            subjects={['CNAT - Enterprise & Marketing (Vocational)', 'GCSE Computer Science']}
          />

          <SubjectCategory
            title="Humanities"
            subjects={['Geography', 'History', 'Classical Civilization', 'Religious Studies']}
          />

          <SubjectCategory
            title="Languages"
            note="You must have studied the language previously."
            subjects={['French', 'Spanish']}
          />

          <SubjectCategory
            title="Performing Arts"
            subjects={['Drama', 'Dance', 'Film Studies', 'Music']}
          />

          <SubjectCategory
            title="Sports"
            note="You can only select one of the two options below."
            subjects={['Physical Education', 'BTEC Award in Sport']}
          />
        </section>
      </div>
    </div>
  );
};

// Reusable Component for Each Subject Category
const SubjectCategory = ({ title, note, subjects }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
    {note && <p className="text-sm text-red-600 mb-2">{note}</p>}
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {subjects.map((subject) => (
        <li key={subject}>
          <Link
            to={`/subjects/${subject.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            {subject}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Curriculum;
