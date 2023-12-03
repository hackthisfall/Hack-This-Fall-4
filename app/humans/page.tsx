"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";

type humansMappingType = {
  slug: string;
  heading: string;
  people: {
    name: string;
    image: string;
    title?: string;
    link?: string;
  }[];
};

const humansMapping: humansMappingType[] = [
  // {
  //   slug: "speakers",
  //   heading: "Speakers",
  //   people: [
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //   ],
  // },
  // {
  //   slug: "judges",
  //   heading: "Judges",
  //   people: [
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Judging publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //   ],
  // },
  // {
  //   slug: "mentors",
  //   heading: "Mentors",
  //   people: [
  //     {
  //       name: "Shambhav Mishra",
  //       title: "M publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //   ],
  // },
  // {
  //   slug: "evangelists",
  //   heading: "Evangelists",
  //   people: [
  //     {
  //       name: "Shambhav Mishra",
  //       title: "E publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //   ],
  // },
  {
    slug: "organizers",
    heading: "Organizers",
    people: [
      {
        name: "Siddharth Dayalwal",
        url: "https://twitter.com/siddharth_hacks",
        image: "/assets/humans/team/siddharth.jpg",
        link: "https://twitter.com/siddharth_hacks",
      },
      {
        name: "Sahil Sen",
        url: "https://www.linkedin.com/in/sahil-sen-528647ba/",
        image: "/assets/humans/team/sahilsen.webp",
        link: "https://www.linkedin.com/in/sahil-sen-528647ba/",
      },
      {
        name: "Dennis D'mello",
        url: "https://www.linkedin.com/in/dendemello/",
        image: "/assets/humans/team/dennis.jpeg",
        link: "https://www.linkedin.com/in/dendemello/",
      },
      {
        name: "Paras Gupta",
        url: "https://twitter.com/parasg1999/",
        image: "/assets/humans/team/paras.jpeg",
        link: "https://twitter.com/parasg1999/",
      },
      {
        name: "Vaibhav Toshniwal",
        url: "https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/",
        image: "/assets/humans/team/vaibhav.jpeg",
        link: "https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/",
      },
      {
        name: "Apoorv Dwivedi",
        url: "https://www.linkedin.com/in/apoorvdwi",
        image: "/assets/humans/team/apoorv.jpg",
        link: "https://www.twitter.com/apoorvdwi",
      },
      {
        name: "Shitiz Aggarwal",
        url: "https://twitter.com/Shitiz_Agg",
        image: "/assets/humans/team/shitiz.jpg",
        link: "https://twitter.com/Shitiz_Agg",
      },
      {
        name: "Rohan Kambli",
        url: "https://twitter.com/rohannrk",
        image: "/assets/humans/team/rohan.jpg",
        link: "https://twitter.com/rohannrk",
      },
      {
        name: "Priti Priya",
        url: "https://twitter.com/pritisinghhhh",
        image: "/assets/humans/team/priti.jpeg",
        link: "https://twitter.com/pritisinghhhh",
      },
      {
        name: "Kriyanshi Shah",
        url: "https://twitter.com/ShahKriyanshi",
        image: "/assets/humans/team/kriyanshi.jpg",
        link: "https://twitter.com/ShahKriyanshi",
      },
      {
        name: "Vedant Kakde",
        url: "https://twitter.com/vedantstwt",
        image: "/assets/humans/team/vedant.png",
        link: "https://twitter.com/vedantstwt",
      },
      {
        name: "Ali Mustufa Shaikh",
        url: "https://twitter.com/ialimustufa",
        image: "/assets/humans/team/ali.jpg",
        link: "https://twitter.com/ialimustufa",
      },
      {
        name: "Devanshi Pandya",
        url: "https://twitter.com/DevanshiPandy11",
        image: "/assets/humans/team/devanshi.jpeg",
        link: "https://twitter.com/DevanshiPandy11",
      },
      {
        name: "Sakshi Hardwani",
        url: "https://www.linkedin.com/in/sakshi-hardwani/",
        image: "/assets/humans/team/sakshi.jpeg",
        link: "https://www.linkedin.com/in/sakshi-hardwani/",
      },
      {
        name: "Toukir Khan",
        url: "https://twitter.com/_toukirkhan_",
        image: "/assets/humans/team/toukir.jpeg",
        link: "https://twitter.com/_toukirkhan_",
      },
      {
        name: "Vishwa Mehta",
        url: "https://twitter.com/vishwamehta30/",
        image: "/assets/humans/team/vishwa.jpeg",
        link: "https://twitter.com/vishwamehta30/",
      },
      {
        name: "Bishwajeet Parhi",
        url: "https://twitter.com/biswa_20p",
        image: "/assets/humans/team/biswa.jpg",
        link: "https://twitter.com/biswa_20p",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | Humans",
// };

const Humans = () => {
  const [currentSection, setCurrentSection] = useState("organizers");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectSection = (section: string) => {
    setCurrentSection(section);
    setIsDropdownOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Flex background="#ffffff" w="100vw" h="100dvh">
      <Flex
        overflow="hidden"
        position="relative"
        mx="auto"
        width="min(100vw, 200vh)"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        height="100dvh"
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
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top={{ base: "-18vh", lg: "0" }}
            opacity="0.1"
            src="/assets/mandala-right-light.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left={{ base: "-20vh", lg: "-15vh" }}
            bottom={{ base: "-20vh", lg: "-10vh" }}
            opacity="0.1"
            src="/assets/mandala-left-light.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Header mode="light" position="relative" />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          overflow="auto"
          h="full"
        >
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
              marginTop="2rem"
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
              borderTopRadius="2rem"
              borderBottomRadius={isDropdownOpen ? "0rem" : "2rem"}
              position="relative"
            >
              <Flex
                bgColor="#d6d6d6"
                borderRadius="full"
                w="fit-content"
                gap="1rem"
                pr={humansMapping.length > 1 ? "1rem" : "0rem"}
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
                        onClick={() => {
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                        minWidth="200px"
                      >
                        {section.heading}
                      </Flex>
                    );
                })}
                {humansMapping.length > 1 && (
                  <Flex
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                  >
                    <Image src="/assets/icons/dropdown.svg" alt="logo" />
                  </Flex>
                )}
              </Flex>
              {isDropdownOpen && (
                <Flex
                  flexDirection={"column"}
                  position="absolute"
                  zIndex={40}
                  top="100%"
                  width="100%"
                  bgColor="#F0F0F0"
                  borderBottomRadius="2rem"
                >
                  {humansMapping.map((section, index) => {
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
          )}

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
                  <Link href={s.link} target="_blank">
                    <Image
                      src={s.image}
                      w={{ base: "7rem", lg: "14rem" }}
                      h={{ base: "7rem", lg: "14rem" }}
                      alt="logo"
                      borderRadius={{
                        base: "3rem 1rem",
                        lg: "5.5rem 1.25rem",
                      }}
                    />
                  </Link>
                  <Text
                    color="#333333"
                    fontWeight="600"
                    letterSpacing="0.05rem"
                    fontSize={{ base: "0.5rem", lg: "unset" }}
                    marginTop="0.5rem"
                  >
                    {s.name}
                  </Text>
                  {s && s.title && (
                    <Text
                      color="#676565"
                      letterSpacing="0.06rem"
                      fontSize={{ base: "0.5rem", lg: "unset" }}
                    >
                      {s.title}
                    </Text>
                  )}
                </Flex>
              ))}
          </Flex>
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default Humans;
