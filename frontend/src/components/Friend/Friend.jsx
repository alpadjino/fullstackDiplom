import React from 'react'
import { Box, Flex, Avatar, Text, Divider } from "@chakra-ui/react";
import styles from './Friend.module.css'

export const Friend = () => {
  return (
    <Box>
      <Divider my={"2px"} />
      <Flex className={styles.flex}>
        <Avatar cursor={"pointer"}></Avatar>
        <Box ml={"20px"}>
          <Text cursor={"pointer"} fontWeight={"bold"}>
            Имя пользователя
          </Text>
          <Text cursor={"pointer"}>Написать сообщение</Text>
        </Box>
      </Flex>
    </Box>
  );
}
