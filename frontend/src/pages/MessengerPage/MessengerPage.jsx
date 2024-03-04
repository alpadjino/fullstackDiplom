import React from 'react'
import { ChakraProvider, Box, Input, Text, Divider} from "@chakra-ui/react";
import { Message } from '../../components/Message/Message';
import styles from './MessengerPage.module.css'

export const Messenger = () => {
  return (
      <Box className={styles.messenger}>
        <Divider mt={"70px"} />
        <Text className={styles.text}>Сообщения</Text>
        <Divider mb={"10px"} />
        <Input className={styles.input} placeholder={"Поиск"} />
        <Divider mb={"10px"} />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </Box>
  ); 
}
