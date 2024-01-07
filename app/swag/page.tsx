'use client';

import {
  Flex,
  Heading,
  Text,
  Image as ChakraImage,
  Input,
  Button,
  Tabs,
  TabPanels,
  TabPanel,
  useBreakpointValue,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UploadIcon from '../components/Icons/uploadIcon';
import { Metadata } from 'next';
import { DownloadIcon } from '@chakra-ui/icons';
import ShareIcon from '../components/Icons/shareIcon';

const swagsMapping = [
  {
    index: 0,
    heading: 'Zoom Backgrounds',
    assets: [
      '/assets/swags/zoom/1.png',
      '/assets/swags/zoom/2.png',
      '/assets/swags/zoom/3.png',
      '/assets/swags/zoom/4.png',
    ],
  },
  {
    index: 1,
    heading: 'Desktop Wallpapers',
    assets: [
      '/assets/swags/desktop/1.png',
      '/assets/swags/desktop/2.png',
      '/assets/swags/desktop/3.png',
      '/assets/swags/desktop/4.png',
    ],
  },
  {
    index: 2,
    heading: 'Mobile Wallpapers',
    assets: [
      '/assets/swags/mobile/1.png',
      '/assets/swags/mobile/2.png',
      '/assets/swags/mobile/3.png',
      // '/assets/swags/mobile/4.png',
    ],
  },
  // {
  //   index: 3,
  //   heading: 'Instagram Bingo',
  //   assets: ['/assets/tracks/gen-ai.gif'],
  //   height: '600px',
  // },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | Tracks",
// };

const Swag = () => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const canvasRef = useRef(null);
  const imageUploadRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  const selectTab = (section: number) => {
    setCurrentTab(section);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.style.letterSpacing = '0.4rem';
      const defaultBadge = new Image();
      defaultBadge.src = '/default-badge.png';
      const nohemiFont =
        getComputedStyle(canvas).getPropertyValue('--font-nohemi');

      defaultBadge.onload = function () {
        if (!ctx) {
          return;
        }
        ctx.drawImage(defaultBadge, 0, 0, 2160, 2696);
        ctx.font = `700 11rem ${nohemiFont}`;
        ctx.fillStyle = 'black';
        const text = name.trim() !== '' ? name : 'Your Name Here';
        const textWidth = ctx.measureText(text).width;

        ctx.fillText(text, 2160 / 2 - textWidth / 2, 2272);
      };
    }
  }, []);

  useEffect(() => {
    if (canvasRef && canvasRef.current && image) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.style.letterSpacing = '0.4rem';
      const reader = new FileReader();
      reader.readAsDataURL(image);
      const nohemiFont =
        getComputedStyle(canvas).getPropertyValue('--font-nohemi');

      const badge = new Image();
      badge.src = '/badge.png';

      reader.onloadend = (e) => {
        if (!ctx) {
          return;
        }
        const myImage = new Image();
        myImage.src = e.target?.result as string;
        myImage.onload = (ev) => {
          ctx.clearRect(0, 0, 2160, 2696);
          const inputWidth = myImage.naturalWidth;
          const inputHeight = myImage.naturalHeight;
          const smallerSide = Math.min(inputWidth, inputHeight);
          let startX = 0;
          let startY = 0;

          if (inputWidth < inputHeight) {
            startY = (inputHeight - inputWidth);
          } else if (inputWidth > inputHeight) {
            startX = (inputWidth - inputHeight) / 2;
          }

          ctx.drawImage(
            myImage,
            startX,
            startY,
            smallerSide,
            smallerSide,
            0,
            0,
            2160,
            2396,
          );
          ctx.drawImage(badge, 0, 0, 2160, 2696);
          ctx.font = `700 11rem ${nohemiFont}`;
          ctx.fillStyle = 'black';
          const text = name.trim() !== '' ? name : 'Your Name Here';
          const textWidth = ctx.measureText(text).width;

          ctx.fillText(text, 2160/2 - textWidth/2, 2272);
        };
      };
    } else if (canvasRef && canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      canvas.style.letterSpacing = '0.4rem';
      const ctx = canvas.getContext('2d');

      const nohemiFont =
        getComputedStyle(canvas).getPropertyValue('--font-nohemi');

      if (!ctx) {
        return;
      }
      const defaultBadge = new Image();
      defaultBadge.src = '/default-badge.png';
      ctx.drawImage(defaultBadge, 0, 0, 2160, 2696);
      ctx.font = `700 11rem ${nohemiFont}`;
      ctx.fillStyle = 'black';
      const text = name.trim() !== '' ? name : 'Your Name Here';
      const textWidth = ctx.measureText(text).width;

      ctx.fillText(text, 2160 / 2 - textWidth / 2, 2272);
    }
  }, [image, name]);

  return (
    <Flex background="#ffffff" w="100vw" h="100dvh">
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
          <ChakraImage
            opacity="0.15"
            src="/assets/mandala-main-light.svg"
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <ChakraImage
            position="absolute"
            right="-18vh"
            top={{ base: '-18vh', lg: '0' }}
            opacity="0.15"
            src="/assets/mandala-right-light.svg"
            h="36vh"
            alt="mandala"
          />
          <ChakraImage
            position="absolute"
            left={{ base: '-20vh', lg: '-15vh' }}
            bottom={{ base: '-20vh', lg: '-10vh' }}
            opacity="0.15"
            src="/assets/mandala-left-light.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex
          pos="absolute"
          flexDirection="column"
          alignItems="center"
          w="full"
          h="100%"
          zIndex="2"
        >
          <Header mode="light" position="relative" />
          <Flex
            px={{ base: '2rem', md: '3rem', xl: '5rem' }}
            h="full"
            flexDir="column"
            alignItems="center"
            overflowY={{ base: 'auto' }}
          >
            <Heading
              lineHeight="90%"
              fontFamily="var(--font-nohemi)"
              fontSize="3rem"
              color="black"
              fontWeight="600"
              letterSpacing="0.3rem"
              mb="2rem"
              textAlign="center"
            >
              Digital Swags
            </Heading>
            <Flex
              mt={{ base: '2rem', xl: '4rem' }}
              w="full"
              flexDirection="column"
            >
              <Flex
                justifyContent={{ base: 'flex-start', xl: 'space-between' }}
                alignItems="center"
                flexDirection={{ base: 'column', xl: 'row' }}
                w="full"
              >
                <canvas
                  ref={canvasRef}
                  width="2160"
                  height="2696"
                  style={{
                    width: 'min(100%, 600px)',
                    height: 'min(100%, 724px)',
                    borderRadius: '1.5rem',
                  }}
                />
                <Flex
                  gap={{ base: '2rem', md: '3rem' }}
                  w={{ base: 'full', lg: '60%', xl: '50%' }}
                  mt={{ base: '3rem', xl: '0' }}
                  flexDir="column"
                >
                  <Heading
                    color="black"
                    fontSize="2.5rem"
                    fontWeight="600"
                    fontFamily={'var(--font-nohemi)'}
                    textAlign={{ base: 'center', xl: 'left' }}
                  >
                    Digital Badge
                  </Heading>
                  <Text
                    textAlign={{ base: 'center', xl: 'left' }}
                    color="black"
                    fontSize="1.5rem"
                    fontWeight="400"
                    fontFamily={'var(--font-dm-sans)'}
                    dangerouslySetInnerHTML={{
                      __html:
                        'Once you have done the RSVP, you are all set to attend Hack This Fall 2024! Now it is time to let the world know by sharing this super cool digital badge.<br /><br />To get a personalized Hack This Fall Badge, just add your name & upload your image. Download it and Share it on socials using <a href="https://twitter.com/hashtag/HackThisFall2024" target="_blank" style="color: #F55F2F; font-weight: 600">#HackThisFall2024</a> and tag <a href="https://twitter.com/hackthisfall" target="_blank"style="color: #F55F2F; font-weight: 600">@hackthisfall</a>.',
                    }}
                  />
                  <Text
                    color="#F55F2F"
                    fontSize="1.5rem"
                    fontWeight="400"
                    fontFamily={'var(--font-dm-sans)'}
                    textAlign={{ base: 'center', xl: 'left' }}
                  >
                    * We respect your privacy and are not storing your pictures
                    on our servers.
                  </Text>
                  <Flex
                    flexDir={{ base: 'column', md: 'row' }}
                    gap={{ base: '1rem', md: '2rem' }}
                  >
                    <Input
                      height="70px"
                      px="2rem"
                      rounded="full"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      color="black"
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      placeholder="Enter your name"
                      _focusVisible={{
                        zIndex: 1,
                        borderColor: '#fff',
                        boxShadow: '0 0 0 1px #fff',
                      }}
                    />
                    <input
                      ref={imageUploadRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        if (e.target.files) {
                          setImage(e.target.files[0]);
                        }
                      }}
                    />
                    <Button
                      leftIcon={<UploadIcon />}
                      px="4rem"
                      py="1rem"
                      rounded="full"
                      height="70px"
                      color="white"
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      background="black !important"
                      onClick={() => {
                        if (imageUploadRef && imageUploadRef.current) {
                          const imageUploadInput: HTMLInputElement =
                            imageUploadRef.current;
                          imageUploadInput.click();
                        }
                      }}
                    >
                      Upload your photo
                    </Button>
                  </Flex>
                  <Flex
                    flexDir={{ base: 'column', md: 'row' }}
                    gap={{ base: '1rem', md: '2rem' }}
                    w={{ base: 'full', lg: '60%', xl: '70%' }}
                  >
                    <Button
                      leftIcon={<DownloadIcon />}
                      px="4rem"
                      py="1rem"
                      rounded="full"
                      height="70px"
                      color="white"
                      isDisabled={!name || !image}
                      _disabled={{
                        cursor: 'not-allowed',
                        backgroundColor: '#e0d9d97f !important',
                      }}
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      background="black !important"
                      onClick={() => {
                        if (canvasRef && canvasRef.current) {
                          const canvas: HTMLCanvasElement = canvasRef.current;
                          const image = canvas
                            .toDataURL('image/png')
                            .replace('image/png', 'image/octet-stream');
                          const link = document.createElement('a');
                          link.download = 'hackthisfall-badge.png';
                          link.href = image;
                          link.click();
                        }
                      }}
                    >
                      Download Image
                    </Button>
                    <Button
                      leftIcon={<ShareIcon />}
                      px="4rem"
                      py="1rem"
                      rounded="full"
                      height="70px"
                      color="white"
                      isDisabled={!name || !image}
                      _disabled={{
                        cursor: 'not-allowed',
                        backgroundColor: '#e0d9d97f !important',
                      }}
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      backgroundColor="black !important"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href =
                          'https://twitter.com/intent/tweet?text=Thrilled%20to%20be%20a%20Hacker%20at%20Hack%20This%20Fall%202024%2C%20a%2036-hour%20in-person%20hackathon%20%F0%9F%A5%B3%0A%0ACan%27t%20wait%20to%20Innovate%20For%20Good%20and%20build%20with%20the%20amazing%20community%21%F0%9F%A7%A1%0A%0AGet%20a%20personalized%20badge%20for%20yourself%20here%20%F0%9F%91%89%20hackthisfall.tech%2Fswag%20%F0%9F%96%BC%EF%B8%8F%0A%0A%23HackThisFall2024%20%23InnovateForGood%20%23HackThisFall';
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.click();
                        link.remove();
                      }}
                    >
                      Share
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                alignItems={'center'}
                flexDir="column"
                mt={{ base: '3rem', xl: '5rem' }}
              >
                {!isMobile && (
                  <Flex
                    bgColor="#F0F0F0"
                    borderRadius="full"
                    w="fit-content"
                    gap="1rem"
                    justifyContent="space-evenly"
                    className="navbar"
                    zIndex={10}
                    marginTop="2rem"
                  >
                    {swagsMapping.map((section, index) => {
                      return (
                        <Flex
                          zIndex={10}
                          bgColor={
                            currentTab === index ? 'black' : 'transparent'
                          }
                          color={currentTab === index ? 'white' : 'black'}
                          fontFamily="var(--font-dm-sans)"
                          borderRadius="full"
                          fontSize="1.1rem"
                          alignItems="center"
                          justifyContent="center"
                          fontWeight="500"
                          px={{ md: '1rem', lg: '2rem', '2xl': '4rem' }}
                          py="1rem"
                          key={index}
                          cursor="pointer"
                          onClick={() => {
                            setCurrentTab(index);
                          }}
                          className="font-dm-sans"
                        >
                          {section.heading}
                        </Flex>
                      );
                    })}
                  </Flex>
                )}
                {isMobile && (
                  <Flex
                    flexDirection="column"
                    bgColor="#F0F0F0"
                    marginTop="1rem"
                    borderTopRadius="2rem"
                    borderBottomRadius={isDropdownOpen ? '0rem' : '2rem'}
                    position="relative"
                  >
                    <Flex
                      bgColor="#d6d6d6"
                      borderRadius="full"
                      w="fit-content"
                      gap="1rem"
                      pr={swagsMapping.length > 1 ? '1rem' : '0rem'}
                      justifyContent="space-evenly"
                      className="navbar"
                      position={'relative'}
                      zIndex={10}
                    >
                      {swagsMapping.map((section, index) => {
                        if (currentTab === index)
                          return (
                            <Flex
                              zIndex={10}
                              bgColor="black"
                              color="white"
                              fontFamily="var(--font-dm-sans)"
                              borderRadius="full"
                              fontSize="1.1rem"
                              alignItems="center"
                              justifyContent="center"
                              fontWeight="500"
                              px="2rem"
                              py="1rem"
                              key={index}
                              cursor="pointer"
                              className="font-dm-sans"
                              onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen);
                              }}
                              minWidth="200px"
                            >
                              {section.heading}
                            </Flex>
                          );
                      })}
                      {swagsMapping.length > 1 && (
                        <Flex
                          onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                          }}
                        >
                          <ChakraImage
                            src="/assets/icons/dropdown.svg"
                            alt="logo"
                          />
                        </Flex>
                      )}
                    </Flex>
                    {isDropdownOpen && (
                      <Flex
                        flexDirection={'column'}
                        position="absolute"
                        zIndex={40}
                        top="100%"
                        width="100%"
                        bgColor="#F0F0F0"
                        borderBottomRadius="2rem"
                      >
                        {swagsMapping.map((section, index) => {
                          if (currentTab !== index)
                            return (
                              <Flex
                                zIndex={10}
                                bgColor="#f0f0f0"
                                color="black"
                                fontFamily="var(--font-dm-sans)"
                                borderRadius="full"
                                fontSize="1.1rem"
                                alignItems="center"
                                justifyContent="center"
                                fontWeight="500"
                                px="2rem"
                                py="1rem"
                                key={index}
                                cursor="pointer"
                                className="font-dm-sans"
                                onClick={() => {
                                  selectTab(index);
                                }}
                              >
                                {section.heading}
                              </Flex>
                            );
                        })}
                      </Flex>
                    )}
                  </Flex>
                )}
                <Tabs
                  w="full"
                  mt={{ base: '2rem', xl: '3rem' }}
                  index={currentTab}
                >
                  <TabPanels>
                    {swagsMapping.map((section, index) => {
                      return (
                        <TabPanel
                          px="0"
                          key={index}
                          display="flex"
                          flexDirection="column"
                          gap="2rem"
                          w="full"
                        >
                          <Heading
                            color="black"
                            fontSize="2.5rem"
                            fontWeight="600"
                            fontFamily={'var(--font-nohemi)'}
                            textAlign={{ base: 'center', md: 'left' }}
                          >
                            {section.heading}
                          </Heading>
                          <SimpleGrid
                            gap="2rem"
                            w="full"
                            templateColumns={
                              section.index === 2
                                ? {
                                    base: 'repeat(1, 1fr)',
                                    md: 'repeat(3, 1fr)',
                                    lg: 'repeat(4, 1fr)',
                                    '2xl': 'repeat(5, 1fr)',
                                  }
                                : {
                                    base: 'repeat(1, 1fr)',
                                    md: 'repeat(2, 1fr)',
                                    lg: 'repeat(3, 1fr)',
                                    '2xl': 'repeat(4, 1fr)',
                                  }
                            }
                          >
                            {section.assets.map((asset, index) => {
                              return (
                                <Link
                                  href="https://bit.ly/htf-digital-swags"
                                  target="_blank"
                                  key={index}
                                >
                                  <ChakraImage src={asset} alt="assets" />
                                </Link>
                              );
                            })}
                          </SimpleGrid>
                        </TabPanel>
                      );
                    })}
                  </TabPanels>
                </Tabs>
              </Flex>
            </Flex>
          </Flex>
          <Footer mode="light" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Swag;
