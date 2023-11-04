"use client";

import {
  Box,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
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
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-dark.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },
      {
        logo: "/assets/logo-light.svg",
      },

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

const Partners = () => {
  const [currentSection, setCurrentSection] = useState("powered-by");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectSection = (section: string) => {
    setCurrentSection(section);
    setIsDropdownOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
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
            opacity="0.1"
            src="/assets/mandala-main-light.svg"
            h="90%"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top="0"
            opacity="0.1"
            src="/assets/mandala-right-light.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left="-15vh"
            bottom="-10vh"
            opacity="0.1"
            src="/assets/mandala-left-light.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Header mode="light" position="relative" />
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize={{ base: "2rem", lg: "3rem" }}
            color={"#000000"}
            fontWeight="600"
            letterSpacing="0.1rem"
          >
            Partners
          </Heading>
          {!isMobile && (
            <Flex
              bgColor="#F0F0F0"
              borderRadius="full"
              w="fit-content"
              gap="1rem"
              justifyContent="space-evenly"
              className="navbar"
              zIndex={10}
              marginTop="2rem"
            >
              {partnerMapping.map((section, index) => {
                return (
                  <Flex
                    zIndex={10}
                    bgColor={
                      currentSection === section.slug ? "black" : "transparent"
                    }
                    color={currentSection === section.slug ? "white" : "black"}
                    fontFamily="var(--font-dm-sans)"
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
          )}
          {isMobile && (
            <Flex
              flexDirection="column"
              bgColor="#F0F0F0"
              marginTop="1rem"
              borderRadius="2rem"
            >
              <Flex
                bgColor="#d6d6d6"
                borderRadius="full"
                w="fit-content"
                gap="1rem"
                pr="1rem"
                justifyContent="space-evenly"
                className="navbar"
                zIndex={10}
              >
                {partnerMapping.map((section, index) => {
                  if (currentSection === section.slug)
                    return (
                      <Flex
                        zIndex={10}
                        bgColor="black"
                        color="white"
                        fontFamily="var(--font-dm-sans)"
                        borderRadius="full"
                        fontSize="1.1rem"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="500"
                        px="2rem"
                        py="1rem"
                        key={index}
                        cursor="pointer"
                        className="font-dm-sans"
                      >
                        {section.heading}
                      </Flex>
                    );
                })}
                <Flex
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  <Image src="/assets/icons/dropdown.svg" alt="logo" />
                </Flex>
              </Flex>
              {isDropdownOpen &&
                partnerMapping.map((section, index) => {
                  if (currentSection !== section.slug)
                    return (
                      <Flex
                        zIndex={10}
                        bgColor="#f0f0f0"
                        color="black"
                        fontFamily="var(--font-dm-sans)"
                        borderRadius="full"
                        fontSize="1.1rem"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="500"
                        px="2rem"
                        py="1rem"
                        key={index}
                        cursor="pointer"
                        className="font-dm-sans"
                        onClick={() => {
                          selectSection(section.slug);
                        }}
                      >
                        {section.heading}
                      </Flex>
                    );
                })}
            </Flex>
          )}
        </Flex>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="flex-start"
          w="full"
          h="full"
          zIndex="20"
          px={{ base: "2rem", lg: "5rem" }}
          columnGap={{ base: "1rem", lg: "2rem" }}
          rowGap={{ base: "1rem", lg: "2rem" }}
          overflow="auto"
          marginTop="2rem"
        >
          {partnerMapping
            .find((p) => p.slug === currentSection)
            ?.sponsors.map((s, i) => (
              <Flex
                backgroundColor="#F7F7F7"
                key={i}
                width={{ base: "7rem", lg: "12rem" }}
                justifyContent="center"
                px={{ base: "0.75rem", lg: "1.5rem" }}
                py={{ base: "0.5rem", lg: "1rem" }}
                borderRadius="0.5rem"
              >
                <Image src={s.logo} alt="logo" />
              </Flex>
            ))}
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default Partners;
