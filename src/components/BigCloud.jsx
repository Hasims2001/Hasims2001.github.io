import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import "../styles/BigCloud.css";
export const BigCloud = ({ name, description, image, tech, github, demo }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        maxWidth: "350px",
      }}
    >
      <li
        style={{
          gridRow: "1 / span 2",
          gridColumn: "2 / span 2",
        }}
      >
        <div className="aftermainCloud"></div>
      </li>
      <li style={{ gridRow: "2 / span 4", gridColumn: "1 / span 5" }}>
        <div className="mainCloud"></div>
      </li>
      <li style={{ gridRow: "1 / span 2", gridColumn: "3 / span 1" }}>
        <div className="beforemainCloud"></div>
      </li>
      <li
        style={{
          gridRow: "1 / span 2",
          gridColumn: "1 / span 5",
        }}
      >
        <Image
          className="website"
          borderRadius={"10px"}
          w={"100%"}
          src={image}
          alt={name}
        />
      </li>
      <li
        style={{
          padding: "5rem 1rem",
          color: "black",
          gridRow: "2 / span 6",
          gridColumn: "2 / span 5",
        }}
      >
        <Heading as={"h3"} fontWeight={"normal"}>
          {name}
        </Heading>
        <br />
        <p>
          Tech Stack:{" "}
          {tech.map((item, ind) => (
            <span>
              {" "}
              {ind !== 0 && "|"} {item}
            </span>
          ))}
        </p>
        <Flex justifyContent={"center"} gap={"1rem"} alignItems={"center"}>
          <p>Links: </p>
          <a href={github} target="blank">
            <Image
              src={"https://img.icons8.com/?size=45&id=62856&format=png"}
              alt={"github"}
            ></Image>
          </a>
          <a href={demo} target="blank">
            <Image
              src={"https://img.icons8.com/?size=60&id=68406&format=png"}
              alt={"github"}
            ></Image>
          </a>
        </Flex>
        <p>{description}</p>
      </li>
    </ul>
  );
};
