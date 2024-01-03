import { Box, Heading, Image } from "@chakra-ui/react";
import React, { memo,  useEffect,  useRef, useState  } from "react";
import "../styles/simplecloud.css";

import { motion, useTransform, useScroll } from "framer-motion";
// icons
import htmlIcon from "../image/htmlIcon.png";
import cssIcon from "../image/cssIcon.png";
import javascriptIcon from "../image/javascriptIcon.png";
import mongodbIcon from "../image/mongodbIcon.png";
import expressIcon from "../image/expressIcon.png";
import reactIcon from "../image/reactIcon.png";
import nodejsIcon from "../image/nodejsIcon.png";
import reduxIcon from "../image/reduxIcon.png";
import gitIcon from "../image/gitIcon.png";
import githubIcon from "../image/githubIcon.png";
import androidIcon from "../image/androidIcon.png";
import postmanIcon from "../image/postmanIcon.png";
import firebaseIcon from "../image/firebaseIcon.png";
import cypressIcon from "../image/cypressIcon.png";
import promptIcon from "../image/promptIcon.png";
import pythonIcon from "../image/pythonIcon.png";
import flaskIcon from "../image/flaskIcon.png";
import { styled } from "styled-components";
const arrSkill = [
  {
    id: 1,
    skill: "HTML",
    img: htmlIcon,
  },
  {
    id: 2,
    skill: "CSS",
    img: cssIcon,
  },
  {
    id: 3,
    skill: "JavaScript",
    img: javascriptIcon,
  },
  {
    id: 4,
    skill: "MongoDB",
    img: mongodbIcon,
  },
  {
    id: 9,
    skill: "Prompt Eng.",
    img: promptIcon,
  },
  {
    id: 10,
    skill: "Python",
    img: pythonIcon,
  },
  {
    id: 11,
    skill: "Flask",
    img: flaskIcon,
  },
  {
    id: 5,
    skill: "Express",
    img: expressIcon,
  },
  {
    id: 6,
    skill: "React.js",
    img: reactIcon,
  },
  {
    id: 7,
    skill: "Node.js",
    img: nodejsIcon,
  },

  {
    id: 8,
    skill: "Redux",
    img: reduxIcon,
  },
];
const arrToolSkill = [
  {
    id: 1,
    skill: "Git",
    img: gitIcon,
  },
  {
    id: 2,
    skill: "GitHub",
    img: githubIcon,
  },
  {
    id: 3,
    skill: "Android",
    img: androidIcon,
  },
  {
    id: 4,
    skill: "Postman",
    img: postmanIcon,
  },
  {
    id: 5,
    skill: "Firebase",
    img: firebaseIcon,
  },
  {
    id: 6,
    skill: "Cypress",
    img: cypressIcon,
  },
];

export const Skills = () => {



  return (
    <Box m={"2rem 0"} id="skills" height={'300vh'}>
      <Box >
        <Heading color={"brand.400"}>Tech Stacks</Heading>
      </Box>
      <DIV>
<HorizontalScrollCarousel />
    
      </DIV>
    </Box>
  );
};
const HorizontalScrollCarousel = memo(()=>{
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


  return (
<SECTION ref={targetRef}>
      <div className="wrapper">
        
        <motion.div style={{ x }} className="small-wrapper">
         <SkillCard />
        </motion.div>
      </div>
    </SECTION>
  )
})

const SkillCard = memo(()=>{

  return (
    <>
      {arrSkill.map(({ id, skill, img }) => (
                <div key={id} className="x2 skills-card" >
                  <div className="sliding_cloud" >
                    <p className="skills-card-name">{skill}</p>
                    <Image
                      position={"absolute"}
                      top={16}
                      w={"40%"}
                      className="skills-card-img"
                      filter={"drop-shadow(-5px 5px 0px #000000)"}
                      left={24}
                      zIndex={1}
                      src={img}
                    ></Image>
                  </div>
                </div>
              ))}
        {arrToolSkill.map(({ id, skill, img }) => (
                <div key={id} className="x2 skills-card" >
                  <div className="sliding_cloud" >
                    <p className="skills-card-name">{skill}</p>
                    <Image
                      position={"absolute"}
                      zIndex={1}
                      top={16}
                      w={"40%"}
                      className="skills-card-img"
                      // animation={"roatedImage 5s linear infinite"}
                      filter={"drop-shadow(-5px 5px 0px #000000)"}
                      left={24}
                      src={img}
                    ></Image>
                  </div>
                </div>
              ))}
              </>
  )
})
const SECTION = styled.section`
 position: relative;
 height: 300vh;

.wrapper{
    position: sticky;
    top: 0;
    display: flex;
    height: 100vh;
    align-items: center;
    overflow: hidden;

}
.small-wrapper{
  display: flex;

}
`
const DIV = styled.div`
  position: relative;

  @-webkit-keyframes roatedImage {
    0% {
      transform: rotate(-20deg);
    }
    25% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-20deg);
    }
  }
 
  .x2 {
    animation: none;
    z-index: 1;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
  }
  .sliding_cloud {
    text-align: center;
  }
  .sliding_cloud > p {
    position: absolute;
    z-index: 1;
    margin: auto;
    width: 95%;
    font-size: 3rem;
  }
`;
