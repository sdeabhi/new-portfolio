import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-5 font-sans flex flex-col md:flex-row md:justify-between">
      <p className="mb-2 md:mb-0">
        <a href="mailto:sdeabhinandan@gmail.com" className="text-gray-500 no-underline">
          sdeabhinandan@gmail.com
        </a>
      </p>
      <p className="mb-2 md:mb-0">
        <a href="tel:+917408331278" className="text-gray-500 no-underline">
          7408331278
        </a>
      </p>
      <p>
        <a
          href="https://drive.google.com/file/d/1nHx4u4vx7JEMFfm0P_ZfeGeLuAKPzHVe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 no-underline"
        >
          Download Resume
        </a>
      </p>
    </div>
  );
};

export default Contact;
