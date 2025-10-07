import React, { useEffect, useState } from 'react';
import img from '../Components/image/maining.png';
import contact from '../Components/image/website.png';
import call from '../Components/image/calling.svg';
import { RiArrowRightSLine } from '@remixicon/react';
import dublin from '../Components/image/Dublin.webp';
import singapore from '../Components/image/Singapore.webp';
import madrid from '../Components/image/Madrid.webp';
import india from '../Components/image/India-Office.webp';
import paris from '../Components/image/Paris.webp';
import japan from '../Components/image/Japan.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const offices = [
    {
      img: dublin,
      title: 'Dublin (European HQ)',
      address: "1 Sir John Rogerson's Quay, Dublin 2",
      phone: '+353 1 518 7500',
    },
    {
      img: singapore,
      title: 'Singapore (Asia-Pacific HQ)',
      address: '60 Anson Road, Mapletree Anson',
      phone: '+65 6955 6000',
    },
    {
      img: madrid,
      title: 'Madrid',
      address: 'Paseo de la Castellana 91, 10th Floor, Madrid',
      phone: '+34 910 873 200',
    },
    {
      img: india,
      title: 'India',
      address: 'WeWork Cherry Hills, Bengaluru',
      phone: '000800 050 3669',
    },
    {
      img: paris,
      title: 'Paris',
      address: '91 Boulevard Haussmann, Paris',
      phone: '+33 1 72 73 05 00',
    },
    {
      img: japan,
      title: 'Tokyo',
      address: '4-1, Marunouchi 1-chome, Chiyoda City, Tokyo',
      phone: '+81 3 5656 5900',
    },
  ];

  return (
    <div className="px-4 py-8 w-fit bg-white">
      {/* Banner */}
      <div data-aos="zoom-in" className="relative mb-10">
        <img src={img} alt="Banner" className="w-full rounded-md" />
       
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-lg lg:text-7xl md:text-5xl font-extrabold text-center italic drop-shadow-lg">
            Contact Us at <br className="hidden sm:block" />  Sabbat shop
          </h1>
        </div>

      {/* Contact Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {/* Sales Contact */}
        <div data-aos="fade-left" className="bg-gray-100 rounded-xl shadow p-6 flex-1 text-center">
          <img src={call} alt="Call Icon" className="w-14 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2" data-aos="fade-right">Contact us globally</h2>
          <p>Interested in our services? Give us a call.</p>
          <a href="tel:+35315187500" className="block font-semibold text-gray-700 my-2">
            +353 1 518 7500
          </a>
          <a href="#offices" className="text-blue-500 underline font-semibold">View all Global lines</a>
        </div>

        {/* Support Contact */}
        <div data-aos="fade-right" className="bg-gray-100 rounded-xl shadow p-6 flex-1 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <img src="https://www.hubspot.com/hubfs/Contact%20Us/chat.svg" alt="Chat" className="w-12" />
            <img src="https://www.hubspot.com/hubfs/Contact%20Us/comments.svg" alt="Comments" className="w-12" />
          </div>
          <h2 className="text-xl font-bold mb-2">Contact Customer Support</h2>
          <p data-aos="fade-left">Need help? We're here to assist you.</p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Accordion */}
      <div className="mt-12 border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-bold bg-gray-200 hover:bg-gray-300 transition"
          data-aos="fade-up"
        >
          How to find this office <RiArrowRightSLine className={`ml-2 transform transition ${isOpen ? 'rotate-90' : ''}`} />
        </button>

        {isOpen && (
          <div className="p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1600178607697!2d-71.076492!3d42.3661989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708dcdd7f72b%3A0x6a19c9890f0ed33a!2s2%20Canal%20Park%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sus!4v1714193701312!5m2!1sen!2sus"
                className="w-full h-72 rounded-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div>
                <h3 className="text-lg font-semibold mb-2">Global Headquarters</h3>
                <p>2 Canal Park, Cambridge, MA 02141, USA</p>
                <p>Phone: +1 888 HUBSPOT</p>
                <p>Fax: +1 617 812 5820</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Other Branches */}
      <div id="offices" className="mt-16">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8" data-aos="zoom-in">Our Other Branches</h2>

        {offices.map((office, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-6 items-center my-8" data-aos="fade-up">
            <div className={`${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
              <img src={office.img} alt={office.title} className="rounded-lg shadow w-full" />
            </div>
            <div className={`${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
              <h3 className="text-xl font-semibold">{office.title}</h3>
              <p className="mt-2">{office.address}</p>
              <a href={`tel:${office.phone}`} className="text-blue-600 font-semibold underline mt-2 inline-block">
                {office.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
