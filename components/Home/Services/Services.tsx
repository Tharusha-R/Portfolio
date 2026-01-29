import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className="text-center text-white font-bold">
        <span className="block text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-indigo-500  to-indigo-800  bg-clip-text text-transparent
         xl:text-5xl text-primary"
          data-aos="fade-up"  
         >
          What I Can Do For You
        </span>
        <span className="block mt-3 text-sm sm:text-base md:text-lg xl:text-xl font-normal text-gray-300"
         data-aos="fade-up" data-aos-delay="200" 
        >
          Crafting seamless, efficient, and visually stunning digital experiences.
        </span>
      </h1>
      <div className=' w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'
       data-aos="fade-right" data-aos-delay="300" 
      > 
         <div>
           <ServiceCard
            icon="/images/s1.png"
            name="UI/UX Design"
            description="Crafting intuitive and visually appealing interfaces that ensure smooth user experiences across all devices."
            />
         </div>

         <div>
           <ServiceCard
            icon="/images/s2.png"
            name="Mobile App Development"
            description="Building responsive, high-performance apps for Android and iOS with seamless functionality and engaging designs."
            />
         </div>

         <div>
           <ServiceCard
            icon="/images/s3.png"
            name="Backend Development"
            description="Developing robust APIs and databases with Node.js, Express, and MongoDB to power scalable and secure applications."
            />
         </div>

         <div>
           <ServiceCard
            icon="/images/s4.png"
            name="Frontend Development"
            description="Creating interactive web interfaces using React.js and Tailwind CSS, focusing on clean code, responsive layouts, and smooth user experience."
            />
         </div>

      </div>
    </div>
  )
}

export default Services