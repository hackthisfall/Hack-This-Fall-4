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

const htfPrizes = [
  {
    title: 'First Runner-Up',
    amount: '₹35k',
    image: '/assets/prizes/second.svg',
    width: '25%',
  },
  {
    title: 'Winner',
    amount: '₹50k',
    image: '/assets/prizes/first.svg',
    width: '40%',
  },
  {
    title: 'Second Runner-Up',
    amount: '₹20k',
    image: '/assets/prizes/third.svg',
    width: '25%',
  },
];

const htfSecondaryPrizes = [
  {
    title: '👭 Best All Girls Team',
    description: '₹10,000 to the winning team and additional perks',
  },
  {
    title: '🌟 Best Beginner Team',
    description: '₹10,000 to the winning team and additional perks',
  },
];

const prizesMapping: PrizeCategory[] = [
  {
    title: 'Partner Prizes',
    prizeList: [
      {
        title: 'Best Project built using Vonage APIs',
        description:
          'Build a project that benefits our planet, Earth. Each winning team member will win a Razer BlackWidow V3 - Mechanical Wired Gaming Keyboard.',
        resources: [
          {
            title: 'More Info',
            link: 'https://bit.ly/htf4-vonage-challenge',
          },
          {
            title: 'Live Workshop',
            link: 'https://www.youtube.com/live/hmvmoBdCOZc?si=YEEgTjO03sOhZVcp',
          },
          {
            title: 'Developer Center',
            link: 'https://bit.ly/htf4-vonage',
          },
        ],
        image: `/assets/partners/platinum/vonage-white.svg`,
      },
      {
        title: 'Best use of GenAI APIs',
        description:
          'Build a project that uses GenAI APIs and win an exclusive Postman swag kit, a certification, and stand a chance to get featured on the Postman blog.',
        resources: [
          {
            title: 'More Info',
            link: 'https://bit.ly/htf4-postman-challenge',
          },
          {
            title: 'Public API Network',
            link: 'https://www.postman.com/explore',
          },
        ],
        image: `/assets/partners/silver/postman-white.svg`,
      },
      {
        title: 'Best use of Postman',
        description:
          'Build a project that uses Postman and win an exclusive Postman swag kit, a certification, and stand a chance to get featured on the Postman blog.',
        resources: [
          {
            title: 'More Info',
            link: 'https://bit.ly/htf4-postman-challenge',
          },
          {
            title: 'Public API Network',
            link: 'https://www.postman.com/explore',
          },
        ],
        image: `/assets/partners/silver/postman-white.svg`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        resources: [
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
        ],
        image: `/assets/partners/inkind/mongodb-white.svg`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        resources: [
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
        ],
        image: `/assets/partners/inkind/godaddy-white.svg`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        resources: [
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
        ],
        image: `/assets/partners/inkind/flow-white.svg`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        resources: [
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
        ],
        image: `/assets/partners/inkind/cloudflare-white.png`,
      },
      {
        title: 'Prize name',
        description:
          'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
        resources: [
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
          {
            title: 'Vonage APIs',
            link: 'https://www.vonage.com/',
          },
        ],
        image: `/assets/partners/platinum/vonage-white.svg`,
      },
    ],
  },
//   {
//     title: 'Fun Prizes',
//     prizeList: [
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//       {
//         title: 'Prize name',
//         description:
//           'Everyone loves swags so that they can brag about them.Everyone loves swags so that they can brag about them.',
//         resources: [
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//           {
//             title: 'Vonage APIs',
//             link: 'https://www.vonage.com/',
//           },
//         ],
//         image: `/assets/partners/platinum/vonage-white.svg`,
//       },
//     ],
//   },
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
            py={{ base: '3.1rem', xl: '4rem' }}
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
              px={{ base: '2.1rem', lg: '0' }}
              alignItems="center"
              gap={{ base: '2.1rem', lg: '0' }}
              flexDir={{ base: 'column', lg: 'row' }}
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
                        fontSize={
                          index == 1
                            ? { base: '4rem', lg: '4rem', xl: '7rem' }
                            : { base: '3rem', lg: '3rem', xl: '5rem' }
                        }
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
            <SimpleGrid
              px="2.1rem"
              mt="4rem"
              gap={{ base: '2rem', xl: '4rem' }}
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
                        base: '1rem',
                        lg: '1.1rem',
                        xl: '1.25rem',
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
                  textAlign="center"
                >
                  {prize.title}
                </Heading>
                <SimpleGrid gap="2rem" columns={{ base: 1, md: 2, lg: 3 }}>
                  {prize.prizeList.map((prize, index) => (
                    <Flex
                      key={index}
                      flexDir="column"
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
                        alignItems='center'
                        bgColor="#2D5564"
                        aspectRatio="2.29"
                      >
                        <Image w="60%" src={prize.image} alt={prize.title} />
                      </Flex>
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
