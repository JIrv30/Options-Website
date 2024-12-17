import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Welcome to the Guided Choices Site
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Here you will find links to information on the Guided Choices process, including a timeline, the subject application form, where to find guidance, and an overview of each subject to help you make the right choice.
          </p>
        </header>

        {/* Video Section */}
        <section className="mb-16">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Introduction Video</h2>
  <div className="relative pb-[56.25%] mb-6 bg-black rounded-lg overflow-hidden">
    <iframe
      src="https://www.youtube.com/embed/d_ssJV_XfjQ"
      title="Guided Choices Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    ></iframe>
  </div>
</section>


        {/* Guided Choices Form Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guided Choices Form</h2>
          <p className="text-red-600 font-semibold mb-4">
            TO ACCESS THIS FORM, YOU MUST BE SIGNED INTO YOUR SCHOOL GOOGLE ACCOUNT.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            There is no rush to complete your choices. Take your time, do your research, and think carefully. Classes are not assigned on a first-come, first-served basis. All forms submitted by the deadline will be reviewed together.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once complete, make sure you click the <span className="font-semibold">Submit</span> button. If you need to change your choice, please talk to your tutor. The deadline is <span className="font-semibold text-blue-600">Friday, 24th of January</span>.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            {/* Embed the Guided Choices Google Form */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSckQvfKwEfB6YRGESWh9eCLu0JI0KjB5pTgmEdMOySgTL7Yig/viewform?embedded=true"
              width="100%" // Use percentage for responsiveness
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
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

        {/* Presentation Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Presentation from the Guided Choices Meeting</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Click the button below to watch the Guided Choices presentation. It will open in a new tab.
            </p>
            <a
              href="https://murf.ai/share/ls6430cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              View Presentation
            </a>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-0 overflow-hidden">
            <iframe
              src="https://docs.google.com/presentation/d/1YbMzVEX3KzpL7m9q54Jz3rrLGyKZEG2foYc316bf3hs/preview"
              title="Guided Choices Google Slides"
              className="w-full h-[56.25vw] max-h-[90vh] border-0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
