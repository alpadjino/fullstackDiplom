import React, { useState } from 'react'
import { Avatar, Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import {
  ArrowRightIcon,
  AttachmentIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";
import EmojiPicker from "emoji-picker-react";

export function News() {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [input, setInput] = useState("")
  
  function emojiOpener() {
    setEmojiOpen(!emojiOpen)
  }

  const emojiPickerFunction = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setInput((prev) => prev + emoji);
  }; 

  return (
    <Flex>
      <Flex
        position={"relative"}
        flexDirection={"column"}
        h={"87vh"}
        w={"100%"}
        maxW={"700px"}
        marginX={"auto"}
        marginY={"auto"}
        mt={"80px"}
        border={"2px"}
        borderColor={"black"}
        borderRadius={"10px"}
        bg={"snow"}
      >
        <Flex
          id="dialogNav"
          position={"relative"}
          justifyContent={"space-between"}
          alignItems={"center"}
          h={"70px"}
          w={"100%"}
          px={"10px"}
          borderBottom={"2px"}
          borderRadius={"10px"}
          bg={"white"}
        >
          <Button> Назад </Button>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"} cursor={"pointer"}>
              Имя пользователя
            </Text>
            <Text textColor={"darkblue"}> В сети </Text>
          </Box>
          <Avatar m={"10px"} />
        </Flex>

        <Box overflowY={"auto"} scrollSnapType={"both"}>
          <Flex id="friendMessage" ml={"5px"} p={"10px"}>
            <Avatar mr={"10px"} />
            <Box>
              <Text fontWeight={"bold"}>Имя юзера</Text>
              <Text>Hellow, bro</Text>
            </Box>
          </Flex>
          <Flex
            id="myMessage"
            flexDirection={"row-reverse"}
            mr={"5px"}
            p={"10px"}
          >
            <Avatar ml={"10px"} />
            <Box>
              <Text textAlign={"right"} fontWeight={"bold"}>
                Вы
              </Text>
              <Text>Hellow, bro</Text>
            </Box>
          </Flex>
        </Box>

        <Flex
          id="bottomBar"
          position={"relative"}
          justifyContent={"space-between"}
          alignItems={"center"}
          h={"70px"}
          w={"100%"}
          px={"10px"}
          borderTop={"2px"}
          borderColor={"black"}
          borderRadius={"10px"}
          mt={"auto"}
          bg={"white"}
        >
          <Button colorScheme="none" color={"black"}>
            <AttachmentIcon />
          </Button>

          <Button onClick={emojiOpener} colorScheme="none" color={"black"}>
            <PlusSquareIcon />
          </Button>

          <Input
            id="message"
            placeholder={"Сообщение"}
            mx={"10px"}
            borderColor={"black"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button colorScheme="none" color={"black"}>
            <ArrowRightIcon />
          </Button>
        </Flex>
        <Box zIndex={90}>
          <EmojiPicker
            open={emojiOpen}
            width={"100%"}
            height={"45vh"}
            searchDisabled={true}
            onEmojiClick={emojiPickerFunction}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
