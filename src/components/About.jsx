import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import "../styles/simplecloud.css";
import profile from "../image/profile.png";
import download from "../image/download.png";
import { useState } from "react";
import { useEffect } from "react";
export const About = ({ scrollPosition }) => {
  // "- Include your name, only 1 professional photo, and a formal introduction of 2-3 lines?.
  // - Check if you're About me/Homepage section is responsive on different screen sizes"
  const [namingAnimate, setNamingAnimate] = useState([
    "animate__animated",
    "animate__slideInUp",
    // "animate__flipInX",
    // "animate__slow",
  ]);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1z1qbDKba_Q4dyfDhnUGpgeJ9QU7ddROW/view?usp=sharing",
      "_blank"
    );
  };
  useEffect(() => {
    if (scrollPosition >= 3) {
      console.log("animateing");
      setNamingAnimate([
        "animate__animated",
        "animate__slideOutDown",
        "animate__slow",
      ]);
    }
    if (scrollPosition < 10) {
      setNamingAnimate([
        "animate__animated",
        "animate__slideInUp",
        "animate__slow",
      ]);
    }
  }, [scrollPosition]);

  return (
    <div id="about" className="about section">
      <div id="background-wrap">
        <div class="x1">
          <div class="sliding_cloud"></div>
        </div>

        <div class="x2">
          <div class="sliding_cloud"></div>
        </div>

        <div class="x3">
          <div class="sliding_cloud"></div>
        </div>

        <div class="x4">
          <div class="sliding_cloud"></div>
        </div>
      </div>
      <Box>
        <Box
          pt={"10rem"}
          // mb={"1rem"}
          color={"brand.400"}
          zIndex={10}
          position={"relative"}
        >
          <Heading visibility={"hidden"}>About me</Heading>
        </Box>
        <Flex
          pb={"10rem"}
          zIndex={10}
          position={"relative"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          direction={[
            "column",
            "column",
            "column",
            "column",
            "column",
            "row",
            "row",
          ]}
        >
          <Box maxW={"478px"} color={"brand.400"}>
            <Heading id="user-detail-name" className={namingAnimate.join(" ")}>
              Mohammad Hasim Shaikh
            </Heading>
            <Text
              fontSize={"lg"}
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "left",
                "left",
              ]}
            >
              Full Stack Web Developer
            </Text>
            <br />
            <Text
              id="user-detail-intro"
              textAlign={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "left",
                "left",
              ]}
            >
              versatile, Passionate Full Stack Web Developer with a robust
              command of Frontend and Backend technologies. Committed to staying
              current with industry trends and tech for delivering innovative
              solutions. Skilled in the MERN stack and willing to start a career
              with an organization that provides an opportunity to improve
              skills and knowledge gained as well as to grow along with the
              organization's goal.
            </Text>
            <Flex
              mt={"1rem"}
              alignItems={"center"}
              justifyContent={[
                "center",
                "center",
                "center",
                "center",
                "center",
                "left",
                "left",
              ]}
            >
              <Box
                p={".8rem"}
                color={"brand.400"}
                bg={"brand.300"}
                borderRadius={"10px"}
                onClick={handleClick}
              >
                <a
                  href={require("../image/resume.pdf")}
                  download={"Mohammad-Hasim-Shaikh-resume"}
                  className="nav-link resume"
                  id="resume-button-1"
                >
                  <Flex alignItems={"center"} gap={".2rem"}>
                    <Text>Resume</Text>
                    <Image
                      src={download}
                      w={"15px"}
                      h={"15px"}
                      alt="download"
                    />
                  </Flex>
                </a>
              </Box>
            </Flex>
          </Box>
          <Box>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 4fr 1fr 1fr",
                maxWidth: "300px",
              }}
            >
              <li
                style={{
                  gridRow: "2 / span 2",
                  gridColumn: "2 / span 2",
                }}
              >
                <div className="aftercloud"></div>
              </li>
              <li style={{ gridRow: "3 / span 1", gridColumn: "1 / span 3" }}>
                <div className="cloud"></div>
              </li>
              <li style={{ gridRow: "2 / span 2", gridColumn: "3 / span 2" }}>
                <div className="beforecloud"></div>
              </li>
              <li
                style={{
                  gridRow: "1 / span 3",
                  gridColumn: "1 / span 6",
                }}
              >
                <Image
                  className="home-img Profile"
                  rounded={"60px"}
                  ml={".8rem"}
                  w={"100%"}
                  src={profile}
                  alt="Mohammad Hasim Shaikh"
                />
              </li>
            </ul>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};
