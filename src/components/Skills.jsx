import { Box, Heading, Image} from "@chakra-ui/react";
import React from "react";
// import "../styles/smallcloud.css";
import "../styles/simplecloud.css";

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
export const Skills = () => {
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
      img: promptIcon
    },
    {
      id: 10,
      skill: "Python",
      img: pythonIcon
    },
    {
      id: 11,
      skill: "Flask",
      img: flaskIcon
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
  return (
    <Box m={"2rem 0"} id="skills">
      <Box mb={"2rem"}>
        <Heading color={"brand.400"}>Tech Stacks</Heading>
      </Box>

      <DIV>
        <div id="background-wrap" style={{ paddingTop: "0px" }}>
          <div className="animation-container">
            {arrSkill.reverse().map(({ id, skill, img }) => (
              <div key={id} className="x2 skills-card">
                <div className="sliding_cloud">
                  <p className="skills-card-name" >{skill}</p>
                  <Image
                    position={"absolute"}
                    top={16}
                    w={"40%"}
                    className="skills-card-img"
                    animation={"roatedImage 5s linear infinite"}
                    filter={"drop-shadow(-10px 5px 0px #000000)"}
                    left={24}
                    src={img}
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="background-wrap">
          <div className="animation-container">
            {arrToolSkill.reverse().map(({ id, skill, img }) => (
              <div key={id} className="x2 skills-card">
                <div className="sliding_cloud">
                  <p className="skills-card-name">{skill}</p>
                  <Image
                    position={"absolute"}
                    zIndex={1}
                    top={16}
                    w={"45%"}
                    className="skills-card-img"
                    animation={"roatedImage 5s linear infinite"}
                    filter={"drop-shadow(-10px 5px 0px #000000)"}
                    left={24}
                    src={img}
                  ></Image>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DIV>
    </Box>
  );
};

const DIV = styled.div`
  position: relative;
  height: 20rem;

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
  #background-wrap {
    padding-top: 200px;
  }
  .animation-container {
    display: flex;
    animation: skillAnimateCloud 30s linear infinite;
    animation-delay: -1000s;
    overflow: hidden;
    height: 200px;
    position: relative;
  }
  .x2 {
    animation: none;
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
