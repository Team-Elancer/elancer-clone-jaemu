import React, { Fragment, useRef } from 'react';

import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Box,
  useDisclosure,
  List,
  ListItem,
  Divider,
  useColorMode,
} from '@chakra-ui/react';

import CKIcon from '@components/CKIcon';
import Image from '@components/CKImage';
import CKLink from '@components/CKLink';
import avatarImg from '@images/avatar.png';

const MENU_LIST = [
  { text: '로그인', href: '/' },
  { text: '회원가입', href: '/' },
  { text: '커뮤니티', href: '/' },
  { text: '이용안내', href: '/' },
  { text: '굿즈', href: '/' },
];

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { colorMode } = useColorMode();
  return (
    <>
      {/* PC */}
      <Box d={{ base: 'none', sm: 'block' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            h="10"
            pr="1"
            pl={{ base: 1, sm: 3 }}
            py={{ base: 0, sm: 5 }}
            bg={colorMode === 'light' ? 'white' : '#4b4b4b'}
            border="2px"
            borderColor="rgba(225,225,225,1)"
            borderRadius="full"
            aria-label="Options"
            icon={
              <>
                <CKIcon name="list" size={30} />
                <Avatar ml={{ base: 1, sm: 3 }} icon={<Image w="full" h="full" src={avatarImg} alt="" />} size="sm" />
              </>
            }
            variant="outline"
          />
          <MenuList zIndex="10" bg="white">
            {MENU_LIST.map((item) => (
              <MenuItem key={`${item.text}PC`}>
                <CKLink href={item.href}>{item.text}</CKLink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

      {/* mobile */}
      <Box d={{ base: 'block', sm: 'none' }}>
        <Button
          ref={btnRef}
          _focus={{ boxShadow: 'none', backgroundColor: 'none' }}
          onClick={onOpen}
          variant="unstyled"
        >
          <CKIcon name="list" size={22} />
        </Button>
        <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="right" size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton right="0" left="3" variant="unstyled">
              <CKIcon name="chevron-left" size={22} />
            </DrawerCloseButton>
            <DrawerBody mt="12" px="0" fontSize="md" fontWeight="400">
              <List spacing={5}>
                {MENU_LIST.map((item, index) => (
                  <Fragment key={`${item.text}mobile`}>
                    <ListItem
                      sx={{ '&:not(:nth-of-type(1),:nth-of-type(2))': { fontWeight: '500' } }}
                      pos="relative"
                      px="3"
                    >
                      {item.text}
                      <CKIcon pos="absolute" top="10%" right="2" name="chevron-right" />
                    </ListItem>
                    {index === 1 && <Divider h="1.5" my="5" bg="#e1e1e1" />}
                  </Fragment>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Profile;
