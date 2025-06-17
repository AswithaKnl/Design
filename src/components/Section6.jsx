import React, { useState } from "react";

export default function NewsletterSection() {
  const [checked, setChecked] = useState(false);

  return (
    <section className="px-4 md:px-6 py-20 md:py-[140px]">
      <div className="max-w-7xl">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#e7e7e7]">
                The Design Declares Newsletter and Toolkit
              </h2>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-12">
            <div className="space-y-8">
              <figure>
                <img
                  alt="Newsletter Visual"
                  loading="lazy"
                  width={1440}
                  height={810}
                  className="w-full h-auto object-cover object-center rounded"
                  src="https://cdn.sanity.io/images/zqatagq1/production/88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png?max-w=1440"
                />
              </figure>

              <p className="text-lg md:text-xl lg:text-[24px] text-[#c4c4c4]">
                Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
              </p>
              <p className="text-base md:text-lg lg:text-[18px] text-[#c4c4c4]">
                Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit – just register below.
              </p>
            </div>

            <form className="space-y-6 text-[#c4c4c4]">
              <div className="flex flex-col md:flex-row border border-[#c4c4c4] rounded px-4 py-4 md:py-0">
                <label
                  htmlFor="email"
                  className="md:py-3.5 md:pr-4 mb-2 md:mb-0 text-sm md:text-base"
                >
                  Email:*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  placeholder=" "
                  className="flex-1 bg-transparent outline-none placeholder:text-sm md:placeholder:text-base text-white md:py-3.5"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <span className="flex items-center justify-center w-10 h-10 border border-[#c4c4c4]">
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
                <span className="text-[#c4c4c4] text-sm">
                  I would like to be added to the Design Declares newsletter.
                </span>
              </label>

             <div className="flex flex-col gap-2">
                <a
                  href="https://designdeclares.com/privacy-policy"
                  className="text-sm underline hover:text-[#ef603d]"
                >
                  View our Privacy Policy
                </a>

              <div className="flex justify-start mt-4">
                <button
                  type="submit"
                  className="bg-[#e7e7e7] hover:bg-[#ef603d] text-[20px] text-black font-semibold rounded-full px-6 py-3 text-center text-base md:text-lg transition-colors"
                >
                  Subscribe
                </button>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
