import React, { useRef } from "react";
// import 'antd/dist/antd.css';
import "antd/dist/antd.min.css";
import { Carousel } from "antd";
import "./Carousel.css";
import styled from "styled-components";

import Ico1 from "../../assets/champions/bristin_borah.jpg";
import Ico2 from "../../assets/champions/akash_singh.jpeg";
import Ico3 from "../../assets/champions/tathagat.jpeg";
import linkedin_icon from "../../assets/backbone/linkedin_icon.png";
import {AiFillCaretUp,AiFillCaretDown} from "react-icons/ai"
// import { height } from "@mui/system";

const items = [
  // {
  //   name: "Master Oogway",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At enim donec at morbi vestibulum, sed metus lobortis dignissim. Pellentesque tempor sed aliquam lectus. Sagittis integer velit et non mattis ipsum sed quam leo. Vestibulum, sed tellus nec egestas egestas. Arcu sit quam vel porta lectus vehicula tincidunt sed dignissim. Sagittis, fermentum feugiat cursus dolor. In justo lacus nunc volutpat suspendisse pulvinar semper viverra. Maecenas eget tempor, mauris congue accumsan senectus tincidunt odio leo. Ipsum.",
  //   linkedin: "https://www.linkedin.com/in/bristin-borah-739b63179",
  // },
  {
    name: "Brishtin Borah",
    description:
      <>
      <p className="m-0 mt-2 text-[16px]"><b>Company:</b> Melisoft</p>
      <p className="mx-0 my-1 text-[16px]"><b>Position:</b> Blockchain Engineer</p>
      <p className="m-0 text-[16px]"><b>CTC:</b> 30LPA</p>
      </>,
    linkedin: "https://www.linkedin.com/in/bristin-borah-739b63179",
  },
  {
    name: "Akash Singh",
    description:
      <>
      <p className="m-0 mt-2 text-[16px]"><b>Company:</b> Impactional Games </p>
      <p className="mx-0 my-1 text-[16px]"><b>Position:</b> Blockchain Engineer Intern</p>
      <p className="m-0 text-[16px]"><b>Stipend:</b> 12K</p>
      </>,
    linkedin: "https://www.linkedin.com/in/akash-singh-071850193/",
  },
  {
    name: "Tathagat",
    description:
      <>
      <p className="m-0 mt-2 text-[16px]"><b>Company:</b> Impactional Games </p>
      <p className="mx-0 my-1 text-[16px]"><b>Position:</b> Blockchain Engineer Intern</p>
      <p className="m-0 text-[16px]"><b>Stipend:</b> 12K</p>
      </>,
    linkedin: "https://www.linkedin.com/in/tathagat-926779191/",
  },
];

function Item(props) {
  let img_src = Ico1;

  if (props.item.name === "Brishtin Borah") {
    img_src = Ico1;
  } else if (props.item.name === "Akash Singh") {
    img_src = Ico2;
  }
  else if (props.item.name === "Tathagat") {
    img_src = Ico3;
  }

  return (
    <div className="flex flex-col mx-3 border mt-8 shadow-xl bg-gray-100 border-white p-6 rounded items-center justify-center">
      {/* <div className="">
        <span className="hr2">{props.item.name}</span>
      </div>

      <div className="flex my-14 flex-col md:flex-row md:justify-between items-center">
        <div className="flex flex-row items-center">
          <img className="h-36 md:h-44 mr-6 md:mr-10 rounded-full" src={img_src} alt="champion" />
          <div>
            <h2 className="text-xl">{props.item.name}</h2>
            <a href={props.item.linkedin} target="_blank">
              <img src={linkedin_icon} alt="In" />
            </a>
          </div>
        </div>

          <div className="text-left mt-8 md:mt-0">{props.item.description}</div>
      </div> */}

      <img className="h-36 md:h-44 rounded-full shadow-xl" src={img_src} alt="champion" />

      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl mb-0 text-[#003797] mt-3 font-bold">{props.item.name}</p>
        <a href={props.item.linkedin} target="_blank" className="mb-4">
          <img src={linkedin_icon} alt="In" />
        </a>
        <div className="text-left text-[16px] md:mt-0">{props.item.description}</div>
      </div>

    </div>
  )
}

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    background: black;
  }
  > .slick-dots li.slick-active button {
    background: black;
  }
`;

const CarouselItem = () => {
  const sliderRef = useRef();
  const handlePrev = () => sliderRef.current.prev();
  const handleNext = () => sliderRef.current.next();

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between px-12">
        {/* <div className="flex mb-4 justify-center hover:cursor-pointer" onClick={handlePrev} >
          <AiFillCaretUp />
        </div> */}

        {/* <CarouselWrapper
          autoplay
          dotPosition="bottom"
          className="carousel-style"
          ref={sliderRef}
          style={{width:'auto',}}
        > */}
          {items.map((item, i) => {
            const icons = { Ico1, Ico2 };
            return (
              <>
               <Item key={i} item={item} src={icons[i]} />
             </>
            )
          })}
        {/* </CarouselWrapper> */}

        {/* <div className="flex justify-center hover:cursor-pointer" onClick={handleNext} >
          <AiFillCaretDown />
        </div> */}
      </div>
    </>
  );
};

export default CarouselItem;
