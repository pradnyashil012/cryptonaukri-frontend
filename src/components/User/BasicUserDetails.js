import { useState } from 'react';
import EditProfile from './EditProfile'
import {FiLinkedin, FiGithub, FiTwitter} from 'react-icons/fi'


const BasicUserDetails = ({user, token}) =>{

    return(<>
    <div className="bg-gray-900 p-2 rounded">
        <div className="flex gap-2">
            <div className='w-20 h-20'>
                <img className='w-full h-full rounded shadow-lg' src={`https://avatars.dicebear.com/api/initials/${user?.firstName +" "+ user?.lastName}.svg`} />
            </div>
            <div className='flex flex-col h-20 justify-between'>
                <div>
                    <div className='text-md'>{user?.firstName + " " +user?.lastName}</div>
                    <div className='text-xs text-gray-200'>{user?.email}</div>
                </div>
                
                <div className='flex flex-row justify-start'>
                    {
                        user.userResume.links.github === '' ? 
                        null : 
                        <a href={user.userResume.links.github} className='flex items-center'><FiGithub /></a>
                    }
                    {
                        user.userResume.links.linkedin === '' ? 
                        null : 
                        <a href={user.userResume.links.linkedin} className='ml-3 flex items-end'><FiLinkedin /></a>
                    }         

                       {/* tell backend guy to include twitter field in schema */}
                    {/* {
                        user.userResume.links.twitter === '' ? 
                        null : 
                        <a href={user.userResume.links.linkedin} className='ml-3 flex items-end'><FiTwitter /></a>
                    }                     */}
                    
                </div>

                {/* <div>{user?.phoneNumber}</div>
                <span className='text-md'>{user?.firstName + " " +user?.lastName}</span><br/>
                <span className="text-xs text-gray-200">{user?.email}</span><br/>
                <span className="text-xs text-gray-200">{user?.phoneNumber}</span><br/>
                <span className="text-xs text-gray-200">{user?.location}</span><br/>
                <span className="tetx-base text-blue-500">Community Rank : 130</span> */}
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