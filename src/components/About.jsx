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
      "https://drive.google.com/file/d/1R5Qp_t28ytxA7miB2799Wyr8LJdaJuJd/view?usp=sharing",
      "_blank"
    );
  };
  useEffect(() => {
    if (scrollPosition >= 3) {
      setNamingAnimate([
        "animate__animated",
        "animate__slideOutDown",
        "animate__slow",
      ]);
    }
    if (scrollPosition < 200) {
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
        <div className="x1">
          <div className="sliding_cloud"></div>
        </div>

        <div className="x2">
          <div className="sliding_cloud"></div>
        </div>

        <div className="x3">
          <div className="sliding_cloud"></div>
        </div>

        <div className="x4">
          <div className="sliding_cloud"></div>
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
          // pb={"10rem"}
          p={"0px 0.5rem 10rem"}
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
            Full Stack Web Developer with a rapid learning ability. Proficient in Generative AI, JavaScript, Python and adept at crafting diverse projects for user and admin interfaces. Committed to continuous learning and innovation, with 1200+ hours of coding experience, 450+ hours dedicated to data structures and algorithms, and 100+ hours invested in soft skill development.</Text>
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
                  download={"Mohammad-Hasim-Shaikh-Resume"}
                  className="nav-link resume"
                  id="resume-button-2"
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
