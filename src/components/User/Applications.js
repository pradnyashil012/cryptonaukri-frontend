import { useState } from "react";

const UserApplicationsDetails = () =>{

    const [activeTab, setActiveTab] = useState(1);

    return(<>
    <div className="bg-gray-900 p-2 rounded ">
        <span>My Applications</span>

        {/* <div className="flex gap-4 mt-4">
            <button 
                className={`rounded p-1 text-xs text-center w-full ${activeTab===3 && 'text-blue-700'} hover:bg-gray-700`}
                onClick={()=>setActiveTab(3)}
            >Jobs</button>
            <button 
                className={`rounded p-1 text-xs text-center w-full ${activeTab===4 && 'text-blue-700'} hover:bg-gray-700`}
                onClick={()=>setActiveTab(4)}
            >Internships</button>
        </div> */}
        <div className="flex gap-4 mt-4">
            <button 
                className={`rounded p-1 text-xs text-center w-full ${activeTab===1 && 'bg-gray-700'} hover:bg-gray-700`}
                onClick={()=>setActiveTab(1)}
            >Active</button>
            <button 
                className={`rounded p-1 text-xs text-center w-full ${activeTab===2 && 'bg-gray-700'} hover:bg-gray-700`}
                onClick={()=>setActiveTab(2)}
            >Archived</button>
        </div>

        <div className="mt-10 flex flex-col gap-3 overflow-y-auto h-screen p-3">

            {
                [1,1,1,1,1,1,1,1,1].map((i, index)=>{
                    return(<>
                    <div className="w-full p-2 bg-gray-800">
                        <span className="text-md">{index+1}. BlockChain Developer - Intern </span>
                        <span className="text-yellow-500 text-md mr-1"> ~Amazon</span><br/>
                        <span className="text-cyan-500 text-xs">Applied On: 12 March 2022</span><br/>
                        <div className="flex gap-2">
                            <span className="bg-green-600 text-white text-xs rounded-full px-1">Active</span>
                            <span className="bg-red-600 text-white text-xs rounded-full px-1">Rejected</span>
                            <span className="bg-gray-600 text-white text-xs rounded-full px-1">In-Processing</span>
                            <span className="bg-blue-600 text-white text-xs rounded-full px-1">Needs Action</span>
                        </div>
                    </div>
                    </>);
                })
            }
            


        </div>


        

    </div>
    </>);
}

export default UserApplicationsDetails;