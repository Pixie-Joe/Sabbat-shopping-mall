import React from 'react'
import img from '../image/imgg-gi3-x74d9zeq.png'
import bag from '../image/imgg-gi3-sbzwe5ba.png'
import socks from '../image/imgg-gi3-lrqd4338.png'

const OtherService = () => {
  return (
    <div className="py-20 px-4 md:px-16 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold italic text-red-800 font-serif mb-10 text-center">
        Our Services
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center bg-purple-50 p-6 rounded-lg shadow-md">
          <img className="w-40 h-40 md:w-64 md:h-64 object-cover mb-4" src={img} alt="Capsule Chic" />
          <h3 className="text-xl md:text-2xl text-purple-950 italic font-serif font-extrabold hover:underline cursor-pointer">
            Capsule Chic Collections
          </h3>
          <p className="text-purple-950 mt-2 text-lg font-semibold">$25</p>
          <p className="text-purple-900 text-base mt-4 font-serif">
            Explore our curated selection of stylish hats, expertly crafted to accentuate every wardrobe. Discover exceptional quality and timeless designs in our exclusive collection.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center bg-purple-50 p-6 rounded-lg shadow-md">
          <img className="w-40 h-40 md:w-64 md:h-64 object-cover mb-4" src={bag} alt="Bag Brilliance" />
          <h3 className="text-xl md:text-2xl text-purple-950 italic font-serif font-extrabold hover:underline cursor-pointer">
            Bag Brilliance
          </h3>
          <p className="text-purple-950 mt-2 text-lg font-semibold">$25</p>
          <p className="text-purple-900 text-base mt-4 font-serif">
            Discover stylish, durable bags built to enhance your everyday fashion. Our collection features craftsmanship and flair for every outfit.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-cg4yhenter text-center bg-purple-50 p-6 rounded-lg shadow-md">
          <img className="w-40 h-40 md:w-64 md:h-64 ml-56 md:ml-20 object-cover mb-4" src={socks} alt="Footwear Comfort" />
          <h3 className="text-xl md:text-2xl text-purple-950 italic font-serif font-extrabold hover:underline cursor-pointer">
            Footwear Comfort Solutions
          </h3>
          <p className="text-purple-950 mt-2 text-lg font-semibold">$25</p>
          <p className="text-purple-900 text-base mt-4 font-serif">
            Step into comfort with our premium socks and footwear essentials. Designed for long-lasting ease and timeless appeal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OtherService
