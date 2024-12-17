import React from 'react';

const PE = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800">
      <h1 className="text-4xl font-semibold text-center mb-8">Physical Education</h1>

      {/* Introduction Section */}
      <section className="space-y-6">
        <p className="text-lg">
          If you choose to study examination PE, there are two routes that you can take. Your PE teachers will help you decide which option is best for you between the GCSE course and the Vocational course. 
          Please also look at the Sports Studies page for the vocational course.
        </p>
      </section>

      {/* Key Information Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Information</h2>
        <p className="text-lg">
          Physical education will equip learners with the knowledge, understanding, skills, and values to develop and maintain their performance in physical activities and understand the benefits to health, fitness, and well-being.
        </p>
      </section>

      {/* Assessment Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Assessment</h2>
        <p className="text-lg">
          <strong>Practical Performance in 3 different sports:</strong> 30% (10% per sport)
          <br />
          <strong>14 hr controlled assessment:</strong> 10%
          <br />
          <strong>Examination in theory content:</strong> 60% (x2 papers worth 30% each)
        </p>
      </section>

      {/* Subject Information Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Subject Information</h2>
        <p className="text-lg">
          Pupils studying this course will:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Develop theoretical knowledge and understanding of the factors that underpin physical activity and sport and use this knowledge to improve performance</li>
          <li>Understand how the physiological and psychological state affects performance in physical activity and sport</li>
          <li>Perform effectively in different physical activities by developing skills and techniques and selecting and using tactics, strategies, and/or compositional ideas</li>
          <li>Develop their ability to analyse and evaluate to improve performance in physical activity and sport</li>
          <li>Understand the contribution which physical activity and sport make to health, fitness, and well-being</li>
          <li>Understand key socio-cultural influences which can affect people’s involvement in physical activity and sport</li>
        </ul>
        <p className="text-lg">
          All pupils who opt for this course have an additional five hours of Physical Education per week. The practical element makes up 30% of the final mark and requires the pupils to demonstrate practical capabilities in three sports (2 individual and 1 team or vice-versa) from an approved list.
          <br />
          It is essential that anyone who chooses this course participates regularly in at least one activity (preferably two or three) out of school.
        </p>
        <p className="text-lg">
          The theoretical component is worth 60% of the final mark. Pupils sit two external examinations based on their subject knowledge and understanding of the following topics:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li><strong>Paper 1:</strong> Applied anatomy and physiology, Physical training</li>
          <li><strong>Paper 2:</strong> Socio-cultural influences, Sports Psychology, Health, fitness, and well-being</li>
        </ul>
      </section>

      {/* Is This Course Right For Me Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Is This Course Right For Me?</h2>
        <p className="text-lg">
          The GCSE course should be considered by those pupils seeking to study Physical Education at A-level and/or those pupils who wish to study a more sports science approach to physical education. The nature of the course and practical assessment requires pupils to be participating in sporting activity to a good standard on a regular basis, and preferably be competing in sport outside of school hours.
        </p>
      </section>

      {/* What Can This Lead To Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What Can This Lead To?</h2>
        <p className="text-lg">
          A-Level PE / Level 3 Awards in Sport (Btec) / Sports Degrees such as BSc in Sports Science / Physiotherapy
          <br />
          There are a large number of careers that involve the use of Physical Education and an interest in Health, Fitness, and Sport. Some examples are:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Sports Coaching</li>
          <li>Sports Development</li>
          <li>Sports Scientist</li>
          <li>Biomechanist</li>
          <li>Sports Psychologist</li>
          <li>Physiotherapist</li>
          <li>Physical Instructor</li>
          <li>Health and Wellbeing Coach</li>
          <li>Leisure Centre Management</li>
        </ul>
      </section>

      {/* Links Section */}
      <section>
        <h2 className="text-2xl font-semibold">Links</h2>
        <p className="text-lg">
          <a href="http://www.ocr.org.uk/qualifications/gcse-physical-education-j587-from-2..." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GCSE Physical Education Specification
          </a>
        </p>
      </section>

      {/* Embed Google Slides Presentation */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">PE Course Presentation</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSvNmWqoTkY0OKWveZX-5drlyPSkkxKmyOKp8yNoJAFc3KnxNqJexRNSN-m6DFKlq6y-9c1mvvv3qwm/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
            allowFullScreen="true"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default PE;
