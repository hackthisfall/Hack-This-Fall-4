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
import Footer from "../components/Footer";

const metrics = [
  {
    number: "5000+",
    text: "Hackers",
  },
  {
    number: "90+",
    text: "Cities",
  },
  {
    number: "48+",
    text: "Hack Hours",
  },
  {
    number: "460+",
    text: "Projects",
  },
  {
    number: "40+",
    text: "Workshops",
  },
  {
    number: "60+",
    text: "Mentors",
  },
];

const imagesCounter = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

const ImageContainer = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box
      maxWidth={{ base: "full", lg: "min(40vw,0.40*1440px)" }}
      minWidth={"min(40vw,0.40*1440px)"}
      minHeight={{ base: "21rem", lg: "43rem" }}
    >
      <Box className="image-container">
        <div className="images">
          <div className="images-slide">
            {imagesCounter.map((n) => (
              <Image
                borderRadius={"0.75rem"}
                key={n}
                alt={`${n}`}
                className="img"
                height={{ base: "10rem", lg: "20rem" }}
                display="inline-block"
                marginX={{ base: "0.5rem", lg: "1rem" }}
                src={`/assets/about/1-${n}.png`}
              />
            ))}
          </div>
        </div>
      </Box>

      <Box
        className="image-container relative"
        marginTop={{ base: "1rem", lg: "2.5rem" }}
      >
        <div className="images">
          <div className="images-slide-rev">
            {imagesCounter.map((n) => (
              <Image
                borderRadius={"0.75rem"}
                key={n}
                alt={`${n}`}
                className="img"
                height={{ base: "10rem", lg: "20rem" }}
                display="inline-block"
                marginX={{ base: "0.5rem", lg: "1rem" }}
                src={`/assets/about/2-${n}.png`}
              />
            ))}
          </div>
        </div>
        <Box className={`rotating-text${isMobile ? "-mobile" : ""} absolute `}>
          <Image
            alt="circular text"
            animation="clockwiseSpin 15s linear infinite"
            src="/assets/about/circular-text.svg"
            width={{ base: "6rem", lg: "10rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const About = () => {
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
        <Header mode="light" position="relative" />
        <Flex
          id="aboutInternalDiv"
          flexDirection={{ base: "column", lg: "row" }}
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
          {isMobile && <ImageContainer />}
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
                We initiated the Hack This Fall Hackathon with the goal of
                fostering a beginner-friendly environment where people of
                diverse backgrounds can collaborate and create meaningful
                projects, offering a true hackathon experience.
              </p>
              <br />
              <p>
                With three successful seasons of our flagship event in the bag,
                we are thrilled to welcome hackers from all backgrounds and
                skills at <b> Hack This Fall Hackathon Season 4</b>.
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
          {!isMobile && <ImageContainer />}
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default About;
