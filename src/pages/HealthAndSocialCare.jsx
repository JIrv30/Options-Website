import React from 'react';

const HealthAndSocialCare = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Health and Social Care
        </h1>

        {/* Topics of Study */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Topics of Study</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Understanding Personal Development and Relationships</li>
            <li>Exploring Health, Social Care and Early Years Provision</li>
            <li>Promoting Health and Wellbeing</li>
            <li>Health, Social Care and Early Years in Practice</li>
          </ol>
        </section>

        {/* Why Choose Health and Social Care */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Health and Social Care?</h2>
          <p className="text-gray-700 leading-relaxed">
            A strong desire to care for other people and the drive to make a real difference to their lives are 
            both vital if you would like a career in the social care and health industry. If you have lots of 
            patience, the ability to communicate, and a friendly nature, you will thrive in this industry, which 
            offers a surprisingly wide range of careers from nurses and speech therapists to midwives and mental 
            health workers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our GCSE course will put you on the road to a great future; we have developed our qualification in 
            partnership with industry professionals to ensure the knowledge you gain is not only relevant and 
            current but will set you apart in the workplace. If you care about others and want a career in a 
            sector that is the UK’s largest employer, this area is for you. Adult social care employs around 
            1.5 million people, and the NHS is the world’s fifth-largest employer. With people living longer, 
            there will be more jobs for health and care workers in the future.
          </p>
        </section>

        {/* Skills Developed */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Skills Do You Develop?</h2>
          <ol className="list-disc list-inside space-y-2 text-gray-700">
            <li>Communicating effectively with individuals or groups. Communication is at the heart of health and social care and is taught or applied in all units.</li>
            <li>Researching topic areas and recording research sources, then using them to interpret findings and present evidence.</li>
            <li>Planning creative activities or health promotion campaigns, involving managing time and identifying aims, purpose, resources, and methods.</li>
            <li>Creating, presenting, or delivering information to a group or an individual.</li>
          </ol>
        </section>

        {/* Expectations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Can You Expect?</h2>
          <p className="text-gray-700 leading-relaxed">
            This GCSE is 60% coursework – this means LOTS of writing in lesson time and at home! Your first course 
            needs to be at least 7 pages typed in font size 12! This is excellent for students who feel anxiety 
            around exams – you will know that 60% of your GCSE has been passed before you walk into the exam. But 
            you need to be comfortable with writing (Typing! All courses are completed on a Chromebook).
          </p>
        </section>

        {/* Future Careers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Possible Future Careers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Studying this can lead to some exciting career options, including:
          </p>
          <ol className="list-disc list-inside space-y-2 text-gray-700">
            <li>Medicine – doctor, nurse, paramedic</li>
            <li>Social care – care worker, social worker</li>
            <li>Childcare – nurseries, schools</li>
          </ol>
        </section>

        {/* Assessment */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assessment</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>R032 – Principles of health and social care setting – Exam at the end of Y11 = 40% of GCSE</li>
            <li>R033 – Support individuals through life events – Coursework at the start of Y10 = 30% of GCSE</li>
            <li>R035 – Design a health promotion campaign – Coursework at the end of Y10 = 30% of GCSE</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default HealthAndSocialCare;
