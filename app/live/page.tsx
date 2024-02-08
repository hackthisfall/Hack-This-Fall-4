"use client";

import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import events from "../events";
import Masonry from "react-responsive-masonry";

const combinedEvents = Object.keys(events).reduce((a, k) => {
  events[k].forEach((e) => {
    a.push({ ...e, date: k });
  });

  return a;
}, [] as Array<any>);

const Live = () => {
  const [totalHackingTimer, setTotalHackingTimer] = useState(
    1.5 * 24 * 60 * 60 * 1000
  );

  const [timerType, setTimerType] = useState("ends");

  const [remianingHackTime, setRemianingHackTime] = useState("36 : 00 : 00");
  const [percentTimeRemaining, setPercentTimeRemaining] = useState(100);

  const [displayTweets, setDisplayTweets] = useState<Array<any>>([]);

  const updateTimer = () => {
    if (new Date() < new Date("2024-02-09T20:00:00+05:30")) {
      setTimerType("begins");

      const total_time_in_secs = 5 * 24 * 60 * 60;

      setTotalHackingTimer(total_time_in_secs * 1000);

      const targetTime = new Date();
      targetTime.setDate(9);
      targetTime.setHours(20);
      targetTime.setMinutes(0);
      targetTime.setSeconds(0);
      targetTime.setMilliseconds(0);

      const r_time_in_secs =
        (targetTime.getTime() - new Date().getTime()) / 1000;
      const hh = Math.floor(r_time_in_secs / (60 * 60));
      const mm = Math.floor(r_time_in_secs / 60) - hh * 60;
      const ss = Math.floor(r_time_in_secs) - hh * 60 * 60 - mm * 60;

      setRemianingHackTime(
        `${hh < 10 ? `0${hh}` : hh} : ${mm < 10 ? `0${mm}` : mm} : ${
          ss < 10 ? `0${ss}` : ss
        }`
      );

      setPercentTimeRemaining(
        100 - (r_time_in_secs / total_time_in_secs) * 100
      );
    } else if (new Date() < new Date("2024-02-11T08:00:00+05:30")) {
      setTimerType("ends");

      const total_time_in_secs = 1.5 * 24 * 60 * 60;

      setTotalHackingTimer(total_time_in_secs * 1000);

      const targetTime = new Date();
      targetTime.setDate(11);
      targetTime.setHours(8);
      targetTime.setMinutes(0);
      targetTime.setSeconds(0);
      targetTime.setMilliseconds(0);

      const r_time_in_secs =
        (targetTime.getTime() - new Date().getTime()) / 1000;
      const hh = Math.floor(r_time_in_secs / (60 * 60));
      const mm = Math.floor(r_time_in_secs / 60) - hh * 60;
      const ss = Math.floor(r_time_in_secs) - hh * 60 * 60 - mm * 60;

      setRemianingHackTime(
        `${hh < 10 ? `0${hh}` : hh} : ${mm < 10 ? `0${mm}` : mm} : ${
          ss < 10 ? `0${ss}` : ss
        }`
      );

      setPercentTimeRemaining((r_time_in_secs / total_time_in_secs) * 100);
    } else {
      setTimerType("khatam");
    }
  };

  const updateAgenda = () => {
    const parent = document.querySelector(".agenda");

    const currentScrollPos = parent?.scrollTop || 0;
    const parentBoudingBox = parent?.getBoundingClientRect();

    let indexOfNextEvent = combinedEvents.findIndex(
      (e) => new Date() < new Date(e.referenceDate)
    );

    for (let index = indexOfNextEvent - 1; index > 0; index--) {
      if (
        new Date(combinedEvents[index].referenceDate).toString() ===
        new Date(combinedEvents[index - 1].referenceDate).toString()
      ) {
        indexOfNextEvent = index;
      } else {
        break;
      }
    }

    const boundingBox = document
      .querySelector(`#i${indexOfNextEvent - 1}`)
      ?.getBoundingClientRect();
    if (boundingBox?.y) {
      parent?.scrollTo({
        top: currentScrollPos + boundingBox?.y - (parentBoudingBox?.y || 0),
      });
    }
  };

  const updateFeed = async () => {
    const res = await fetch(`https://hackthisfall.tech/live/api`, {
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.DATA_API_KEY!,
      },
    });

    const { tweets, rawTweets } = await res.json();

    console.log(tweets, rawTweets);

    setDisplayTweets((prev: Array<any>) =>
      [
        ...prev,
        ...tweets.filter(
          (t: any) => !prev.some((p) => t.entryId === p.entryId)
        ),
      ].slice(0, 1000)
    );
  };

  useEffect(() => {
    const a = setInterval(updateTimer, 1000);
    const b = setInterval(updateAgenda, 1000);
    const c = setInterval(updateFeed, 1000 * 60);

    return () => {
      clearInterval(a);
      clearInterval(b);
      clearInterval(c);
    };
  }, []);

  return (
    <Flex background="#0D2129" w="100vw" h="100dvh">
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
        <Flex
          position="relative"
          zIndex="3"
          flexDirection="row"
          width="100%"
          h="full"
          justify="space-between"
          alignItems="center"
          padding="2rem"
          columnGap="2rem"
          className="whole-page"
        >
          <Flex
            flexDirection="column"
            rowGap="2rem"
            grow={1}
            height="100%"
            // minHeight={"10rem"}
            justify={"space-between"}
          >
            <Box
              className="progress-bar"
              bgGradient={`conic-gradient(#f55f2f calc(${percentTimeRemaining} * 0.2%),
              #145767 calc(${percentTimeRemaining} * 0.4%),
              #3ebbb7 calc(${percentTimeRemaining} * 0.56%),
              #f7b141 calc(${percentTimeRemaining} * 0.8%),
              #f55f2f calc(${percentTimeRemaining} * 1%),
              #1c2d37 0)`}
              transition="all 1s ease-in"
              // animation={''}
              minHeight={"18rem"}
              padding={"0.75rem"}
            >
              <Flex
                flexDirection="column"
                className="timer-content"
                background={"#0F2832"}
                width="100%"
                padding={"4rem"}
                textAlign={"center"}
                zIndex={5}
              >
                <Text
                  color={"#D9D9D9"}
                  fontFamily="var(--font-nohemi)"
                  fontWeight={500}
                  fontSize="2rem"
                >
                  {timerType !== "khatam" && <> Hacking {timerType} in</>}
                </Text>
                {timerType !== "khatam" && (
                  <Text
                    color={"#D9D9D9"}
                    className="timer"
                    fontFamily="var(--font-nohemi)"
                    fontWeight={700}
                    fontSize="4rem"
                  >
                    {remianingHackTime}
                  </Text>
                )}
                {timerType === "khatam" && (
                  <Text
                    color={"#D9D9D9"}
                    className="timer"
                    fontFamily="var(--font-nohemi)"
                    fontWeight={700}
                    fontSize="4rem"
                  >
                    See you in 2025
                  </Text>
                )}
              </Flex>
            </Box>

            <Flex
              className="agenda"
              borderRadius="2rem"
              flexGrow={1}
              background="#0F2832"
              overflow={"auto"}
              maxHeight="66vh"
              position={"relative"}
              // textAlign={"center"}
            >
              <Box
                position={"absolute"}
                width="100%"
                height="50%"
                bottom={0}
                borderRadius="2rem"
                zIndex={2}
                className="opaque-sheet"
                pointerEvents="none"
              ></Box>
              <Flex flexDirection={"column"} overflow={"auto"} height="100%">
                <Text
                  color="#3EBBB7"
                  fontFamily="var(--font-nohemi)"
                  fontWeight={500}
                  fontSize="2rem"
                  paddingLeft="4rem"
                  paddingTop="2rem"
                  paddingBottom="2rem"
                  className="agenda-class"
                  top={0}
                >
                  Agenda
                </Text>
                {combinedEvents.map((e, i) => {
                  return (
                    <Box
                      width={{ base: "100%", lg: "700px" }}
                      key={i}
                      id={`i${i + 1}`}
                    >
                      <Flex
                        paddingTop={i === 0 ? "0" : "1rem"}
                        marginBottom={
                          i === combinedEvents.length - 1 ? "50rem" : ""
                        }
                        marginLeft={"4rem"}
                        position="relative"
                        color={"white"}
                        alignItems={"center"}
                        justifyContent="flex-start"
                        alignSelf={"flex-start"}
                        className={
                          i === 0
                            ? "init-date"
                            : i === (combinedEvents.length || 0) - 1
                            ? "last-date"
                            : "date"
                        }
                      >
                        <Flex
                          position="absolute"
                          width={{ base: "1rem", lg: "02rem" }}
                          height={{ base: "1rem", lg: "02rem" }}
                          backgroundColor={"#1A3844"}
                          borderRadius={"50%"}
                          left={{
                            base: "calc(-0.5rem + 0.5px)",
                            lg: "calc(-1rem + 0.5px)",
                          }}
                          align={"center"}
                          justify="center"
                        >
                          <Box
                            position="relative"
                            width={{ base: "0.4rem", lg: "0.75rem" }}
                            height={{ base: "0.4rem", lg: "0.75rem" }}
                            backgroundColor={"white"}
                            borderRadius={"50%"}
                            // left="calc(50%-0rem)"
                            // left="calc(-0.25rem + 0.5px)"
                          ></Box>
                        </Flex>
                        <Flex
                          direction={"column"}
                          paddingLeft={{ base: "1rem", lg: "2rem" }}
                          width={{ base: "6rem", lg: "8rem" }}
                          minWidth={{ base: "6rem", lg: "8rem" }}
                        >
                          <Text
                            color={"#ffffff"}
                            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                            fontWeight="700"
                          >
                            {e.start}
                          </Text>
                          <Text
                            color={"#F46D24"}
                            fontSize={{ base: "1rem", lg: "1.25rem" }}
                          >
                            {`Feb ${e.date.split("th")[0]} ` || ""}
                          </Text>
                        </Flex>
                        <Flex
                          direction={"column"}
                          marginLeft={{ base: "1rem", lg: "3rem" }}
                        >
                          <Text
                            color={"#ffffff"}
                            fontSize={{ base: "1.25rem", lg: "1.75rem" }}
                            fontWeight="700"
                          >
                            {e.title}
                          </Text>
                          <Text
                            color={"#DCDCDC"}
                            fontSize={{ base: "1rem", lg: "1.25rem" }}
                          >
                            {e.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
          {/* <iframe
            src="https://widget.taggbox.com/149349"
            style={{ width: "55%", height: "100%", border: "none" }}
          ></iframe> */}
          <Flex
            height={"100%"}
            width={"55%"}
            overflow="auto"
            background={"#0f2832"}
            padding={"0.75rem"}
            borderRadius="2rem"
            fontFamily="var(--font-nohemi)"
          >
            {/* <Grid
              style={{
                minHeight: "100vh",
                border: "none",
                color: "white",
              }}
              templateColumns="repeat(2,1fr)"
              gap={"0.75rem"}
              // position={"sticky"}
              // top={0}
              // marginTop={0}
              // overflow="hidden"
              className="live-grid"
            >
              {displayTweets.map((t) => (
                <Flex
                  display="inline-block"
                  float={"left"}
                  // className="live-grid-item"
                  background={"#0f2832"}
                  padding="0.75rem"
                  key={t.id}
                  flexDirection="column"
                  minWidth={"15rem"}
                  marginTop={"1rem"}
                  height={"fit-content"}
                >
                  {t.images.length > 0 && <Image src={t.images[0]} />}
                  {t.text && <Text marginTop={"0.75rem"}>{t.text}</Text>}
                  <Flex marginTop={"0.75rem"}>
                    <Image src={t.user_img} borderRadius="50%" />
                    <Flex marginLeft={"1rem"} flexDirection={"column"}>
                      <Text>{t.user_name}</Text>
                      <Text>@{t.user_screen_name}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Grid> */}
            <Masonry columnsCount={2} height="100%" gutter="1rem">
              {displayTweets.map((t) => (
                <Flex
                  borderRadius="1rem"
                  // display="inline-block"
                  // float={"left"}
                  color={"white"}
                  // className="live-grid-item"
                  background={"#172f38"}
                  padding="0.75rem"
                  key={t.id}
                  flexDirection="column"
                  minWidth={"15rem"}
                  // marginTop={"1rem"}
                  // alignContent="center"
                  height={"fit-content"}
                >
                  <Flex marginTop={"0.75rem"} alignItems={"center"}>
                    <Image src={t.user_img} borderRadius="50%" />
                    <Flex marginLeft={"0.5rem"} flexDirection={"column"}>
                      <Text fontSize={"1rem"}>
                        <b>{t.user_name}</b>
                      </Text>
                      <Text opacity={"70%"}>@{t.user_screen_name}</Text>
                    </Flex>
                  </Flex>

                  {t.images.length > 0 && (
                    <Image
                      marginTop={"0.75rem"}
                      // alignSelf="center"
                      borderRadius="0.625rem"
                      src={t.images[0]}
                    />
                  )}
                  {t.text && <Text marginTop={"0.75rem"}>{t.text}</Text>}
                  <Text marginTop={"0.75rem"} opacity={"50%"}>
                    {t.created_at}
                  </Text>
                </Flex>
              ))}
            </Masonry>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Live;
