"use client";

import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import { Metadata } from "next";

type humansMappingType = {
  slug: string;
  heading: string;
  people: {
    name: string;
    image: string;
    title?: string;
    link?: string;
  }[];
};

const humansMapping: humansMappingType[] = [
  {
    slug: "partner",
    heading: "Partner Reps",
    people: [
      {
        name: "Karl Lingiah",
        image: `/assets/humans/speakers/karl.jpeg`,
        link: "https://twitter.com/KarlLingiah",
      },
      {
        name: "Ashwin Kumar Uppala",
        image: `/assets/humans/partners/ashwin.jpg`,
        link: "https://twitter.com/ashwinexe",
      },
      {
        name: "Diana Pham",
        image: `/assets/humans/partners/diana.png`,
        link: "https://twitter.com/dianasoyster",
      },
      {
        name: "Aanchal Mishra",
        image: "/assets/humans/partners/aanchal.jpg",
        link: "https://twitter.com/Aanchalmishra__",
      },
      {
        name: "Saksham Solanki",
        image: "/assets/humans/speakers/saksham.jpeg",
        link: "https://www.linkedin.com/in/saksham-solanki-%F0%9F%87%AE%F0%9F%87%B3-248691174",
      },
      {
        name: "Venus Vavadiya",
        image: "/assets/humans/partners/venus.jpg",
        link: "https://venusvavadiya.com/",
      },
      {
        name: "Ankit Panday",
        image: "/assets/humans/partners/ankit.jpeg",
        link: "",
      },
      {
        name: "Ayusman Sahu",
        image: "/assets/humans/partners/ayusman.jpeg",
        link: "",
      },
      {
        name: "Manan Bhatt",
        image: "/assets/humans/partners/manan.png",
        link: "",
      },
      {
        name: "Bharat Kumar",
        image: "/assets/humans/partners/bharat.jpeg",
        link: "",
      },
      {
        name: "Darshan Gattani",
        image: "/assets/humans/partners/darshan.jpeg",
        link: "",
      },
      {
        name: "Ritvi Mishra",
        image: "/assets/humans/partners/ritvi.jpeg",
        link: "",
      },
      {
        name: "Srinadh Mattaparthi",
        image: "/assets/humans/partners/srinadh.jpeg",
        link: "",
      },
      {
        name: "Shiven Chaturvedi",
        image: "/assets/humans/partners/shiven.jpeg",
        link: "",
      },
      {
        name: "Rohan Shah",
        image: "/assets/humans/partners/rohan.jpeg",
        link: "",
      },
      {
        name: "Ridhima Malhotra",
        image: "/assets/humans/partners/ridhima.png",
        link: "",
      },
      {
        name: "Priyanka Shetty",
        image: "/assets/humans/partners/priyanka.jpeg",
        link: "",
      },
      {
        name: "Nipun Agrwal",
        image: "/assets/humans/partners/nipun.jpeg",
        link: "",
      },
      {
        name: "Karan Khurana",
        image: "/assets/humans/partners/karan.jpeg",
        link: "",
      },
      {
        name: "Chirag Shah",
        image: "/assets/humans/partners/chirag.jpeg",
        link: "",
      },
      {
        name: "Brinda Pandya",
        image: "/assets/humans/partners/brinda.jpeg",
        link: "",
      },
      {
        name: "Jignesh Thakor",
        image: "/assets/humans/partners/jignesh.jpg",
        link: "",
      },
      {
        name: "Chiraayu Pandya",
        image: "/assets/humans/partners/chiraayu.jpeg",
        link: "",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  // {
  //   slug: "speakers",
  //   heading: "Speakers",
  //   people: [
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Web publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //   ],
  // },
  // {
  //   slug: "judges",
  //   heading: "Judges",
  //   people: [
  //     {
  //       name: "Shambhav Mishra",
  //       title: "Judging publisher",
  //       image: "/assets/humans/P1.jpeg",
  //     },
  //   ],
  // },
  {
    slug: "mentors",
    heading: "Mentors & Judges",
    people: [
      {
        name: "Parth Jansari",
        image: "/assets/humans/mentors/parth.png",
        link: "https://twitter.com/jansariparth",
      },
      {
        name: "Pratik Parmar",
        image: "/assets/humans/mentors/pratik.jpg",
        link: "https://twitter.com/hackyroot",
      },
      {
        name: "Harsh Shah",
        image: "/assets/humans/mentors/harsh.jpeg",
        link: "https://twitter.com/harshcrop",
      },
      {
        name: "Janvi Thakkar",
        image: "/assets/humans/mentors/janvi.png",
        link: "https://twitter.com/JanviTh110302",
      },
      {
        name: "Priyanshi Rai",
        image: "/assets/humans/mentors/priyanshi.jpeg",
        link: "https://twitter.com/Pri_Rai25",
      },
      {
        name: "Manav Darji",
        image: "/assets/humans/mentors/manav.jpg",
        link: "https://twitter.com/manav24_",
      },
      {
        name: "Wilfred Almeida",
        image: "/assets/humans/mentors/wilfred.avif",
        link: "https://twitter.com/WilfredAlmeida_",
      },
      {
        name: "Ayush Bherwani",
        image: "/assets/humans/speakers/ayush.png",
        link: "https://twitter.com/ayushbherwani",
      },
      {
        name: "Vraj Desai",
        image: "/assets/humans/mentors/vraj.jpg",
        link: "https://twitter.com/vrajdesai78",
      },
      {
        name: "Faizan",
        image: "/assets/humans/mentors/faizan.jpg",
        link: "https://twitter.com/faizan8684",
      },
      {
        name: "Manan Bedi",
        image: "/assets/humans/mentors/manan.jpg",
        link: "https://twitter.com/manan_bedi29",
      },
      {
        name: "Anam Ansari",
        image: "/assets/humans/mentors/anam.jpg",
        link: "https://twitter.com/anamansari062",
      },
      {
        name: "Vidhu Mathur",
        image: "/assets/humans/mentors/vidhu.jpeg",
        link: "https://twitter.com/VidhuMathur2",
      },
      {
        name: "Salma Shaik",
        image: "/assets/humans/mentors/salma.jpg",
        link: "https://twitter.com/IdealisticINTJ",
      },
      {
        name: "Nazeeh Vahora",
        image: "/assets/humans/mentors/nazeeh.jpg",
        link: "https://twitter.com/nazeeh21",
      },
      {
        name: "Hrittik Roy",
        image: "/assets/humans/mentors/hrittik.jpeg",
        link: "https://twitter.com/hrittikhere",
      },
      {
        name: "Harshita Jain",
        image: "/assets/humans/mentors/harshita.jpg",
        link: "https://twitter.com/harshitajain561",
      },
      {
        name: "Nitish Kumar",
        image: "/assets/humans/mentors/nitish.jpg",
        link: "https://twitter.com/nitishfy",
      },
      {
        name: "Abdul Vasay",
        image: `/assets/humans/speakers/abdul.png`,
        link: "https://twitter.com/abdulvasay_dev",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    slug: "volunteers",
    heading: "Volunteers",
    people: [
      {
        name: "Aastha Shah",
        image: `/assets/humans/volunteers/aastha.jpg`,
        link: "https://twitter.com/aasthaashahh",
      },
      {
        name: "Prasan Singh",
        image: `/assets/humans/volunteers/prasan.jpg`,
        link: "https://twitter.com/prasansecures",
      },
      {
        name: "Avin Indrasoma",
        image: `/assets/humans/volunteers/avin.jpg`,
        link: "https://www.linkedin.com/in/avinin",
      },
      {
        name: "Suhani Jain",
        image: `/assets/humans/volunteers/suhani.jpg`,
        link: "",
      },
      {
        name: "Dhruv Saraswat",
        image: `/assets/humans/volunteers/dhruv.jpg`,
        link: "",
      },
      {
        name: "Kavusikaa Prabhu",
        image: `/assets/humans/volunteers/kaushika.jpg`,
        link: "",
      },
      {
        name: "Kamna Sharma",
        image: `/assets/humans/volunteers/kamna.jpg`,
        link: "",
      },
      {
        name: "Hemavarshini Akkireddy",
        image: `/assets/humans/volunteers/hemavarshini.jpg`,
        link: "",
      },
      {
        name: "Jay Oza",
        image: `/assets/humans/volunteers/jay.jpg`,
        link: "",
      },
      {
        name: "Chaitya Nanavati",
        image: `/assets/humans/volunteers/chaitya.jpg`,
        link: "",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    slug: "organizers",
    heading: "Organizers",
    people: [
      {
        name: "Siddharth Dayalwal",
        image: "/assets/humans/team/siddharth.jpg",
        link: "https://twitter.com/siddharth_hacks",
      },
      {
        name: "Sahil Sen",
        image: "/assets/humans/team/sahilsen.webp",
        link: "https://www.linkedin.com/in/sahil-sen-528647ba/",
      },
      {
        name: "Dennis D'mello",
        image: "/assets/humans/team/dennis.jpeg",
        link: "https://www.linkedin.com/in/dendemello/",
      },
      {
        name: "Paras Gupta",
        image: "/assets/humans/team/paras.jpeg",
        link: "https://twitter.com/parasg1999/",
      },
      {
        name: "Vaibhav Toshniwal",
        image: "/assets/humans/team/vaibhav.jpeg",
        link: "https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/",
      },
      {
        name: "Apoorv Dwivedi",
        image: "/assets/humans/team/apoorv.jpg",
        link: "https://www.twitter.com/apoorvdwi",
      },
      {
        name: "Shitiz Aggarwal",
        image: "/assets/humans/team/shitiz.jpg",
        link: "https://twitter.com/Shitiz_Agg",
      },
      {
        name: "Rohan Kambli",
        image: "/assets/humans/team/rohan.jpg",
        link: "https://twitter.com/rohannrk",
      },
      {
        name: "Priti Priya",
        image: "/assets/humans/team/priti.jpeg",
        link: "https://twitter.com/pritisinghhhh",
      },
      {
        name: "Kriyanshi Shah",
        image: "/assets/humans/team/kriyanshi.jpg",
        link: "https://twitter.com/ShahKriyanshi",
      },
      {
        name: "Vedant Kakde",
        image: "/assets/humans/team/vedant.png",
        link: "https://twitter.com/vedantstwt",
      },
      {
        name: "Ali Mustufa Shaikh",
        image: "/assets/humans/team/ali.jpg",
        link: "https://twitter.com/ialimustufa",
      },
      {
        name: "Devanshi Pandya",
        image: "/assets/humans/team/devanshi.jpeg",
        link: "https://twitter.com/DevanshiPandy11",
      },
      {
        name: "Sakshi Hardwani",
        image: "/assets/humans/team/sakshi.jpeg",
        link: "https://www.linkedin.com/in/sakshi-hardwani/",
      },
      {
        name: "Toukir Khan",
        image: "/assets/humans/team/toukir.jpeg",
        link: "https://twitter.com/_toukirkhan_",
      },
      {
        name: "Vishwa Mehta",
        image: "/assets/humans/team/vishwa.jpeg",
        link: "https://twitter.com/vishwamehta30/",
      },
      {
        name: "Bishwajeet Parhi",
        image: "/assets/humans/team/biswa.jpg",
        link: "https://twitter.com/biswa_20p",
      },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
];

// export const metadata: Metadata = {
//   title: "Hack This Fall 4.0 | Humans",
// };

const Humans = () => {
  const [currentSection, setCurrentSection] = useState(humansMapping[0].slug);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectSection = (section: string) => {
    setCurrentSection(section);
    setIsDropdownOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Flex background="#ffffff" w="100vw" h="100dvh">
      <Flex
        overflow="hidden"
        position="relative"
        mx="auto"
        width="min(100vw, 200vh)"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        height="100dvh"
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
            opacity="0.1"
            src="/assets/mandala-main-light.svg"
            h="min(90%, 100vw)"
            alt="mandala"
          />
          <Image
            position="absolute"
            right="-18vh"
            top={{ base: "-18vh", lg: "0" }}
            opacity="0.1"
            src="/assets/mandala-right-light.svg"
            h="36vh"
            alt="mandala"
          />
          <Image
            position="absolute"
            left={{ base: "-20vh", lg: "-15vh" }}
            bottom={{ base: "-20vh", lg: "-10vh" }}
            opacity="0.1"
            src="/assets/mandala-left-light.svg"
            h="40vh"
            alt="mandala"
          />
        </Flex>
        <Flex flexDirection="column" width="100%" alignItems="center">
          <Header mode="light" position="relative" />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          overflow="auto"
          h="full"
        >
          <Heading
            lineHeight="90%"
            fontFamily="var(--font-nohemi)"
            fontSize={{ base: "2rem", lg: "3rem" }}
            color={"#000000"}
            fontWeight="600"
            letterSpacing="0.3rem"
          >
            Humans
          </Heading>
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
              {humansMapping.map((section, index) => {
                return (
                  <Flex
                    zIndex={10}
                    bgColor={
                      currentSection === section.slug ? "black" : "transparent"
                    }
                    color={currentSection === section.slug ? "white" : "black"}
                    fontFamily="var(--font-dm-sans)"
                    borderRadius="full"
                    fontSize="1.1rem"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="500"
                    px={{ md: "1rem", lg: "2rem", "2xl": "4rem" }}
                    py="1rem"
                    key={index}
                    cursor="pointer"
                    onClick={() => {
                      setCurrentSection(section.slug);
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
              borderBottomRadius={isDropdownOpen ? "0rem" : "2rem"}
              position="relative"
            >
              <Flex
                bgColor="#d6d6d6"
                borderRadius="full"
                w="fit-content"
                gap="1rem"
                pr={humansMapping.length > 1 ? "1rem" : "0rem"}
                justifyContent="space-evenly"
                className="navbar"
                position={"relative"}
                zIndex={10}
              >
                {humansMapping.map((section, index) => {
                  if (currentSection === section.slug)
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
                {humansMapping.length > 1 && (
                  <Flex
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                    }}
                  >
                    <Image src="/assets/icons/dropdown.svg" alt="logo" />
                  </Flex>
                )}
              </Flex>
              {isDropdownOpen && (
                <Flex
                  flexDirection={"column"}
                  position="absolute"
                  zIndex={40}
                  top="100%"
                  width="100%"
                  bgColor="#F0F0F0"
                  borderBottomRadius="2rem"
                >
                  {humansMapping.map((section, index) => {
                    if (currentSection !== section.slug)
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
                            selectSection(section.slug);
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

          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="flex-start"
            alignContent="flex-start"
            w="full"
            h="full"
            zIndex="20"
            px={{ base: "2rem", lg: "5rem" }}
            rowGap={{ base: "0.25rem", lg: "0.5rem" }}
            marginTop="2rem"
          >
            {humansMapping
              .find((p) => p.slug === currentSection)
              ?.people.map((s, i) => (
                <Flex
                  key={`${currentSection}-${i}`}
                  justifyContent="center"
                  px={{ base: "0.5rem", lg: "1.5rem" }}
                  py={{ base: "0.5rem", lg: "1rem" }}
                  borderRadius="0.5rem"
                  flexDirection="column"
                  fontFamily="var(--font-nohemi)"
                >
                  <Link href={s.link} target="_blank">
                    <Image
                      src={s.image}
                      w={{ base: "7rem", lg: "14rem" }}
                      h={{ base: "7rem", lg: "14rem" }}
                      alt="logo"
                      borderRadius={{
                        base: "3rem 1rem",
                        lg: "5.5rem 1.25rem",
                      }}
                    />
                  </Link>
                  <Text
                    color="#333333"
                    fontWeight="600"
                    letterSpacing="0.05rem"
                    fontSize={{ base: "0.5rem", lg: "unset" }}
                    marginTop="0.5rem"
                  >
                    {s.name}
                  </Text>
                  {s && s.title && (
                    <Text
                      color="#676565"
                      letterSpacing="0.06rem"
                      fontSize={{ base: "0.5rem", lg: "unset" }}
                    >
                      {s.title}
                    </Text>
                  )}
                </Flex>
              ))}
          </Flex>
        </Flex>
        <Footer mode="light" />
      </Flex>
    </Flex>
  );
};

export default Humans;
