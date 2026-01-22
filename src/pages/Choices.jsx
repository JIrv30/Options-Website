import React from 'react';
import unifrog from '../assets/unifrog.png'

const Choices = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Making Good Choices</h1>
          <p className="text-lg text-gray-700">
            There are lots of people who can help you with the decisions you need to make.
          </p>
        </header>

        {/* Main Content */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Choosing Your Subjects</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your aim at the end of this process is to have chosen subjects that give a broad and balanced curriculum. Your choices should include subjects that you enjoy and have the potential to do well in. If you have strong career aspirations, you will need to research which subjects facilitate your career choice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you would like some support with selecting the subjects you want to study, you could consult:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Parents/Carers</li>
            <li>Older brothers/sisters or other family members</li>
            <li>Your Tutor</li>
            <li>The Year Office</li>
            <li>A teacher of the subject you are interested in</li>
          </ul>
        </section>

        {/* Questions Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions to Consider</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Questions you could ask about each subject:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>What skills will the subject help me to develop?</li>
            <li>Do I need more information on the course content?</li>
          </ul>
        </section>

        {/* Careers Information */}
        <section className="mb-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Careers Information</h2>
  <div className="bg-white shadow-md rounded-lg p-6">
    <a href="https://www.unifrog.org/sign-in" target="_blank" rel="noopener noreferrer">
      <img
        src={unifrog} 
        alt="Career Guidance"
        className="w-full h-auto rounded-lg mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-90 cursor-pointer"
      />
    </a>
    <p className="text-gray-700 leading-relaxed">
      Unifrog is an excellent website that we subscribe to, full of helpful advice and guidance about careers. To access Unifrog, pupils should <a href="https://www.unifrog.org/sign-in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">log in with their school email address</a> and follow the Reset Password/Resend Welcome Email link. Once logged in, a good starting place is to scroll down to the Personality and Interests Profiles and take the quizzes. The Careers Library has information on many different job roles and the skills required, whilst the Subjects Library has two useful sections when thinking about options: <strong>*In a Nutshell*</strong> lists relevant GCSEs and courses for a particular subject area, whilst <strong>*Geek Out*</strong> has resources to explore the subject further. Pupils can favorite different careers and subjects which will be saved to their profile for future reference.
    </p>
  </div>
</section>




        {/* Guided Choices Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Guided Choices Form
          </h2>
          <p className="text-red-600 font-bold mb-4">
            TO ACCESS THIS FORM, YOU MUST BE SIGNED INTO YOUR SCHOOL GOOGLE ACCOUNT.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            There is no rush to complete your choices. Take your time, do your research, and think carefully. Classes are not assigned on a first-come, first-served basis. All forms submitted by the deadline will be reviewed together.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once complete, make sure you click the <span className="font-bold">Submit</span> button. If you need to change your choice, please talk to your tutor. The deadline is <span className="font-semibold text-blue-600">Monday, 23rd of Febuary</span>.
          </p>
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Embed the Guided Choices Google Form */}
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOZuQMm0WBlAILnR1GutAKsvRBk81juOYp09SWCilwZdXNUw/viewform?embedded=true" width="640" height="2280" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
          <div className="text-center">
            <p className="text-gray-700 mb-4">Having trouble viewing the form? Click the button below</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckQvfKwEfB6YRGESWh9eCLu0JI0KjB5pTgmEdMOySgTL7Yig/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Open the Guided Choices Form
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Choices;