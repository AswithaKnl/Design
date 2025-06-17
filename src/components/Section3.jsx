import React from 'react';

export default function EightActsSection() {
  const acts = [
    {
      title: 'Sound the Alarm',
      content:
        'Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.',
    },
    {
      title: 'Start the Journey',
      content:
        'Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.',
    },
    {
      title: 'Bring Clients with Us',
      content:
        'Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.',
    },
    {
      title: 'Measure What We Make',
      content:
        'Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.',
    },
    {
      title: 'Redefine “Good”',
      content:
        'Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.',
    },
    {
      title: 'Educate, Accelerate',
      content:
        'Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.',
    },
    {
      title: 'Design for Justice',
      content:
        'Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.',
    },
    {
      title: 'Amplify Voices for Change',
      content:
        'Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.',
    },
  ];

  return (
    <section className="px-4 md:px-6 py-[8.75rem]">
      <div className="max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-20">
          
          {/* Sticky Title */}
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#e7e7e7]">
                8 Acts of Emergency
              </h2>
            </div>
          </div>

          {/* Paragraph + Acts */}
          <div className="w-full lg:w-2/3 space-y-12 lg:pl-12">
            <p className="text-[18px] md:text-[20px] lg:text-[25px] leading-8 text-[#c4c4c4]">
              What does it take to Declare? It’s accepting we are in an emergency of climate and
              nature, and a commitment to do something about it. Here are eight places to start:
            </p>

            <div className="">
              {acts.map((act, i) => (
                <div key={i} className="bg-[#e7e7e7] text-black">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-t border-black">
                    <div className="text-[40px] sm:text-[56px] px-4 py-2 sm:py-4">
                      {i + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-[56px] border-l border-black px-4 py-2 sm:py-4 w-full">
                      {act.title}
                    </h3>
                  </div>
                  <div className="border-x border-black p-4 text-[16px] md:text-[18px] leading-relaxed">
                    {act.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
