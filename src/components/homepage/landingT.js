import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDiscord } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LandinPageT = () =>{

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return(
        <>
            <main className="bg-gray-900">
                <div className="flex justify-between bg-gray-900 p-4 max-w-7xl m-auto h-5/6">
                    <div className="p-1 sm:p-4 mt-20" data-aos="zoom-in-right" data-aos-duration="1500">
                        <br />
                        <br />
                        <h2 className="text-white text-3xl sm:text-5xl font-semibold">Towards the</h2>
                        <h2 style={{background: '-webkit-linear-gradient(95.73deg, rgba(210, 26, 207, 0.75) 0%, rgba(0, 239, 255, 0.75) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="mt-3 text-5xl sm:text-7xl font-bold drop-shadow-2xl transform transition hover:scale-110 animate-pulse">Revolution</h2>
                        <p className="mt-4 flex gap-2 text-white font-semibold"><img className="h-5 w-5 mt-1" src="https://images.emojiterra.com/twitter/v13.1/512px/1f1ee-1f1f3.png" /> India's first crypto job website</p>
                        <div className="flex gap-3 mt-7 text-lg flex-wrap">
                            <>
                                <button onClick={()=>{navigate('/jobspage')}} style={{background: 'linear-gradient(95.73deg, rgba(210, 26, 207, 0.75) 0%, rgba(0, 239, 255, 0.75) 100%)'}} className="shadow p-1 rounded text-white px-3 font-semibold scale-100 translate-x-4 skew-y-3 mr-10 transform-none sm:transform transform transition hover:scale-110">Find a Job</button>
                                <button onClick={()=>{navigate('/jobform')}} style={{background: '-webkit-linear-gradient(95.73deg, rgba(210, 26, 207, 0.75) 0%, rgba(0, 239, 255, 0.75) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} className="font-semibold rounded p-1 px-3 border-2 border-purple-600 transform transition hover:scale-110 translate-y-1 skew-y-3 transform-none sm:transform mr-10">Post a job</button>
                            </>
                            
                        </div>
                        <br />
                    </div>
                    <div className="text-center p-0 sm:p-4 mt-20" data-aos="fade-left" data-aos-duration="1500">
                        <img className="w-0 sm:w-4/5 m-auto transform transition hover:scale-110" src="https://iili.io/VkREcx.md.png" />
                    </div>
                </div>
                <div onClick={()=>{document.getElementById("1").scrollIntoView();}} className="animate-bounce p-2 w-10 h-10 sm:w-14 sm:h-14 ring-1 ring-slate-200/20 shadow-lg rounded-full m-auto bg-gray-800">
                    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-violet-500 " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
                <br />
                <br />
                <br />
                <a href="https://discord.gg/r9bpXkqSzH" target="_blank" className="m-auto mt-10 text-white animate-pulse hover:animate-none rounded rounded-lg p-1 flex flex-start bg-[#6B7FC5] w-52  transform transition hover:scale-110">
                            <FaDiscord className="ml-1 mt-1 text-3xl" />
                            <p className="mt-1 font-semibold ml-4 text-base text-center">Join the server</p>
                </a>
                <br />
                <div id="1" className="flex justify-between bg-gray-900 p-0 sm:p-4 max-w-6xl m-auto mt-20 sm:flex-nowrap flex-wrap">
                    <div className="p-4 text-white m-auto">
                        <h3 className="text-2xl font-semibold">Problems faced by the developers</h3>
                        <ul className="mt-5">
                            <li className="m-2">👉 Can't find course to learn blockchain development</li>
                            <li className="m-2">👉 Can’t find the best community of Blockchain developers.</li>
                            <li className="m-2">👉 Can’t find the best job portals to provide jobs in only Blockchain.</li>
                            <li className="m-2">👉  No ecosystem for blockchain developers.</li>
                        </ul>
                    </div>
                    <div className="text-center p-4 m-auto" data-aos="flip-left">
                        <img className="w-4/5 sm:w-4/5 m-auto transform transition hover:scale-110" src="https://iili.io/Vk565Q.md.png" alt="Vk565Q.md.png" />
                    </div>
                </div>
                <div className="flex justify-between bg-gray-900 p-2 sm:p-5 max-w-6xl m-auto mt-10">
                    <div className="text-center p-0 sm:p-4 m-auto" data-aos="flip-right">
                        <img className="w-0 sm:w-4/5 m-auto transform transition hover:scale-110" src="https://iili.io/VkYCn1.md.png" alt="VkYCn1.md.png" />
                    </div>
                    <div className="p-4 text-white m-auto">
                        <h3 className="text-2xl font-semibold">Solution by CryptoNaukri for Business</h3>
                        <ul className="mt-5">
                            <li className="m-2">👉 Get enough applications for a jobpost.</li>
                            <li className="m-2">👉 Get application from only Blockchain devolopers.</li>
                            <li className="m-2">👉 Verify candidates potentials using our integrated platform.</li>
                            <li className="m-2">👉 Spend 90% less on Hiring-Training.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-900 p-2 sm:p-5 max-w-7xl m-auto mt-20 sm:flex-nowrap flex-wrap">
                    <div className="p-4 text-white mt-10 m-auto">
                        <h3 className="text-2xl font-semibold">Problems faced by Businesses</h3>
                        <ul className="mt-5">
                            <li className="m-2">👉 Receives 100s of application for a job post.</li>
                            <li className="m-2">👉 Anyone applies who does not have recquired skills.</li>
                            <li className="m-2">👉 Spends around 3-4 lacs pers candidate during hiring training joining.</li>
                        </ul>
                    </div>
                    <div className="text-center p-2 m-auto" data-aos="flip-up">
                        <img className="w-4/5 sm:w-4/5 m-auto transform transition hover:scale-110" src="https://i.ibb.co/MGxCzQb/flame-remote-work-1.png" alt="Remote Work" />
                    </div>
                </div>
                <div className="flex justify-between bg-gray-900 p-2 sm:p-5 max-w-6xl m-auto mt-10">
                    <div className="text-center p-0 sm:p-4" data-aos="flip-up">
                        <img  className="w-0 sm:w-4/5 m-auto transform transition hover:scale-110" src="https://i.ibb.co/BLVTKnL/businessman-1.png" alt="VkYCn1.md.png" />
                    </div>
                    <div className="mt-6 p-4 text-white">
                        <h3 className="text-2xl font-semibold">Solution by CryptoNaukri for Developers</h3>
                        <ul className="mt-5">
                            <li className="m-2">👉 Get enough application for a job post.</li>
                            <li className="m-2">👉 Get application from only Blockchain devolopers.</li>
                            <li className="m-2">👉 Verify candidates potentials using our integrated platform.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LandinPageT;
