import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import BasicUserDetails from './BasicUserDetails';
import UserApplicationsDetails from './Applications';
// import {
//     FaEnvelope,
//     FaLocationArrow,
//     FaPhoneAlt,
//     FaEdit,
//     FaRegCopy,
//     FaRegShareSquare,
//     FaEye,
//     FaPlus,
//     FaInfoCircle
// } from 'react-icons/fa';

const Profile = () => {
  // will be swtiched to custom hooks later
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const token = cookies.token;

  const API = process.env.REACT_APP_API_ENDPOINT;

  // state variables
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState(1);

  const [viewTab, setViewTab] = useState(0);

  // get user data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUserData = () => {
    setLoading(true);
    if (token) {
      const response = axios.get(`${API}/api/v1/user/loggedInUserDetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      response.then((data) => {
        // console.log(data.data);
        setUser(data.data);
        setLoading(false);
      });
      setUser(response.data);
    } else {
      setLoading(false);
      toast.error('Please Login first !!');
      navigate('/');
    }
  };

  // copy cuopon code
  const copyCode = (ccode) => {
    try {
      navigator.clipboard.writeText(
        `https://www.cryptonaukri.com/auth/userSignUp?code=${ccode}`
      );
      toast.success('Cuopon copied to clipboard');
    } catch (error) {
      toast.error('Something went wrong!!');
    }
  };

  useEffect(() => {
    if (!token) {
      // if not logged in return to home screen
      toast.error('Please Login first !!');
      navigate('/');
    }
    fetchUserData(); // fetch user data if token is present
  }, [token]);

  if (loading) {
      return (
        <main className='bg-gray-800'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='gap-1 text-white max-w-7xl m-auto p-2 block md:flex'>
            <div className='mt-6 w-100 md:w-4/12'>
              <div class='bg-gray-900 border border-blue-800 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
                <div class='animate-pulse flex space-x-4'>
                  <div class='bg-gray-700 h-20 w-20 rounded'></div>
                  <div class='flex-1 space-y-6 py-1'>
                    <div class='h-2 bg-gray-700 rounded'></div>
                    <div class='space-y-3'>
                      <div class='grid grid-cols-3 gap-4'>
                        <div class='h-2 bg-gray-700 rounded col-span-2'></div>
                        <div class='h-2 bg-gray-700 rounded col-span-1'></div>
                      </div>
                      <div class='h-2 bg-gray-700 rounded'></div>
                    </div>
                  </div>
                </div>
                <br />
                <div class='animate-pulse flex space-x-4'>
                  <div class='flex-1 space-y-6 py-1'>
                    <div class='h-2 bg-gray-700 rounded'></div>
                    <div class='space-y-3'>
                      <div class='grid grid-cols-3 gap-4'>
                        <div class='h-2 bg-gray-700 rounded col-span-2'></div>
                        <div class='h-2 bg-gray-700 rounded col-span-1'></div>
                      </div>
                      <div class='h-2 bg-gray-700 rounded'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-100 md:w-8/12">
              <UserApplicationsDetails />
            </div>
          </div>
        </main>
      );
  }
  return(<>
  <main className="bg-gray-800">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="gap-1 text-white max-w-7xl m-auto p-2 block md:flex">
          <div className="mt-6 w-100 md:w-4/12">
              <BasicUserDetails user={user} token={token} />
          </div>
          <div className="mt-6 w-100 md:w-8/12">
              <UserApplicationsDetails
                  appliedAtJobs={user.appliedAtJobs} 
                  appliedAtInternships={user.appliedAtInternships} 
              />
          </div>
        </div>
    </main>
    </>
  );
}

export default Profile;
