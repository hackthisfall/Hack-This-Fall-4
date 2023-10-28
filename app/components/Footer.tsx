"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

const Footer = (props: { mode: string }) => {
  return (
    <Flex
      w="full"
      h="80px"
      px="5rem"
      alignItems="center"
      justifyContent="flex-end"
      columnGap="4rem"
      marginY="1rem"
      zIndex={100}
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
