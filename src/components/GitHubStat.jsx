import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

export const GitHubStat = () => {
  return (
    <Box mt={"10rem"} mb={"10rem"} color={"brand.400"}>
      <Box m={"2rem 0"}>
        <Heading>Statistics</Heading>
      </Box>
      {/* greywhite, tokyonight, nord */}
      <Flex mt={"4rem"} justifyContent={"center"} mb={"2rem"}>
        <Image
          maxW={"90vw"}
          id="github-streak-stats"
          borderRadius={"10px"}
          src="https://github-readme-streak-stats.herokuapp.com/?user=Hasims2001&theme=swift&hide_border=false"
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        gap={"2rem"}
        alignItems={[
          "center",
          "center",
          "center",
          "center",
          "center",
          "flex-start",
          "flex-start",
        ]}
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
        <Image
          borderRadius={"10px"}
          maxW={"90vw"}
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=Hasims2001&theme=swift&hide_border=false&include_all_commits=true&count_private=true"
        />
        <Image
          borderRadius={"10px"}
          maxW={"90vw"}
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hasims2001&theme=swift&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
        />
      </Flex>

      <Box m={"5rem 0"}>
        <Heading>Calender</Heading>
      </Box>
      <Flex justifyContent={"center"} maxW={"90vw"} margin={"auto"}>
        <Box
          bg="brand.300"
          padding={[
            "1.5rem",
            "1.5rem",
            "1.5rem",
            "1.5rem",
            "2rem 4rem",
            "2rem 4rem",
            "2rem 4rem",
            "2rem 4rem",
          ]}
          borderRadius={"10px"}
        >
          <GitHubCalendar
            class="react-activity-calendar"
            showWeekdayLabels="true"
            username="hasims2001"
          />
        </Box>
      </Flex>
    </Box>
  );
};
