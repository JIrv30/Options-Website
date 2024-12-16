import React from 'react';
import Film1 from '../assets/Film1.png';
import Film2 from '../assets/Film2.png';
import Film3 from '../assets/Film3.png';
import Film4 from '../assets/Film4.png';
import Film5 from '../assets/Film5.png';
import Film6 from '../assets/Film6.png';
import Film7 from '../assets/Film7.png';

const FilmStudies = () => {
  return (
    <div className="w-full h-auto px-6 py-12 bg-gray-100">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold text-center text-gray-800">Film Studies</h1>

        {/* Key Information Section */}
        <section className="space-y-4 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Key Information</h2>
            <p className="text-lg text-gray-700">
              The Film Studies Curriculum at KS4 is exciting, interesting, and challenging. It has been designed to help learners develop as a film critic, developing their understanding of film terminology and how to apply them when ‘reading’ a film. It also encourages the ability to develop critical thinking skills and become effective and independent learners. This intensive course involves demonstrating knowledge and expertise through a mixture of written papers and portfolio assignments. The Film Studies course involves an extensive amount of independent written work.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Film1} alt="Film Studies Image 1" className="w-full h-auto" />
          </div>
        </section>

        {/* Assessment Section */}
        <section className="space-y-4 flex flex-col md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <img src={Film2} alt="Film Studies Image 2" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Assessment</h2>
            <p className="text-lg text-gray-700">
              Following the Eduqas specification, learners will be assessed through the following:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li><strong>External Assessment (70%):</strong> Two written papers exploring the 6 set films and demonstrating your understanding of film history, representation, aesthetics, and the key elements of film form (e.g., cinematography).</li>
              <li><strong>Production (30%):</strong> Film production – creation of a screenplay, shooting script, and evaluative analysis based on an original idea for a film you have created.</li>
            </ul>
          </div>
        </section>

        {/* Subject Information Section */}
        <section className="space-y-4 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Subject Information</h2>
            <p className="text-lg text-gray-700">
              The course engages learners and actively explores a wide range of films from both inside and outside of Hollywood, expanding learners' cultural capital and developing their understanding of film technology, terminology, and analysis.
              <br /><br />
              Learners will learn to ‘read’ films, think analytically, and evaluate effectively. They will gain the confidence to pursue their own ideas, reflect on their opinions, and refine their written work. Whatever the future holds for those opting to study it, they will emerge with a toolkit of transferable skills, applicable in both further studies and the workplace.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Film3} alt="Film Studies Image 3" className="w-full h-auto" />
          </div>
        </section>

        {/* Is This Course Right For Me Section */}
        <section className="space-y-4 flex flex-col md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Is this course right for me?</h2>
            <p className="text-lg text-gray-700">Do you enjoy:</p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Analysing different parts of a film and discussing what they could mean?</li>
              <li>Working in a group and independently?</li>
              <li>Expressing yourself in a creative and exciting way?</li>
              <li>Contributing your ideas and taking onboard those of others?</li>
              <li>Creating your own scripts/storyboards for films?</li>
              <li>Coming up with your own pitch for a new film?</li>
              <li>Researching the film industry?</li>
              <li>Exploring the history of film?</li>
              <li>Learning about different filming techniques?</li>
              <li>Writing – there will be lots of it!</li>
            </ul>
            <p className="text-lg text-gray-700">Can you:</p>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Be focused, committed, and reliable?</li>
              <li>Work as part of a team?</li>
              <li>Work in a professional way?</li>
              <li>Think in a creative way?</li>
              <li>Have excellent attendance?</li>
              <li>Commit time after school for improving and refining your work?</li>
              <li>Meet written and practical deadlines?</li>
              <li>Write at length about an area of film?</li>
            </ul>
            <p className="text-lg text-gray-700">
              Those deciding to do GCSE Film Studies will need to have a love of film and enjoy watching films in depth. It is expected that they will watch both blockbuster films and those from outside of Hollywood, such as Independent and Non-English language (subtitled) films. Learners should enjoy writing about films and understand they will learn how to analyse key sequences in depth through the written word.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Film4} alt="Film Studies Image 4" className="w-full h-auto" />
          </div>
        </section>

        {/* What Can This Lead To Section */}
        <section className="space-y-4 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">What can this lead to?</h2>
            <p className="text-lg text-gray-700">
              This qualification gives learners the perfect foundation for further studies in Film or Media, including A-level Film and/or Media, and/or a career in Film and/or Media. It also prepares learners for a wide variety of other careers including Teaching, Gaming, Film, and Television Industry.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Film5} alt="Film Studies Image 5" className="w-full h-auto" />
          </div>
        </section>

        {/* Key Links Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Key Links</h2>
          <p className="text-lg text-gray-700">
            <a href="https://www.eduqas.co.uk/media/sjyhrqeu/eduqas-gcse-film-studies-spec-from-2017-e.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Eduqas GCSE Film Studies Specification
            </a>
          </p>
        </section>

        {/* Final Images Section */}
        <section className="space-y-4 flex flex-wrap justify-center gap-6">
          <img src={Film6} alt="Film Studies Image 6" className="w-1/3 h-auto" />
          <img src={Film7} alt="Film Studies Image 7" className="w-1/3 h-auto" />
        </section>
      </div>
    </div>
  );
};

export default FilmStudies;
