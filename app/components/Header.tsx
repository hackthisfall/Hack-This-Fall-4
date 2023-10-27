import { Flex, Image, Link } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

const headerRoutes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Partners',
    href: '/partners',
  },
  {
    name: 'Tracks',
    href: '/tracks',
  },
  {
    name: 'Humans',
    href: '/humans',
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <Flex
      w="full"
      position="absolute"
      height="110px"
      zIndex="3"
      top="0"
      left="0"
      px="5rem"
      py="1.5rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link as={NextLink} href="/">
        <Image src="/assets/logo.svg" alt="logo" />
      </Link>
      <Flex gap="3rem">
        {headerRoutes.map((route) => (
          <Link
            fontSize="1.1rem"
            fontWeight="500"
            fontFamily="var(--font-popins)"
            key={route.name}
            as={NextLink}
            href={route.href}
            textDecoration={pathName === route.href ? 'underline' : 'none'}
            textUnderlineOffset="4px"
            _hover={{
              textDecoration: pathName === route.href ? 'underline' : 'none',
            }}
          >
            {route.name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
