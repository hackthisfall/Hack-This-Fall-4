'use client';

import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

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
            animation="clockwiseSpin 30s linear infinite"
            opacity="0.15"
            src="/assets/mandala-main-dark.svg"
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top={{ base: '-18vh', lg: '0' }}
            animation="antiClockwiseSpin 30s linear infinite"
            opacity="0.15"
            src="/assets/mandala-right-dark.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left={{ base: '-20vh', lg: '-15vh' }}
            bottom={{ base: '-20vh', lg: '-10vh' }}
            animation="antiClockwiseSpin 30s linear infinite"
            opacity="0.15"
            src="/assets/mandala-left-dark.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex
          pos="absolute"
          w="full"
          h="full"
          zIndex="2"
          flexDirection="column"
        >
          <Header mode="dark" position="relative" />
          <Flex
            px={{ base: '2rem', md: '3rem', xl: '5rem' }}
            h="full"
            alignItems="center"
          >
            <Flex gap={{ base: '1rem', lg: '2rem' }} flexDirection="column">
              <Heading
                lineHeight={{ base: '110%', lg: '90%' }}
                fontFamily="var(--font-nohemi)"
                fontSize={{ base: '4.15rem', lg: '7rem', xl: '11rem' }}
                fontWeight="600"
                color="#FFF"
                letterSpacing="0.3rem"
              >
                Innovate
                <br /> For Good
              </Heading>
              <Flex
                gap={{ base: '2rem', xl: '0' }}
                flexDir={{ base: 'column', xl: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', xl: 'center' }}
              >
                <Flex gap={{ base: '1rem', xl: '1.5rem' }}>
                  <Image src="/assets/icons/location.svg" alt="location" />
                  <Text
                    color="#FFF"
                    fontFamily="var(--font-nohemi)"
                    fontSize={{ base: '1.4rem', xl: '1.6rem' }}
                  >
                    2 - 5 February, 2024
                    <br />
                    Gandhinagar, India
                  </Text>
                </Flex>
                <Button
                  color="#fff"
                  px={{ base: '2rem', lg: '6rem' }}
                  py={{ base: '1.5rem', lg: '2rem' }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1.5px solid #fff"
                  borderRadius="full"
                  fontFamily="var(--font-nohemi)"
                  fontSize={{ base: '1.4rem', lg: '1.6rem' }}
                  fontWeight="400"
                  lineHeight="90%"
                  _hover={{ background: '#fff', color: '#0D2129' }}
                >
                  Register
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Footer mode="dark" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
