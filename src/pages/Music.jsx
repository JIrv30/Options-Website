import React from 'react';
import Music1 from '../assets/Music1.png';  
import Music2 from '../assets/Music2.jpeg';
import Music3 from '../assets/Music3.jpg'
import Music4 from '../assets/Music4.jpg'

const Music = () => {
  return (
    <div className="w-full h-auto px-6 py-12 bg-gray-100">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold text-center text-gray-800">GCSE MUSIC</h1>

        {/* Key Information Section */}
        <section className="space-y-4 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Key Information</h2>
            <p className="text-lg text-gray-700">
              Pupils who follow this course will have enthusiasm for and enjoy music. It is an exciting and practical course that develops the skills taught in Years 7 to 9 and suits pupils with experience of musical performance as well as those who sing.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Music1} alt="Music Image 1" className="w-full h-auto" />
          </div>
        </section>

        {/* Assessment Section */}
        <section className="space-y-4 flex flex-col md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <img src={Music2} alt="Music Image 2" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Assessment</h2>
            <p className="text-lg text-gray-700">
              The course is made up of three components: Performing, Composing, and Understanding music. Pupils' assignments in the Performing and Composing components comprise 60% of their final grade and the last is assessed through an examination at the end of the course.
            </p>
          </div>
        </section>

        {/* Subject Information Section */}
        <section className="space-y-4 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Subject Information</h2>
            <p className="text-lg text-gray-700">
              <strong>Performing (30%)</strong><br />
              Performing is made up of two types of performance: one solo and one performing with at least one other musician, lasting a combined total of 4 minutes. Pupils have the freedom to choose the style of music they wish to perform, although they can receive advice on repertoire.
              <br /><br />
              <strong>Composing (30%)</strong><br />
              Pupils will, by the end of the course, have created their own musical works, submitting one free composition and one composition to a chosen set brief. The compositions may be in any style and for any instrument(s) chosen by the candidate and will evidence the skills and techniques studied throughout the course.
              <br /><br />
              <strong>Understanding Music - Examination (40%)</strong><br />
              The 1 hour 30-minute examination contains two sections. In the first section, pupils must answer a range of questions based on recorded excerpts of music from a wide range of styles and genres within four Areas of Study:
              <ul className="list-disc pl-6 text-lg text-gray-700">
                <li>Western Classical Tradition 1650-1910</li>
                <li>Popular Music</li>
                <li>Traditional Music</li>
                <li>Western Classical Tradition since 1910</li>
              </ul>
              In the second section of the exam, pupils will answer questions based on a series of set works that will be studied during the course.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Music3} alt="Music Image 1" className="w-full h-auto" />
          </div>
        </section>

        {/* Is This Course Right for Me Section */}
        <section className="space-y-4 flex flex-col md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Is this course right for me?</h2>
            <p className="text-lg text-gray-700">All skills are taught during the course, but a love of music is important.</p>
            <p className="text-lg text-gray-700">
              <strong>Do I need to be able to play an instrument?</strong> The ability to perform on an instrument (or sing) is essential for this course. You will be expected to practice your pieces in addition to your set home learning. There is no minimum standard required to start this course.
              <br />
              <strong>Do I need to have instrumental lessons?</strong> You do not have to receive instrumental lessons to take the course, but it is often helpful to have these to improve your technique.
              <br />
              <strong>Do I have to be able to read music?</strong> No, but a willingness to learn basic music notation will help.
              <br />
              <strong>I am worried my composing is not good enough.</strong> This is not a problem, as you will be taught how to compose and will be supported throughout the course.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={Music4} alt="Music Image 2" className="w-full h-auto" />
          </div>
        </section>

        {/* What Can This Lead To Section */}
        <section className="space-y-4 flex flex-col-reverse md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">What can this lead to?</h2>
            <p className="text-lg text-gray-700">
              Music graduates have a wide range of career options available to them both inside and outside the industry, including performer, teacher, administrator, songwriter, conductor, composer, recording engineer, manager, promoter, or music publisher. The range of roles can seem quite endless!
              <br /><br />
              There are also more jobs than ever in music business-related areas, such as careers in digital marketing, social media, PR, technology, label services, ticketing, and merchandising. It is also common to find music graduates in consultancy, finance, banking, music therapy, and legal jobs.
            </p>
          </div>
        </section>

        {/* Links Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Links</h2>
          <p className="text-lg text-gray-700">
            <a href="https://www.eduqas.co.uk/qualifications/music-gcse/#tab_keydocuments" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GCSE Music Specification
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Music;
