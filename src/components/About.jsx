import React from 'react';

const MainContent = () => {
    const designers = [
        {
          name: "Design for Life",
          link: "https://www.designforlife.earth",
          imgSrc: "src/assets/de1.svg",
          alt: "Logo for Design for Life"
        },
        {
          name: "Driftime®",
          link: "https://driftime.media",
          imgSrc: "src/assets/de2.svg",
          alt: "Logo for Driftime®"
        },
        {
          name: "Morroma",
          link: "https://www.morrama.com",
          imgSrc: "src/assets/de3.svg",
          alt: "Logo for Morroma"
        },
        {
          name: "Studio Wood",
          link: "https://www.studiowood.co.uk",
          imgSrc: "src/assets/de4.svg",
          alt: "Logo for Studio Wood"
        },
        {
          name: "Thomas.Matthews",
          link: "https://thomasmatthews.com",
          imgSrc: "src/assets/de5.svg",
          alt: "Logo for Thomas.Matthews"
        },
        {
          name: "URGE Collective",
          link: "https://urgecollective.com",
          imgSrc: "src/assets/de6.svg",
          alt: "Logo for URGE Collective"
        }
      ];
      const members = [
        {
          name: "Abb-d Taiyo",
          company: "Driftime®",
          imgSrc: "src/assets/img.webp",
          alt: "Photograph of Abb-d Taiyo"
        },
        {
          name: "Alexie Sommer",
          company: "URGE Collective",
          imgSrc: "src/assets/img2.webp",
          alt: "Photograph of Alexie Sommer"
        },
        {
          name: "Aurelie Lionet",
          company: "Design for Life",
          imgSrc: "src/assets/img3.webp",
          alt: "Photograph of Aurelie Lionet"
        },
        {
          name: "Jo Barnard",
          company: "Morrama",
          imgSrc: "src/assets/img4.webp",
          alt: "Photograph of Jo Barnard"
        }
      ];
  return (
    <main className="relative bg-black pb-48">
      <div className="container">
        <h1 className="sr-only">About</h1>
        <section className="px-4 md:px-8 py-8 first:pt-8 last:pb-8">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="text-xl text-[#e7e7e7] font-semibold">About Design Declares</h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6 ">
              <div>
                <h2 className="text-[56px] text-[#e7e7e7] leading-16 mb-[48px]">Climate breakdown has begun. And business as usual is not an option.</h2>
                <p className="text-[24px] text-[#c4c4c4] font-bold my-[24px]">That’s why we started Design Declares.</p>
                <p className="text-[24px] text-[#c4c4c4] my-[24px]">
                  Inspired by a global declaration movement sounding the alarm in industries everywhere, we’re an industry-recognised initiative representing the fears, hopes and commitment to action of a growing group of designers, design studios, agencies, and institutions.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                <a
                    className="focus-ring font-button font-bold flex items-center justify-center px-6 py-3 border border-transparent bg-white text-black rounded-full hover:bg-[#ef603d] transition-colors"
                    href="/"
                    target="_self"
                >
                    See Global Declarations
                </a>
                </div>

              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[#c4c4c4] text-[18px]">
                    <div className="space-y-4">
                        <p>
                        Together, we sit at the very beginning of the creative process. The tools we use and the choices we make can influence society’s behaviour, change economies, and challenge everything that’s come before.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <p>
                        Because design, whether it’s a product, a piece of packaging, or an exhibition space, has impact. It’s up to us whether that impact is harmful or healing.
                        </p>
                        <p>We’re glad you’re here. Let’s get to work.</p>
                    </div>
                    </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                    className="focus-ring font-button font-bold flex items-center justify-center px-6 py-3 border border-transparent bg-white text-black rounded-full hover:bg-[#ef603d] transition-colors"
                    href="/"
                    target="_self"
                >
                    Declare Emergency Now
                </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[#c4c4c4] text-[18px]">
  
                    <div class="space-y-4">
                        <div class="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                        <ul>
                            <li>Design Declares is free.</li>
                            <li>‘Design’ to us means industrial, digital, graphic, communication and service design.</li>
                            <li>Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.</li>
                            <li>Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.</li>
                        </ul>
                        </div>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                        <ul>
                            <li>We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.</li>
                            <li>As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.</li>
                        </ul>
                        </div>
                    </div>

                </div>


            </div>
          </div>
          
        </section>

        {/* Additional sections can be added here in the same pattern */}
        <section className="px-4 md:px-8 py-8 first:pt-8 last:pb-8">
  <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
    <div className="col-span-12 lg:col-span-4">
      <div className="md:sticky md:top-8">
        <h2 className="text-xl text-[#e7e7e7] font-semibold">
        Global Partnerships</h2>
      </div>
    </div>

    <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
      <div>
        <p className="text-[24px] text-[#c4c4c4] my-[24px]">
        We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[#c4c4c4] my-[48px]">
  
  <div class="space-y-4 mb-[24px]">
    <p>
      The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.
    </p>
    <p>
      It doesn’t matter where on the journey you are. What matters is that you’re here, and you’re ready to do the work. Because there is no design on a dead planet.
    </p>
  </div>

  <div class="space-y- mb-[24px]">
    <p className='mb-[24px]'>
      *We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you’re interested in, please get in touch.
    </p>
    <p className='mb-[24px]'>Join our list of global partners...</p>
    <p className='mt-[24px] flex flex-wrap gap-2.5'>
      <a
        class="focus-ring group relative inline underline transition-colors hover:text-[#ef603d]"
        href="/"
      >
        UK,
      </a>
      <a
        class="focus-ring group relative inline underline transition-colors hover:text-[#ef603d]"
        href="/"
      >
        Ireland,
      </a>
      <a
        class="focus-ring group relative inline underline transition-colors hover:text-[#ef603d]"
        href="/"
      >
        Brazil,
      </a>
      <a
        class="focus-ring group relative inline underline transition-colors hover:text-[#ef603d]"
        href="/"
      >
        Australia
      </a>
    </p>
  </div>

</div>


        <div className="flex flex-wrap items-center gap-2">
          <a
            className="focus-ring font-button font-bold flex items-center justify-center px-6 py-3 border border-transparent bg-white text-black rounded-full hover:bg-[#ef603d] transition-colors"
            href="/contact"
            target="_self"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 md:px-8 py-16 first:pt-8 last:pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-xl text-[#e7e7e7] font-semibold">The Designers Behind Design Declares UK</h2>
            </div>
          </div>
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <p className='text-[18px] text-[#c4c4c4]'>
              Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.
            </p>
            <div className="grid grid-cols-2 gap-x-16 gap-y-24">
              {designers.map((designer, index) => (
                <div key={index} className="flex items-center col-span-1">
                  <a
                    className="group relative w-fit underline transition-colors block"
                    href={designer.link}
                    aria-label={`Go to ${designer.name}'s website`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="flex h-auto w-full flex-col items-center justify-center">
                      <div className="relative flex aspect-auto h-full max-h-14 w-full max-w-44">
                        <img
                          alt={designer.alt}
                          loading="lazy"
                          className="block object-contain object-left"
                          src={designer.imgSrc}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </figure>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="text-xl text-[#e7e7e7] font-semibold">Steering Group</h2>
            </div>
          </div>
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto md:grid md:grid-cols-12">
              {members.map((member, index) => (
                <div key={index} className="space-y-3 w-[50vw] flex-shrink-0 snap-center md:col-span-3 md:w-auto">
                  <figure className="flex h-auto w-full flex-col items-center justify-center">
                    <div className="relative h-full w-full contrast-[1.1] grayscale">
                      <img
                        alt={member.alt}
                        loading="lazy"
                        className="block object-cover object-center"
                        src={member.imgSrc}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </figure>
                  <div className="space-y-1 text-[#c4c4c4]">
                    <p>{member.name}</p>
                    <p className="font-p-sm text-[12px] mt-[4px]">{member.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </main>
  );
};

export default MainContent;