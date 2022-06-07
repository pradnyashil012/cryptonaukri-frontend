import { useState } from 'react';
import EditProfile from './EditProfile'

const BasicUserDetails = ({user, token}) =>{

    return(<>
    <div className="bg-gray-900 p-2 rounded">
        <div className="flex gap-2">
            <div>
                <img className={`w-20 h-20 rounded shadow-lg`} src={`https://avatars.dicebear.com/api/initials/${user?.firstName +" "+ user?.lastName}.svg`} />
            </div>
            <div className='gap-2'>
                <span className={`text-md`}>{user?.firstName + " " +user?.lastName}</span><br/>
                <span className="text-xs text-gray-200">{user?.email}</span><br/>
                <span className="text-xs text-gray-200">{user?.phoneNumber}</span><br/>
                {/* <span className="text-xs text-gray-200">{user?.location}</span><br/> */}
                {/* <span className="tetx-base text-blue-500">Community Rank : 130</span> */}
            </div>
        </div>
        

        <div className="py-3 px-1">

            <span>Resume</span><br/>
            {user?.userResume === null && 'Add a Resume'}
            {user?.userResume !== null && <a className="text-red-500 text-xs" href={user?.userResume?.links?.otherLinks[0]}>{user?.userResume?.links?.otherLinks[0].substring(0, 60)}...</a>}
        </div>

        <EditProfile user={user} token={token} />
        {/* <div className="mt-6">
            <span>Community Stats</span>
        </div> */}
    </div>
    </>);
}

export default BasicUserDetails;