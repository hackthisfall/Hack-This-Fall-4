import { Box } from "@chakra-ui/react";
import { useState } from "react";

const Discord = () => {
  const [color, setColor] = useState("none");
  return (
    <Box
      onMouseOver={() => setColor("white")}
      onMouseLeave={() => setColor("none")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="63"
        fill={color}
        viewBox="0 0 62 63"
      >
        <rect
          width="59.407"
          height="59.407"
          x="1"
          y="1.796"
          stroke={color === "white" ? "black" : "white"}
          stroke-width="1.84"
          rx="29.442"
        />
        <path
          stroke={color === "white" ? "black" : "white"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M41 20L32.1303 44.5622C32.0705 44.6928 31.9743 44.8035 31.8534 44.8812C31.7325 44.9588 31.5918 45 31.4481 45C31.3043 45 31.1637 44.9588 31.0427 44.8812C30.9218 44.8035 30.8256 44.6928 30.7658 44.5622L25.9898 35.0102L16.4378 30.2343C16.3072 30.1744 16.1965 30.0783 16.1189 29.9573C16.0413 29.8364 16 29.6957 16 29.552C16 29.4083 16.0413 29.2676 16.1189 29.1466C16.1965 29.0257 16.3072 28.9296 16.4378 28.8697L41 20Z"
        />
      </svg>
    </Box>
  );
};

export default Discord;
