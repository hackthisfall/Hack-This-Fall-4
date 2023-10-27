'use client';

import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import Header from './components/Header';

const Page = () => {
  return (
    <Flex background="#0D2129" w="100vw" h="100vh">
      <Flex
        overflow="hidden"
        position="relative"
        mx="auto"
        width="min(100vw, 177vh)"
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
            animation="rotateImg 20s linear infinite"
            opacity="0.15"
            src="/assets/mainMandala.svg"
            h="90%"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top="0"
            animation="rotateImg 20s linear infinite"
            opacity="0.15"
            src="/assets/rightMandala.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left="-15vh"
            bottom="-10vh"
            animation="rotateImg 20s linear infinite"
            opacity="0.15"
            src="/assets/leftMandala.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Header />
        <Flex
          alignItems="center"
          pos="absolute"
          w="full"
          h="full"
          zIndex="2"
          px="5rem"
        >
          <Flex gap="2rem" flexDirection="column">
            <Heading
              lineHeight="90%"
              fontFamily="var(--font-nohemi)"
              fontSize="11rem"
              fontWeight="600"
              letterSpacing="0.3rem"
            >
              Innovate
              <br /> For Good
            </Heading>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap="1.5rem">
                <Image src="/assets/icons/location.svg" alt="location" />
                <Text fontFamily="var(--font-nohemi)" fontSize="1.6rem">
                  2 - 5 February, 2024
                  <br />
                  Gandhinagar, India
                </Text>
              </Flex>
              <Button
                color="#fff"
                px="6rem"
                py="2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1.5px solid #fff"
                borderRadius="full"
                fontFamily="var(--font-nohemi)"
                fontSize="1.6rem"
                fontWeight="400"
                lineHeight="90%"
                _hover={{ background: '#fff', color: '#0D2129' }}
              >
                Register
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
