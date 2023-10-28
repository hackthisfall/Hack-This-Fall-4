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
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
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
            animation="rotateImg 30s linear infinite"
            opacity="0.1"
            src="/assets/mandala-main-light.svg"
            h="90%"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top="0"
            animation="rotateImg 30s linear infinite"
            opacity="0.1"
            src="/assets/mandala-right-light.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left="-15vh"
            bottom="-10vh"
            animation="rotateImg 30s linear infinite"
            opacity="0.1"
            src="/assets/mandala-left-light.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Header mode="light" position="relative" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
          alignContent="flex-start"
          w="full"
          h="full"
          zIndex="20000"
          px="5rem"
          columnGap="0.2rem"
          rowGap="0.5rem"
          overflow="auto"
          marginTop="4rem"
        >
          <Flex flexDirection="column" maxWidth={"40vw"} minWidth={"40vw"}>
            <Heading
              fontFamily="var(--font-nohemi)"
              fontWeight="600"
              letterSpacing="0.15rem"
              fontSize="4rem"
            >
              <span className="text-[#000000]">What sets us </span>
              <span className="text-[#F25B2A]">apart</span>
            </Heading>
            <Box
              color="#000000"
              fontFamily="var(--font-dm-sans)"
              marginTop="2rem"
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
              marginTop="4rem"
              position="relative"
            >
              <span>Our journey so far</span>
              <Image className="journey-img" src="/assets/about/star.svg" />
            </Heading>
            <Grid
              color="#2C2C2C"
              fontFamily="var(--font-nohemi)"
              templateColumns="repeat(3, 1fr)"
              rowGap="1rem"
              marginTop="2rem"
            >
              {metrics.map((m, i) => (
                <GridItem key={i}>
                  <Text fontWeight={800} fontSize="2rem" lineHeight="3rem">
                    {m.number}
                  </Text>
                  <Text fontWeight={500} fontSize="1.5rem" lineHeight="1.75rem">
                    {m.text}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Flex>
          <Box maxWidth={"40vw"} minWidth={"40vw"}>
            <div className="image-container">
              <div className="images">
                <div className="images-slide">
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/1.svg"
                  />
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/2.svg"
                  />
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/1.svg"
                  />
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/2.svg"
                  />
                </div>
              </div>
            </div>

            <div className="image-container mt-10">
              <div className="images">
                <div className="images-slide-rev">
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/1.svg"
                  />
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/2.svg"
                  />
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/1.svg"
                  />
                  <Image
                    className="img"
                    width="34rem"
                    display="inline-block"
                    marginX="1rem"
                    src="/assets/about/2.svg"
                  />
                </div>
              </div>
            </div>
          </Box>
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default About;
