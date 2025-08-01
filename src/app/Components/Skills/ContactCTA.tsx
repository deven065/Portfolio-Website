import React from 'react';

export const ContactCTA = () => {
  return (
    <section className="bg-white     py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Interested in collaborating? Let&apos;s discuss how my skills can help bring your project to life.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};
