import React from 'react';

const DonateSection = () => {
  return (
    <section className="px-4 md:px-6 py-[8.75rem]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-16">
          
          {/* Left: Sticky Title */}
          <div className="w-full lg:w-1/3">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl font-semibold text-[#e7e7e7]">Donate to D!</h2>
            </div>
          </div>

          {/* Right: Content + Buttons */}
          {/* <div className="w-full lg:w-2/3 pl-2 md:pl-6 lg:pl-10"> */}
          {/* <div className="w-full lg:w-3/4 pl-4 md:pl-8 lg:pl-16"> */}
          <div className="w-full lg:w-3/4  lg:pl-14 ml-auto">

            <div className="space-y-12">
              <p className="text-[25px] leading-[2.75rem] tracking-normal text-[#c4c4c4] ">
              Design Declares is a CIC and would not exist without our dedicated team of co-steers,
              volunteers, and our passionate community working towards change in the creative industry.
              Your support can go a long way, and helps us continue the valuable work needed in tackling the climate crises.
              If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
            </p>


              {/* Inline Donate Buttons */}
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 mt-8">
                {[
                  { label: '£10', link: 'https://wise.com/pay/r/uZ5h3pxRMmTE_pk' },
                  { label: '£20', link: 'https://wise.com/pay/r/u2IiQNt2ebixruk' },
                  { label: '£50', link: 'https://wise.com/pay/r/2vqUbqPfU9hvVLE' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[20px] font-semibold rounded-full bg-[#e7e7e7] text-black px-6 py-3 transition-colors hover:bg-[#ef603d] text-center w-full md:w-auto"
                  >
                    Donate {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonateSection;
