"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

type sessionMappingType = {
  title: string;
  name: string;
  date: Date;
  displayDate: string;
  platformImage: string;
  link: string;
  image: string;
};

const sessionMapping: sessionMappingType[] = [
  {
    title: "Designing for Diversity",
    name: "Varsha Saha",
    date: new Date("2023-12-23T18:00:00"),
    displayDate: "Dec 23, 2023 · 18:00",
    platformImage: "/assets/icons/twitter.svg",
    link: "https://twitter.com/i/spaces/1lPKqbjpDXMGb",
    image: `/assets/humans/speakers/varsha.jpeg`,
  },
  {
    title: "Level Up Your Projects by Building in Public",
    name: "Yash Gupta",
    date: new Date("2023-12-26T17:00:00"),
    displayDate: "Dec 26, 2023 · 17:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=8rKJumlU3Ws",
    image: `/assets/humans/speakers/yash.jpeg`,
  },
  {
    title: "Molding a Gem : Future of Education with AI",
    name: "Shihan Embuldeniya",
    date: new Date("2023-12-28T18:00:00"),
    displayDate: "Dec 28, 2023 · 18:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=e9iYg1hGxCQ",
    image: `/assets/humans/speakers/shihan.png`,
  },
  {
    title: "Learning, Sharing & Building in Public to Skyrocket your Career",
    name: "Sheetal Jain",
    date: new Date("2023-12-30T18:00:00"),
    displayDate: "Dec 30, 2023 · 18:00",
    platformImage: "/assets/icons/instagram.svg",
    link: "https://www.instagram.com/hackthisfall",
    image: `/assets/humans/speakers/sheetal.jpg`,
  },
  {
    title: "Building AR experiences with Meta Spark",
    name: "Mrunank Pawar",
    date: new Date("2024-01-02T15:00:00"),
    displayDate: "Jan 2, 2024 · 15:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=Q6BAA_Qavlo",
    image: `/assets/humans/speakers/mrunank.png`,
  },
  {
    title: "Intro to FlutterFire",
    name: "Ayush Bherwani",
    date: new Date("2024-01-04T16:00:00"),
    displayDate: "Jan 04, 2024 · 16:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=SYW2RtITlyg",
    image: `/assets/humans/speakers/ayush.png`,
  },
  {
    title: "Defining Success at Hackathons beyond Prizes",
    name: "Sneha Mishra",
    date: new Date("2024-01-13T18:00:00"),
    displayDate: "Jan 13, 2024 · 18:00",
    platformImage: "/assets/icons/twitter.svg",
    link: "https://twitter.com/i/spaces/1vOxwjDQVZqJB",
    image: `/assets/humans/speakers/sneha.jpeg`,
  },
  {
    title: "Defining Success at Hackathons beyond Prizes",
    name: "Nazeeh Vohra",
    date: new Date("2024-01-13T18:00:00"),
    displayDate: "Jan 13, 2024 · 18:00",
    platformImage: "/assets/icons/twitter.svg",
    link: "https://twitter.com/i/spaces/1vOxwjDQVZqJB",
    image: `/assets/humans/speakers/nazeeh.jpg`,
  },
  {
    title: "Elevate Your Hackathon Game with GitHub Copilot",
    name: "Afnan Abdul Vasay",
    date: new Date("2024-01-18T17:00:00"),
    displayDate: "Jan 18, 2024 · 17:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=CznWuXygvlM",
    image: `/assets/humans/speakers/abdul.png`,
  },
  {
    title: "Super-Charge your Hack with Web APIs",
    name: "Karl Lingiah",
    date: new Date("2024-01-23T16:00:00"),
    displayDate: "Jan 23, 2024 · 16:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=hmvmoBdCOZc",
    image: `/assets/humans/speakers/karl.jpeg`,
  },
  {
    title: "Getting started with Microservices Architecture & Conductor",
    name: "Saksham Solanki",
    date: new Date("2024-01-25T17:00:00"),
    displayDate: "Jan 25, 2024 · 17:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://www.youtube.com/watch?v=x1-dRvCNblM",
    image: `/assets/humans/speakers/saksham.jpeg`,
  },
];

const events = {
  "9th Feb 2024": [
    {
      start: "14:00",
      end: "17:00",
      duration: "180 mins",
      title: "Check-in Opens & Icebreakers",
      description: "Ground Floor",
      location: "Ground Floor",
    },
    {
      start: "16:00",
      end: "16:30",
      duration: "30 mins",
      title: "Light Snacks + High Tea",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "17:00",
      end: "17:10",
      duration: "10 mins",
      title: "Keynote by Orkes",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "17:15",
      end: "18:15",
      duration: "60 mins",
      title: "Orkes Workshop",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "18:20",
      end: "18:50",
      duration: "30 mins",
      title: "Vonage Workshop",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "19:00",
      end: "19:30",
      duration: "30 mins",
      title: "Opening Ceremony",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "20:00",
      end: "",
      duration: "",
      title: "Hacking Begins",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "21:00",
      end: "22:00",
      duration: "60 mins",
      title: "Dinner",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "22:30",
      end: "23:30",
      duration: "60 mins",
      title: "GitHub Workshop",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "23:45",
      end: "23:55",
      duration: "10 mins",
      title: "Stroom Stage Time",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
  ],
  "10th Feb 2024": [
    {
      start: "00:00",
      end: "01:20",
      duration: "80 mins",
      title: "Mentorship Round - 1/3",
      description: "Ideation Round",
      location: "Hacking Hall",
    },
    {
      start: "01:30",
      end: "",
      duration: "",
      title: "Submission Checkpoint - 1/5",
      description: "Add project details",
      location: "Devfolio",
    },
    {
      start: "02:00",
      end: "02:30",
      duration: "30 mins",
      title: "Midnight Snacks",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "02:45",
      end: "03:30",
      duration: "45 mins",
      title: "Midnight Mini Event - TBD",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "07:00",
      end: "07:30",
      duration: "30 mins",
      title: "Zumba Session - Decathlon",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "08:00",
      end: "09:00",
      duration: "60 mins",
      title: "Breakfast",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "10:00",
      end: "10:45",
      duration: "45 mins",
      title: "Postman Workshop",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "10:50",
      end: "11:20",
      duration: "30 mins",
      title: "MLH Soroban Workshop",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "11:25",
      end: "11:55",
      duration: "30 mins",
      title: "Logitech Workshop",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "12:00",
      end: "12:05",
      duration: "5 mins",
      title: "Orkes Stage Time",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "12:10",
      end: "13:20",
      duration: "70 mins",
      title: "Mentorship Round - 2/3",
      description: "Implementation Round",
      location: "Hacking Hall",
    },
    {
      start: "13:30",
      end: "",
      duration: "",
      title: "Submission Checkpoint - 2/5",
      description: "Submit GitHub Repo + Add Sponsor Tracks",
      location: "Devfolio",
    },
    {
      start: "13:30",
      end: "14:30",
      duration: "60 mins",
      title: "Lunch",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "14:45",
      end: "15:30",
      duration: "45 mins",
      title: "Orkes Mini Event",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "15:35",
      end: "16:20",
      duration: "45 mins",
      title: "Vonage Mini Event",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "16:30",
      end: "17:00",
      duration: "30 mins",
      title: "Light Snacks + High Tea",
      description: "Garden",
      location: "Garden Area",
    },
    {
      start: "17:15",
      end: "18:00",
      duration: "45 mins",
      title: "MLH Mini Event",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "18:15",
      end: "19:15",
      duration: "60 mins",
      title: "Orkes Office Hours",
      description: "TBD",
      location: "Classroom",
    },
    {
      start: "21:00",
      end: "22:00",
      duration: "60 mins",
      title: "Dinner",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "23:00",
      end: "00:00",
      duration: "60 mins",
      title: "Mentoring Round - 3/3",
      description: "Final Round",
      location: "Hacking Hall",
    },
  ],
  "11th Feb 2024": [
    {
      start: "00:30",
      end: "",
      duration: "",
      title: "Submission Checkpoint - 3/5",
      description: "Submit MVP",
      location: "Devfolio",
    },
    {
      start: "02:00",
      end: "02:30",
      duration: "30 mins",
      title: "Midnight Snacks",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "02:45",
      end: "03:30",
      duration: "45 mins",
      title: "Midnight Mini Event - TBD",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "06:00",
      end: "",
      duration: "",
      title: "Submission Checkpoint - 4/5",
      description: "Soft Submission",
      location: "Devfolio",
    },
    {
      start: "08:00",
      end: "",
      duration: "",
      title: "Submission Checkpoint - 5/5",
      description: "Hacking Ends",
      location: "Devfolio",
    },
    {
      start: "08:00",
      end: "09:00",
      duration: "60 mins",
      title: "Breakfast",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "11:00",
      end: "14:00",
      duration: "180 mins",
      title: "Hackathon & Partner Judging",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "13:30",
      end: "14:30",
      duration: "60 mins",
      title: "Lunch",
      description: "Garden Area",
      location: "Garden Area",
    },
    {
      start: "14:30",
      end: "",
      duration: "",
      title: "Top-10 teams announced",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "15:00",
      end: "16:00",
      duration: "60 mins",
      title: "Top-10 teams Pitch",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
    {
      start: "16:30",
      end: "17:15",
      duration: "45 mins",
      title: "Closing Ceremony + Winner Announcement",
      description: "Hacking Hall - 5th Floor",
      location: "Hacking Hall",
    },
  ],
};

const eventsMapping = [
  {
    slug: "9th Feb 2024",
    heading: "9th Feb 2024",
    events: events["9th Feb 2024"],
  },
  {
    slug: "10th Feb 2024",
    heading: "10th Feb 2024",
    events: events["10th Feb 2024"],
  },
  {
    slug: "11th Feb 2024",
    heading: "11th Feb 2024",
    events: events["11th Feb 2024"],
  },
];

const Schedule = () => {
  const [currentSection, setCurrentSection] = useState("9th Feb 2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectSection = (section: string) => {
    setCurrentSection(section);
    setIsDropdownOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const isDateGreaterThanCurrentDate = (date: Date): boolean => {
    const currentDate = new Date();
    return date > currentDate;
  };

  const isDateMoreThanOneHourBefore = (date: Date): boolean => {
    const currentDate = new Date();
    const oneHourBefore = new Date(currentDate.getTime() - 60 * 60 * 1000);
    return date < oneHourBefore;
  };

  return (
    <Flex background="#0D2129" w="100vw" h="100dvh">
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
            src="/assets/mandala-main-dark.svg"
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top={{ base: "-18vh", lg: "0" }}
            opacity="0.1"
            src="/assets/mandala-right-dark.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left={{ base: "-20vh", lg: "-15vh" }}
            bottom={{ base: "-20vh", lg: "-10vh" }}
            opacity="0.1"
            src="/assets/mandala-left-dark.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Header mode="dark" position="relative" />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          overflow="auto"
          h="full"
          zIndex="20"
        >
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize={{ base: "2rem", lg: "3rem" }}
            color={"#ffffff"}
            fontWeight="600"
            letterSpacing="0.3rem"
            textAlign={"center"}
          >
            Agenda
          </Heading>

          {!isMobile && (
            <Flex
              bgColor="transparent"
              borderRadius="full"
              w="fit-content"
              gap="1rem"
              justifyContent="space-evenly"
              className="navbar"
              zIndex={10}
              marginTop="2rem"
              border={"1px solid #FFFFFF"}
            >
              {eventsMapping.map((section, index) => {
                return (
                  <Flex
                    zIndex={10}
                    bgColor={
                      currentSection === section.slug
                        ? "#FFFFFF"
                        : "transparent"
                    }
                    color={
                      currentSection === section.slug ? "#0D2129" : "#ffffff"
                    }
                    fontFamily="var(--font-dm-sans)"
                    borderRadius="full"
                    fontSize="1.1rem"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="500"
                    px={{ md: "1rem", lg: "5rem" }}
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
              bgColor="#ffffff"
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
                pr={eventsMapping.length > 1 ? "1rem" : "0rem"}
                justifyContent="space-evenly"
                className="navbar"
                position={"relative"}
                zIndex={10}
              >
                {eventsMapping.map((section, index) => {
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
                {eventsMapping.length > 1 && (
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
                  {eventsMapping.map((section, index) => {
                    if (currentSection !== section.slug)
                      return (
                        <Flex
                          zIndex={10}
                          bgColor="#f0f0f0"
                          color="#000000"
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

          <Flex direction={"column"} fontFamily={"var(--font-dm-sans)"}>
            {eventsMapping
              .find((em) => em.slug === currentSection)
              ?.events.map((e, i) => {
                return (
                  <Box
                    width={{ base: "100%", lg: "700px" }}
                    key={`${currentSection}${i}`}
                  >
                    <Flex
                      paddingTop={i === 0 ? "0" : "1rem"}
                      marginTop={i !== 0 ? "0" : "2rem"}
                      marginLeft={"0.5rem"}
                      // margin={"auto"}
                      position="relative"
                      color={"white"}
                      alignItems={"center"}
                      justifyContent="flex-start"
                      alignSelf={"flex-start"}
                      className={
                        i === 0
                          ? "init-date"
                          : i ===
                            (eventsMapping.find(
                              (em) => em.slug === currentSection
                            )?.events.length || 0) -
                              1
                          ? "last-date"
                          : "date"
                      }
                    >
                      <Flex
                        position="absolute"
                        width={{ base: "1rem", lg: "02rem" }}
                        height={{ base: "1rem", lg: "02rem" }}
                        backgroundColor={"#1A3844"}
                        borderRadius={"50%"}
                        left={{
                          base: "calc(-0.5rem + 0.5px)",
                          lg: "calc(-1rem + 0.5px)",
                        }}
                        align={"center"}
                        justify="center"
                      >
                        <Box
                          position="relative"
                          width={{ base: "0.4rem", lg: "0.75rem" }}
                          height={{ base: "0.4rem", lg: "0.75rem" }}
                          backgroundColor={"white"}
                          borderRadius={"50%"}
                          // left="calc(50%-0rem)"
                          // left="calc(-0.25rem + 0.5px)"
                        ></Box>
                      </Flex>
                      <Flex
                        direction={"column"}
                        paddingLeft={{ base: "1rem", lg: "2rem" }}
                        width={{ base: "6rem", lg: "8rem" }}
                        minWidth={{ base: "6rem", lg: "8rem" }}
                      >
                        <Text
                          color={"#ffffff"}
                          fontSize={{ base: "1.25rem", lg: "2rem" }}
                          fontWeight="700"
                        >
                          {e.start}
                        </Text>
                        <Text
                          color={"#F46D24"}
                          fontSize={{ base: "1rem", lg: "1.25rem" }}
                        >
                          {e.duration || ""}
                        </Text>
                      </Flex>
                      <Flex
                        direction={"column"}
                        marginLeft={{ base: "1rem", lg: "6rem" }}
                      >
                        <Text
                          color={"#ffffff"}
                          fontSize={{ base: "1.25rem", lg: "2rem" }}
                          fontWeight="700"
                        >
                          {e.title}
                        </Text>
                        <Text
                          color={"#DCDCDC"}
                          fontSize={{ base: "1rem", lg: "1.25rem" }}
                        >
                          {e.description}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}
          </Flex>

          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize={{ base: "2rem", lg: "3rem" }}
            color={"#ffffff"}
            fontWeight="600"
            letterSpacing="0.3rem"
            textAlign={"center"}
            marginTop={"5rem"}
          >
            Speaker Schedule
          </Heading>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="flex-start"
            alignContent="flex-start"
            w="full"
            h="full"
            zIndex="20"
            px={{ base: "1rem", lg: "5rem" }}
            rowGap={{ base: "1rem", lg: "1rem" }}
            columnGap={{ base: "1rem", lg: "1rem" }}
            marginTop="2rem"
            gridAutoRows={{ base: "unset", lg: "1fr" }}
          >
            {sessionMapping.map((s, i) => (
              <Flex
                key={i}
                justifyContent="space-between"
                py={{ base: "0.5rem", lg: "1rem" }}
                paddingLeft={{ base: "0.5rem", lg: "1.5rem" }}
                paddingRight={{ base: "0.5rem", lg: "2rem" }}
                borderRadius="0.5rem"
                flexDirection="column"
                fontFamily="var(--font-nohemi)"
                backgroundColor={"#0E252D"}
                position={"relative"}
                width={{ base: "100%", lg: "unset" }}
                height="100%"
              >
                <Box
                  // href={s.link}
                  // target="_blank"
                  position={"absolute"}
                  bottom="1rem"
                  right="1rem"
                >
                  <Image
                    src={s.image}
                    w={{ base: "4rem", lg: "4rem" }}
                    h={{ base: "4rem", lg: "4rem" }}
                    alt="logo"
                    borderRadius={{
                      base: "1.75rem 1rem",
                      lg: "1.75rem 1rem",
                    }}
                  />
                </Box>
                <Flex flexDirection="column">
                  <Text
                    color="#F46D24"
                    fontFamily={"var(--font-dm-sans)"}
                    fontWeight="600"
                    letterSpacing="0.05rem"
                    // fontSize={{ base: "0.5rem", lg: "unset" }}
                    marginTop="0.5rem"
                  >
                    {s.title}
                  </Text>
                  {s && s.name && (
                    <Text
                      fontFamily={"var(--font-dm-sans)"}
                      color="#ffffff"
                      opacity="0.5"
                      letterSpacing="0.06rem"
                      // fontSize={{ base: "0.5rem", lg: "unset" }}
                    >
                      {s.name}
                    </Text>
                  )}
                </Flex>
                <Flex flexDirection={"column"}>
                  {s && s.date && (
                    <Text
                      fontFamily={"var(--font-dm-sans)"}
                      color="#ffffff"
                      letterSpacing="0.06rem"
                      // fontSize={{ base: "0.5rem", lg: "unset" }}
                      marginTop={"1rem"}
                    >
                      {s.displayDate} IST
                    </Text>
                  )}
                  <Link
                    href={s.link}
                    target="_blank"
                    width="fit-content"
                    height="fit-content"
                    className="no-underline"
                    marginTop={"2rem"}
                  >
                    <Flex
                      border={"1px solid white"}
                      borderRadius={"2rem"}
                      fontSize={"0.8rem"}
                      padding="0.5rem 1rem"
                      height="fit-content"
                      width="fit-content"
                      justify={"center"}
                      alignItems={"center"}
                      color="#ffffff"
                      _hover={{
                        background: "#fff",
                        color: "#0D2129",
                      }}
                      cursor="pointer"
                      className="schedule-link"
                    >
                      <Image src={s.platformImage} alt="arrow" />
                      <Text
                        fontFamily={"var(--font-nohemi)"}
                        marginLeft={"0.5rem"}
                        marginTop={"2px"}
                      >
                        {isDateGreaterThanCurrentDate(s.date)
                          ? `Upcoming`
                          : isDateMoreThanOneHourBefore(s.date)
                          ? `Watch Now`
                          : `Live Now`}
                      </Text>
                    </Flex>
                  </Link>
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Flex>
        <Footer mode="dark" />
      </Flex>
    </Flex>
  );
};

export default Schedule;
