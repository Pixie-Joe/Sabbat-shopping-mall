import React, { useEffect } from 'react';
import hat from '../image/imgg-gi3-x74d9zeq.png';
import bag from '../image/imgg-gi3-sbzwe5ba.png';
import socks from '../image/imgg-gi3-lrqd4338.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Body = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      name: 'Elegant Fedora',
      price: 25,
      image: hat,
    },
    {
      name: 'Urban Carry-On',
      price: 25,
      image: bag,
    },
    {
      name: 'Comfyfits Daily',
      price: 25,
      image: socks,
    },
  ];

  return (
    <section className="w-full  mt-[100px] px-4 py-10">
      <div className="max-w-screen-lg mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-red-800 italic mb-10 text-center">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {products.map((product, idx) => (
            <article
              key={idx}
              data-aos="zoom-in"
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full mx-auto object-cover"
              />
              <h3 className="text-2xl md:text-3xl text-purple-950 italic font-serif font-extrabold mt-6 hover:underline cursor-pointer">
                {product.name}
              </h3>
              <p className="text-purple-950 mt-2 text-lg">${product.price.toFixed(2)}</p>
            </article>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="flex justify-center mt-12">
          <NavLink to={`/shop`} >
          <button className="bg-purple-950 text-white text-lg font-serif rounded-full px-6 py-3 hover:bg-purple-900 hover:opacity-90 transition">
            Shop All
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Body;
