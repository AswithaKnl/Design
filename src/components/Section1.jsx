import React from 'react';
import AccordionSection from './Accordian';

const BreakdownSection = () => {
  return (
    <section className="px-4 md:px-6 py-[8.75rem] first:pt-md last:pb-md text-[#e7e7e7]">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          {/* Left title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold">
                This is Breakdown
              </h2>
            </div>
          </div>

          {/* Right content */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-12">
            <div className="space-y-12 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight tracking-normal max-w-[730px] w-full">
                The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
              </h2>

              <AccordionSection />

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://youtu.be/XpnOe94eXdM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full md:w-auto text-lg md:text-xl px-6 py-3 rounded-full text-center font-semibold bg-[#e7e7e7] text-black hover:bg-[#ef603d] transition-colors border border-transparent"
                >
                  View our D! Intro Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;
