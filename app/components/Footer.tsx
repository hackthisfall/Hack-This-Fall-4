"use client";

import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

const Footer = (props: {
  mode: string;
  marginY?: string;
  isHomePage?: boolean;
}) => {
  return (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      w="full"
      gap="1rem"
      h={{ base: "50px", lg: "20px" }}
      px={{ base: "0rem", lg: "5rem" }}
      alignItems="center"
      justifyContent="space-between"
      marginY={props.marginY || "1.5rem"}
      zIndex={10}
    >
      <Link
        lineHeight="90%"
        fontFamily="var(--font-nohemi)"
        fontSize="1rem"
        color={!props.isHomePage ? "transparent" : "#FFF"}
        pointerEvents={!props.isHomePage ? "none" : "auto"}
        href="https://bit.ly/htf-sponsor"
        target="_blank"
      >
        Interested in sponsoring? Reach out to us!
      </Link>
      <Flex
        h={{ base: "20px", lg: "80px" }}
        alignItems="center"
        justifyContent={{ base: "space-evenly", lg: "flex-end" }}
        columnGap={{ base: "0.5rem", lg: "4rem" }}
        w={{ base: "full", lg: "auto" }}
      >
        <Link href="https://x.com/hackthisfall" target="_blank">
          <Image
            width="2rem"
            src={`/assets/footer/x-${props.mode}.svg`}
            alt="x"
          ></Image>
        </Link>
        <Link href="https://discord.hackthisfall.tech" target="_blank">
          <Image
            width="2rem"
            src={`/assets/footer/discord-${props.mode}.svg`}
            alt="discord"
          ></Image>
        </Link>
        <Link href="https://instagram.com/hackthisfall" target="_blank">
          <Image
            width="2rem"
            src={`/assets/footer/instagram-${props.mode}.svg`}
            alt="instagram"
          ></Image>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA"
          target="_blank"
        >
          <Image
            width="2rem"
            src={`/assets/footer/youtube-${props.mode}.svg`}
            alt="youtube"
          ></Image>
        </Link>
        <Link href="mailto:hackthisfall@gmail.com" target="_blank">
          <Image
            width="2rem"
            src={`/assets/footer/email-${props.mode}.svg`}
            alt="email"
          ></Image>
        </Link>
        <Link href="https://linkedin.com/company/hackthisfall" target="_blank">
          <Image
            width="2rem"
            src={`/assets/footer/linkedin-${props.mode}.svg`}
            alt="linkedin"
          ></Image>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
