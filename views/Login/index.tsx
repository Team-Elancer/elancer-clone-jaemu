import React from 'react';

import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Icon,
  Switch,
  Text,
  Container,
  Center,
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

import CKLink from '@components/CKLink';
import BaseLayout from 'layouts/BaseLayout';

const SignIn = () => {
  console.log();

  return (
    <BaseLayout>
      <Container>
        <Center w="100%" h="100%" mt={{ base: '50px', sm: '70px' }} mb={{ base: '70px', sm: '140px' }}>
          <Flex
            direction="column"
            w="446px"
            p="40px"
            bg="white"
            borderRadius="2xl"
            shadow="0px 5px 14px rgba(0, 0, 0, 0.05)"
          >
            <Text mb="22px" color="gray.700" fontSize="xl" fontWeight="bold" textAlign="center">
              로그인
            </Text>
            <HStack justify="center" mb="22px" spacing="15px">
              <CKLink
                component="button"
                href="/"
                w="75px"
                h="75px"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                _hover={{ bg: 'gray.50' }}
                bg="white"
              >
                <Icon as={FaGoogle} w="30px" h="30px" color="gray.700" />
              </CKLink>
            </HStack>
            <Text mb="22px" color="gray.400" fontSize="lg" fontWeight="bold" textAlign="center">
              or
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                아이디
              </FormLabel>
              <Input mb="24px" ms="4px" fontSize="sm" placeholder="아이디를 입력해 주세요." size="lg" type="text" />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                비밀번호
              </FormLabel>
              <Input
                mb="24px"
                ms="4px"
                fontSize="sm"
                placeholder="비밀번호를 입력해 주세요."
                size="lg"
                type="password"
              />
              <FormControl alignItems="center" d="flex" mb="24px">
                <Switch me="10px" colorScheme="primary" id="remember-login" />
                <FormLabel mb="0" fontSize="xs" fontWeight="normal" htmlFor="remember-login">
                  로그인 유지
                </FormLabel>
              </FormControl>
              <Button
                h="45"
                mb="24px"
                fontSize="xs"
                fontWeight="bold"
                colorScheme="black"
                isFullWidth
                variant="outline"
              >
                로그인
              </Button>
            </FormControl>
            <Flex align="center" justify="center" direction="column" maxW="100%" mt="0px" fontSize="sm">
              <Text color="gray.700" fontWeight="medium">
                아직 멤버가 아니십니까?
                <CKLink as="span" ms="5px" color="gray.700" fontWeight="bold" href="/">
                  회원가입
                </CKLink>
              </Text>
            </Flex>
          </Flex>
        </Center>
      </Container>
    </BaseLayout>
  );
};

export default SignIn;
