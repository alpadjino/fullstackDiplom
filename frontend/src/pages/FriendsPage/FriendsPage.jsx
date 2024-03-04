import React from 'react'
import { ChakraProvider, Box, Input, Button, Flex, Text, Divider } from "@chakra-ui/react";
import { Friend } from '../../components/Friend/Friend';
import styles from "./FriendsPage.module.css";

export function Friends() {
  return (
      <Box id="friends" className={styles.friends}>
        <Divider mt={"70px"} />
        <Text className={styles.text}>Друзья</Text>
        <Divider />
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Button colorScheme="blue" mt={"10px"} mr={"10px"} variant="outline">
            Все друзья
          </Button>
          <Button colorScheme="blue" mt={"10px"} variant="outline">
            Друзья онлайн
          </Button>
        </Flex>
        <Input placeholder={"Поиск"} type="text" className={styles.input} />
        <Divider mb={"10px"} />
        <Friend />
      </Box>
  );
}
