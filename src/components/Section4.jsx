import React from 'react';
import Form from './Form';

function Section4() {
  return (
    <section
      id="declaration"
      className="px-4 md:px-6 lg:px-[24px] py-12"
    >
      <div className="container max-w-7xl">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          
          {/* Left: Sticky Title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#e7e7e7]">
                Declare Emergency Now
              </h2>
            </div>
          </div>
          
          {/* Right: Paragraph + Form */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-10">
            <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed text-[#c4c4c4]">
              Design Declares is open to individuals and institutions working in industrial,
              digital, graphic, communication and service design. To declare here, you must
              be a company with an office in the UK employing at least one full-time designer.
              We also welcome declarations from practising freelance designers who are
              registered as self-employed in the UK, and global supporters from other
              countries. All declarations will be named and published on this site.
            </p>

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
