import React from 'react';

function LatestSection() {
  const items = [
    {
      title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      date: "24.04.2025, 15:30",
      tags: ["Events", "D! UK"],
      desc: "Recap: SD4P Collective working session – 28th March 2025",
      link: "https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact"
    },
    {
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      date: "06.12.2024, 14:30",
      tags: ["Events", "D! UK"],
      desc: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present"
    }
  ];

  return (
    <section className="px-6 md:px-10 py-[80px] md:py-[140px]">
      <div className="max-w-7xl ">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-16">
          {/* Left Title Section */}
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-[24px] md:text-[32px] font-semibold text-[#e7e7e7]">Latest</h2>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-span-12 space-y-16 lg:col-span-8 lg:col-start-6">
            {items.map((item, idx) => (
              <article
                key={idx}
                className="space-y-4"
                style={{ animationDelay: `${idx * 0.2 + 0.1}s` }}
              >
                {/* Tags + Date */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {item.tags.map(tag => (
                    <span key={tag} className="inline-block bg-[#272727] text-[#c4c4c4] rounded-full px-3 py-1 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs font-semibold text-[#c4c4c4]">{item.date}</span>
                </div>

                {/* Title + Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                  <h2 className="text-[#e7e7e7] text-[24px] md:text-[32px] font-semibold">
                    {item.title}
                  </h2>
                  <div>
                    <p className="text-[#c4c4c4] text-[16px] md:text-[18px]">{item.desc}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 underline text-[#c4c4c4] hover:text-[#ef603d] text-sm md:text-base"
                    >
                      Read story
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {/* CTA Button */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: `${items.length * 0.2 + 0.1}s` }}
            >
              <a
                href="/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold text-black bg-[#e7e7e7] hover:bg-[#ef603d] text-[16px] md:text-[18px]"
              >
                See all the latest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestSection;