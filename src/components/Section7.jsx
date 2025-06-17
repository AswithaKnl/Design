import React, { useEffect, useRef, useState } from 'react';
import { designList1 } from '../Js/Sign.js'; 
import Section8 from './Section8.jsx';

function Section7() {
  const [count, setCount] = useState(0);
  const target = 513;
  const counterRef = useRef();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Helper function to check if the counter is visible in the viewport
    function isInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function onScroll() {
      if (counterRef.current && !hasStarted && isInViewport(counterRef.current)) {
        setHasStarted(true);
        // Animate counting
        let start = 0;
        const duration = 3000;
        const stepTime = Math.abs(Math.floor(duration / target));
        function run() {
          start++;
          setCount(start);
          if (start < target) {
            setTimeout(run, stepTime);
          } else {
            setCount(target);
          }
        }
        run();
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [target, hasStarted]);

  return (
    <section className="px-4 md:px-8 py-20">
      <div className="container">
        <div className="space-y-12">
          <div>
            <span 
              ref={counterRef}
              className="block max-w-fit text-[#c4c4c4] text-3xl md:text-5xl"
            >
              #{count}
            </span>
            <span className="flex flex-wrap items-center gap-2 mt-2">
              <span className="font-h3 text-base md:text-lg text-[#e7e7e7]">
                Signatories and counting in
              </span>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-[#ff6340] text-black">
                D! UK
              </span>
            </span>
          </div>
        </div>
        <div className="
          columns-2
          sm:columns-3
          md:columns-4
          lg:columns-6
          xl:columns-8
          2xl:columns-9
          mt-10
          [column-gap:3]
        ">
          {designList1.map((name, index) => (
            <div
              key={index}
              className="break-inside-avoid text-[#c4c4c4] text-xs md:text-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <Section8 />
    </section>
  );
}

export default Section7;