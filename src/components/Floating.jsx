import React, { useEffect, useRef, useState } from 'react';
import { Plus, X, Home, Info, Newspaper, Mail } from 'lucide-react';

const menuItems = [
  { href: '/', label: 'Home', icon: <Home className="w-5" /> },
  { href: '/about', label: 'About', icon: <Info className="w-5" /> },
  { href: '/latest', label: 'Latest', icon: <Newspaper className="w-5" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="w-5" /> },
];

const FloatingMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);
  const [showGlobalModal, setShowGlobalModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <div
        ref={menuRef}
        className="fixed bottom-8 right-4 z-50 border border-black bg-white text-black w-[13rem] rounded shadow-lg"
      >
        <div className="flex flex-col h-full">
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="flex h-12 w-full items-center justify-between gap-x-3 border-b border-black px-3 transition-colors hover:bg-[#ef603d]"
          >
            <span>Menu</span>
            <span className="flex h-full aspect-square items-center justify-center border-l border-black">
              {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
            </span>
          </button>

          {isOpen && (
            <div className="border-t border-black">
              {menuItems.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 w-full items-center gap-x-3 px-3 transition-colors hover:bg-[#ef603d]"
                >
                  {icon}
                  {label}
                </a>
              ))}

              <button
                type="button"
                onClick={() => setShowGlobalModal(true)}
                className="focus-ring h-12 w-full flex items-center gap-x-3 border-b border-black px-3 transition-colors hover:underline"
              >
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                >
                  <path d="M1.6684 7.66667H20.3351M1.6684 14.3333H20.3351M10.4441 1C8.57223 3.99957 7.57986 7.46429 7.57986 11C7.57986 14.5357 8.57223 18.0004 10.4441 21M11.5556 1C13.4274 3.99957 14.4198 7.46429 14.4198 11C14.4198 14.5357 13.4274 18.0004 11.5556 21M1 11C1 12.3132 1.25866 13.6136 1.7612 14.8268C2.26375 16.0401 3.00035 17.1425 3.92893 18.0711C4.85752 18.9997 5.95991 19.7363 7.17317 20.2388C8.38642 20.7413 9.68678 21 11 21C12.3132 21 13.6136 20.7413 14.8268 20.2388C16.0401 19.7363 17.1425 18.9997 18.0711 18.0711C18.9997 17.1425 19.7363 16.0401 20.2388 14.8268C20.7413 13.6136 21 12.3132 21 11C21 8.34784 19.9464 5.8043 18.0711 3.92893C16.1957 2.05357 13.6522 1 11 1C8.34784 1 5.8043 2.05357 3.92893 3.92893C2.05357 5.8043 1 8.34784 1 11Z" />
                </svg>
                <span>Choose Global Chapter</span>
              </button>
            </div>
          )}

          <a
            href="/#declaration"
            className="focus-ring group relative flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-[#ef603d]"
          >
            Declare Now
          </a>
        </div>
      </div>

      {showGlobalModal && (
        <div className="fixed inset-0 z-[60] bg-black text-white flex items-center justify-center p-6">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setShowGlobalModal(false)}
            aria-label="Close Global Chapter Modal"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-6xl gap-12">
            <h2 className="font-semibold text-[20px] md:text-[24px] text-start md:text-left md:w-1/2">
              Select Global Chapter:
            </h2>

            <div className="flex flex-col items-start md:items-start space-y-6 md:space-y-8 md:w-1/2 leading-6">
              <a href="https://designdeclares.com" className="text-[2rem] md:text-[3rem] uppercase hover:text-red-400 transition-colors">United Kingdom</a>
              <a href="https://designdeclares.ie" className="text-[2rem] md:text-[3rem] uppercase hover:text-red-400 transition-colors">Ireland</a>
              <a href="https://designdeclares.com.br" className="text-[2rem] md:text-[3rem] uppercase hover:text-red-400 transition-colors">Brasil</a>
              <a href="https://designdeclares.com.au" className="text-[2rem] md:text-[3rem] uppercase hover:text-red-400 transition-colors">Australia</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingMenu;