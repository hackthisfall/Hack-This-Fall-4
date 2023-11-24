"use client";

import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Metadata } from "next";

const tracksMapping = [
  {
    heading: "Generative AI & Machine Learning",
    image: "/assets/tracks/gen-ai.gif",
  },
  {
    heading: "Blockchain & Web3",
    image: "/assets/tracks/blockchain.gif",
  },
  {
    heading: "IoT & Embedded Systems",
    image: "/assets/tracks/iot.gif",
  },
  {
    heading: "Augmented/Virtual Reality",
    image: "/assets/tracks/ar-vr.gif",
  },
  {
    heading: "Cloud & DevOps",
    image: "/assets/tracks/cloud.gif",
  },
  {
    heading: "Open Track: Innovate for Good",
    image: "/assets/tracks/open-innovation.gif",
  },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | Tracks",
// };

const Tracks = () => {
  return (
    <Flex background="#0D2129" w="100vw" h="100dvh">
      <Flex
        overflow="hidden"
        position="relative"
        mx="auto"
        width="min(100vw, 200vh)"
        justifyContent="center"
        alignItems="center"
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
            opacity="0.15"
            src="/assets/mandala-main-dark.svg"
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top={{ base: "-18vh", lg: "0" }}
            opacity="0.15"
            src="/assets/mandala-right-dark.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left={{ base: "-20vh", lg: "-15vh" }}
            bottom={{ base: "-20vh", lg: "-10vh" }}
            opacity="0.15"
            src="/assets/mandala-left-dark.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex
          pos="absolute"
          flexDirection="column"
          alignItems="center"
          w="full"
          h="100%"
          zIndex="2"
        >
          <Header mode="dark" position="relative" />
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize="3rem"
            color="#FFFFFF"
            fontWeight="600"
            letterSpacing="0.3rem"
            mb="2rem"
          >
            Tracks
          </Heading>
          <Flex
            px={{ base: "0rem", md: "2rem" }}
            pt="0"
            pb={{ base: "2rem", md: "0" }}
            h="full"
            w="full"
            alignItems={{ base: "flex-start", lg: "center" }}
            justifyContent="center"
            overflowY={{ base: "auto", xl: "hidden" }}
          >
            <SimpleGrid
              columnGap="6rem"
              rowGap="3rem"
              alignItems="baseline"
              columns={{ base: 1, md: 2, lg: 3 }}
            >
              {tracksMapping.map((track) => (
                <Flex
                  key={track.heading}
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  mt="2rem"
                  w="240px"
                >
                  <Image height="150px" src={track.image} alt={track.heading} />
                  <Text
                    mt="2rem"
                    lineHeight="130%"
                    fontFamily="var(--font-nohemi)"
                    fontSize="1.3rem"
                    letterSpacing="0.1rem"
                    textAlign="center"
                    color="#FFF"
                  >
                    {track.heading}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
          <Footer mode="dark" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Tracks;
