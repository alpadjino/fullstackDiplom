import React, { useContext } from 'react'
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ChakraProvider, Box, Text, Flex, Switch, Button } from "@chakra-ui/react";
import { Navbar } from '../components/Navbar/Navbar';

export const Settings = () => {
  return (
    <>
      <Box
        border={"2px"}
        borderColor={"gray.200"}
        alignSelf={"center"}
        justifySelf={"center"}
        mb={"10px"}
        maxW={"1081px"}
        mx={"auto"}
      >
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4vh"}>
          Настройки
        </Text>
      </Box>

      <Box className="main">
        <Flex
          bottom={"0"}
          py={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontWeight={"bold"}> Сменить тему </Text>
          <Switch ml={"20px"} colorScheme="green"></Switch>
        </Flex>
      </Box>
    </>
  );
}
