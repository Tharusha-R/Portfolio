import Image from 'next/image';
import React from 'react'

type Props = {
   icon: string;
   name: string;
   description: string;
};

const ServiceCard = ({description, icon, name}:Props) => {
  return (
    <div
    className=" p-6 rounded-2xl text-white bg-[#0d0d1f] border border-[#1f1f3a]transition-all duration-300 ease-in-out
     hover:border-indigo-500/60 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(99,102,241,0.25)] group"
    >
    {/* Circle background */}
    <div
        className="w-24 h-24 rounded-full bg-[#141432] flex items-center justify-center mb-4 transition-all duration-300group-hover:scale-110
        group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
    >
        <Image
        src={icon}
        alt={name}
        width={60}
        height={60}
        className="brightness-0 invert transition-transform duration-300 group-hover:rotate-6"
        />
    </div>

    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
        {name}
    </h3>

    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
    </p>
    </div>

  );
};

export default ServiceCard