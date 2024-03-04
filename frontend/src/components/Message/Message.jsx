import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Divider,
} from "@chakra-ui/react";

import styles from './Message.module.css'

export const Message = () => {
    return (
      <Box>
        <Divider my={"2px"} />
        <Flex className={styles.flex}>
          <Avatar></Avatar>
          <Box ml={"20px"}>
            <Text fontWeight={"bold"}>Имя пользователя</Text>
            <Text>Последнее сообщение</Text>
          </Box>
        </Flex>
      </Box>
    );
}
