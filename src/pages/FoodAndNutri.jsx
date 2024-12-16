import React from 'react';
import Food1 from '../assets/Food1.png';
import Food2 from '../assets/Food2.jpg';
import Food3 from '../assets/Food3.png';

const FoodAndNutri = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-600 mb-2">Food Preparation and Nutrition</h1>
        </div>

        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The WJEC Eduqas GCSE in Food Preparation and Nutrition equips learners with the knowledge, understanding, and skills required to cook and apply the principles of food science, nutrition, and healthy eating.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This course encourages learners to cook, make informed decisions about food and nutrition, and acquire knowledge to feed themselves and others affordably and nutritiously. The course balances practical and theoretical knowledge, promoting flexibility in delivery.
            </p>
          </div>
          <div className="md:w-2/3 mt-6 md:mt-0">
  <img 
    src={Food1} 
    alt="Food Preparation" 
    className="w-full max-w-2xl rounded-lg shadow-md" 
  />
</div>

        </section>

        {/* Key Information Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This course is aimed at pupils interested in food and cookery, especially in the context of cooking for health. It provides opportunities to explore the food and cookery sector, blending theoretical and practical activities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Activities include peeling apples in Year 7 to preparing high-skill dishes in Year 11 practical exams, such as fish cakes, sausage lattice pies, and lemon meringue pie. These hands-on tasks allow pupils to develop their appreciation of catering and prepare for potential careers in the industry.
          </p>
          <img src={Food2} alt="Food Preparation Example" className="w-full rounded-lg shadow-md mt-4" />
        </section>

        {/* Assessment Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assessment</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The assessment structure is as follows:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>NEA 1 (Non-exam assessment):</strong> Two cooking science experiments with a written report (~2000 words). This evaluates the learner's understanding of scientific principles underlying food preparation and cooking (15%).
            </li>
            <li>
              <strong>NEA 2:</strong> Cook three high-skill dishes in a three-hour exam and write a detailed report (~5000 words). This assesses planning, preparation, cooking, and presentation skills (35%).
            </li>
            <li>
              <strong>Written Examination:</strong> A 1 hour 45-minute exam assessing theoretical knowledge (50%).
            </li>
          </ul>
        </section>

        {/* Subject Information Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subject Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This course teaches learners how to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Prepare themselves and the environment for cooking.</li>
            <li>Understand food's functions in the body and recipes.</li>
            <li>Modify recipes for balanced diets.</li>
            <li>Plan and produce dishes for specific purposes.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Learners will also gain essential workplace skills, including planning, research, communication, problem-solving, and health and safety knowledge.
          </p>
        </section>

        {/* Is This Course Right For Me Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Is this course right for me?</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you want to explore nutrition, foods from different cultures, and develop your cookery skills, this course is perfect for you.
          </p>
          <img src={Food3} alt="Food Skills" className="w-full rounded-lg shadow-md mt-4" />
        </section>

        {/* Career Path Section */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">What can this lead to?</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This course can lead to further study at Level 3, apprenticeships, or careers in the catering industry. Many students also take this course to learn how to cook for themselves, family, and friends. Who knows, you might even become a celebrity chef!
          </p>
        </section>

        {/* Link Section */}
        <section>
          <p className="text-lg text-blue-600 hover:underline">
            <a href="https://www.eduqas.co.uk/qualifications/food-preparation-and-nutrition-gcse/#tab_overview" target="_blank" rel="noopener noreferrer">
              Click here for more information about this course.
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default FoodAndNutri;
