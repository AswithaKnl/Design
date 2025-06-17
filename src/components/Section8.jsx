import React, { useEffect, useRef, useState } from 'react';
import { country1 } from '../Js/Country.js'; 

function Section8() {
  const [count, setCount] = useState(0);
  const target = 661;
  const counterRef = useRef();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
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
    onScroll(); // In case already in view

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [target, hasStarted]);

  return (
    <section className="mt-12">
      <div className="container">
        <div className="space-y-12">
          <div>
            <span
              ref={counterRef}
              className="block max-w-fit text-[#c4c4c4] text-5xl md:text-6xl"
            >
              #{count}
            </span>
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-h3 text-xl md:text-2xl text-[#e7e7e7]">Global Supporters</span>
            </span>
          </div>
        </div>

        {/* Responsive columns, with NO gap */}
        <div className="
          columns-2
          sm:columns-3
          md:columns-4
          lg:columns-6
          xl:columns-8
          2xl:columns-9
          mt-10
          [column-gap:0]
        ">
          {country1.map((item, index) => (
            <div
              key={index}
              className={`break-inside-avoid text-[#c4c4c4] text-xs md:text-sm leading-6 ${item.isCountry ? "font-semibold text-[#e7e7e7]" : ""}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section8;