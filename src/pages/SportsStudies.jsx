import React from 'react';

const SportsStudies = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white text-gray-800">
      {/* Main Title */}
      <h1 className="text-4xl font-semibold text-center mb-8">Sport Studies</h1>

      {/* Introduction Section */}
      <section className="space-y-6">
        <p className="text-lg">
          If you choose to study examination PE, there are two routes that you can take. Your PE teachers will help you decide which option is best for you between the GCSE course and Sports Studies.
          Please also look at the Physical Education page for the GCSE course.
        </p>
      </section>

      {/* Course Title */}
      <h1 className="text-3xl font-semibold text-center mb-8">NCFE Level 1 / 2 Technical Award in Sports Studies</h1>

      {/* Key Information Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Information</h2>
        <p className="text-lg">
          Students will be studying the NCFE Level 1 / 2 Technical Award in Sports Studies. This qualification will appeal to learners who wish to pursue a career in the sports industry or progress onto further study.
        </p>
      </section>

      {/* Assessment Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Assessment</h2>
        <p className="text-lg">
          <strong>60%</strong> from a synoptic project
          <br />
          <strong>40%</strong> from a written exam
        </p>
      </section>

      {/* Subject Information Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Subject Information</h2>
        <p className="text-lg">
          Learners must demonstrate the knowledge and skills to meet the requirements of 10 content areas:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Understand participation in sport</li>
          <li>Have an appreciation of ethics in sport</li>
          <li>Understand sponsorship, media, and marketing in sport</li>
          <li>Understand the use of technology in sport</li>
          <li>Plan, deliver, and review a sports competition</li>
          <li>Understand sports injuries</li>
          <li>Understand psychology for sports performance</li>
          <li>Develop sports leadership and sports coaching skills</li>
          <li>Practice skills classification and performance analysis</li>
          <li>Develop, deliver, and review a sports coaching session</li>
        </ul>
      </section>

      {/* Is This Course Right For Me? Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Is This Course Right For Me?</h2>
        <p className="text-lg">
          The NCFE course should be considered by those pupils seeking to study Physical Education at A-level and/or those pupils who wish to study a more sports science approach to physical education.
          The nature of the course does not require pupils to be participating in sporting activity but rather have a keen interest in Sports Studies.
        </p>
        <p className="text-lg">
          Pupils would benefit from speaking with the PE Department before filling in their options form, should they be interested in following PE GCSE or wish to discuss if they would be more suited to Sports Studies.
        </p>
      </section>

      {/* What Can This Lead To? Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What Can This Lead To?</h2>
        <p className="text-lg">
          A variety of courses are available should you wish to continue studying Physical Education at college, these include:
        </p>
        <ul className="list-disc pl-6 text-lg">
          <li>Learners who achieve at Level 1 might consider progression to Level 2 qualifications, including GCSE in Physical Education</li>
          <li>Level 2 Technical Certificates in Sport and Physical Activity, Sport and Activities Leaders, Coaching Sport, and Instructing Physical Activities</li>
          <li>BTEC Level 2 in Sport</li>
          <li>BTEC Level 2 in Public Services</li>
          <li>Learners who achieve at Level 2 might consider progression to Level 3 qualifications, including:</li>
          <ul className="list-inside list-disc pl-6 text-lg">
            <li>A Level in Physical Education and Sport</li>
            <li>Level 3 Applied Generals in Sport Studies, Sport and Physical Activity, Sports Performance and Excellence</li>
            <li>Level 3 Technical Level in Sport and Physical Activity, Personal Training, Physical Activity and Exercise Science</li>
            <li>Level 3 Technical Level in Personal Training and Behaviour Change, Fitness Services, Exercise Science and Personal Training, Personal Training for Health and Fitness</li>
          </ul>
        </ul>
        <p className="text-lg">
          There are a large number of careers that involve the use of Physical Education and an interest in Health and Fitness. Some examples are:
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
          <a href="https://www.ncfe.org.uk/qualification-search/qualification-detail/ncfe-level-12-technical-award-in-sports-studies-118" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            NCFE Level 1 / 2 Technical Award in Sports Studies Details
          </a>
        </p>
      </section>

      {/* Embedded Google Slides Presentation */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Presentation</h2>
        <iframe 
          src="https://docs.google.com/presentation/d/e/2PACX-1vScK2VKDxCK3afcSHLnFSUTVxjgLWnhIJ6xdz4kR1F8ZP0Lt1NniYXptDVZ_TSxL4H62izAH8Mmrsw4/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="w-full h-96"
        ></iframe>
      </section>
    </div>
  );
};

export default SportsStudies;
