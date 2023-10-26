'use client';

import { Flex, Heading, Image } from '@chakra-ui/react';

const Page = () => {
  return (
    <Flex background="#0D2129" w="100vw" h="100vh">
      <Flex
        overflow="hidden"
        position="relative"
        mx="auto"
        width="min(100vw, 2560px)"
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
        <Flex
          alignItems="center"
          pos="absolute"
          w="full"
          h="full"
          zIndex="2"
          px="5rem"
        >
          <Heading className="--font-nohemi" fontSize="11rem" fontWeight="600">
            Innovate<br/> For Good
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;
