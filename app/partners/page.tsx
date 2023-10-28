"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const partnerMapping = [
  {
    slug: "powered-by",
    heading: "Powered By",
    sponsors: [
      {
        logo: "/assets/logo-light.svg",
      },
    ],
  },
  { slug: "diamond", heading: "Diamond", sponsors: [] },
  { slug: "platinum", heading: "Platinum", sponsors: [] },
  { slug: "gold", heading: "Gold", sponsors: [] },
  { slug: "silver", heading: "Silver", sponsors: [] },
  { slug: "bronze", heading: "Bronze", sponsors: [] },
  { slug: "in-kind", heading: "In-Kind", sponsors: [] },
  { slug: "community", heading: "Community", sponsors: [] },
];

const Page = () => {
  const [currentSection, setCurrentSection] = useState("powered-by");

  return (
    // <div className="flex flex-col items-center h-[100vh] justify-between">

    <Flex background="#ffffff" w="100vw" h="100vh">
      <Flex
        overflow="hidden"
        position="relative"
        mx="auto"
        width="min(100vw, 200vh)"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          pos="absolute"
          w="full"
          h="full"
          zIndex="1"
        >
          <Image
            animation="rotateImg 30s linear infinite"
            opacity="0.15"
            src="/assets/mainMandala.svg"
            h="90%"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top="0"
            animation="rotateImg 30s linear infinite"
            opacity="0.15"
            src="/assets/rightMandala.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left="-15vh"
            bottom="-10vh"
            animation="rotateImg 30s linear infinite"
            opacity="0.15"
            src="/assets/leftMandala.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Header mode="light" position="relative" />
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize="2rem"
            color={"#000000"}
            fontWeight="600"
            letterSpacing="0.3rem"
          >
            Partners
          </Heading>
          <Flex
            bgColor="#F0F0F0"
            borderRadius="full"
            w="fit-content"
            gap="1rem"
            justifyContent="space-evenly"
            className="navbar"
            zIndex={10000}
            marginTop="1rem"
          >
            {partnerMapping.map((section, index) => {
              return (
                <Flex
                  zIndex={100}
                  bgColor={
                    currentSection === section.slug ? "black" : "transparent"
                  }
                  color={currentSection === section.slug ? "white" : "black"}
                  fontFamily="var(--font-dmsans)"
                  borderRadius="full"
                  fontSize="1.1rem"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="500"
                  px={{ md: "1rem", lg: "2rem", "2xl": "4rem" }}
                  py="1rem"
                  key={index}
                  cursor="pointer"
                  onClick={() => {
                    setCurrentSection(section.slug);
                  }}
                  className="font-dm-sans"
                >
                  {section.heading}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          w="full"
          h="full"
          zIndex="20000"
          px="5rem"
          overflow="auto"
          marginTop="5rem"
        >
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize="2rem"
            color={"#000000"}
            fontWeight="600"
            letterSpacing="0.3rem"
          >
            Hello World
          </Heading>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Page;
