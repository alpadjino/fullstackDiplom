import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from '@chakra-ui/react';

export const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      w={"100%"}
    >
      <Flex
        display={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        maxW={"400px"}
        p={"30px"}
        border={"2px"}
        backgroundColor={"ghostwhite"}
        boxShadow={"0px 5px 10px 0px rgba(0, 0, 0, 0.5);"}
      >
        {isLogin ? (
          <>
            <Text fontSize={"20px"} fontWeight={"bold"} mb={"10px"}>
              Регистрация
            </Text>
            <Input
              variant="filled"
              placeholder="Почта"
              type="email"
              mb={"10px"}
            />
            <Input variant="filled" placeholder="Имя" type="text" mb={"10px"} />
            <Input
              variant="filled"
              placeholder="Пароль"
              type="password"
              mb={"10px"}
            />
            <Input
              variant="filled"
              placeholder="Подтвердите пароль"
              type="password"
              mb={"10px"}
            />
            <Button colorScheme="blue" my={"10px"}>
              Зарегистрироваться
            </Button>

            <Flex mt={"10px"} justifyContent={"center"} alignItems={"center"}>
              <Text>Уже есть аккаунт?</Text>
              {/* <Button colorScheme="none" color={"black"}>
              вОЙТИ)))
            </Button> */}
              <Link
                color={"blue.500"}
                ml={"20px"}
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                вОЙТИ)))
              </Link>
            </Flex>
          </>
        ) : (
          <>
            <Text fontSize={"20px"} fontWeight={"bold"} mb={"10px"}>
              Войти
            </Text>

            <Input
              variant="filled"
              placeholder="Почта"
              type="email"
              mb={"10px"}
            />

            <Input
              variant="filled"
              placeholder="Пароль"
              type="password"
              mb={"10px"}
            />
            <Button colorScheme="blue" my={"10px"}>
              Войти
            </Button>

            <Flex mt={"10px"} justifyContent={"center"} alignItems={"center"}>
              <Text>Нет аккаунта?</Text>
              {/* <Button colorScheme="none" color={"black"}>
              вОЙТИ)))
            </Button> */}
              <Link
                color={"blue.500"}
                ml={"20px"}
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Регистрация
              </Link>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
