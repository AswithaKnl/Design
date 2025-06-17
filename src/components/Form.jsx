import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';

function Form() {
  const [entity, setEntity] = useState('');
  const [checkedBoxes, setCheckedBoxes] = useState({
    dataConsent: false,
    newsletterConsent: false,
  });

  const [country, setCountry] = useState('');
  const countries = useMemo(() => countryList().getData(), []);

  const handleCheckboxChange = (name) => {
    setCheckedBoxes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const renderNameField = () => {
    switch (entity) {
      case 'Business':
        return 'Business Name:*';
      case 'Individual':
        return 'Individual Name:*';
      case 'Public Institution':
        return 'Institution Name:*';
      case 'Team or Department':
        return 'Team Name:*';
      default:
        return '';
    }
  };

  return (
    <div>
      <form action="#" className="flex flex-col gap-y-8 border border-gray-400 p-4 md:p-10">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] leading-tight text-[#e7e7e7]">
          I am Declaring Emergency
        </h2>

        <fieldset className="flex flex-wrap gap-8" aria-required="true">
          <legend className="sr-only">What type of entity are you declaring as?</legend>
          {[
            { label: 'As a business', value: 'Business' },
            { label: 'As an individual', value: 'Individual' },
            { label: 'As a public institution', value: 'Public Institution' },
            { label: 'As a team or department', value: 'Team or Department' },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center gap-2 cursor-pointer w-fit">
              <input
                type="radio"
                name="entity"
                value={value}
                className="sr-only"
                checked={entity === value}
                onChange={() => setEntity(value)}
                required
              />
              <span className={
                `flex items-center justify-center w-10 h-10 border transition-colors
                ${entity === value ? "border-[#8a8a8a]" : "border-[#c4c4c4]"}`
              }>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-8 h-8 rotate-45 transition-transform ${entity === value ? "scale-100" : "scale-0"}`}
                >
                  <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
              <span className={
                `text-[12px] transition-colors ${entity === value ? "text-[#e7e7e7]" : "text-[#c4c4c4]"}`
              }>
                {label}
              </span>
            </label>
          ))}
        </fieldset>

        {entity && (
          <div className="flex flex-col md:flex-row border border-gray-400 -mt-px">
            <label htmlFor="name" className="w-full md:w-32 px-4 py-3 text-gray-400">
              {renderNameField()}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter name"
              className="flex-1 px-4 py-3 bg-transparent placeholder-[#c4c4c4] focus:outline-none text-white"
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row border border-gray-400 -mt-px">
          <label htmlFor="website" className="w-full md:w-32 px-4 py-3 text-[#c4c4c4]">Website:*</label>
          <input
            id="website"
            name="website"
            type="url"
            required
            placeholder="https://yourwebsite.com"
            className="flex-1 px-4 py-3 bg-transparent placeholder-gray-400 focus:outline-none text-white"
          />
        </div>

        {/* Country select with react-select-country-list */}
        <div className="flex flex-col md:flex-row border border-gray-400 -mt-px">
          <label htmlFor="country" className="w-full md:w-32 px-4 py-3 text-[#c4c4c4]">Country:*</label>
          <select
            id="country"
            name="country"
            required
            value={country}
            onChange={e => setCountry(e.target.value)}
            className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-[#e7e7e7]"
          >
            <option value="">Select a country</option>
            {countries.map(({ label, value }) => (
              <option key={value} value={label}>{label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row border border-gray-400 -mt-px">
          <label htmlFor="discipline" className="w-full md:w-32 px-4 py-3 text-[#c4c4c4]">Discipline:*</label>
          <select
            id="discipline"
            name="discipline"
            required
            className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-[#e7e7e7]"
          >
            <option value=""></option>
            <option value="Communication Design">Communication Design</option>
            <option value="Digital Design">Digital Design</option>
            <option value="Service Design">Service Design</option>
            <option value="Product Design">Product Design</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row border border-gray-400 -mt-px">
          <label htmlFor="email" className="w-full md:w-32 px-4 py-3 text-[#c4c4c4]">Email:*</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="flex-1 px-4 py-3 bg-transparent placeholder-[#c4c4c4] focus:outline-none text-white"
          />
        </div>

        <div className="border border-gray-400 -mt-px">
          <label htmlFor="message" className="sr-only">Why are you declaring?</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Why are you declaring? Tell us in a sentence or two, tell us why you're joining Design Declares."
            className="w-full px-4 py-3 bg-transparent placeholder-[#c4c4c4] focus:outline-none text-white"
          ></textarea>
        </div>

        <div className="space-y-4">
          {[
            {
              id: 'dataConsent',
              label: 'I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.',
              required: true,
            },
            {
              id: 'newsletterConsent',
              label: 'I would like to be added to the Design Declares! newsletter and receive further updates.',
              required: false,
            },
          ].map(({ id, label, required }) => (
            <label key={id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                name={id}
                checked={checkedBoxes[id]}
                onChange={() => handleCheckboxChange(id)}
                required={required}
                id={id}
              />
              {/* Border and icon change color when checked */}
              <span className={
                `flex items-center justify-center w-10 h-10 border transition-colors
                ${checkedBoxes[id] ? "border-[#8a8a8a]" : "border-[#c4c4c4]"}`
              }>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-8 h-8 rotate-45 transition-transform ${checkedBoxes[id] ? "scale-100" : "scale-0"}`}
                >
                  <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
              <span className={
                `text-[12px] transition-colors ${checkedBoxes[id] ? "text-[#e7e7e7]" : "text-[#c4c4c4]"}`
              }>
                {label}
              </span>
            </label>
          ))}
        </div>

        <a href="/privacy-policy" className="underline text-sm hover:text-[#ef603d] text-gray-400">
          View our Privacy Policy
        </a>
        <button
          type="submit"
          className="w-full sm:w-1/2 md:w-[40%] text-[18px] font-semibold bg-white text-black hover:bg-[#ef603d] px-6 py-3 rounded-full transition"
        >
          Declare Emergency Now
        </button>

      </form>
    </div>
  );
}

export default Form;