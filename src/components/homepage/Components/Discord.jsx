import React from "react";
import { FaDiscord } from 'react-icons/fa'
const Discord = () => {
  return (
    <section className="bg-discord w-full h-[340px] flex flex-col items-center justify-center bg-cover bg-opacity-10 md:bg-opacity-100">
      <h2 className="text-white text-5xl font-semibold text-center">
        Ready to start? <br />
        Join us on discord
      </h2>
      <a
        href="https://discord.gg/9nRFqEDn"
        className="mt-6 text-lg  text-white flex items-center gap-2 bg-[#6C94F7] px-6 py-3 rounded-md"
      >
       <FaDiscord className="text-2xl"/> Join our server
      </a>
    </section>
  );
};

export default Discord;
