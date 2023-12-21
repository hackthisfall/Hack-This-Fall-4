'use client';

import {
  Flex,
  Heading,
  Text,
  Image as ChakraImage,
  Input,
  Button,
} from '@chakra-ui/react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';

const tracksMapping = [
  {
    heading: 'Generative AI & Machine Learning',
    image: '/assets/tracks/gen-ai.gif',
  },
  {
    heading: 'Blockchain & Web3',
    image: '/assets/tracks/blockchain.gif',
  },
  {
    heading: 'IoT & Embedded Systems',
    image: '/assets/tracks/iot.gif',
  },
  {
    heading: 'Augmented/Virtual Reality',
    image: '/assets/tracks/ar-vr.gif',
  },
  {
    heading: 'Cloud & DevOps',
    image: '/assets/tracks/cloud.gif',
  },
  {
    heading: 'Open Track: Innovate for Good',
    image: '/assets/tracks/open-innovation.gif',
  },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | Tracks",
// };

const Swag = () => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const canvasRef = useRef(null);
  const imageUploadRef = useRef(null);

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
        ctx.drawImage(defaultBadge, 0, 0, 1620, 1620);
        ctx.font = `700 5rem ${nohemiFont}`;
        ctx.fillStyle = 'white';
        ctx.fillText(name.trim() !== '' ? name : 'Your Name Here', 96, 1367);
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
      badge.src = '/default-badge.png';

      reader.onloadend = (e) => {
        if (!ctx) {
          return;
        }
        const myImage = new Image();
        myImage.src = e.target?.result as string;
        myImage.onload = (ev) => {
          ctx.clearRect(0, 0, 1620, 1620);
          const inputWidth = myImage.naturalWidth;
          const inputHeight = myImage.naturalHeight;
          const smallerSide = Math.min(inputWidth, inputHeight);
          let startX = 0;
          let startY = 0;

          if (inputWidth < inputHeight) {
            startY = (inputHeight - inputWidth) / 2;
          } else if (inputWidth > inputHeight) {
            startX = (inputWidth - inputHeight) / 2;
          }

          ctx.drawImage(badge, 0, 0, 1620, 1620);
          ctx.save();
          roundedImage(85, 370, 750, 810, 50, ctx);
          ctx.clip();
          ctx.drawImage(
            myImage,
            startX,
            startY,
            smallerSide,
            smallerSide,
            85,
            370,
            750,
            810,
          );
          ctx.restore();
          ctx.font = `700 5rem ${nohemiFont}`;
          ctx.fillStyle = 'white';
          ctx.fillText(name.trim() !== '' ? name : 'John Doe', 96, 1367);
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
      ctx.drawImage(defaultBadge, 0, 0, 1620, 1620);
      ctx.font = `700 5rem ${nohemiFont}`;
      ctx.fillStyle = 'white';
      ctx.fillText(name.trim() !== '' ? name : 'Your Name Here', 96, 1367);
    }
  }, [image, name]);

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
              mt="4rem"
              h="full"
              w="full"
              overflowY={{ base: 'auto' }}
              flexDirection="column"
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ base: 'column', md: 'row' }}
                w="full"
              >
                <canvas
                  ref={canvasRef}
                  width="1620"
                  height="1620"
                  style={{
                    width: '600px',
                    height: '600px',
                    borderRadius: '1.5rem',
                  }}
                />
                <Flex gap="3rem" w="50%" flexDir="column">
                  <Heading
                    color="white"
                    fontSize="2.5rem"
                    fontWeight="600"
                    fontFamily={'var(--font-nohemi)'}
                  >
                    Digital Badge
                  </Heading>
                  <Text
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
                  >
                    * We respect your privacy and are not storing your pictures
                    on our servers.
                  </Text>
                  <Flex gap="2rem">
                    <Input
                      height="70px"
                      px="2rem"
                      rounded="full"
                      value={name}
                      onChange={(e) => setName(e.target.value.toUpperCase())}
                      color="white"
                      fontSize="1.5rem"
                      fontWeight="400"
                      fontFamily={'var(--font-dm-sans)'}
                      placeholder="Enter your name"
                      _focusVisible={{
                        zIndex: 1,
                        borderColor: "#fff",
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
                      px="4rem"
                      py="1rem"
                      rounded="full"
                      height="70px"
                      color="black"
                      fontSize="1.5rem"
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
                </Flex>
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
