'use client';

import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const tracksMapping = [
  {
    heading: 'Generative Artificial Intelligence',
    image: '/assets/tracks/gen-ai.svg',
  },
  {
    heading: 'Blockchain & Crypto',
    image: '/assets/tracks/blockchain.svg',
  },
  {
    heading: 'Cloud and DevOps',
    image: '/assets/tracks/cloud.svg',
  },
  {
    heading: 'Security & Audits',
    image: '/assets/tracks/security.svg',
  },
  {
    heading: 'Internet of Things',
    image: '/assets/tracks/iot.svg',
  },
  {
    heading: 'Augmented & Virtual Reality',
    image: '/assets/tracks/ar-vr.svg',
  },
  {
    heading: 'Open Innovation',
    image: '/assets/tracks/open-innovation.svg',
  },
];

const Page = () => {
  return (
    <Flex background="#0D2129" w="100vw" h="100vh">
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
            h="90%"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top="0"
            opacity="0.15"
            src="/assets/mandala-right-dark.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left="-15vh"
            bottom="-10vh"
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
            flexWrap="wrap"
            columnGap="4rem"
            px={{ base: '0rem', md: '2rem' }}
            pt={{ base: '2rem', lg: '0' }}
            pb={{ base: '2rem', md: '0' }}
            rowGap={{base: "3rem", lg: "1rem"}}
            h="full"
            w="min(1440px, 100vw)"
            alignItems="baseline"
            justifyContent="center"
            alignContent={{"2xl": "center"}}
            overflowY={{base: "auto", xl: "hidden"}}
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
                <Image height="100px" src={track.image} alt={track.heading} />
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
          </Flex>
          <Footer mode="dark" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
