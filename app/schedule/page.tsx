"use client";

import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/yash.jpeg`,
  },
  {
    title: "Molding a Gem : Future of Education with AI",
    name: "Shihan Embuldeniya",
    date: new Date("2023-12-28T18:00:00"),
    displayDate: "Dec 28, 2023 · 18:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://youtube.com/hackthisfall",
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
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/mrunank.png`,
  },
  {
    title: "Intro to FlutterFire",
    name: "Ayush Bherwani",
    date: new Date("2024-01-04T16:00:00"),
    displayDate: "Jan 04, 2024 · 16:00",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/ayush.png`,
  },
  {
    title: "Defining Success at Hackathons beyond Prizes",
    name: "Sneha Mishra",
    date: new Date("2024-01-13T18:00:00"),
    displayDate: "Jan 13, 2024 · 18:00",
    platformImage: "/assets/icons/twitter.svg",
    link: "https://twitter.com/hackthisfall",
    image: `/assets/humans/speakers/sneha.jpeg`,
  },
  {
    title: "Defining Success at Hackathons beyond Prizes",
    name: "Nazeeh Vohra",
    date: new Date("2024-01-13T18:00:00"),
    displayDate: "Jan 13, 2024 · 18:00",
    platformImage: "/assets/icons/twitter.svg",
    link: "https://twitter.com/hackthisfall",
    image: `/assets/humans/speakers/nazeeh.jpg`,
  },
  {
    title: "TBD",
    name: "TBD",
    date: new Date("2024-01-16T00:00:00"),
    displayDate: "Jan 16, 2024",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/silhouette.png`,
  },
  {
    title: "GitHub Copilot Workshop",
    name: "TBD",
    date: new Date("2024-01-18T00:00:00"),
    displayDate: "Jan 18, 2024",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/silhouette.png`,
  },
  {
    title: "Hack This Fall AMA",
    name: "Siddharth Dayalwal",
    date: new Date("2024-01-20T00:00:00"),
    displayDate: "Jan 20, 2024",
    platformImage: "/assets/icons/instagram.svg",
    link: "https://www.instagram.com/hackthisfall",
    image: `/assets/humans/speakers/siddharth.jpeg`,
  },
  {
    title: "Super-charge Your Hack with Web APIs",
    name: "Karl Lingiah",
    date: new Date("2024-01-23T00:00:00"),
    displayDate: "Jan 23, 2024",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/karl.jpeg`,
  },
  {
    title: "Orkes Workshop",
    name: "TBD",
    date: new Date("2024-01-25T00:00:00"),
    displayDate: "Jan 25, 2024",
    platformImage: "/assets/icons/youtube.svg",
    link: "https://youtube.com/hackthisfall",
    image: `/assets/humans/speakers/silhouette.png`,
  },
];

const Schedule = () => {
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
