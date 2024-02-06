"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";

type PrizeList = {
  title: string;
  description: string;
  image: string;
  resources: {
    title: string;
    link: string;
  }[];
};

type PrizeCategory = {
  title: string;
  prizeList: PrizeList[];
};

const htfSecondaryPrizes = [
  {
    title: "👭 Best All Girls Team",
    description: "₹10,000 to the winning team and additional perks",
  },
  {
    title: "🌟 Best Beginner Team",
    description: "₹10,000 to the winning team and additional perks",
  },
];

const prizesMapping: PrizeCategory[] = [
  {
    title: "Partner Prizes",
    prizeList: [
      {
        title: "Most Creative use of Orkes",
        description:
          "Build the most creative project that uses Orkes. Top-3 teams that build the best project stand a chance to win Orkes branded sticker sheet, bag, cap, water bottle, and bottle cooler.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-orkes-challenge",
          },
          {
            title: "GitHub Repo",
            link: "https://bit.ly/htf4-con-repo",
          },
        ],
        image: `/assets/partners/powered-by/orkes-white.png`,
      },
      {
        title: "Best Project built using Vonage APIs",
        description:
          "Build a project that benefits our planet, Earth. Each winning team member will win a Razer BlackWidow V3 - Mechanical Wired Gaming Keyboard.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-vonage-challenge",
          },
          {
            title: "Live Workshop",
            link: "https://www.youtube.com/live/hmvmoBdCOZc?si=YEEgTjO03sOhZVcp",
          },
          {
            title: "Developer Center",
            link: "https://bit.ly/htf4-vonage",
          },
        ],
        image: `/assets/partners/platinum/vonage-white.svg`,
      },
      {
        title: "Best use of GitHub",
        description:
          "Stand a chance to win GitHub Mona figurine or plushy in two simple steps. First by signing up for GitHub Global Campus and second by using a GitHub repository to host your hackathon project’s code!",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-github-challenge",
          },
          {
            title: "Github Global Campus",
            link: "https://bit.ly/htf4-sdp",
          },
        ],
        image: `/assets/partners/gold/github-white.png`,
      },
      {
        title: "Best use of GenAI APIs",
        description:
          "Build a project that uses GenAI APIs and win an exclusive Postman swag kit, a certification, and stand a chance to get featured on the Postman blog.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-postman-challenge",
          },
          {
            title: "Public API Network",
            link: "https://www.postman.com/explore",
          },
        ],
        image: `/assets/partners/silver/postman-white.svg`,
      },
      {
        title: "Best use of Postman",
        description:
          "Build a project that uses Postman and win an exclusive Postman swag kit, a certification, and stand a chance to get featured on the Postman blog.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-postman-challenge",
          },
          {
            title: "Public API Network",
            link: "https://www.postman.com/explore",
          },
        ],
        image: `/assets/partners/silver/postman-white.svg`,
      },
      {
        title:
          "Best overall project idea, prototype, and creative use of Neurelo",
        description:
          "Build your project with Neurelo’s Data APIs for databases PostgreSQL, MongoDB, and MySQL. The top two teams win cash prizes worth ₹25,000 and ₹15,000 respectively.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-neurelo-challenge",
          },
          {
            title: "Website",
            link: "https://bit.ly/htf4-neurelo",
          },
        ],
        image: `/assets/partners/silver/neurelo-white.png`,
      },
      {
        title:
          "Best project idea addressing a local (India/Gujarat/etc) problem with creative use of Neurelo",
        description:
          "Create ideas towards solving local (India, Gujarat, etc) problem. The top team wins cash prizes worth ₹10,000.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-neurelo-challenge",
          },
          {
            title: "Website",
            link: "https://bit.ly/htf4-neurelo",
          },
        ],
        image: `/assets/partners/silver/neurelo-white.png`,
      },
      {
        title:
          "Best project idea addressing a global problem with creative use of Neurelo",
        description:
          "Creative idea towards solving global problems. The top team wins cash prizes worth ₹10,000.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-neurelo-challenge",
          },
          {
            title: "Website",
            link: "https://bit.ly/htf4-neurelo",
          },
        ],
        image: `/assets/partners/silver/neurelo-white.png`,
      },
      {
        title: "Creative Message on Linkedin, YouTube, and X (Twitter)",
        description:
          "Find creative ways to tell everyone about your project and how you used Neurelo. The best share as a LinkedIn Blog wins cash prizes worth ₹7,500. The best share as a YouTube Video wins cash prizes worth ₹7,500. The best share as an X (Twitter) Post wins cash prizes worth ₹3,000.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-neurelo-challenge",
          },
          {
            title: "Website",
            link: "https://bit.ly/htf4-neurelo",
          },
        ],
        image: `/assets/partners/silver/neurelo-white.png`,
      },
      {
        title: "Logitech MX Macro Challenge",
        description:
          "Share one Smart Action Hack for Logitech MX Master series products and stand a chance to win MX Keys S Combo, MX Master 3S and more.",
        resources: [
          {
            title: "More Info",
            link: "https://bit.ly/htf4-logitech-challenge",
          },
        ],
        image: `/assets/partners/silver/logitech-white.png`,
      },
      {
        title: "Best Domain Name from GoDaddy Registry",
        description:
          "Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit! Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport.",
        resources: [
          {
            title: "More Info",
            link: "https://hack.mlh.io/prizes",
          },
        ],
        image: `/assets/partners/inkind/godaddy-white.svg`,
      },
      {
        title: "Best Use of TinyMCE",
        description:
          "Render the editor with a Tiny Cloud account and use at least 3 open source plugins and 2 premium plugins in your project, for a chance to win a 3D Printing Pen for you and each of your team members!",
        resources: [
          {
            title: "More Info",
            link: "https://hack.mlh.io/prizes",
          },
        ],
        image: `/assets/partners/inkind/tinymce-white.svg`,
      },
      {
        title: "Best Use of Flow",
        description:
          "Build your hack using Flow and stand a chance to win $200 worth of FLOW tokens for each member of your team!",
        resources: [
          {
            title: "More Info",
            link: "https://hack.mlh.io/prizes",
          },
        ],
        image: `/assets/partners/inkind/flow-white.svg`,
      },
      {
        title: "Best Use of MongoDB Atlas",
        description:
          "Build a hack using MongoDB Atlas for a chance to win a M5GO IoT Starter Kit for you and each member of your team.",
        resources: [
          {
            title: "More Info",
            link: "https://hack.mlh.io/prizes",
          },
        ],
        image: `/assets/partners/inkind/mongodb-white.svg`,
      },
    ],
  },
  {
    title: "Fun Prizes",
    prizeList: [
      {
        title: "Hack This Fall Social Media Challenge",
        description:
          "Post anything and everything on social media about Hack This Fall. Make sure to tag @hackthisfall and use the hashtag #HackThisFall 2024. The most active hacker stands a chance to win the Logitech MX Master 3S Mouse.",
        resources: [
          {
            title: "Prize",
            link: "https://bit.ly/htf4-logitech",
          },
        ],
        image: `/white-logo.png`,
      },
      {
        title: "Hack This Fall Most Funny Meme Challenge",
        description:
          "Post funny memes on X (Twitter) by tagging @hackthisfall and using the hashtags #HTFMeme & #HackThisFall2024. Stand a chance to win the Logitech MX Keys S Keyboard",
        resources: [
          {
            title: "Prize",
            link: "https://bit.ly/htf4-logitech",
          },
        ],
        image: `/white-logo.png`,
      },
      {
        title: "Hack This Fall Most Creative Mascot Challenge",
        description:
          "Post creative mascots for Hack This Fall on X (Twitter) by tagging @hackthisfall and using the hashtags #HTFMascot & #HackThisFall2024. Stand a chance to win GitHub Octocat Plushie.",
        resources: [
          {
            title: "Prize",
            link: "https://pbs.twimg.com/media/FBwaQgsVEAADNa-.png",
          },
        ],
        image: `/white-logo.png`,
      },
      {
        title: "GitHub's Draw an Octocat Challenge",
        description:
          "Draw your own Mona in whatever medium you choose and stand a chance to win GitHub Tshirt by posting your art on X (Twitter). Make sure to tag us @githubeducation @hackthisfall and use the hashtags #MyOctocat #HackThisFall2024.",
        resources: [
          {
            title: "More info",
            link: "https://bit.ly/htf4-myoctocat",
          },
        ],
        image: `/assets/partners/gold/github-white.png`,
      },
    ],
  },
];

const Prize = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const htfPrizes = isMobile
    ? [
        {
          title: "Winner",
          amount: "₹50k",
          image: "/assets/prizes/first.svg",
          width: "40%",
        },
        {
          title: "First Runner-Up",
          amount: "₹35k",
          image: "/assets/prizes/second.svg",
          width: "25%",
        },
        {
          title: "Second Runner-Up",
          amount: "₹20k",
          image: "/assets/prizes/third.svg",
          width: "25%",
        },
      ]
    : [
        {
          title: "First Runner-Up",
          amount: "₹35k",
          image: "/assets/prizes/second.svg",
          width: "25%",
        },
        {
          title: "Winner",
          amount: "₹50k",
          image: "/assets/prizes/first.svg",
          width: "40%",
        },
        {
          title: "Second Runner-Up",
          amount: "₹20k",
          image: "/assets/prizes/third.svg",
          width: "25%",
        },
      ];

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
          px={{ base: "2rem", md: "3rem", xl: "5rem" }}
          alignItems="center"
          overflow="auto"
          w="full"
          h="full"
          position="relative"
          zIndex="2"
        >
          <Flex
            background="#0E252E"
            borderRadius="1.125rem 5.75rem"
            flexDirection="column"
            px={{ base: "1rem", xl: "2rem" }}
            py={{ base: "3.1rem", xl: "4rem" }}
            w="full"
          >
            <Heading
              lineHeight="90%"
              fontFamily="var(--font-nohemi)"
              fontSize="3rem"
              color={"#ffffff"}
              fontWeight="600"
              letterSpacing="0.3rem"
              textAlign={"center"}
            >
              Hack This Fall Prizes
            </Heading>
            <Flex
              mt={{ base: "2rem", lg: "4rem" }}
              justifyContent="space-evenly"
              px={{ base: "2.1rem", lg: "0" }}
              alignItems="center"
              gap={{ base: "2.1rem", lg: "0" }}
              flexDir={{ base: "column", lg: "row" }}
            >
              {htfPrizes.map((prize, index) => (
                <Flex
                  w={{ base: "100%", lg: prize.width }}
                  position="relative"
                  key={index}
                >
                  <Image w="100%" src={prize.image} alt={prize.title} />
                  <Flex
                    zIndex="2"
                    alignItems="center"
                    justifyContent="center"
                    position="absolute"
                    left="0"
                    top="0"
                    width="100%"
                    height="100%"
                  >
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Heading
                        fontFamily="var(--font-nohemi)"
                        lineHeight="90%"
                        fontSize={
                          index == 1 && !isMobile
                            ? { base: "4rem", lg: "4rem", xl: "7rem" }
                            : { base: "3rem", lg: "3rem", xl: "5rem" }
                        }
                        color={"#ffffff"}
                        fontWeight="600"
                        letterSpacing="0.09rem"
                        textAlign={"center"}
                      >
                        {prize.amount}
                      </Heading>
                      <Text
                        fontFamily="var(--font-nohemi)"
                        fontSize={{ base: "0.9rem", xl: "1.5rem" }}
                        color={"#ffffff"}
                        fontWeight="400"
                        letterSpacing="0.09rem"
                        textAlign={"center"}
                      >
                        {prize.title}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
            <SimpleGrid
              px="2.1rem"
              mt="4rem"
              gap={{ base: "2rem", xl: "4rem" }}
              columns={{ base: 1, md: 2, lg: 2 }}
            >
              {htfSecondaryPrizes.map((prize, index) => (
                <Flex
                  key={index}
                  flexDir="column"
                  p="3rem"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="0.75rem 2.5rem"
                  background="#0D242B"
                  border="1px solid rgba(255, 255, 255, 0.05)"
                >
                  <Flex
                    flexDir="column"
                    w="full"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading
                      color="white"
                      fontSize="2rem"
                      textAlign="center"
                      fontWeight="600"
                    >
                      {prize.title}
                    </Heading>
                    <Text
                      fontSize={{
                        base: "1rem",
                        lg: "1.1rem",
                        xl: "1.25rem",
                      }}
                      mt="0.5rem"
                      textAlign="center"
                      color="white"
                    >
                      {prize.description}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
          <Flex
            w="full"
            mt={{ base: "3rem", lg: "6rem" }}
            justifyContent="center"
            flexDir="column"
            gap={{ base: "3rem", lg: "6rem" }}
            alignItems="center"
            mb={{ base: "3rem", lg: "6rem" }}
          >
            {prizesMapping.map((prize, index) => (
              <Flex
                key={index}
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  color="white"
                  fontFamily="var(--font-nohemi)"
                  fontSize="3rem"
                  fontWeight="600"
                  letterSpacing="0.3rem"
                  mb="2rem"
                  textAlign="center"
                >
                  {prize.title}
                </Heading>
                <SimpleGrid gap="2rem" columns={{ base: 1, md: 2, lg: 3 }}>
                  {prize.prizeList.map((prize, index) => (
                    <Flex
                      key={index}
                      flexDir="column"
                      h="full"
                      p="1rem"
                      justifyContent="flex-start"
                      alignItems="center"
                      borderRadius="0.75rem 2.5rem"
                      background="#0D242B"
                      border="1px solid rgba(255, 255, 255, 0.05)"
                    >
                      <Flex
                        w="100%"
                        borderRadius="0.75rem 2rem"
                        justifyContent="center"
                        alignItems="center"
                        bgColor="#2D5564"
                        aspectRatio="2.29"
                      >
                        <Image w="60%" src={prize.image} alt={prize.title} />
                      </Flex>
                      <Flex
                        flexGrow="1"
                        flexDir="column"
                        mt="1rem"
                        w="full"
                        gap="0.7rem"
                        justifyContent="space-between"
                        alignItems="flex-start"
                      >
                        <Heading
                          color="white"
                          fontSize="1.75rem"
                          fontWeight="600"
                        >
                          {prize.title}
                        </Heading>
                        <Text
                          fontSize={{
                            base: "1rem",
                            lg: "1.1rem",
                            xl: "1.25rem",
                          }}
                          color="white"
                        >
                          {prize.description}
                        </Text>
                        <Flex flexWrap="wrap" gap="0.5rem">
                          {prize.resources.map((resource, index) => (
                            <Link
                              key={index}
                              href={resource.link}
                              target="_blank"
                            >
                              <Flex
                                p="0.375rem 1rem"
                                rounded="full"
                                border="1px solid rgba(255, 255, 255, 0.10)"
                                background="linear-gradient(180deg, #1A3E4D 0%, #0F2832 100%)"
                                color="white"
                              >
                                {resource.title}
                              </Flex>
                            </Link>
                          ))}
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </SimpleGrid>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Footer mode="dark" />
      </Flex>
    </Flex>
  );
};

export default Prize;
