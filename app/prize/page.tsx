'use client';

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
} from '@chakra-ui/react';
import Header from '../components/Header';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Metadata } from 'next';

type PrizeList = {
  title: string;
  description: string;
  link: string;
  image: string;
};

type PrizeCategory = {
  title: string;
  prizeList: PrizeList[];
};

const htfPrizes = [
  {
    title: 'First runner up',
    amount: '$2.5K',
    image: '/assets/prizes/second.svg',
    width: '25%',
  },
  {
    title: 'Winner',
    amount: '$2.5K',
    image: '/assets/prizes/first.svg',
    width: '40%',
  },
  {
    title: 'Second runner up',
    amount: '$2.5K',
    image: '/assets/prizes/third.svg',
    width: '25%',
  },
];

const prizesMapping: PrizeCategory[] = [
  {
    title: 'Sponsor Prizes',
    prizeList: [
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
    ],
  },
  {
    title: 'Fun Prizes',
    prizeList: [
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        link: '',
        image: `/assets/prizes/placeholder.png`,
      },
    ],
  },
];

const Prize = () => {
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
            top={{ base: '-18vh', lg: '0' }}
            opacity="0.1"
            src="/assets/mandala-right-dark.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left={{ base: '-20vh', lg: '-15vh' }}
            bottom={{ base: '-20vh', lg: '-10vh' }}
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
          px={{ base: '2rem', md: '3rem', xl: '5rem' }}
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
            px={{ base: '1rem', xl: '2rem' }}
            py={{ base: '2rem', xl: '4rem' }}
            w="full"
          >
            <Heading
              lineHeight="90%"
              fontFamily="var(--font-nohemi)"
              fontSize="3rem"
              color={'#ffffff'}
              fontWeight="600"
              letterSpacing="0.3rem"
              textAlign={'center'}
            >
              Hack This Fall Prizes
            </Heading>
            <Flex
              mt={{ base: '2rem', lg: '4rem' }}
              justifyContent="space-evenly"
              alignItems="center"
              flexDir={{ base: 'column', lg: 'row' }}
              gap="2rem"
            >
              {htfPrizes.map((prize, index) => (
                <Flex
                  w={{ base: '100%', lg: prize.width }}
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
                        fontSize={{ base: '3rem', lg: '3rem', xl: '5rem' }}
                        color={'#ffffff'}
                        fontWeight="600"
                        letterSpacing="0.09rem"
                        textAlign={'center'}
                      >
                        {prize.amount}
                      </Heading>
                      <Text
                        fontFamily="var(--font-nohemi)"
                        fontSize={{ base: '0.9rem', xl: '1.5rem' }}
                        color={'#ffffff'}
                        fontWeight="400"
                        letterSpacing="0.09rem"
                        textAlign={'center'}
                      >
                        {prize.title}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex
            w="full"
            mt={{ base: '3rem', lg: '6rem' }}
            justifyContent="center"
            flexDir="column"
            gap={{ base: '3rem', lg: '6rem' }}
            alignItems="center"
            mb={{ base: '3rem', lg: '6rem' }}
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
                >
                  {prize.title}
                </Heading>
                <SimpleGrid gap="2rem" columns={{ base: 1, md: 2, lg: 3 }}>
                  {prize.prizeList.map((prize, index) => (
                    <Flex
                      key={index}
                      flexDir="column"
                      p="1rem"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="0.75rem 2.5rem"
                      background="#0D242B"
                      border="1px solid rgba(255, 255, 255, 0.05)"
                    >
                      <Image
                        borderRadius="0.75rem 2rem"
                        src={prize.image}
                        w="100%"
                        alt={prize.title}
                      />
                      <Flex
                        flexDir="column"
                        mt="1rem"
                        w="full"
                        justifyContent="center"
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
                            base: '1rem',
                            lg: '1.1rem',
                            xl: '1.25rem',
                          }}
                          mt="0.5rem"
                          color="white"
                        >
                          {prize.description}
                        </Text>
                        <Flex gap="0.5rem" mt="0.5rem">
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            p="0.375rem 1rem"
                            rounded="full"
                            border="1px solid rgba(255, 255, 255, 0.10)"
                            background="linear-gradient(180deg, #1A3E4D 0%, #0F2832 100%)"
                            color="white"
                          >
                            Resource 1
                          </Flex>
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            p="0.375rem 1rem"
                            rounded="full"
                            border="1px solid rgba(255, 255, 255, 0.10)"
                            background="linear-gradient(180deg, #1A3E4D 0%, #0F2832 100%)"
                            color="white"
                          >
                            Resource 2
                          </Flex>
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
