import {
  Drawer,
  DrawerBody,
  useBreakpointValue,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Footer from "./Footer";

const headerRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Partners",
    href: "/partners",
  },
  {
    name: "Tracks",
    href: "/tracks",
  },
  {
    name: "Humans",
    href: "/humans",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

const Header = (props: { mode: string; position?: string }) => {
  const pathName = usePathname();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      w="full"
      position={(props.position as unknown) || "absolute"}
      zIndex="3"
      top="0"
      left="0"
      px={{ base: "2rem", md: "3rem", xl: "5rem" }}
      py={{ base: "1.8rem", md: "2rem", xl: "2.5rem" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link as={NextLink} href="/">
        <Image
          height={{ base: "3rem", lg: "4rem" }}
          src={`/assets/logo-${props.mode}.svg`}
          alt="logo"
        />
      </Link>
      <Flex hideBelow="lg" gap="3rem">
        {headerRoutes.map((route) => (
          <Link
            fontSize="1.1rem"
            fontWeight="500"
            fontFamily="var(--font-popins)"
            color={props.mode === "light" ? "black" : "white"}
            key={route.name}
            as={NextLink}
            href={route.href}
            textDecoration={pathName === route.href ? "underline" : "none"}
            textUnderlineOffset="4px"
            _hover={{
              textDecoration: pathName === route.href ? "underline" : "none",
            }}
          >
            {route.name}
          </Link>
        ))}
      </Flex>
      {isMobile && (
        <>
          <Image
            onClick={onOpen}
            src={`/assets/icons/menu-${props.mode}.svg`}
            alt="menu"
          />
          <Drawer onClose={onClose} isOpen={isOpen} size="full">
            <DrawerOverlay />
            <DrawerContent
              zIndex={150}
              px={{ base: "2rem", md: "3rem", xl: "5rem" }}
              py={{ base: "1.8rem", md: "2rem", xl: "2.5rem" }}
              background={props.mode === "light" ? "#FFFFFF" : "#0E2029"}
            >
              <DrawerHeader
                pt="0"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px="0"
              >
                {" "}
                <Link as={NextLink} href="/">
                  <Image
                    height={{ base: "3rem", lg: "4rem" }}
                    src={`/assets/logo-${props.mode}.svg`}
                    alt="logo"
                  />
                </Link>
                <Image
                  onClick={onClose}
                  src={`/assets/icons/close-${props.mode}.svg`}
                  alt="close"
                />
              </DrawerHeader>
              <DrawerBody
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Flex alignItems="center" flexDir="column" gap="1.5rem">
                  {headerRoutes.map((route) => (
                    <Link
                      fontSize="2.5rem"
                      fontWeight="500"
                      fontFamily="var(--font-popins)"
                      color={props.mode === "light" ? "black" : "white"}
                      key={route.name}
                      as={NextLink}
                      href={route.href}
                      textDecoration={
                        pathName === route.href ? "underline" : "none"
                      }
                      textUnderlineOffset="4px"
                    >
                      {route.name}
                    </Link>
                  ))}
                </Flex>
              </DrawerBody>
              <DrawerFooter p="0">
                <Footer mode="dark" />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Header;
