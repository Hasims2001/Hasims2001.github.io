import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import download from "../image/download.png";

export const Navbar = () => {
  // "-NavBar should have Home, About Me, Skills, Project, Contact & Resume
  // -NavBar should be responsive
  // -NavBar should be sticky or fixed"
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 769px)" });
  const [show, setShow] = useState(false);
  const [quote, setquote] = useState("");
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1NMF1P8tBuBXgyUeA6p7A92cOBxnf6a-m/view?usp=sharing",
      "_blank"
    );
  };

  useMemo(()=>{
    // useEffect(()=>{
      const getQuote = async()=>{
          try {
            let res = await fetch("https://api.quotable.io/quotes/random?tags=technology");
            res = await res.json();
            setquote(res[0].content);

          } catch (error) {
            console.log(error);
          }
      }
      getQuote();
    // }, []);
  }, []); 
 
  return (
    <>
      {isBigScreen && (
        <Stack
          id="nav-menu"
          p={5}
          color={"brand.400"}
          direction={[
            "column",
            "column",
            "column",
            "column",
            "row",
            "row",
            "row",
          ]}
          justifyContent={"space-around"}
          alignItems={"center"}
          position={"fixed"}
          w={"100%"}
          zIndex={11}
          borderRadius={"20px"}
          bg={"brand.300"}
        >
          <span style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </span>
          {/* <a href="/" className="nav-link home">
            Home
          </a> */}
          <span style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link about"
            >
              About Me
            </Link>
          </span>
          {/* <a href="#about" className="nav-link about">
            About Me
          </a> */}
          <span style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </span>
          {/* <a href="#skills" className="nav-link skills">
            Skills
          </a> */}
          <span style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link projects"
            >
              Project
            </Link>
          </span>
          {/* <a href="#projects" className="nav-link projects">
            Project
          </a> */}
          <span style={{ cursor: "pointer" }}>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </span>
          <Box onClick={handleClick}>
 
            <a
              href={require("../image/resume.pdf")}
              download={"Mohammad-Hasim-Shaikh-Resume"}
              className="nav-link resume"
              id="resume-button-1"
            >
              <Flex alignItems={"center"} gap={".2rem"}>
                <Text>Resume</Text>
                <Image src={download} w={"15px"} h={"15px"} alt="download" />
              </Flex>
            </a>
          
          </Box>
        </Stack>
      )}

      {isSmallScreen && (
        <>
          {!show ? (
            <Flex justifyContent={"flex-start"}   
            position={"fixed"}
            w={"100%"}
            zIndex={11}
            borderRadius={"20px"}
            bg={"brand.300"}
            color={"brand.400"}
            alignItems={'center'}
            gap={".1rem"}
            >
              <HamburgerIcon
                onClick={() => setShow(true)}
                color={"brand.400"}
                boxSize={10}
                bg={"brand.300"}
                mt={".5rem"}
                mb={".5rem"}
                ml={"2rem"}
                id="hamIcon"
              />
              <marquee>{quote}</marquee>
            </Flex>
          ) : (
            <Stack
              id="nav-menu"
              color={"brand.400"}
              p={5}
              direction={[
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
                "row",
              ]}
              justifyContent={"space-around"}
              alignItems={"center"}
              position={"fixed"}
              h={"100%"}
              w={"100vw"}
              zIndex={11}
              bg={"brand.300"}
              opacity={0.7}
              fontWeight={"bold"}
              fontSize={"lg"}
            >
              <CloseIcon onClick={() => setShow(false)} />
              <br />
              <span style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  onClick={() => setShow(false)}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link home"
                >
                  Home
                </Link>
              </span>
              {/* <a href="/" className="nav-link home">
            Home
          </a> */}
              <span style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  to="section2"
                  onClick={() => setShow(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link about"
                >
                  About Me
                </Link>
              </span>
              {/* <a href="#about" className="nav-link about">
            About Me
          </a> */}
              <span style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  to="section3"
                  onClick={() => setShow(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link skills"
                >
                  Skills
                </Link>
              </span>
              {/* <a href="#skills" className="nav-link skills">
            Skills
          </a> */}
              <span style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  to="section4"
                  onClick={() => setShow(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link projects"
                >
                  Project
                </Link>
              </span>
              {/* <a href="#projects" className="nav-link projects">
            Project
          </a> */}
              <span style={{ cursor: "pointer" }}>
                <Link
                  activeClass="active"
                  to="section5"
                  onClick={() => setShow(false)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link contact"
                >
                  Contact
                </Link>
              </span>
              {/* <a href="#contact" className="nav-link contact">
            Contact
          </a> */}
              <Box onClick={handleClick}>
                <a
                  href={require("../image/resume.pdf")}
                  id="resume-button-1"
                  download={"Mohammad-Hasim-Shaikh-Resume"}
                  className="nav-link resume"
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
            </Stack>
          )}
        </>
      )}
    </>
  );
};
