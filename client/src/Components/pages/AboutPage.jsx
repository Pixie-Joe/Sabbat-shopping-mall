// src/pages/AboutPage.js
import React from "react";

const AboutPage = () => {
  const testimonials = [
    {
      name: "Sophia Johnson",
      role: "Fashion Blogger",
      text: "Sabbat Shop has completely transformed my wardrobe! The quality and personalized service are unmatched.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      text: "Booking an appointment was so smooth, and the fitting experience was excellent. Highly recommend!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Ali",
      role: "Student",
      text: "I love the kids' section! Affordable yet stylish clothes for my little ones. Customer service is always friendly.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* About Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Sabbat Shop</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Sabbat Shop, we are committed to providing an exceptional shopping experience that goes beyond the ordinary. From the moment you step into our store—whether online or in person—you’ll discover a carefully curated selection of high-quality clothing, accessories, and lifestyle products designed to elevate your personal style.

                        Our journey began with a simple belief: fashion should empower people. Every piece we offer is chosen with thought and purpose, blending style, comfort, and functionality to suit every occasion—be it casual everyday wear, professional outfits, or special event attire.

                        What truly sets us apart is our dedicated team of fashion experts. With years of industry knowledge and an eye for trends, they work tirelessly to ensure each customer finds exactly what they’re looking for. Whether it’s helping you select the perfect outfit, offering style advice, or tailoring a shopping experience to your unique preferences, our goal is to make you feel confident and inspired.

                        Beyond products, Sabbat Shop is about community and connection. We believe that every customer deserves more than just clothes—they deserve a personalized journey that celebrates individuality. That’s why we’ve designed features like appointment booking for fittings, personalized consultations, and curated collections that bring out the best in every shopper.

                        At Sabbat Shop, you’re not just buying fashion—you’re joining a family that values authenticity, creativity, and service excellence. We invite you to explore our collections, book your appointments, and experience shopping redefined.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
