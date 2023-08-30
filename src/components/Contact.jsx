import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/simplecloud.css";
// icon
import linkedinIcon from "../image/linkedinIcon.png";
import githubIcon from "../image/githubIcon.png";
import callIcon from "../image/callIcon.png";
import locationIcon from "../image/locationIcon.png";
import emailIcon from "../image/emailIcon.png";

// import emailIcon from "../image/icon.png";
export const Contact = () => {
  return (
    <Box mt={"2rem"} pb={"2rem"} color={"brand.400"} id="contact">
      <Box>
        <Heading>Contact</Heading>
      </Box>
      <Flex
        mt={"2rem"}
        justifyContent={"center"}
        gap="5rem"
        className="contactflex"
        alignItems={"center"}
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
        <Box>
          <ul
            className="contactul"
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 4fr 1fr 1fr",
              maxWidth: "400px",
            }}
          >
            <li
              style={{
                gridRow: "2 / span 2",
                gridColumn: "2 / span 2",
              }}
            >
              <div
                className="contactaftercloud"
                style={{
                  marginTop: "2rem",

                  width: "10rem",
                  height: "10rem",
                }}
              ></div>
            </li>
            <li style={{ gridRow: "3 / span 1", gridColumn: "1 / span 3" }}>
              <div
                className="contactcloud"
                style={{ width: "25rem", height: "10rem" }}
              ></div>
            </li>
            <li style={{ gridRow: "2 / span 2", gridColumn: "3 / span 6" }}>
              <div
                className="contactbeforecloud"
                style={{ marginLeft: "3rem", marginBottom: "2rem" }}
              ></div>
            </li>
            <li
              className="contactcontext"
              style={{
                gridRow: "3 / span 2",
                gridColumn: "3 / span 5",
                padding: ".5rem",
              }}
            >
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/mohammad-hasim-shaikh-b16279251/"
                target="blank"
              >
                <Flex alignItems={"center"} gap={"10px"}>
                  <Image
                    className=""
                    w={"20%"}
                    src={linkedinIcon}
                    alt="LinkedIn"
                  />

                  <Text fontSize={"lg"}>Linkedin</Text>
                </Flex>
              </a>
              <a
                href="https://github.com/Hasims2001"
                id="contact-github"
                target="blank"
              >
                <Flex alignItems={"center"} gap={"10px"}>
                  <Image
                    className=""
                    // ml={".8rem"}
                    w={"20%"}
                    src={githubIcon}
                    alt="githubIcon"
                  />

                  <Text fontSize={"lg"}>Github</Text>
                </Flex>
              </a>
            </li>
          </ul>
        </Box>
        <Box>
          <ul
            className="contactul"
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 4fr 1fr 1fr",
              maxWidth: "400px",
            }}
          >
            <li
              style={{
                gridRow: "2 / span 2",
                gridColumn: "2 / span 2",
              }}
            >
              <div
                className="contactaftercloud"
                style={{
                  marginTop: "2rem",

                  width: "10rem",
                  height: "10rem",
                }}
              ></div>
            </li>
            <li style={{ gridRow: "3 / span 1", gridColumn: "1 / span 3" }}>
              <div
                className="contactcloud"
                style={{ width: "25rem", height: "10rem" }}
              ></div>
            </li>
            <li style={{ gridRow: "2 / span 2", gridColumn: "3 / span 6" }}>
              <div
                className="contactbeforecloud"
                style={{ marginLeft: "3rem", marginBottom: "2rem" }}
              ></div>
            </li>
            <li
              className="contactcontext"
              style={{
                gridRow: "3 / span 2",
                gridColumn: "2 / span 5",
                padding: ".5rem 1.5rem",
              }}
            >
              <Box>
                <a href="tel:+916355850257" id="contact-phone" target="blank">
                  <Flex alignItems={"center"} gap="10px">
                    <Image
                      className=""
                      // ml={".8rem"}
                      w={"12%"}
                      src={callIcon}
                      alt="callIcon"
                    />

                    <Text fontSize={"lg"}>+91 63558 50257</Text>
                  </Flex>
                </a>
                <a
                  href="mailto:hasims2001@gmail.com"
                  id="contact-email"
                  target="blank"
                >
                  <Flex alignItems={"center"} gap="10px">
                    <Image
                      className=""
                      // ml={".8rem"}
                      w={"12%"}
                      src={emailIcon}
                      alt="emailIcon"
                    />
                    <Text fontSize={"lg"}>hasims2001@gmail.com</Text>
                  </Flex>
                </a>
                <a
                  href="https://www.google.co.in/maps/place/Jamalpur,+Ahmedabad,+Gujarat/@23.0130563,72.5787526,16z/data=!3m1!4b1!4m6!3m5!1s0x395e85b6d19a1005:0xc1bd38a5372cac32!8m2!3d23.0128963!4d72.5848081!16s%2Fg%2F1tglxcpr?entry=ttu"
                  target="blank"
                >
                  <Flex alignItems={"center"} gap="10px">
                    <Image
                      className=""
                      // ml={".8rem"}
                      w={"12%"}
                      src={locationIcon}
                      alt="locationIcon"
                    />
                    <Text fontSize={"lg"}>Ahmedabad, Gujarat</Text>
                  </Flex>
                </a>
              </Box>
            </li>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
};
