import React from "react";
import heroImg from "../Assets/herobg.png";
import RegularButton from "./RegularButton";
const Hero = () => {
  return (
    <main className="min-h-screen min-w-screen  bg-white relative ">
      {" "}
   {" "}
      <div className="w-full absolute top-0 left-0 z-50">    <div className="container     grid grid-cols-2 gap-12 h-screen ">
              <div className="min-w-full flex min-h-full  flex-col justify-center">
                  <h1 className="text-[110px] font-semibold text-black leading-[100px]  mb-6">Towerds the  <br /><span className="text-[#0351A3] font-bold " >Revolution</span></h1>
                  <h2 className="  text-3xl leading-8 font-normal">On the mission to convert 1M+ Web3 enthusiasts to Web3 developers by 2025</h2>
                  <div className="mt-6 w-full flex justify-start gap-6"><RegularButton>Post a job</RegularButton>
                  <RegularButton>Find a job</RegularButton></div>
              </div>
          </div></div>
          <img src={heroImg} className="absolute top-10 opaicity-30 z-0" alt="" />
    </main>
  );
};

export default Hero;
