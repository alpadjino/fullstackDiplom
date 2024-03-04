import React from 'react'
import {Menu, MenuButton, MenuItem, MenuList, Avatar} from '@chakra-ui/react'
import { SettingsIcon, AtSignIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

export function AvatarMenu(props) {
  return (
    <Menu>
      <MenuButton boxSize={"60px"} justifyContent={"center"} mr={"10px"}>
        <Avatar size={props.size} bg={"blue.500"} />
      </MenuButton>
      <MenuList>
        <MenuItem justifyItems={"center"}>
          <AtSignIcon mr={"8px"} />
          Профиль
        </MenuItem>

        <Link to="/settings">
          <MenuItem>
            <SettingsIcon mr={"8px"} />
            Настройки
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
