import React, { useState } from 'react';

const AccordionSection = () => {
  const items = [
    {
      title: 'The Role of Design',
      content: `As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next. Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.`,
    },
    {
      title: 'Time for Change',
      content: `Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world. This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs. It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials. And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.`,
    },
    {
      title: 'Act with Urgency',
      content: `We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do. This is the most important brief of our lives. Join us as we begin to design a climate-positive future.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 gap-8 max-w-[730px] w-full">
      {items.map((item, index) => (
        <div key={index} className="border-t border-[#C4C4C4]">
          <button
            type="button"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`panel-${index}`}
            className="focus:outline-none mt-4 flex w-full items-center justify-between"
          >
            <h3 className="text-[#c4c4c4] text-xl sm:text-2xl font-semibold">
              {item.title}
            </h3>
            <span
              aria-hidden="true"
              className={`transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path strokeLinecap="square" d="M19.5 8.25L12 15.75 4.5 8.25" />
              </svg>
            </span>
          </button>

          {openIndex === index && (
            <div
              id={`panel-${index}`}
              className="text-[#aaa] text-base sm:text-lg mt-4 transition-opacity duration-300 ease-in-out"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
