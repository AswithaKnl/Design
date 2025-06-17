import React from 'react';
import BreakdownSection from './Section1';
import DonateSection from './Section2';
import EightActsSection from './Section3';
import Section4 from './Section4';
import LatestSection from './Section5';
import NewsletterSection from './Section6';
import Section7 from './Section7';
import { motion } from 'framer-motion';

// Motion variants
const wordVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6 + i * 0.3, // delays after SVG
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const barVariants = {
  hidden: { scaleY: 1 },
  visible: (i) => ({
    scaleY: 0,
    transition: {
      delay: 0.6 + i * 0.3,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};
const words = ['Design', 'Declares', 'UK'];

const HeroSection = () => {
  return (
    <>
      <section className="px-4 py-[24px] md:px-8 flex min-h-screen">
        <div className="container flex flex-col justify-between">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="relative flex items-start gap-4">
                {/* Animated Headline Words */}
                <span className="flex flex-col font-anton text-[60px] leading-[1] sm:text-[120px] md:text-[120px] xl:text-[130px] 2xl:text-[220px] font-bold uppercase relative z-[2]">
                  {words.map((text, idx) => (
                    <span key={idx} className="relative block overflow-hidden h-[1em] tt text-[#e7e7e7] lg:text-[180px]">
                      {/* Reveal Bar */} 
                      <motion.span
                        className="absolute inset-0 origin-top"
                        initial="hidden"
                        animate="visible"
                        variants={barVariants}
                        custom={idx}
                        style={{display:'block'}}
                      />
                      {/* Animated Word */}
                      <motion.span
                        className={`inline-block relative ${text === 'UK' ? 'text-[#ef603d]' : ''}`}
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        variants={wordVariants}
                      >
                        {text}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pl-26">
              <motion.p
                className="max-w-lg text-[#c4c4c4] lg:ml-auto lg:mr-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.6, // 0.6 + 2*0.3 for all three animated words
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      <BreakdownSection />
      <DonateSection />
      <EightActsSection />
      <Section4 />
      <LatestSection />
      <NewsletterSection />
      <Section7 />
    </>
  );
};

export default HeroSection;