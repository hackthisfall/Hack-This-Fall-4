"use client";

import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
        image: "/assets/speakers/shambhav.jpg",
      },
    ],
  },
  {
    slug: "judges",
    heading: "Judges",
    people: [
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/speakers/shambhav.jpg",
      },
    ],
  },
  {
    slug: "mentors",
    heading: "Mentors",
    people: [
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/speakers/shambhav.jpg",
      },
    ],
  },
  {
    slug: "evangelists",
    heading: "Evangelists",
    people: [
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/speakers/shambhav.jpg",
      },
    ],
  },
  {
    slug: "teams",
    heading: "Teams",
    people: [
      {
        name: "Shambhav Mishra",
        title: "Web publisher",
        image: "/assets/speakers/shambhav.jpg",
      },
    ],
  },
];

const Humans = () => {
  const [currentSection, setCurrentSection] = useState("speakers");

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
            Humans
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
            {humansMapping.map((section, index) => {
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
          overflow={"auto"}
        >
          <p className="text-4xl" color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fermentum, erat vitae tincidunt blandit, sapien elit ultricies ante,
            vel condimentum ante arcu ut elit. Maecenas dignissim arcu vitae mi
            tristique, vel iaculis dui varius. Nulla sem eros, vehicula sed
            finibus a, venenatis a lectus. Nullam sed rhoncus ex, a mattis
            ipsum. Nullam nec sodales leo. Donec dignissim accumsan rutrum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus tortor purus, suscipit at cursus
            sit amet, tempus pretium nulla. Aliquam dictum leo a suscipit
            ultrices. Mauris at dapibus turpis. Suspendisse potenti. Duis
            porttitor leo ac egestas elementum. Duis at pharetra dui. Cras
            vehicula arcu et varius accumsan. Quisque nulla lectus, euismod quis
            dignissim ac, euismod vel neque. Nulla accumsan efficitur nulla, vel
            dictum urna malesuada in. Sed vel feugiat diam. Cras arcu erat,
            venenatis vitae iaculis id, scelerisque nec dolor. Curabitur est
            risus, malesuada non suscipit quis, convallis eget sapien. Duis
            lobortis bibendum turpis, a facilisis risus maximus quis. Phasellus
            in est felis. Donec lobortis nulla ac arcu venenatis, eu vehicula
            nulla suscipit. Curabitur at ipsum sagittis, rutrum dui nec,
            accumsan metus. Donec eu ante vel arcu eleifend efficitur ac
            molestie massa. Morbi dui dui, aliquam nec vulputate et, gravida a
            risus. Nulla facilisi. Proin porta lectus risus. Sed tincidunt enim
            nec tincidunt placerat. Cras sollicitudin scelerisque nulla varius
            luctus. Aliquam ultrices justo at turpis euismod blandit et in mi.
            Vivamus vitae eleifend metus. Etiam lacus mi, placerat sed euismod
            eget, faucibus vel justo. Sed ullamcorper lectus libero, ut dapibus
            augue volutpat nec. Maecenas volutpat bibendum laoreet. Praesent
            imperdiet pretium tellus, et bibendum nunc consectetur sit amet. Sed
            lobortis dapibus lorem. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam a varius quam. Donec dolor odio, feugiat eu
            magna eget, viverra pretium sem. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac
            gravida urna. Cras finibus nunc quis semper elementum. Maecenas
            tempor elit sollicitudin vehicula dapibus. Quisque nec nibh quis
            diam fringilla mollis eu lacinia turpis. Proin id ornare dolor.
            Nulla lobortis congue elit nec feugiat. Maecenas pretium vehicula
            diam, sit amet cursus lorem. Sed sed pretium orci. Sed id augue
            vitae quam posuere tempor at a enim. Nullam metus nibh, laoreet ut
            mauris vel, tempus sodales justo. Pellentesque et nunc in nulla
            interdum aliquam. Pellentesque consequat euismod purus at pulvinar.
            Sed sed malesuada odio. Vestibulum sed augue massa. Sed tincidunt
            tortor ipsum, a mattis nisi sodales sed. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam euismod quam nec sem blandit
            vulputate. Nunc eu sollicitudin nisi. Donec at fermentum odio. Donec
            non erat nibh. Cras iaculis bibendum ipsum et tincidunt. Aliquam sed
            tortor eget arcu cursus pharetra. Pellentesque congue pellentesque
            risus, vel ornare turpis. Cras condimentum posuere posuere. Aliquam
            dictum convallis vehicula. Quisque luctus placerat justo non
            elementum. Fusce dignissim justo mauris, vitae hendrerit leo euismod
            quis.
          </p>
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Humans;
