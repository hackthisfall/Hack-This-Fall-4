"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

const Footer = (props: { mode: string }) => {
  return (
    <Flex
      w="full"
      px="5rem"
      alignItems="center"
      justifyContent="flex-end"
      columnGap="4rem"
      marginY="1rem"
      zIndex={100}
    >
      <Link href="//discord.hackthisfall.tech">
        <Image src={`/assets/footer/discord-${props.mode}.svg`}></Image>
      </Link>
      <Link href="//discord.hackthisfall.tech">
        <Image src={`/assets/footer/instagram-${props.mode}.svg`}></Image>
      </Link>
      <Link href="//discord.hackthisfall.tech">
        <Image src={`/assets/footer/youtube-${props.mode}.svg`}></Image>
      </Link>
      <Link href="//discord.hackthisfall.tech">
        <Image src={`/assets/footer/email-${props.mode}.svg`}></Image>
      </Link>
      <Link href="//discord.hackthisfall.tech">
        <Image src={`/assets/footer/linkedin-${props.mode}.svg`}></Image>
      </Link>
    </Flex>
  );
};

export default Footer;
