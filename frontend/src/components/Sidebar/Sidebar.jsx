import React, { useState } from 'react'
import styles from "./Sidebar.module.css";
import { 
    Button, 
    Divider, 
    Flex, 
    Box, 
    Menu, 
    MenuItem,  
    Text, 
    ChakraProvider} from "@chakra-ui/react";
import {
  SmallCloseIcon,
  ChatIcon,
  CalendarIcon,
  StarIcon,
  ArrowRightIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { AvatarMenu } from '../AvatarMenu/AvatarMenu';


export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("hidden");


  return (
    <ChakraProvider>
      <Box>
        {showSidebar === "hidden" ? (
          <ArrowRightIcon
            position={"fixed"}
            boxSize="4vh"
            bottom={"50%"}
            top={"50%"}
            cursor={"pointer"}
            zIndex={99}
            onClick={() => setShowSidebar("visible")}
          />
        ) : (
          <Box visibility={showSidebar} className={styles.sidebar}>
            {/*Крестик*/}
            <Button
              onClick={() =>
                showSidebar === "hidden"
                  ? setShowSidebar("visible")
                  : setShowSidebar("hidden")
              }
              position={"absolute"}
              bg="none"
              colorScheme="none"
              color={"black"}
              right={0}
              boxSize={"20px"}
            >
              <SmallCloseIcon />
            </Button>

            {/*Верхняя панель*/}
            <Menu>
              <Flex className="avatarAndUsername">
                <AvatarMenu />

                {/*Основное меню*/}
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text fontFamily={"unset"}>Имя пользователя</Text>
                  <Text fontSize={"12px"} fontWeight={"bold"}>
                    dxl_samokhin@mail.ru
                  </Text>
                </Flex>
              </Flex>

              <Divider />

              <Link to="/main">
                <MenuItem className={styles.menuItem}>
                  <StarIcon mr={"8px"} />
                  Главная
                </MenuItem>
                <Divider />
              </Link>

              <Link to="/news">
                <MenuItem className={styles.menuItem}>
                  <CalendarIcon mr={"8px"} />
                  Новости
                </MenuItem>
              </Link>

              <Divider />

              <Link to="/messenger">
                <MenuItem className={styles.menuItem}>
                  <ChatIcon mr={"8px"} />
                  Мессенджер
                </MenuItem>
              </Link>

              <Divider />

              <Link to="/friends">
                <MenuItem className={styles.menuItem}>
                  <DragHandleIcon mr={"8px"} />
                  Друзья
                </MenuItem>
              </Link>

              <Divider />

              {/*Кнопка для выхода из аккаунта*/}
              <Button
                position={"absolute"}
                bg={"blue.200"}
                colorScheme="red"
                textColor={"white"}
                bottom={"0"}
                width={"100%"}
              >
                Выход из аккаунта
              </Button>
            </Menu>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}
