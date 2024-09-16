import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-between'}}>
     
      <p>
       
        <a href="mailto:sdeabhinandan@gmail.com" style={{ color: 'gray', textDecoration: 'none' }}>
        sdeabhinandan@gmail.com
        </a>
      </p>
      <p>
     
        <a href="tel:+917408331278" style={{ color: 'gray', textDecoration: 'none' }}>
          7408331278
        </a>
      </p>
      <p>
       
        <a href="your-resume-link.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'gray', textDecoration: 'none' }}>
          Download Resume
        </a>
      </p>
    </div>
  );
};

export default Contact;
