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
    heading: 'Zoom Background',
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

  // useEffect(() => {
  //   if (canvasRef && canvasRef.current) {
  //     const canvas: HTMLCanvasElement = canvasRef.current;
  //     const ctx = canvas.getContext('2d');
  //     canvas.style.letterSpacing = '0.4rem';
  //     const defaultBadge = new Image();
  //     defaultBadge.src = '/default-badge.png';
  //     const nohemiFont =
  //       getComputedStyle(canvas).getPropertyValue('--font-nohemi');

  //     defaultBadge.onload = function () {
  //       if (!ctx) {
  //         return;
  //       }
  //       ctx.drawImage(defaultBadge, 0, 0, 1620, 1620);
  //       ctx.font = `700 5rem ${nohemiFont}`;
  //       ctx.fillStyle = 'white';
  //       ctx.fillText(name.trim() !== '' ? name : 'Your Name Here', 96, 1367);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   if (canvasRef && canvasRef.current && image) {
  //     const canvas: HTMLCanvasElement = canvasRef.current;
  //     const ctx = canvas.getContext('2d');
  //     canvas.style.letterSpacing = '0.4rem';
  //     const reader = new FileReader();
  //     reader.readAsDataURL(image);
  //     const nohemiFont =
  //       getComputedStyle(canvas).getPropertyValue('--font-nohemi');

  //     const badge = new Image();
  //     badge.src = '/default-badge.png';

  //     reader.onloadend = (e) => {
  //       if (!ctx) {
  //         return;
  //       }
  //       const myImage = new Image();
  //       myImage.src = e.target?.result as string;
  //       myImage.onload = (ev) => {
  //         ctx.clearRect(0, 0, 1620, 1620);
  //         const inputWidth = myImage.naturalWidth;
  //         const inputHeight = myImage.naturalHeight;
  //         const smallerSide = Math.min(inputWidth, inputHeight);
  //         let startX = 0;
  //         let startY = 0;

  //         if (inputWidth < inputHeight) {
  //           startY = (inputHeight - inputWidth) / 2;
  //         } else if (inputWidth > inputHeight) {
  //           startX = (inputWidth - inputHeight) / 2;
  //         }

  //         ctx.drawImage(badge, 0, 0, 1620, 1620);
  //         ctx.save();
  //         roundedImage(85, 370, 750, 810, 50, ctx);
  //         ctx.clip();
  //         ctx.drawImage(
  //           myImage,
  //           startX,
  //           startY,
  //           smallerSide,
  //           smallerSide,
  //           85,
  //           370,
  //           750,
  //           810,
  //         );
  //         ctx.restore();
  //         ctx.font = `700 5rem ${nohemiFont}`;
  //         ctx.fillStyle = 'white';
  //         ctx.fillText(name.trim() !== '' ? name : 'John Doe', 96, 1367);
  //       };
  //     };
  //   } else if (canvasRef && canvasRef.current) {
  //     const canvas: HTMLCanvasElement = canvasRef.current;
  //     canvas.style.letterSpacing = '0.4rem';
  //     const ctx = canvas.getContext('2d');

  //     const nohemiFont =
  //       getComputedStyle(canvas).getPropertyValue('--font-nohemi');

  //     if (!ctx) {
  //       return;
  //     }
  //     const defaultBadge = new Image();
  //     defaultBadge.src = '/default-badge.png';
  //     ctx.drawImage(defaultBadge, 0, 0, 1620, 1620);
  //     ctx.font = `700 5rem ${nohemiFont}`;
  //     ctx.fillStyle = 'white';
  //     ctx.fillText(name.trim() !== '' ? name : 'Your Name Here', 96, 1367);
  //   }
  // }, [image, name]);

  function roundedImage(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    ctx: CanvasRenderingContext2D,
  ) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  return (
    <Flex background="#0D2129" w="100vw" h="100dvh">
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
            src="/assets/mandala-main-dark.svg"
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <ChakraImage
            position="absolute"
            right="-18vh"
            top={{ base: '-18vh', lg: '0' }}
            opacity="0.15"
            src="/assets/mandala-right-dark.svg"
            h="36vh"
            alt="mandala"
          />
          <ChakraImage
            position="absolute"
            left={{ base: '-20vh', lg: '-15vh' }}
            bottom={{ base: '-20vh', lg: '-10vh' }}
            opacity="0.15"
            src="/assets/mandala-left-dark.svg"
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
          <Header mode="dark" position="relative" />
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
              color="#FFFFFF"
              fontWeight="600"
              letterSpacing="0.3rem"
              mb="2rem"
            >
              Digital swags
            </Heading>
            <Flex
              mt={{ base: '2rem', xl: '4rem' }}
              w="full"
              flexDirection="column"
            >
              {/* <Flex
                justifyContent={{ base: 'flex-start', xl: 'space-between' }}
                alignItems="center"
                flexDirection={{ base: 'column', xl: 'row' }}
                w="full"
              >
                <canvas
                  ref={canvasRef}
                  width="1620"
                  height="1620"
                  style={{
                    width: 'min(100%, 600px)',
                    height: 'min(100%, 600px)',
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
                    color="white"
                    fontSize="2.5rem"
                    fontWeight="600"
                    fontFamily={'var(--font-nohemi)'}
                    textAlign={{ base: 'center', xl: 'left' }}
                  >
                    Digital Badge
                  </Heading>
                  <Text
                    textAlign={{ base: 'center', xl: 'left' }}
                    color="white"
                    fontSize="1.5rem"
                    fontWeight="400"
                    fontFamily={'var(--font-dm-sans)'}
                    dangerouslySetInnerHTML={{
                      __html:
                        'Once you have registered and booked your travels, you are all set to attend Hack This Fall 3.0! Now it is time to let the world know by sharing this super cool digital badge.<br /><br /> To get a personalized Hack This Fall Badge, just add your name & upload your image. Download it and Share it on socials using <a href="https://twitter.com/hashtag/hackthisfall" target="_blank" style="color: #F55F2F; font-weight: 600">#HackThisFall</a> and tag <a href="https://twitter.com/hackthisfall" target="_blank"style="color: #F55F2F; font-weight: 600">@hackthisfall</a>',
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
                      onChange={(e) => setName(e.target.value.toUpperCase())}
                      color="white"
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
                      color="black"
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      background="white !important"
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
                      color="black"
                      isDisabled={!name || !image}
                      _disabled={{
                        cursor: 'not-allowed',
                        backgroundColor: '#e0d9d97f !important',
                      }}
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      background="white !important"
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
                      color="black"
                      isDisabled={!name || !image}
                      _disabled={{
                        cursor: 'not-allowed',
                        backgroundColor: '#e0d9d97f !important',
                      }}
                      fontSize={{ base: '1.3rem', lg: '1.5rem' }}
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      backgroundColor="white !important"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href =
                          "https://twitter.com/intent/tweet?text=Hey folks! Super excited to share that I will be attending @hackthisfall 4.0, a 36 Hours in-person hackathon🥳%0A%0ACan't wait to %23InnovateForGood and meet the amazing community🧡%0A%0AGet a personal badge for yourself: hackthisfall.tech/swag 🚀 %23HackThisFall";
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
              </Flex> */}
              <Flex
                alignItems={'center'}
                flexDir="column"
                // mt={{ base: '3rem', xl: '5rem' }}
              >
                {!isMobile && (
                  <Flex
                    border="1.5px solid white"
                    bgColor="#0D2129"
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
                            currentTab === index ? 'white' : 'transparent'
                          }
                          color={currentTab === index ? 'black' : 'white'}
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
                            color="white"
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
                            templateColumns={{
                              base: 'repeat(1, 1fr)',
                              md: 'repeat(2, 1fr)',
                              lg: 'repeat(3, 1fr)',
                              '2xl': 'repeat(4, 1fr)',                              
                            }}
                          >
                            {section.assets.map((asset, index) => {
                              return (
                                <ChakraImage
                                  key={index}
                                  src={asset}
                                  alt="assets"
                                />
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
          <Footer mode="dark" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Swag;
