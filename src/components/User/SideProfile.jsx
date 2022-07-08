import axios from "axios";
import React, { useState, useEffect } from "react";
import {FiGithub} from 'react-icons/fi';
import {BiGitRepoForked} from "react-icons/bi"
import {AiOutlineStar} from "react-icons/ai"
import {RiLinksFill} from "react-icons/ri"

const SideProfile = (props) => {
  const { githubUrl } = props;
  // const githubUrl = "https://github.com/akshay782";

  var github_url_parts = githubUrl.split('/')
  const github_username = github_url_parts[3];
  
  const [projects, setProjects] = useState({loading: true, projectslist:[]})

  function fetchGithubPinRepos(github_username) {
    // https://gh-pinned-repos.egoist.sh/?username=<github_username>
    axios.get(`https://gh-pinned-repos.egoist.sh/?username=${github_username}`)
    .then((response)=>{
      // console.log(response.data);
      setProjects({
        loading: false,
        projectslist: response.data
      })
    })
    .catch((error)=>{
      console.log(error);
    })
    
  }

  
  useEffect(()=>{
    fetchGithubPinRepos(github_username);
  }, [github_username])

  return (
    <div className="bg-gray-900 p-2 rounded ">
      <div className="flex justify-center items-center">
        {/* <FiGithub />  */}
        <span className="ml-2">Your <span className="underline underline-offset-4 text-cyan-600">GitHub</span> Projects</span>
      </div>

      {
        githubUrl === "" ?
        <div className="text-center mt-2">Update your profile</div> :
        <div className="mt-2">
          {
            projects.projectslist.map((project, key)=>{
              return (
              <div className="p-2 border-b mb-2">
                <div>{project.repo}</div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <BiGitRepoForked /> <span className="text-gray-400 text-sm mr-2">{project.forks}</span>
                    <AiOutlineStar /> <span className="text-gray-400 text-sm">{project.stars}</span>
                  </div>
                  <div className="flex items-center">
                    {
                      project.website === undefined ? null :
                      <a href={project.website}><RiLinksFill /></a>
                    }
                    <a href={project.link} className="ml-2"><FiGithub /></a>
                  </div>
                </div>
                <div className="text-gray-400 text-base">{project.description}</div>
              </div>
              )
            })
          }
            
        </div>
      }
    </div>
  );
};

export default SideProfile;