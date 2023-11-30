import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import "../styles/ProjectCloud.css";
import githubPNG from "../image/github.png";
import wwwPNG from "../image/www.png";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { SlidingImage } from "./SlidingImage";
export const ProjectCloud = ({
  name,
  description,
  image,
  tech,
  github,
  demo,
}) => {
  const isTable = useMediaQuery({
    query: "only screen and (min-width:426px) and (max-width: 769px)",
  });
  const isBigMobile = useMediaQuery({
    query: "only screen and (min-width:320px) and (max-width: 425px)",
  });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 425px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 426px)" });
  return (
    <Box color={"brand.400"} className="project-card">
     {isBigScreen && <UL istable={isTable.toString()} isbigmobile={isBigMobile.toString()}>
        <li
          style={{
            gridRow: "1 / span 2",
            gridColumn: "1 / span 2",
          }}
        >
          <div className="beforemainCloud"></div>
        </li>
        <li
          style={{
            gridRow: "2 / span 1",
            gridColumn: "1 / span 3",
          }}
        >
          <div className="mainCloud"></div>
        </li>
        <li
          style={{
            gridRow: "1 / span 2",
            gridColumn: "2 / span 1",
          }}
        >
          <div className="aftermainCloud"></div>
        </li>
        <li
          id="slidingList"
          style={{
            gridRow: "1 / span 2",
            gridColumn: "2 / span 1",
          }}
        >
          {/* <Image
            className="website"
            borderRadius={"10px"}
            w={"90%"}
            m={"auto"}
            src={image}
            alt={name}
          /> */}

          <SlidingImage images={image} />
        </li>
        <li
          className="info"
          style={{
            marginTop: "6rem",
            gridRow: "2 / span 1",
            gridColumn: "1 / span 3",
            padding: "0 2.5rem",
          }}
        >
          <Flex justifyContent={"space-evenly"} alignItems={"center"}>
            <Heading as={"h3"} fontWeight={"normal"} className="project-title">
              {name}
            </Heading>
            <Flex gap={".5rem"} alignItems={"center"}>
              <a href={github} target="blank" className="project-github-link">
                <Image src={githubPNG} w={"90%"} />
              </a>
              <a href={demo} target="blank" className="project-deployed-link">
                <Image src={wwwPNG} />
              </a>
            </Flex>
          </Flex>
          <Box>
            <p style={{ fontWeight: "bold" }} className="project-tech-stack">
              Tech Stack: {tech.join(" | ")}
            </p>
            <p className="project-description">{description}</p>
          </Box>
        </li>
      </UL>}
      {isSmallScreen && <Box m={'auto'} bg={'brand.300'} w={"90vw"} borderRadius={"1rem"}>
        <SlidingImage images={image} />
        <Box p={"1rem"} pb={"2rem"}> 
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
            <Heading as={"h3"} fontWeight={"normal"} className="project-title">
              {name}
            </Heading>
            <Flex gap={".5rem"} alignItems={"center"}>
              <a href={github} target="blank" className="project-github-link">
                <Image src={githubPNG} w={"90%"} />
              </a>
              <a href={demo} target="blank" className="project-deployed-link">
                <Image src={wwwPNG} />
              </a>
            </Flex>
          </Flex>
          <Box>
            <p style={{ fontWeight: "bold" }} className="project-tech-stack">
              Tech Stack: {tech.join(" | ")}
            </p>
            <p className="project-description">{description}</p>
          </Box>
          </Box>
        </Box>}
    </Box>
  );
};

const UL = styled.ul`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: ${({ istable, isbigmobile }) =>
    istable === "true" ? "700px" : isbigmobile === "true" ? "300px" : "800px"};
  list-style: none;
  /* .beforemainCloud {
    margin-bottom: 3rem;
    margin-top: 0;
  } */
  .mainCloud {
    width: ${({ istable }) => (istable === "true" ? "44rem" : "50rem")};
  }
  /* .aftermainCloud {
    margin-top: 0;
    margin-bottom: 5rem;
    margin-left: 13rem;
  } */
`;
