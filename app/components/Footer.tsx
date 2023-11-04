'use client';

import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = (props: { mode: string; marginY?: string }) => {
  return (
    <Flex
      w="full"
      h={{ base: '20px', lg: '80px' }}
      px={{ base: '0rem', lg: '5rem' }}
      alignItems="center"
      justifyContent={{ base: 'space-evenly', lg: 'flex-end' }}
      columnGap={{ base: '0.5rem', lg: '4rem' }}
      marginY={props.marginY || '1.5rem'}
      zIndex={10}
    >
      <Link href="https://x.com/hackthisfall">
        <Image src={`/assets/footer/x-${props.mode}.svg`} alt="x"></Image>
      </Link>
      <Link href="https://discord.hackthisfall.tech">
        <Image
          src={`/assets/footer/discord-${props.mode}.svg`}
          alt="discord"
        ></Image>
      </Link>
      <Link href="https://instagram.com/hackthisfall">
        <Image
          src={`/assets/footer/instagram-${props.mode}.svg`}
          alt="instagram"
        ></Image>
      </Link>
      <Link href="https://discord.hackthisfall.tech">
        <Image
          src={`/assets/footer/youtube-${props.mode}.svg`}
          alt="youtube"
        ></Image>
      </Link>
      <Link href="mailto:contact@hackthisfall.tech">
        <Image
          src={`/assets/footer/email-${props.mode}.svg`}
          alt="email"
        ></Image>
      </Link>
      <Link href="https://linkedin.com/company/hackthisfall">
        <Image
          src={`/assets/footer/linkedin-${props.mode}.svg`}
          alt="linkedin"
        ></Image>
      </Link>
    </Flex>
  );
};

export default Footer;
