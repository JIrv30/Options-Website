import React from 'react';

const Computing = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 rounded-lg max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-center text-blue-600">Computing</h1>
      
      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Key Information</h2>
        <p className="text-lg leading-relaxed">
          GCSE Computer Science is engaging and practical, encouraging creativity and problem solving. It encourages pupils
          to develop their understanding and application of the core concepts in computer science. Pupils also analyse problems
          in computational terms and devise creative solutions by designing, writing, testing and evaluating programs. Studying
          computer science will provide you with valuable knowledge and a wide skill set to prepare you for a career directly
          within computer science and wider roles using the computational thinking skills required to be successful within the subject.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Assessment</h2>
        <p className="text-lg leading-relaxed">
          This course is currently assessed by two paper based terminal exams (taken in Year 11) both weighted at 50%. One
          paper tests the Principles of Computer Science with topics such as hardware, software, binary, and computer networks.
          The other tests the Application of Computational Thinking with topics that include algorithm design, trace tables,
          logic gates, and programming. This is also combined with a practical programming project.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Subject Information</h2>
        <p className="text-lg leading-relaxed">
          The course will develop critical thinking, analysis and problem-solving skills through the study of computer programming.
          For many pupils, it will be a fun and interesting way to develop these skills, which can be transferred to other subjects
          and even applied in day-to-day life.
        </p>
        <p className="text-lg leading-relaxed">
          Pupils taking GCSE Computer Science will:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Develop knowledge and understanding of the fundamental principles and concepts of computer science</li>
          <li>Develop and apply computational thinking skills to analyse problems and design solutions across a range of contexts</li>
          <li>Gain practical experience of designing, writing, and testing computer programs that accomplish specific goals</li>
          <li>Develop the ability to reason, explain and evaluate computing solutions</li>
          <li>Develop awareness of current and emerging trends in computing technologies</li>
          <li>Develop awareness of the impact of computing on individuals, society and the environment, including ethical, legal and ownership issues</li>
          <li>Communicate computer science concepts and explain computational solutions clearly and concisely using appropriate terminology</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">Is this course right for me?</h2>
        <p className="text-lg leading-relaxed">
          If you enjoy problem solving, and have a desire to complete challenging tasks without giving up.
        </p>
        <p className="text-lg leading-relaxed">
          If you are prepared to work hard and complete extra work outside of lessons.
        </p>
        <p className="text-lg leading-relaxed">
          If you enjoy, or are thinking of a career in a STEM subject. A natural progression would be to take A-Level Computer Science.
        </p>
        <p className="text-lg leading-relaxed">
          The course contains some advanced mathematical concepts. Pupils need to have a strong understanding of Maths (predicted
          grade 5 or higher) to be successful within this subject.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">What can this lead to?</h2>
        <p className="text-lg leading-relaxed">
          Computer science can lead to many technical careers such as software development, technical support or games design,
          but it also facilitates and supports many more different careers, as computer science gives pupils the skill sets required
          to be resilient and self-evaluative, meaning pupils are well placed for the world of work in careers that we cannot even
          imagine in an ever-changing world.
        </p>
      </section>
    </div>
  );
};

export default Computing;
