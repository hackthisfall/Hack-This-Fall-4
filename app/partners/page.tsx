"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Metadata } from "next";

const partnerMapping: Array<{
  slug: string;
  heading: string;
  sponsors: Array<{
    logo: string;
    url: string;
  }>;
}> = [
  // {
  //   slug: "powered-by",
  //   heading: "Powered By",
  //   sponsors: [
  //     {
  //       logo: "/assets/partners/powered-by/orkes.svg",
  //       url: "https://orkes.io/",
  //     },
  //   ],
  // },
  // // { slug: "diamond", heading: "Diamond", sponsors: [] },
  // {
  //   slug: "platinum",
  //   heading: "Platinum",
  //   sponsors: [
  //     {
  //       logo: "/assets/partners/platinum/vonage.svg",
  //       url: "https://vonage.dev/hackthisfall",
  //     },
  //   ],
  // },
  // {
  //   slug: "gold",
  //   heading: "Gold",
  //   sponsors: [
  //     {
  //       logo: "/assets/partners/gold/github.svg",
  //       url: "https://education.github.com/benefits?utm_source=2024-02-09-HackThisFall",
  //     },
  //   ],
  // },
  // {
  //   slug: "silver",
  //   heading: "Silver",
  //   sponsors: [
  //     {
  //       logo: "/assets/partners/silver/postman.svg",
  //       url: "https://www.postman.com",
  //     },
  //   ],
  // },
  {
    slug: "sponsors",
    heading: "Sponsors",
    sponsors: [],
  },

  {
    slug: "featured",
    heading: "Featured Partners",
    sponsors: [],
  },
  // { slug: "bronze", heading: "Bronze", sponsors: [] },
  // { slug: "in-kind", heading: "In-Kind", sponsors: [] },
  // { slug: "community", heading: "Community", sponsors: [] },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | Partners",
// };

const Partners = () => {
  const [currentSection, setCurrentSection] = useState("sponsors");
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
            letterSpacing="0.1rem"
          >
            Partners
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
              {partnerMapping.map((section, index) => {
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
                    px={{ md: "1rem", lg: "2rem" }}
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
                pr={partnerMapping.length > 1 ? "1rem" : "0rem"}
                justifyContent="space-evenly"
                className="navbar"
                position={"relative"}
                zIndex={10}
              >
                {partnerMapping.map((section, index) => {
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
                {partnerMapping.length > 1 && (
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
                  {partnerMapping.map((section, index) => {
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
            flexGrow={1}
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="flex-start"
            alignContent="flex-start"
            w="full"
            h="full"
            zIndex="20"
            px={{ base: "2rem", lg: "5rem" }}
            columnGap={{ base: "1rem", lg: "2rem" }}
            rowGap={{ base: "1rem", lg: "2rem" }}
            marginTop="2rem"
          >
            {partnerMapping
              .find((p) => p.slug === currentSection)
              ?.sponsors?.map((s, i) => (
                <Flex
                  backgroundColor="#F7F7F7"
                  key={i}
                  width={{ base: "7rem", lg: "12rem" }}
                  justifyContent="center"
                  px={{ base: "0.75rem", lg: "1.5rem" }}
                  py={{ base: "0.5rem", lg: "1rem" }}
                  borderRadius="0.5rem"
                >
                  <Image src={s.logo} alt="logo" />
                </Flex>
              ))}
            {currentSection === "sponsors" && (
              <Flex flexDirection="column" maxWidth={"1280px"}>
                <Flex
                  flexDirection={{ base: "column", lg: "row" }}
                  backgroundColor="#F7F7F7"
                  justifyContent="center"
                  // px={{ base: "0.75rem", lg: "1.5rem" }}
                  // py={{ base: "0.5rem", lg: "1rem" }}
                  columnGap="5rem"
                  borderRadius={{ base: "0.75rem 2rem", lg: "1rem 5.75rem" }}
                  paddingX={{ base: "1rem", lg: "3rem" }}
                  paddingY={{ base: "0.5rem", lg: "3.5rem" }}
                >
                  <Flex
                    flexDirection="column"
                    alignItems={{ base: "center", lg: "unset" }}
                  >
                    <Text
                      fontFamily="var(--font-nohemi)"
                      color="#9B9B9B"
                      fontWeight={500}
                      fontSize={{ base: "1rem", lg: "1.5rem" }}
                      letterSpacing="0.64px"
                    >
                      Powered-by
                    </Text>
                    <Flex
                      flexGrow={1}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Link
                        href="https://bit.ly/htf4-con-repo"
                        target="_blank"
                        className="no-underline"
                      >
                        <Image
                          minWidth={{ base: "60vw", lg: "min(25vw, 320px)" }}
                          marginTop={{ base: "1rem", lg: "unset" }}
                          src="/assets/partners/powered-by/orkes.svg"
                          alt="logo"
                        />
                      </Link>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection="column"
                    marginTop={{ base: "1rem", lg: "unset" }}
                  >
                    <Text
                      fontFamily="var(--font-dm-sams)"
                      align={{ base: "center", lg: "unset" }}
                    >
                      Orkes, the enterprise-grade Conductor platform, simplifies
                      developing and scaling distributed workflows,
                      microservices and events. Organizations can now accelerate
                      delivering applications and eliminate the complexity of
                      building and managing orchestration infrastructure.
                    </Text>
                    <Flex flexDirection={{ base: "column", lg: "row" }}>
                      <Flex
                        justifyContent="center"
                        marginTop={"1rem"}
                        padding={"0.75rem 3rem"}
                        border={"1.5px solid #000000"}
                        width={{ base: "unset", lg: "fit-content" }}
                        borderRadius="2rem"
                        _hover={{ bg: "black", color: "white" }}
                        cursor="pointer"
                      >
                        <Link
                          href="https://bit.ly/htf4-orkes"
                          target="_blank"
                          className="no-underline"
                        >
                          Learn more
                        </Link>
                      </Flex>

                      <Flex
                        justifyContent="center"
                        marginTop={"1rem"}
                        marginLeft={{ base: "unset", lg: "1rem" }}
                        padding={"0.75rem 3rem"}
                        border={"1.5px solid #000000"}
                        width={{ base: "unset", lg: "fit-content" }}
                        borderRadius="2rem"
                        _hover={{ bg: "black", color: "white" }}
                        cursor="pointer"
                      >
                        <Link
                          href="https://bit.ly/htf4-con-repo"
                          target="_blank"
                          className="no-underline"
                        >
                          GitHub
                        </Link>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>

                <Grid
                  marginTop="1.5rem"
                  fontFamily="var(--font-nohemi)"
                  color="#9B9B9B"
                  fontWeight={500}
                  fontSize={{ base: "1rem", lg: "1.5rem" }}
                  letterSpacing="0.64px"
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                  gridAutoRows={{ base: "unset", lg: "1fr" }}
                  columnGap="1.5rem"
                  rowGap="1.5rem"
                >
                  <GridItem colSpan={2}>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      // justifyContent="space-between"
                      alignItems="center"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text>Platinum</Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Link target="blank" href="https://bit.ly/htf4-vonage">
                          <Image
                            src="/assets/partners/platinum/vonage.svg"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      width="100%"
                      alignItems="center"
                      height="100%"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text>Gold</Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Link target="blank" href="https://bit.ly/htf4-sdp">
                          <Image
                            src="/assets/partners/gold/github.svg"
                            alt="logo"
                            marginY="1rem"
                            width="100%"
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      alignItems="center"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text>Silver</Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                        marginY="1rem"
                      >
                        <Link target="blank" href="https://bit.ly/htf4-postman">
                          <Image
                            src="/assets/partners/silver/postman.svg"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      alignItems="center"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text>Silver</Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                        marginY="1rem"
                      >
                        <Link target="blank" href="https://bit.ly/htf4-neurelo">
                          <Image
                            src="/assets/partners/silver/neurelo.png"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              </Flex>
            )}

            {currentSection === "featured" && (
              <Flex flexDirection="column" maxWidth={"1280px"}>
                <Grid
                  marginTop="1.5rem"
                  fontFamily="var(--font-nohemi)"
                  color="#9B9B9B"
                  fontWeight={500}
                  fontSize={{ base: "1rem", lg: "1.5rem" }}
                  letterSpacing="0.64px"
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                  gridAutoRows={{ base: "unset", lg: "1fr" }}
                  columnGap="1.5rem"
                  rowGap="1.5rem"
                >
                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      width="100%"
                      alignItems="center"
                      height="100%"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text align="center" lineHeight="1.5rem">
                        Venue
                        <br />
                        Partner
                      </Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Link
                          target="blank"
                          href="https://karnavatiuniversity.edu.in/"
                        >
                          <Image
                            src="/assets/partners/featured/karnavati.svg"
                            alt="logo"
                            marginY="1rem"
                            width="100%"
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      width="100%"
                      alignItems="center"
                      height="100%"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text align="center" lineHeight="1.5rem">
                        Incubation
                        <br />
                        Partner
                      </Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Link
                          target="blank"
                          href="https://karnavatiuniversity.edu.in/kiif/"
                        >
                          <Image
                            src="/assets/partners/featured/kiif.svg"
                            alt="logo"
                            marginY="1rem"
                            width="100%"
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      alignItems="center"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text align="center" lineHeight="1.5rem">
                        Hackathon
                        <br />
                        Partner
                      </Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                        marginY="1rem"
                      >
                        <Link target="blank" href="https://mlh.io/">
                          <Image
                            src="/assets/partners/featured/mlh.svg"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      alignItems="center"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text align="center" lineHeight="1.5rem">
                        Sports
                        <br />
                        Partner
                      </Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                        marginY="1rem"
                      >
                        <Link target="blank" href="https://www.decathlon.in/">
                          <Image
                            src="/assets/partners/featured/decathlon.png"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      alignItems="center"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text align="center" lineHeight="1.5rem">
                        Nutrition
                        <br />
                        Partner
                      </Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                        marginY="1rem"
                      >
                        <Link target="blank" href="https://www.stroom.in/">
                          <Image
                            src="/assets/partners/featured/stroom.png"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>

                  <GridItem>
                    <Flex
                      backgroundColor="#F7F7F7"
                      height="100%"
                      width="100%"
                      alignItems="center"
                      // justifyContent="space-between"
                      paddingX={{ base: "1rem", lg: "3rem" }}
                      paddingY={{ base: "0.5rem", lg: "3rem" }}
                      borderRadius={{
                        base: "0.75rem 2rem",
                        lg: "1rem 5.75rem",
                      }}
                      flexDirection="column"
                    >
                      <Text align="center" lineHeight="1.5rem">
                        Media
                        <br />
                        Partner
                      </Text>
                      <Flex
                        flexGrow={1}
                        justifyContent={"center"}
                        alignItems="center"
                        marginY="1rem"
                      >
                        <Link target="blank" href="https://www.k2kframes.com/">
                          <Image
                            src="/assets/partners/featured/k2k.webp"
                            alt="logo"
                            width={"100%"}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              </Flex>
            )}
          </Flex>
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default Partners;
