import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react'
import { Friend } from '../Friend/Friend';

export const Friends = () => {
  return (
    <Box id="friends">
      <Flex
        maxW={"710px"}
        display="block"
        position="relative"
        height="100%"
        mr="auto"
        ml="auto"
        boxSizing="border-box"
        border="2px"
        borderRadius={"10px"}
        borderColor="darkgray"
        pb={"10px"}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Button colorScheme="blue" mt={"10px"} mr={"10px"} variant="outline">
            Все друзья
          </Button>
          <Button colorScheme="blue" mt={"10px"} variant="outline">
            Друзья онлайн
          </Button>
        </Flex>
        <Input
          display={"flex"}
          marginY={"15px"}
          maxW={"650px"}
          marginX={"auto"}
          placeholder={"Поиск"}
          borderWidth={"3px"}
          borderColor={"gray.300"}
          colorScheme="blue"
        />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </Flex>
    </Box>
  );
}
