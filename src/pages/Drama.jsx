import React from 'react';
import Drama1 from '../assets/Drama1.png';
import Drama2 from '../assets/Drama2.png';
import Drama3 from '../assets/Drama3.png';

const Drama = () => {
  return (
    <div className="w-full h-auto px-6 py-12 bg-gray-100">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-semibold text-center text-gray-800">Drama</h1>

        <section className="space-y-4">
          <div className="flex justify-center gap-6">
            <img src={Drama1} alt="Drama performance" className="w-1/3 rounded-lg shadow-lg" />
            <img src={Drama2} alt="Drama rehearsal" className="w-1/3 rounded-lg shadow-lg" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Key Information</h2>
          <p className="text-lg text-gray-700">
            The Drama Curriculum at KS4 is exciting, creative, and challenging. It has been designed to help learners develop as performers while encouraging the development of critical thinking skills. The course focuses on imaginative work, creative collaboration, and effective communication, offering a solid foundation for further Drama studies and academic or vocational opportunities. Taught in a purpose-built drama block, students will explore drama and theatre in a variety of ways, gaining practical experience and skills.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Assessment</h2>
          <p className="text-lg text-gray-700">
            The assessment consists of practical performances (both scripted and devised), portfolio-style coursework, and a written examination.
          </p>
          <img src={Drama3} alt="Drama class" className="w-full rounded-lg shadow-lg mt-6" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Subject Information</h2>
          <p className="text-lg text-gray-700">
            The Drama curriculum offers learners a solid foundation in creative, practical, and performance skills. The course encourages students to actively engage in a wide range of stimulating and creative activities, drawing from diverse contexts they can relate to. By focusing on imaginative work, collaboration, and communication, students will have many opportunities to express themselves and explore the world of theatre.
            <br /><br />
            Drama helps students develop skills such as collaboration, analytical thinking, and effective evaluation. Learners will gain the confidence to pursue their own ideas, reflect on their efforts, and refine their performance. The course provides a toolkit of transferable skills that are applicable in further studies and the workplace.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Is this course right for me?</h2>
          <p className="text-lg text-gray-700">
            Do you enjoy:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Working with different people?</li>
            <li>Expressing yourself creatively and excitingly?</li>
            <li>Contributing your ideas and considering others' ideas?</li>
            <li>Physically exploring ideas in rehearsal?</li>
            <li>Playing different roles in various imaginative situations?</li>
            <li>Creating your own drama work?</li>
            <li>Exploring plays written by others?</li>
            <li>Communicating with your peers and teacher?</li>
            <li>Taking risks?</li>
            <li>Performing in front of an audience?</li>
          </ul>

          <p className="text-lg text-gray-700 mt-4">
            Are you:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Willing to perform regularly in class, in front of your peers?</li>
            <li>Committed to performing regularly in compulsory evening performances?</li>
            <li>Reliable and ready to attend extra-curricular rehearsals?</li>
            <li>Prepared to meet written and practical deadlines?</li>
            <li>Open-minded to new ideas and techniques?</li>
            <li>Prepared to always give it a go?</li>
            <li>Someone with excellent attendance?</li>
            <li>Committed to completing homework, revision, and learning lines?</li>
            <li>A team player who collaborates well with others?</li>
            <li>Ready to dedicate time to polish and refine your work?</li>
          </ul>

          <p className="text-lg text-gray-700 mt-4">
            Students choosing GCSE Drama must be enthusiastic, committed, and ready to work collaboratively. They should be comfortable performing in front of a live audience as part of their examination specification and be prepared to commit to rehearsals outside of lessons.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What can this lead to?</h2>
          <p className="text-lg text-gray-700">
            This qualification provides an excellent foundation for further studies in Drama or Performing Arts, including A-level Drama, and/or a career in the Performing Arts. It also opens the door to a wide variety of careers, including:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Teaching</li>
            <li>Customer Services</li>
            <li>Early Years</li>
            <li>Law</li>
            <li>Business</li>
            <li>Media</li>
            <li>Public Relations</li>
            <li>Performing Arts</li>
            <li>Marketing</li>
            <li>Event Planning</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Drama;
