"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Faq: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <div className='flex gap-2 items-center justify-center w-full mb-2'>
                <Image src='/star.png' width={20} height={20} alt='' />
                <p className='text-neon'>FAQ</p>
            </div>
          <h2 className="text-4xl font-manrope text-center font-bold leading-[3.25rem] bg-gradient-to-tr from-zinc-400 to-zinc-200 text-transparent bg-clip-text">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {/* FAQ Item 1 */}
          <FaqItem
            question="What services do you provide?"
            answer="We provide a wide range of services to businesses and individuals. Our services include but are not limited to: Web Development, Mobile Development, SEO, Digital Marketing, and Content creation."
            id="one"
            isActive={activeId === "one"}
            toggleAccordion={() => toggleAccordion("one")}
          />

          {/* FAQ Item 2 */}
          <FaqItem
            question="How can I contact you?"
            answer="You can contact us through our website, email, or phone number. We are always happy to hear from you and will respond to your inquiries as soon as possible."
            id="two"
            isActive={activeId === "two"}
            toggleAccordion={() => toggleAccordion("two")}
          />

          {/* FAQ Item 3 */}
          <FaqItem
            question="What is your pricing structure?"
            answer="The pricing structure for our services varies depending on the specific services you require. We offer flexible pricing options to meet your needs, including hourly rates, fixed-price contracts, and monthly retainers. To get a personalized quote, please contact us with your project details."
            id="three"
            isActive={activeId === "three"}
            toggleAccordion={() => toggleAccordion("three")}
          />

          {/* FAQ Item 4 */}
          <FaqItem
            question="How long do you take to deliver a project?"
            answer="It depends on the complexity of the project. We strive to deliver high-quality work within the agreed-upon timeline, but please note that some projects may require more time due to various factors such as client feedback, additional research, or technical challenges."
            id="four"
            isActive={activeId === "four"}
            toggleAccordion={() => toggleAccordion("four")}
          />
        </div>
      </div>
    </section>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
  id: string;
  isActive: boolean;
  toggleAccordion: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, id, isActive, toggleAccordion }) => {
  return (
    <div
      className={`accordion p-4 rounded-xl transition duration-500 ${
        isActive ? 'bg-zinc-700' : ''
      }`}
      id={`basic-heading-${id}-with-icon`}
    >
      <button
        className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 hover:text-zinc-200 ${
          isActive ? 'font-medium text-zinc-200' : 'text-zinc-300'
        }`}
        aria-controls={`basic-collapse-${id}-with-icon`}
        onClick={toggleAccordion}
      >
        <h5>{question}</h5>
        {isActive ? <MinusIcon /> : <PlusIcon />}
      </button>
      {isActive && (
        <div
          id={`basic-collapse-${id}-with-icon`}
          className="accordion-content w-full overflow-hidden pr-4 mt-4"
          aria-labelledby={`basic-heading-${id}`}
        >
          <p className="text-base text-zinc-200 font-normal leading-6">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const PlusIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-zinc-300 transition duration-500 block accordion-active:text-zinc-200 accordion-active:hidden group-hover:text-zinc-200 origin-center"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M12 18V6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const MinusIcon: React.FC = () => (
  <svg
    className="w-6 h-6 text-zinc-300 transition duration-500 hidden accordion-active:text-zinc-200 accordion-active:block group-hover:text-zinc-200"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export default Faq;
