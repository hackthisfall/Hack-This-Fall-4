"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

const humansMapping = [
  {
    slug: "speakers",
    heading: "Speakers",
    people: [
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/humans/P1.jpeg",
      },
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/humans/P1.jpeg",
      },
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/humans/P1.jpeg",
      },
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/humans/P1.jpeg",
      },
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/humans/P1.jpeg",
      },
    ],
  },
  {
    slug: "judges",
    heading: "Judges",
    people: [
      {
        name: "Shambhav Mishra",
        title: "Judging publisher",
        image: "/assets/humans/P1.jpeg",
      },
    ],
  },
  {
    slug: "mentors",
    heading: "Mentors",
    people: [
      {
        name: "Shambhav Mishra",
        title: "M publisher",
        image: "/assets/humans/P1.jpeg",
      },
    ],
  },
  {
    slug: "evangelists",
    heading: "Evangelists",
    people: [
      {
        name: "Shambhav Mishra",
        title: "E publisher",
        image: "/assets/humans/P1.jpeg",
      },
    ],
  },
  {
    slug: "teams",
    heading: "Teams",
    people: [
      {
        name: "Shambhav Mishra",
        title: "HTF publisher",
        image: "/assets/humans/P1.jpeg",
      },
    ],
  },
];

const Humans = () => {
  const [currentSection, setCurrentSection] = useState("speakers");
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
            letterSpacing="0.3rem"
          >
            Humans
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
              marginTop="1rem"
            >
              {humansMapping.map((section, index) => {
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
                position={"relative"}
                zIndex={10}
              >
                {humansMapping.map((section, index) => {
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
                humansMapping.map((section, index) => {
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
          rowGap={{ base: "0.25rem", lg: "0.5rem" }}
          overflow="auto"
          marginTop="2rem"
        >
          {humansMapping
            .find((p) => p.slug === currentSection)
            ?.people.map((s, i) => (
              <Flex
                key={i}
                justifyContent="center"
                px={{ base: "0.5rem", lg: "1.5rem" }}
                py={{ base: "0.5rem", lg: "1rem" }}
                borderRadius="0.5rem"
                flexDirection="column"
                fontFamily="var(--font-nohemi)"
              >
                <Image
                  src={s.image}
                  w={{ base: "7rem", lg: "14rem" }}
                  h={{ base: "7rem", lg: "14rem" }}
                  alt="logo"
                  borderRadius={{
                    base: "3.5rem 1rem",
                    lg: "5.5rem 1.25rem",
                  }}
                />
                <Text
                  color="#333333"
                  fontWeight="600"
                  letterSpacing="0.05rem"
                  fontSize={{ base: "0.5rem", lg: "unset" }}
                >
                  {s.name}
                </Text>
                <Text
                  color="#676565"
                  letterSpacing="0.06rem"
                  fontSize={{ base: "0.5rem", lg: "unset" }}
                >
                  {s.title}
                </Text>
              </Flex>
            ))}
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default Humans;
