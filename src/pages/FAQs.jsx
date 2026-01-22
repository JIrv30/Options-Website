import React, { useState } from 'react';

const Faqs = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Questions and FAQs</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have a question about Year 10/11 choices, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mt-4">
            <li>Check the FAQs below and other pages of this site.</li>
            <li>Talk to your tutor.</li>
            <li>If it's about a particular subject, contact the relevant team.</li>
          </ol>
          <p className="text-gray-700 mt-4">
            Still have a question? Click the button below to contact our team. Please include an email address so we can respond.
          </p>
          <div className="bg-white shadow-md rounded-lg p-6">
    {/* Redirect button */}
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeecg85ofoZXxeITjcIPUs2ntRCsFQk30bZKs1eQTLHoYj6zA/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
    >
      Ask a Question
    </a>
  </div>
        </header>

        {/* FAQs */}
        <section>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg mb-4 border border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 font-medium text-gray-800 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    open === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </button>
              {open === index && (
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-8">
          <p className="text-gray-700">
            If you have more questions about the options process, click the button below to submit your query to our Options Team or Year Team. They will get back to you as soon as possible.
          </p>
          <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeecg85ofoZXxeITjcIPUs2ntRCsFQk30bZKs1eQTLHoYj6zA/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
    >
      Ask a Question
    </a>
        </footer>
      </div>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: 'How many subjects can I pick?',
    answer:
      'You have three choices: one from our EBacc block and two other choices from the full list of subjects. You must also select 2 reserve choices.',
  },
  {
    question: 'Do I have to pick a language?',
    answer:
      'No, but studying a language can open up more opportunities for further study or travel. If you wish to take a language, you must have studied it in Years 7-9.',
  },
  {
    question: 'How many qualifications can I gain?',
    answer: (
      <ul className="list-disc pl-6">
        <li>English Language</li>
        <li>English Literature</li>
        <li>Mathematics</li>
        <li>
          Science (Combined = 2 qualifications; Triple = 3 qualifications)
        </li>
        <li>Three selected subjects</li>
        <li>
          Additional qualification in Mathematics may be offered for advanced students.
        </li>
      </ul>
    ),
  },
  {
    question: 'Will I definitely get the choices I make?',
    answer:
      'We strive to accommodate everyone’s choices. In rare cases where it’s not possible, we’ll discuss alternatives with you.',
  },
  {
    question: 'Where can I get extra help and advice?',
    answer:
      'Your tutors, teachers, and year team are great sources of advice. You can also explore taster lessons online or in-person for new subjects you’re considering.',
  },
  {
    question: 'Do I need my parents’ permission for my choices?',
    answer:
      'These are your choices, but we encourage discussing them with your parents. A signed letter will be required after submission.',
  },
  {
    question: 'Why do I have to make a reserve choice?',
    answer:
      'In case your main choices are not available, the reserve choice helps guide discussions for alternatives.',
  },
  {
    question: 'How can I better understand subjects I’ve never studied?',
    answer:
      'Attend taster lessons and ask your teachers about their courses. Explore the subject pages on this website for detailed insights.',
  },
  {
    question: 'What is the difference between PE and Sport?',
    answer:
      'Detailed comparisons can be found on the subject pages. Scroll to the top and click the relevant tab.',
  },
  {
    question: 'What if I change my mind?',
    answer:
      'While we encourage careful consideration, let us know immediately if you change your mind after submission.',
  },
  {
    question: 'Are classes assigned on a first-come, first-served basis?',
    answer:
      'No. Take your time to make the right choices, but ensure you submit your form by the deadline.',
  },
];

export default Faqs;
