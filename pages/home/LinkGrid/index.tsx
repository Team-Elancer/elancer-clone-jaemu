import React from 'react';

import { Grid, GridItem, Button, Center, Text } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';

import CKImage from '@components/CKImage';
import CKLink from '@components/CKLink';
import aspImg from '@images/icon-main-asp.png';
import designImg from '@images/icon-main-design.png';
import javaImg from '@images/icon-main-java.png';
import mobileImg from '@images/icon-main-mobile.png';
import phpImg from '@images/icon-main-php.png';
import planImg from '@images/icon-main-plan.png';
import pubImg from '@images/icon-main-pub.png';

const LinkGrid = () => (
  <Grid
    gap={5}
    rowGap={{ base: 10, sm: 5 }}
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(4, minmax(0, 1fr))"
    pb="6"
  >
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="purple"
          size="lg"
        >
          <CKImage src={javaImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            JAVA
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent={{ base: 'center', sm: 'space-between' }}
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="rosyBrown"
          size="lg"
        >
          <CKImage src={aspImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            ASP.NET
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="darkOrange"
          size="lg"
        >
          <CKImage src={phpImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            PHP
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent={{ base: 'center', sm: 'space-between' }}
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="orange"
          size="lg"
        >
          <CKImage src={mobileImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
            whiteSpace="normal"
          >
            Ios・Android
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="purple"
          size="lg"
        >
          <CKImage src={pubImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            퍼블리싱
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="rosyBrown"
          size="lg"
        >
          <CKImage src={designImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            디자인
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="darkOrange"
          size="lg"
        >
          <CKImage src={planImg} w={9} h={9} mx={{ base: 'auto', sm: '0' }} mt={{ base: 4, sm: 0 }} />
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            기획
          </Text>
        </Button>
      </CKLink>
    </GridItem>
    <GridItem>
      <CKLink href="/">
        <Button
          justifyContent="space-between"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          w="100%"
          h="70px"
          px="4"
          colorScheme="orange"
          size="lg"
        >
          <Center w={9} h={9} mt={{ base: 4, sm: 0 }} ml={2} mx={{ base: 'auto', sm: '0' }}>
            <BsThreeDots />
          </Center>
          <Text
            align={{ base: 'center', sm: 'right' }}
            w={{ base: 'calc(100% + 16px)', sm: 'auto' }}
            mt={{ base: '26px', sm: '0' }}
            color={{ base: 'black', sm: 'white' }}
            fontSize={{ base: '12px', sm: '18px' }}
          >
            기타
          </Text>
        </Button>
      </CKLink>
    </GridItem>
  </Grid>
);

export default LinkGrid;
