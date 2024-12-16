import React from 'react';

const EnterpriseAndMarketing = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-center text-blue-600">Business Enterprise and Marketing</h1>
      
      <section>
        <h3 className="text-2xl font-semibold text-blue-500">What does the course involve?</h3>
        <p className="text-lg leading-relaxed">
          The Level 1/Level 2 Cambridge National in Enterprise and Marketing is aimed at students aged 14-16,
          studying a Key Stage 4 curriculum, who wish to develop applied knowledge and practical skills in enterprise
          and marketing. It is designed to sit alongside other GCSEs and contains both practical and theoretical elements,
          which will prepare students for further study of qualifications in enterprise, marketing or business.
          The Cambridge National in Enterprise and Marketing is graded pass, merit and distinction for Level 1 and
          pass, merit, distinction and distinction* for Level 2.
        </p>
        <p className="text-lg leading-relaxed">
          This qualification will help to develop knowledge and skills so that you can work with independence to create
          complete and coherent material which reflects effective planning, development and evaluation. You will also
          develop a full range of transferable skills including Verbal Communication/Presentation, Research, Problem Solving,
          Analytical Skills, Digital Presentation Planning and Creative Thinking.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-blue-500">What will you study?</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-blue-400">R067 Enterprise and marketing concepts</h4>
            <p className="text-lg leading-relaxed">
              This unit is assessed by an exam. In this unit, you will learn about the key factors to consider and activities
              that need to happen to operate a successful small start-up business. Topics include:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Characteristics skills, risk and reward for enterprise</li>
              <li>Market research to target a specific customer</li>
              <li>What makes a product financially viable</li>
              <li>Creating a marketing mix to support a product</li>
              <li>Factors to consider when starting up and running an enterprise</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-400">R068 Design a business proposal</h4>
            <p className="text-lg leading-relaxed">
              This unit is assessed by a set assignment. In this unit, you will identify a customer profile for a specific
              product, complete market research to generate product design ideas, and use financial calculations to propose
              a pricing strategy and determine the viability of their product proposal. Topics include:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Market research</li>
              <li>How to identify a customer profile</li>
              <li>Develop a product proposal for a business brief</li>
              <li>Review whether a business proposal is financially viable</li>
              <li>Review the likely success of the business proposal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-400">R069 Market and pitch a business proposal</h4>
            <p className="text-lg leading-relaxed">
              This unit is also assessed by a set assignment. In this unit, you will develop pitching skills to be able to
              pitch your business proposal to an external audience. Finally, you will review your pitching skills and business
              proposal using the learning, self-assessment, and feedback gathered. Topics include:
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Develop a brand identity to target a specific customer profile</li>
              <li>Create a promotional campaign for a brand and product</li>
              <li>Plan and pitch a proposal</li>
              <li>Review a brand proposal, promotional campaign and professional pitch</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-blue-500">How will you be assessed?</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-md shadow-sm">
            <h4 className="text-xl font-semibold text-blue-400">R069 Market and pitch a business proposal</h4>
            <p className="text-lg">30% of overall mark — Comprising 5 tasks including presenting a pitch to a panel</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md shadow-sm">
            <h4 className="text-xl font-semibold text-blue-400">R067 Enterprise and Marketing Concepts</h4>
            <p className="text-lg">40% of overall mark — 70 marks, 90 minutes exam</p>
            <ul className="list-disc pl-6 text-lg">
              <li>Section A has 10 MCQ questions (10 marks)</li>
              <li>Section B contains context questions (60 marks)</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-md shadow-sm">
            <h4 className="text-xl font-semibold text-blue-400">R068 Design a business proposal</h4>
            <p className="text-lg">30% of overall mark — Comprising 5 tasks developing a business proposal for a given scenario</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-blue-500">What can this course lead to?</h3>
        <p className="text-lg leading-relaxed">
          This course naturally progresses into A Level Business or Economics, or a T Level in Business, Digital business
          or Finance. Many business students go into management and administration jobs in businesses and a business
          qualification can also be helpful to get into finance, banking or insurance. This qualification can also lead to
          an apprenticeship in Business Administration.
        </p>
      </section>
    </div>
  );
};

export default EnterpriseAndMarketing;
