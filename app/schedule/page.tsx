"use client";

import {
  Button,
  Flex,
  Grid,
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

type sessionMappingType = {
  title: string;
  name: string;
  date: Date;
  displayDate: string;
  link: string;
  image: string;
};

const sessionMapping: sessionMappingType[] = [
  {
    title: `Opening Ceremony`,
    name: `Opening Ceremony`,
    date: new Date(`2021-10-09T09:00:00`),
    displayDate: "12th Dec 2023, 12:00 IST",
    link: `https://www.youtube.com/watch?v=KkT2V4Z2eeE`,
    image: `/assets/humans/P1.jpeg`,
  },
];

for (let index = 0; index < 8; index++) {
  sessionMapping.push(sessionMapping[0]);
}

const Schedule = () => {
  const [currentSection, setCurrentSection] = useState("organizers");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectSection = (section: string) => {
    setCurrentSection(section);
    setIsDropdownOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });
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
          >
            {sessionMapping.map((s, i) => (
              <Flex
                key={i}
                justifyContent="center"
                paddingLeft={{ base: "0.5rem", lg: "1.5rem" }}
                py={{ base: "0.5rem", lg: "1rem" }}
                borderRadius="0.5rem"
                flexDirection="column"
                fontFamily="var(--font-nohemi)"
                backgroundColor={"#0E252D"}
                position={"relative"}
                paddingRight={{ base: "0.5rem", lg: "5rem" }}
                width={{ base: "100%", lg: "unset" }}
              >
                <Link
                  href={s.link}
                  target="_blank"
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
                </Link>
                <Text
                  color="#F46D24"
                  fontFamily={"var(--font-dm-sans)"}
                  fontWeight="600"
                  letterSpacing="0.05rem"
                  // fontSize={{ base: "0.5rem", lg: "unset" }}
                  marginTop="0.5rem"
                >
                  {s.name}
                </Text>
                {s && s.title && (
                  <Text
                    fontFamily={"var(--font-dm-sans)"}
                    color="#ffffff"
                    opacity="0.5"
                    letterSpacing="0.06rem"
                    // fontSize={{ base: "0.5rem", lg: "unset" }}
                  >
                    {s.title}
                  </Text>
                )}
                {s && s.date && (
                  <Text
                    fontFamily={"var(--font-dm-sans)"}
                    color="#ffffff"
                    letterSpacing="0.06rem"
                    // fontSize={{ base: "0.5rem", lg: "unset" }}
                    marginTop={"1rem"}
                  >
                    {s.displayDate}
                  </Text>
                )}
                <Flex
                  marginTop={"2rem"}
                  border={"1px solid white"}
                  borderRadius={"2rem"}
                  fontSize={"0.8rem"}
                  padding="0.5rem 1rem"
                  width="fit-content"
                  justify={"center"}
                  alignItems={"center"}
                >
                  <Image src="/assets/icons/twitch.svg" alt="arrow" />
                  <Text
                    fontFamily={"var(--font-nohemi)"}
                    color="#ffffff"
                    marginLeft={"0.5rem"}
                  >
                    Watch Event
                  </Text>
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
