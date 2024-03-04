import React from 'react'
import { Button, ChakraProvider, Flex, List, ListItem } from "@chakra-ui/react";
import { BellIcon, ChatIcon } from "@chakra-ui/icons";
import { AvatarMenu } from '../AvatarMenu/AvatarMenu';
import styles from './Navbar.module.css'

export function Navbar() {
    return (
      <Flex id="navbar" className={styles.navbar}>
        <List className={styles.list}>
          <ListItem id="logo" className="logo">
            <Button className={styles.logo}>DIMASIK</Button>
          </ListItem>

          <ListItem justifySelf={"center"}>
            <Flex alignItems={"center"}>
              <Button bg={"none"} colorScheme="none" color={"black"}>
                <BellIcon boxSize={6} />
              </Button>

              <Button bg={"none"} colorScheme="none" color={"black"}>
                <ChatIcon boxSize={5} />
              </Button>

              <AvatarMenu size="sm" />
            </Flex>
          </ListItem>
        </List>
      </Flex>
    );
}
