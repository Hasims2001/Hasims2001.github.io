import {
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";


import { ProjectCloud } from "./ProjectCloud";

export const Project = () => {


  const arrProject = [
    {
      id: 0,
      name: "Recipe Swap",
      description:
        "Recipe Swap is a community-based recipe sharing platform that allows users to share, discover, and discuss various recipes.  Recipe Swap provides a platform to connect and exchange recipes with others.",
    
      image: [
        "https://user-images.githubusercontent.com/58412185/264219084-2b7f5a2c-18ed-4d0b-8e7d-281c8e99fb46.png",
        "https://user-images.githubusercontent.com/58412185/264219186-36e41b57-0ed6-4e18-8de8-fddec9f14cdb.png",
        "https://user-images.githubusercontent.com/58412185/264219233-0e67dab5-8848-4f78-9aba-e429908d4076.png",
        "https://user-images.githubusercontent.com/58412185/264219299-d58f7302-122d-4afb-9fae-f7798ef09b83.png",
        "https://user-images.githubusercontent.com/58412185/264219386-f90b7a9e-ab1a-49ee-bef8-f3a3752c4592.png",
        "https://user-images.githubusercontent.com/58412185/264219678-e2d6ba64-cc88-4f80-83cf-da01b6ff32fd.png",
        "https://user-images.githubusercontent.com/58412185/264219779-a3ddca74-8886-499b-a45d-b62a2d7190af.png",
        "https://user-images.githubusercontent.com/58412185/264219881-e2d7e2a1-112e-47e1-9542-846eedeb3e66.png",
        "https://user-images.githubusercontent.com/58412185/264220145-a394055c-830b-485d-b0b9-b6ba8e702e44.png",

    
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chakra UI", "Chart.js"],
      github: "https://github.com/Manikantkr-1004/warlike-current-5989",
      demo: "https://recipeswap.netlify.app/",
    },
    {
      id: 1,
      name: "Talent Forge",
      description:
        "Cutting-edge job matching platform leverages the power of GenAI integration, empowering recruiters to connect with ideal candidates and enabling job seekers to discover tailored opportunities.",
    
      image: [
       "https://user-images.githubusercontent.com/58412185/287499734-7be9828e-fd56-42bb-8980-828715c204d1.png",
       "https://user-images.githubusercontent.com/58412185/287499779-9bacaba2-2292-4810-9a10-d4b5232798c4.png",
       "https://user-images.githubusercontent.com/58412185/287499749-310a36c3-6c38-4434-a530-cbef388d9ca4.png",
       "https://user-images.githubusercontent.com/58412185/287499823-28a64051-e401-47c0-b9d2-e36e5ab5d448.png",
       "https://user-images.githubusercontent.com/58412185/287501073-c269d8ed-78b4-4c4b-951b-f6a2c448741c.png",
       "https://user-images.githubusercontent.com/58412185/287501085-7f0ef349-f76d-4b6e-b749-036103018b45.png",
       "https://user-images.githubusercontent.com/58412185/287501107-c3a1e326-f020-40e5-8295-150d50e71f00.png",

    
      ],
      tech: ["Flask","MySQL","Python","Redux","GenAI","React.js", "Chakra UI", ],
      github: "https://github.com/Hasims2001/TalentForge",
      demo: "https://recipeswap.netlify.app/",
    },
    {
      id: 2,
      name: "Trypot Nation",
      description:
        "Experience seamless booking of holiday packages in our tourism-based project, offering a fully responsive website for users across various screen sizes. Professional admin dashboard for efficient data management.",
      // image: `${trypotnation1}`,
      image: [
        "https://user-images.githubusercontent.com/58412185/258986789-8c5cdd30-b34b-459c-afa4-1545747389d7.png",
        "https://user-images.githubusercontent.com/58412185/258986869-833ca33b-0345-4d17-8957-23931ffa4cf3.png",
        "https://user-images.githubusercontent.com/58412185/258987090-046ffd46-fe7c-49da-b077-f6ee1a49c601.png",
        "https://user-images.githubusercontent.com/58412185/258987586-9fcc081e-8641-49e8-8d41-18d029ba67e7.png",
        "https://user-images.githubusercontent.com/58412185/258987672-048387ef-4fc3-496b-8bfa-150b2b0a5815.png",
        "https://user-images.githubusercontent.com/58412185/258988168-f99a84f0-aacb-481a-b4aa-309b9132bf3c.png",
        "https://user-images.githubusercontent.com/58412185/258987829-b5eef0ed-dfa2-4e00-a104-35bb12618660.png",
        "https://user-images.githubusercontent.com/58412185/258988106-345809e6-8e9a-47c0-907c-ed3f655af064.png",
        "https://user-images.githubusercontent.com/58412185/258988018-0b45ff0f-b852-4482-a2a7-924a510c5c47.png",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Mock API"],
      github: "https://github.com/Hasims2001/indigo-price-1615",
      demo: "https://trypot-nation-dkah.netlify.app/",
    },
    {
      id: 3,
      name: "Inner Vibe",
      description:
        "Project is based on Health Treatment and Therapies. User can book their appointment and view the details. Website is fully responsive on different screen sizes. Professional Deshboard for Admin to manage the data.",
      // image: `${innevibe1}`,
      image: [
        "https://user-images.githubusercontent.com/58412185/246748838-62d25c24-521c-4bdd-ac57-d48bbd80f71d.png",
        "https://user-images.githubusercontent.com/58412185/246749441-3c7c4ea5-75bf-4d2f-a858-39e73d6370d8.png",
        "https://user-images.githubusercontent.com/58412185/246749495-0dbb9988-4206-4526-8384-4541db9fc9b5.png",
        "https://user-images.githubusercontent.com/58412185/246749538-1d0010c1-4cb0-4522-be12-f7cce1732b62.png",
      ],
      tech: ["React.js", "Chakra UI", "HTML", "CSS", "JavaScript", "Mock API"],
      github: "https://github.com/Hasims2001/quirky-toothpaste-7817",
      demo: "https://innervibe.vercel.app/",
    },
    {
      id: 4,
      name: "Thunder Tech",
      description:
        "Explore a vast array of products, effortlessly filter and sort, while our Firebase backend ensures seamless user authentication by Google and GitHub logins. Admin-side controls for comprehensive CRUD functionality.",
      // image: `${trypotnation1}`,
      image: [
        "https://user-images.githubusercontent.com/58412185/258998846-9d4584d1-2c12-4d1f-b6a1-638a334f4e47.png",
        "https://user-images.githubusercontent.com/58412185/258998946-31ae2225-65aa-4200-869e-4de4888a16a2.png",
        "https://user-images.githubusercontent.com/58412185/258999203-15822b84-c21f-4ac5-8b18-3898b72ef123.png",
        "https://user-images.githubusercontent.com/58412185/258999421-cf001b18-f81e-4677-a294-1386c0d3f5f7.png",
        "https://user-images.githubusercontent.com/58412185/258999598-5436cc57-968c-4c76-86c5-68814dac0cbf.png",
        "https://user-images.githubusercontent.com/58412185/258999935-661ee8aa-80a8-4890-927f-bd68ed27bca7.png",
        "https://user-images.githubusercontent.com/58412185/259000093-c2bbb00c-4286-4b0e-957f-071c1efeb0fe.png",
        "https://user-images.githubusercontent.com/58412185/259000217-c1c48632-b1fd-4aad-9427-6793a72ca653.png",
        "https://user-images.githubusercontent.com/58412185/259000284-9f51a838-f666-41e2-a7a4-294bcd59e44a.png",
      ],
      tech: ["React.js", "Chakra UI", "Firebase", "Mock API"],
      github: "https://github.com/Hasims2001/synonymous-nose-6503",
      demo: "https://thundertech.vercel.app/",
    },
    {
      id: 5,
      name: "Quanta",
      description:
        "Explore the new World of GenAI interview session. platform that leverages the power of generative AI to revolutionize the way individuals prepare for interviews across various categories.",
      image: [
        "https://user-images.githubusercontent.com/58412185/265608803-8ad8a474-8df0-4539-a507-f5daefbb2fd5.png",
        "https://user-images.githubusercontent.com/58412185/265608899-a0d3034d-7a98-43cd-bbc5-5242d028ab1d.png",
        "https://user-images.githubusercontent.com/58412185/265609159-e3130aea-d0fd-444e-8ed1-feaedb6614a0.png",
       
      ],
      tech: ["React.js", "TailwindCSS", "TypeScript", "Node", "Express.js",  "OpenAI"],
      github: "https://github.com/Hasims2001/quanta",
      demo: "https://enchanting-truffle-893185.netlify.app",

    },
   
   
  ];
  return (
    <Box id="projects" mt={"6rem"}>
      <Box mb={"2rem"}>
        <Heading color={"brand.400"}>Project</Heading>
      </Box>

      <SimpleGrid mt={"7rem"} mb={"10rem"} gap={"10rem"}>
        {arrProject.map((item) => (
          <Box key={item.id}>
            <ProjectCloud {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
