import React from 'react';
import Image from 'next/image'; 

function HeroSection() {
  return (
    <div>
    
      <div className="bg-[#FFF2CC] flex justify-center items-center px-12 py-0">
      
        <div className="max-w-lg justify-start">
          <h1 className="text-7xl font-bold mb-12">Rocket single seater</h1>
          
          <button className="text-5xl border-b-2 border-black hover:text-gray-700 hover:border-gray-500 mb-12">
            Shop Now
          </button>
        </div>

        
        <div className="w-4/4">
          <Image
            src="/chair.jpg" 
            alt="Rocket single seater"
            width={700}
            height={750} 
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="bg-[#FAF4F4] py-4 px-4">
  <div className="flex justify-center ">
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/table1.jpg"
        width={500}
        height={500}
        alt="Side Table"
        className="w-[500px] h-[500px] object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-4">Side Table</h3>
      <button className="underline hover:bg-gray-300 text-gray-800 font-medium py-4 px-4 rounded mt-4">
        View More
      </button>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/sofa1.jpg"
        width={500}
        height={500}
        alt="Sofa"
        className="w-[500px] h-[500px] object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-4">Side Table</h3>
      <button className="underline hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mt-8">
        View More
      </button>
    </div>
  </div>


</div>

      <section className="bg-[#FFF9E5] py-10">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/asgardsofa.jpg"
                width={800}
                height={800}
                alt="Asgaard Sofa"
                className="w-20px h-auto mb-4"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="  mb-4 sm:text-4xl md:text-5xl">New Arrivals</p>
              <h1 className="text-5xl font-bold mb-6 sm:text-6xl md:text-7xl lg:text-8xl">Asgaard sofa</h1>
              <button className="border-2 border-black text-black py-2 px-4  hover:bg-gray-800">Order Now</button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-cover bg-center py-16 px-12" style={{ backgroundImage: "url('/instabg.jpg')" }}>
        <div className="flex flex-col items-center justify-center text-center text-[#000000]">
          <h1 className="text-[24px] md:text-[36px] font-bold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2">
            Follow our store on Instagram
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
