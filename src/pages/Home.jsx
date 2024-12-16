import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to the Guided Choices Site
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Here you will find links to information on the Guided Choices process, including a timeline, the subject application form, where to find guidance, and an overview of each subject to help you make the right choice.
          </p>
        </header>

        {/* Video Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction Video
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/d_ssJV_XfjQ"
              title="Guided Choices Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* Guided Choices Form Section */}
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
            Once complete, make sure you click the <span className="font-bold">Submit</span> button. If you need to change your choice, please talk to your tutor. The deadline is <span className="font-semibold text-blue-600">Monday, 26th February</span>.
          </p>
          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Embed the Guided Choices Google Form */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfNj42XXX/formResponse"
              title="Guided Choices Form"
              className="w-full h-96 border-0 rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Presentation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Presentation from the Guided Choices Meeting
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guided Choices Presentation</h2>
  <p className="text-gray-700 mb-4">
    Click the button below to access the Guided Choices presentation. It will open in a new tab.
  </p>
  <a
    href="https://murf.ai/share/ls6430cv"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
  >
    View Presentation
  </a>
</div>
          <div className="bg-white shadow-md rounded-lg p-0 overflow-hidden">
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
