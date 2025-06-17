import React from "react";

const articles = [
  {
    title: "Embedding Sustainability in the Design Curriculum",
    date: "30.04.2025, 16:30",
    tags: ["Case Studies", "D! Ireland"],
    desc: "Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.",
    link: "https://designdeclares.ie/latest/embedding-sustainability-in-the-design-curriculum",
    image:
      "https://cdn.sanity.io/images/3xff4iuw/production/d23367e512187cb561f9e12ff83705ca2a25f033-1080x1080.png?max-w=1440&w=1080&q=75",
  },
  {
    title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
    date: "24.04.2025, 15:30",
    tags: ["Events", "D! UK"],
    desc: "Recap: SD4P Collective working session – 28th March 2025",
    link: "https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact",
    image:
      "https://cdn.sanity.io/images/zqatagq1/production/1012aa8c47395cb7ffbb2892f27a6ca6c33c996b-2160x2160.png?max-w=1440&w=1080&q=75",
  },
  {
    title: "Sasha Titchkosky Interview",
    date: "18.12.2024, 08:38",
    tags: ["Perspective", "D! Australia"],
    desc: "An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky",
    link: "https://designdeclares.com.au/latest/sasha-titchkosky-interview",
    image:
      "https://cdn.sanity.io/images/6sp3gm8t/production/9d6e15d759ea86a10645893c3dcf0d4df49e31d2-720x400.jpg?max-w=1440&w=1080&q=75",
  },
];

export default function LatestSection() {
  return (
    <main className="relative z-[1] -mb-[--rounded-main] rounded-b-[--rounded-main] bg-brand-black pb-48">
      <section className="px-base py-md md:px-md p-8">
        <div className="container">
          <div>
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-4">
                <div className="md:sticky md:top-8">
                  <h1 className="font-h3 sr-only">Latest</h1>
                  <div className="space-y-8">

                    {/* Categories Filter */}
                    <div className="space-y-4">
                      <h2 className="font-h3  text-[24px] font-semibold">Categories</h2>
                      <div role="radiogroup" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
                        {["All", "Events", "Case Studies", "Updates", "Perspective"].map((cat) => (
                          <label key={cat} className="no-focus group cursor-pointer">
                            <input type="radio" name="category" value={cat.toLowerCase()} className="sr-only" />
                            <span className={`inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors 
                              ${cat === "All"
                                  ? "bg-[#ef603d] text-black"
                                  : "bg-[#272727] text-[#c4c4c4]"} focus-ring hocus:bg-brand-white hocus:text-brand-black`}>
                              {cat}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Chapters Filter */}
                    <div className="space-y-4">
                      <h2 className="font-h3 text-[24px font-semibold">View by Chapter</h2>
                      <div role="radiogroup" aria-label="Filter articles by chapter" className="flex flex-wrap gap-2">
                        {["All", "D! UK", "D! Ireland", "D! Australia"].map((chapter, idx) => (
                          <label key={chapter} className="no-focus group cursor-pointer">
                            <input type="radio" name="chapter" value={chapter.toLowerCase()} className="sr-only" />
                            <span className={`inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors 
                              ${idx === 0
                                  ? "bg-[#ef603d] text-black"
                                  : "bg-[#272727] text-[#c4c4c4]"} focus-ring hocus:bg-brand-white hocus:text-brand-black`}>
                              {chapter}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Articles */}
              <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
                <div className="space-y-20">
                  {articles.map((item, idx) => (
                    <a
                      key={item.link}
                      className="focus-ring group relative transition-colors block h-full w-full group"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <article className="grid grid-cols-12 gap-y-6 md:gap-x-8" lang="en">
                        {/* Article image */}
                        <div className="relative col-span-12 max-w-md overflow-hidden md:col-span-6">
                          <figure className="flex h-auto w-full flex-col items-center justify-center">
                            <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                              <img
                                alt=""
                                loading="lazy"
                                width="1080"
                                height="1080"
                                decoding="async"
                                className="block object-cover object-center"
                                src={item.image}
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </figure>
                        </div>
                        {/* Article Text */}
                        <div className="col-span-12 space-y-4 md:col-span-6">
                          <div className="flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
                            {item.tags.map(tag => (
                              <span key={tag}
                                className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-[#272727] text-[#c4c4c4]"
                              >
                                {tag}
                              </span>
                            ))}
                            <span className="text-xs text-[#c4c4c4] font-semibold ">{item.date}</span>
                          </div>
                          <h2 className="text-[#e7e7e7] text-[32px] leading-8">{item.title}</h2>
                          <p className="text-[1rem] text-[#c4c4c4]">{item.desc}</p>
                        </div>
                      </article>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}