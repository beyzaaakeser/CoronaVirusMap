import React from 'react';
import Container from '../../components/Container';
import { MdOutlineKeyboardArrowRight as Arrow } from 'react-icons/md';
const Hero = () => {
  return (
    <div className="bg-blue-900 text-white  ">
      <Container designs="py-10 md:py-20 grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="uppercase text-4xl">Real Time Covid-19 Updates</h1>
          <p className="text-gray-300">
            Covid-19, also known as the coronavirus, is a respiratory illness
            caused by the SARS-CoV-2 virus. First identified in Wuhan, China, in
            December 2019, it quickly spread worldwide, leading to a global
            pandemic. The virus is primarily transmitted through respiratory
            droplets and can cause symptoms ranging from mild, such as fever and
            cough, to severe, including difficulty breathing and organ failure.{' '}
          </p>
          <div className="flex gap-5">
            <button className="bg-pink-700 py-1 px-4 rounded-sm flex items-center flex-1 hover:bg-pink-600 transition ">
              <span className="flex-1 whitespace-nowrap">
                How to Protect Yourself?
              </span>
              <Arrow className="text-2xl" />
            </button>
            <button className="border py-1 px-4 rounded-sm flex items-center flex-1  hover:bg-gray-300 hover:text-black transition ">
              <span className="flex-1 whitespace-nowrap">Find a Doctor</span>
              <Arrow className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/virus.png" className="w-[300px] md:h-[250px]" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
