import React from 'react';

const Section = ({ title, children, id }) => { // Add 'id' here
  return (
    // And add it here
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-light text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default Section;