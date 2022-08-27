import React from "react";  
import "./LandingPage.module.css";
import Hero from "./Components/Hero";
import StartupIssue from "./Components/StartupIssue";
import StartupSolution from "./Components/StartupSolution";
import Discord from "./Components/Discord";
import Goal from "./Components/Goal";
import Problem from "./Components/Problem";
import developerProblem from "./Assets/developerProblem.png";
import developerSolution from "./Assets/programmer-solution.png";
import businessProblem from "./Assets/business-problmem.png";
import businessSolution from "./Assets/business-solution.png"
import Web3Hack from "./Components/Web3Hack";
<<<<<<< HEAD
=======
import Header from "./Components/Header";
>>>>>>> dev
const landingPage = () => {
  const developerProblems = [
    "Affordable training for Web3 development.",
    "Organized community of Web3 developers.",
    "Web3 development experience.",
    "Global web3 development jobs.",
    "Fair pay in IT service-based companies of Tier 3 countries.",
  ];
  const developerSolutions = [
    "Web3 development from the best educators affordably.",
    "Global Web3 developer community.",
    "Platform to gain Web3 development experience.",
    "Easy access to global web3 development jobs.",
  ];
  const businessProblems = [
    "Receive 100s of applications for a job post.    ",
    "Applicants don't have the required skills.  ",
    "A lot of money and time on hiring and training candidates for the post."

  ];
  const businessSolutions = [
    "Get applications from only Blockchain developers.",
    "Verify candidates' potential using our integrated platform.",
    "Spend negligible Time and Money on Hiring and Training. ",
    "Hire directly from our Bootcamp."

  ]
  return (
    <div>
      {/* <Header /> */}
    <div className="testing-homepage"> 
      <Hero />
      {/* <Web3Hack />  */}
      <StartupIssue />
      <StartupSolution />
      <Problem
        image={developerProblem}
        title="Problems faced by the Developers"
        side={true}
        list={developerProblems}
        backgroundColor="#E9EEF6"
        paragraph="Web3 Enthusiasts dont have:"
      />
      <Problem
        title="Solutions by Cryptonaukri for developers"
        image={developerSolution}
        backgroundColor="#ffffff"
        list={developerSolutions}
        side={false}
        paragraph="Cryptonaukri provides "
      />
      <Problem
        backgroundColor="#E9EEF6"
        side={true}
        image={businessProblem}
        title="Problems faced by businesses"
        paragraph="Web3 Businesses in general"
        list={businessProblems}
      /> 
      <Problem 
        image={businessSolution}
        side={false}
        title="Solution by CryptoNaukri for Businesses"
        backgroundColor="#ffffff"
        paragraph="CryptoNaukri provides"
        list={businessSolutions}
      /> 
      <Goal />
      <Discord />
      </div>
    </div>
  );
};

export default landingPage;
