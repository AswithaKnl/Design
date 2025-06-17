import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    enquiryType: '',
    message: '',
    newsletterConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const [checked, setChecked] = useState(false);


  return (
    <section className="px-4 md:px-8 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h1 className="font-h3 sr-only">Contact</h1>
              <h2 className="text-xl text-[#e7e7e7] font-semibold">Contact</h2>
            </div>
          </div>
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 border p-[40px] md:p-10 border-[#c4c4c4] text-white">
              <h2 className="text-[56px] text-[#e7e7e7]">Send Us A Message</h2>
              
              <div className="flex flex-row  border px-4 py-4">
                <label htmlFor="name" className="text-[#c4c4c4] text-lg w-[120px]">Name:*</label>
                <input
                    id="name"
                    name="name"
                    required
                    className="bg-transparent w-full placeholder:text-gray-400"
                    value={formData.name}
                    onChange={handleChange}
                />
                </div>

              <div className="flex flex-row  border  border-[#c4c4c4] px-4 py-4">
                <label htmlFor="email" className="text-[#c4c4c4] text-lg">Email:*</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-transparent w-full placeholder:text-gray-400"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>


              <div className="flex flex-row gap-x-2 border border-[#c4c4c4] px-4 py-4">
                <label htmlFor="team" className="text-[#c4c4c4]">Team to contact:*</label>
                <select
                  name="team"
                  required
                  className="bg-transparent w-full"
                  value={formData.team}
                  onChange={handleChange}
                >
                  <option value="" disabled> </option>
                  <option value="hello@designdeclares.com">D! UK</option>
                  <option value="hello@designdeclares.ie">D! Ireland</option>
                  <option value="ola@designdeclares.com.br">D! Brasil</option>
                  <option value="australia@designdeclares.com.au">D! Australia</option>
                </select>
              </div>

              <div className="flex flex-row gap-x-2 border border-[#c4c4c4] px-4 py-4">
                <label htmlFor="enquiryType" className="text-[#c4c4c4]">Enquiry type:*</label>
                <select
                  name="enquiryType"
                  required
                  className="bg-transparent w-full"
                  value={formData.enquiryType}
                  onChange={handleChange}
                >
                  <option value="" disabled> </option>
                  <option value="Contribute to the toolkit">Contribute to the toolkit</option>
                  <option value="Volunteer my time">Volunteer my time</option>
                  <option value="Set up a new chapter">Set up a new chapter</option>
                  <option value="Discuss something else">Discuss something else</option>
                </select>
              </div>

              <div className="flex flex-row gap-x-2 border  border-[#c4c4c4] px-4 py-4">
                <label htmlFor="message" className="sr-only text-[#c4c4c4]">Please write your message here.</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  required
                  className="bg-transparent w-full placeholder:text-[#c4c4c4]"
                  placeholder="Please write your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

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
                <span className="text-[#c4c4c4] text-[12px]">
                I would like to be added to the Design Declares! newsletter and receive further updates.
                </span>
              </label>

              <a className="underline transition-colors  text-[#c4c4c4] hover:text-[#ef603d] font-p-sm block" href="/privacy-policy">
                View our Privacy Policy
              </a>

              <div className="flex items-center gap-x-4">
                <button
                    type="submit"
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-3 border border-transparent bg-[#e7e7e7] font-semibold text-[18px] text-black hover:bg-[#ef630d]"
                >
                    Send Message
                </button>
                </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;