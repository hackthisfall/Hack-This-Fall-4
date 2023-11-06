"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const metrics = [
  {
    number: "48",
    text: "Hours",
  },
  {
    number: "6000+",
    text: "Hackers",
  },
  {
    number: "40+",
    text: "Workshops",
  },
  {
    number: "460+",
    text: "Projects",
  },
  {
    number: "60+",
    text: "Mentors",
  },
  {
    number: "55+",
    text: "Countries",
  },
];

const About = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (typeof window !== "undefined") {
    var element = document.getElementById("aboutInternalDiv");
    if (element) element.scrollTop = -element.scrollHeight;
  }

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
        <Header mode="light" position="relative" />
        <Flex
          id="aboutInternalDiv"
          flexDirection={{ base: "column-reverse", lg: "row" }}
          alignItems="center"
          justifyContent={{ base: "space-between", lg: "center" }}
          flexWrap={{ lg: "wrap" }}
          px={{ base: "2rem", lg: 0 }}
          w="full"
          h="full"
          zIndex="20"
          columnGap={{ md: "4rem", "2xl": "5rem" }}
          rowGap="0.5rem"
          overflow="auto"
          marginTop={{ base: "0rem", lg: "4rem" }}
        >
          <Flex
            flexDirection="column"
            maxWidth={{ base: "full", lg: "min(40vw,0.40*1440px)" }}
            minWidth={"min(40vw,0.40*1440px)"}
          >
            <Heading
              fontFamily="var(--font-nohemi)"
              fontWeight="600"
              letterSpacing="0.15rem"
              fontSize={{ base: "2rem", lg: "4rem" }}
              marginTop={{ base: "2rem", lg: "unset" }}
            >
              <span className="text-[#000000]">What sets us </span>
              <span className="text-[#F25B2A]">apart</span>
            </Heading>
            <Box
              color="#000000"
              fontFamily="var(--font-dm-sans)"
              marginTop={{ base: "0.5rem", lg: "2rem" }}
              fontSize="1.25rem"
              textAlign="justify"
            >
              <p>
                Hack This Fall began with a mindset of encouraging new hackers
                to build unique projects regardless of the tech or field. The
                only focus was to create something meaningful and enjoy the
                process of building, while also solving the shared struggles of
                our surroundings.
              </p>
              <br />
              <p>
                For this season, we are breaking the virtual barrier and will be
                hosting a 36 Hours In-person Hackathon; where we are aiming to
                promote hackers and help them nurture their new ideas and
                prototypes in various domains.
              </p>
            </Box>
            <Heading
              className="journey"
              fontSize="1.25rem"
              color="#4A4A4A"
              marginTop={{ base: "2rem", lg: "4rem" }}
              position="relative"
            >
              <span>Our journey so far</span>
              {!isMobile && (
                <Image
                  className="journey-img"
                  src="/assets/about/star.svg"
                  alt="star"
                />
              )}
            </Heading>
            <Grid
              color="#2C2C2C"
              fontFamily="var(--font-nohemi)"
              templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              rowGap="1rem"
              columnGap={{ base: "2rem", lg: "unset" }}
              marginTop="2rem"
            >
              {metrics.map((m, i) => (
                <GridItem key={i}>
                  <Text
                    fontWeight={800}
                    fontSize={{ base: "1.75rem", lg: "2rem" }}
                    lineHeight="3rem"
                  >
                    {m.number}
                  </Text>
                  <Text
                    fontWeight={500}
                    fontSize={{ base: "1.4rem", lg: "1.5rem" }}
                    lineHeight="1.75rem"
                  >
                    {m.text}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Flex>
          <Box
            maxWidth={{ base: "full", lg: "min(40vw,0.40*1440px)" }}
            minWidth={"min(40vw,0.40*1440px)"}
          >
            <Box className="image-container">
              <div className="images">
                <div className="images-slide">
                  <Image
                    alt="1"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/1.svg"
                  />
                  <Image
                    alt="2"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/2.svg"
                  />
                  <Image
                    alt="1"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/1.svg"
                  />
                  <Image
                    alt="2"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/2.svg"
                  />
                </div>
              </div>
            </Box>

            <Box
              className="image-container relative"
              marginTop={{ base: "1rem", lg: "2.5rem" }}
            >
              <div className="images">
                <div className="images-slide-rev">
                  <Image
                    alt="1"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/1.svg"
                  />
                  <Image
                    alt="2"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/2.svg"
                  />
                  <Image
                    alt="1"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/1.svg"
                  />
                  <Image
                    alt="2"
                    className="img"
                    width={{ base: "17rem", lg: "34rem" }}
                    display="inline-block"
                    marginX={{ base: "0.5rem", lg: "1rem" }}
                    src="/assets/about/2.svg"
                  />
                </div>
              </div>
              <Box
                className={`rotating-text${
                  isMobile ? "-mobile" : ""
                } absolute `}
              >
                <Image
                  alt="circular text"
                  animation="clockwiseSpin 15s linear infinite"
                  src="/assets/about/circular-text.svg"
                  width={{ base: "6rem", lg: "10rem" }}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default About;
