"use client";

import {
  Flex,
  Heading,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";

const faqs = [
  {
    question: "Can I participate remotely?",
    answer:
      "Hack This Fall 4.0 is an in-person hackathon. So remote participation is not applicable.",
  },
  {
    question: "How much does it cost to participate?",
    answer:
      "Nothing, participation in Hack This Fall 4.0 is absolutely FREE!!🎉 We’ll have meals, snacks, and beverages onsite at the hackathon, in addition to swags, prizes, fun mini-events and more.",
  },
  {
    question:
      "My parent/guardian will be coming along with me. Can they stay at the venue?",
    answer:
      "The answer is No. Arrangements like sleeping area, food, etc., are only for the attendees. We recommend you to find a stay option for them near the venue. They can drop you at the hackathon venue on 9th Feb and can pick you on 11th Feb but can't stay at venue during the hackathon as we do not have any provision for them.",
  },

  {
    question:
      "What is the maximum team size? Can I participate as a Solo Hacker?",
    answer:
      "We encourage you to make a team of minimum 2 and maximum 4 members. If you are a Solo Hacker and do not have a team, you can still register and find team members on our Discord server.",
  },
  {
    question: "I am a beginner, can I participate?",
    answer:
      "Absolutely. We will have mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at Hack This Fall.",
  },
  {
    question: "Will you support or reimburse our travel expenses?",
    answer:
      "Since Hack This Fall 4.0 is a community-driven hackathon, unfortunately we will not be able to support you with travel.",
  },
  {
    question: "What are the sleeping arrangements?",
    answer:
      "On both nights (9th Feb & 10th Feb) we will have a supervised sleeping space for hackers to rest and sleep at the venue. We recommend bringing your own blanket if you need one.",
  },
  {
    question: "I am below 18 years of age, can I participate in the hackathon?",
    answer:
      "Yes! You can participate in the hackathon but we would need written consent from your parent/guardian and you wouldn’t be allowed to leave the venue during the hackathon.",
  },
  {
    question: "What is the event Code of Conduct?",
    answer:
      'We want to ensure a positive experience for all participants. We will be following <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH’s Code of Conduct</a>, we encourage you to read it.',
  },
  {
    question: "I have more questions, how and where can I reach out?",
    answer:
      'You can reach out to us on our <a href="https://discord.hackthisfall.tech" target="_blank">Discord Server</a> in #🍁〡ask-htf-team or email us at <a href="mailto:hackthisfall@gmail.com" target="_blank">hackthisfall@gmail.com</a>! We\'re always ready to answer all your questions.',
  },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | FAQ",
// };

const FAQ = () => {
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
        <Flex
          position="relative"
          zIndex="3"
          flexDirection="column"
          width="100%"
          h="full"
          alignItems="center"
        >
          <Header mode="light" position="relative" />
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize="3rem"
            color={"#000000"}
            fontWeight="600"
            letterSpacing="0.3rem"
          >
            FAQ
          </Heading>
          <Flex
            w="full"
            h="full"
            mt={{ base: "2rem", lg: "4rem" }}
            justifyContent="center"
            overflowY="auto"
          >
            <Accordion
              w="85%"
              display="grid"
              gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              rowGap="2rem"
              h="fit-content"
              columnGap="4rem"
              allowToggle
            >
              {faqs.map((section, index) => {
                return (
                  <AccordionItem key={index} border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton p={{ base: "0", md: "1rem" }}>
                          <Flex
                            color="#000"
                            fontSize="1.2rem"
                            fontFamily="var(--font-nohemi)"
                            lineHeight="100%"
                            w="full"
                            alignItems="center"
                            gap={"1rem"}
                            justifyContent="space-between"
                          >
                            <Flex
                              alignItems="center"
                              gap={{ base: "1rem", lg: "1.5rem" }}
                            >
                              <Image
                                src="/assets/faq/icon.svg"
                                alt="initial icon"
                                w="1rem"
                              />
                              <Text lineHeight="150%" textAlign="left">
                                {section.question}
                              </Text>
                            </Flex>
                            {isExpanded ? (
                              <MinusIcon fontSize="1rem" />
                            ) : (
                              <AddIcon fontSize="1rem" />
                            )}
                          </Flex>
                        </AccordionButton>
                        <AccordionPanel py="2rem" pb={4}>
                          <Text
                            fontFamily="var(--font-nohemi)"
                            fontSize="1rem"
                            lineHeight="150%"
                            fontWeight="400"
                            color="#000"
                            sx={{
                              a: {
                                textDecoration: "underline",
                              },
                            }}
                            dangerouslySetInnerHTML={{
                              __html: section.answer,
                            }}
                          />
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Flex>
          <Footer mode="light" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FAQ;
