import React , { useState } from 'react';

const Footer = () => {
  const [checked, setChecked] = useState(false);

  return (
    // <footer className="px-4 lg:px-[24px] lg:py-[48px] bottom-0 border-t-[var(--rounded-main)] border-brand-red bg-[#ef603d] py-10 text-black">
    <footer className="px-4 lg:px-[24px] lg:py-[48px] border-t-[var(--rounded-main)] border-brand-red bg-[#ef603d] py-10 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16">
          <div className="col-span-12 row-span-2 md:col-span-4">
            <span className=" foot block w-min text-[5rem] font-normal text-current leading-18 uppercase tracking-tight">
              Design Declares
            </span>
          </div>

          <div className="col-span-12 md:col-span-4">
            <nav className="grid grid-cols-2 flex-col items-start gap-x-8 gap-y-2" aria-label="Menu">
              <div className="col-span-1 sm:col-span-2">
                <a className="group relative w-fit transition-colors hover:underline" href="/contact">
                  Contact
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a className="group relative w-fit transition-colors hover:underline" href="https://www.instagram.com/design_declares/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a className="group relative w-fit transition-colors hover:underline" href="https://www.linkedin.com/groups/12699995/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a className="group relative w-fit transition-colors hover:underline" href="/privacy-policy">
                  Privacy Policy
                </a>
              </div>
            </nav>
          </div>

          <div className="col-span-12 space-y-4 md:col-span-4">
            <p className="font-bold">Sign up to the D! Newsletter</p>
            <form className="flex flex-col gap-y-4 text-brand-black">
            <div className="focus-border relative -mt-px flex flex-col gap-x-2 border pl-4 py-4 md:flex-row md:py-0 border-brand-black">
                <label
                  className="max-w-full md:py-3.5"
                  id="email-label"
                  htmlFor="email-input"
                >
                  Email:*
                </label>
                <input
                  className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-black"
                  type="email"
                  autoComplete="email"
                  required
                  id="email-input"
                  aria-labelledby="email-label"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-y-2 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <span className="flex items-center justify-center w-12 h-11 border border-back">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-8 h-8 rotate-45 transition-transform ${
                      checked ? "scale-100" : "scale-0"
                    }`}
                  >
                    <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
                <span className="text-black text-[12px]">
                    I would like to be added to the Design Declares! newsletter and receive further updates.
                </span>
              </label>


                <a
                className="underline hover:text-white transition-colors"
                href="/privacy-policy"
                >
                View our Privacy Policy
                </a>
            </div>

            <div>
                <button
                type="submit"
                className="group relative flex w-full md:w-auto items-center font-bold justify-center rounded-full px-6 py-3 md:py-4 border border-transparent bg-white text-black hover:bg-black hover:text-white transition-colors"
                >
                Subscribe
                </button>
            </div>
            </div>

            </form>
          </div>

          <div className="col-span-12 space-y-4 md:col-span-8">
            <div className="text-sm space-y-6">
              <p>
                This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand.
                <a className="group inline underline transition-colors hover:text-white ml-1" href="https://digitalbeacon.co/report/designdeclares-com" target="_blank" rel="noopener noreferrer">
                  Learn more about our carbon footprint
                </a>
              </p>
              <p>
                Empowered by
                <a className="group inline underline transition-colors hover:text-white ml-1" href="https://driftime.media/" target="_blank" rel="noopener noreferrer">
                  Driftime®
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
