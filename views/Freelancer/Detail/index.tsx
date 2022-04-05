import React from 'react';

import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  ListItem,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { BsHeart, BsStarFill } from 'react-icons/bs';

import { H1 } from '@components/Heading';
import BaseLayout from 'layouts/BaseLayout';

const FreelancerDetail = () => (
  <BaseLayout>
    <Container px={{ base: 0, sm: 8 }}>
      <Center
        h={{ base: '240px', sm: '280px' }}
        mx={{ base: -3, sm: 0 }}
        my={{ base: 0, sm: 9 }}
        bg="#8a7fa4"
        rounded={{ base: 0, sm: 'xl' }}
      >
        <Text color="white" fontSize="4xl" fontWeight="bold">
          개발자 김*동
        </Text>
      </Center>

      <Box>
        <H1 fontSize={{ base: '20px', sm: '26px' }} mb={{ base: 1.5, sm: 2.5 }}>
          준비된 개발자 조*래입니다.
        </H1>
        <HStack
          h="5"
          mb={{ base: 2, sm: '5' }}
          divider={<StackDivider h={2} mt="1px !important" py="2" borderWidth="1px" borderColor="black" />}
          spacing="2"
        >
          <Box>개발자 조*래</Box>
          <Box>★ ★ ★ ★ ★ 5.0점</Box>
          <Box>경력 10년</Box>
        </HStack>

        <HStack
          flexWrap="wrap"
          gap={{ base: 1, sm: 2 }}
          w={{ base: '84%', sm: '100%' }}
          mb={{ base: 5, md: 10 }}
          spacing="0"
        >
          {['KOSA 보유22'].map((item, index) => (
            <Badge key={item + Number(index)} color="white" bg="#e6b222">
              {item}
            </Badge>
          ))}
        </HStack>
      </Box>

      <Box py="8" bg={{ base: '', sm: 'rgba(246, 246, 246, 1)' }} rounded="xl">
        <Flex direction={{ base: 'column', sm: 'row' }}>
          {/* left */}
          <Box
            w={{ base: '100%', sm: '50%' }}
            pr={{ base: 2, sm: 6 }}
            pl={{ base: 2, sm: 10 }}
            borderRight={{ base: 0, sm: '1px solid #333' }}
          >
            <Flex gap="10">
              <Center flexDir="column">
                <Avatar w="76px" h="76px" />
                <Text align="center" mt="2.5">
                  한*희
                </Text>
              </Center>
              <Box w="full">
                <VStack>
                  <Flex justify="space-between" w="full">
                    <Text>활동평가</Text>
                    <Flex align="center" gap={1.5}>
                      <HStack mb="0.5" spacing={1}>
                        <Icon as={BsStarFill} color="#ffbe00" />
                        <Icon as={BsStarFill} color="#ffbe00" />
                        <Icon as={BsStarFill} color="#ffbe00" />
                        <Icon as={BsStarFill} color="#ffbe00" />
                        <Icon as={BsStarFill} color="#ffbe00" />
                      </HStack>
                      <Text color="#8c8c8c">5.0</Text>
                    </Flex>
                  </Flex>
                  <Divider borderColor="black" />
                </VStack>
                <VStack mt="2.5" color="#8c8c8c" fontSize="sm" spacing="2">
                  {['##1', '##2', '##3', '##4', '##5'].map((item, index) => (
                    <Flex key={`활동${item}`} justify="space-between" w="full">
                      <Text>활동평가</Text>
                      <Flex align="center" gap={1.5}>
                        <HStack mb="0.5" spacing={1}>
                          <Icon as={BsStarFill} color="#ffbe00" />
                          <Icon as={BsStarFill} color="#ffbe00" />
                          <Icon as={BsStarFill} color="#ffbe00" />
                          <Icon as={BsStarFill} color="#ffbe00" />
                          <Icon as={BsStarFill} color="#ffbe00" />
                        </HStack>
                        <Text color="#8c8c8c">100%</Text>
                      </Flex>
                    </Flex>
                  ))}
                </VStack>
              </Box>
            </Flex>
          </Box>
          <Box
            w={{ base: 'full', sm: '50%' }}
            mt={{ base: 5, sm: '0' }}
            pr="10"
            pl={{ base: 3, sm: 6 }}
            py={{ base: 3 }}
            bg={{ base: 'rgba(246, 246, 246, 1)', sm: '' }}
            rounded="xl"
          >
            <HStack flexWrap="wrap" gap={1} w={{ base: '84%', sm: '100%' }} mb={{ base: 0, md: 10 }} spacing="0">
              {['KOSA 보유1'].map((item, index) => (
                <Badge key={item + Number(index)} color="white" bg="#333">
                  {item}
                </Badge>
              ))}
            </HStack>
          </Box>
          {/* right */}
          <Box />
        </Flex>
      </Box>

      {/* 소개 */}
      <Box>
        <H1>
          <Text fontSize="lg">소개</Text>
          개발자 한*희
        </H1>
        <Text>함께 일하고 싶은 개발자 ㅇㅇㅇ입니다.</Text>
      </Box>

      {/* 프로젝트 / 이력서 */}
      <Box mb="20">
        <Tabs colorScheme="orange">
          <TabList>
            <Tab fontSize={{ base: 'md', sm: '2xl' }} fontWeight="bold" borderBottomWidth="6px">
              프로젝트
            </Tab>
            <Tab fontSize={{ base: 'md', sm: '2xl' }} fontWeight="bold" borderBottomWidth="6px">
              이력서
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <VStack align="flex-start">
                {['##xx1', '##xx2', '##xx3', '##xx4'].map((item, index) => (
                  <Box key={item} w="full" py={{ base: 4, sm: 8 }} borderBottom="1px solid" borderBottomColor="border">
                    <Text color="text-gray">운영</Text>
                    <Text my="2"> KB국민은행 RPA 고도화 </Text>
                    <Text>
                      2021.05 ~ 2021.09 | 기여 100% | 비용 000만원 <br />
                      국밈은행 RPA 고도화 3차 프로젝트 참여 RPA 운영.
                    </Text>
                    <HStack
                      flexWrap="wrap"
                      gap={{ base: 1, sm: 2 }}
                      w={{ base: '84%', sm: '100%' }}
                      my="2.5"
                      spacing="0"
                    >
                      {['KOSA 보유', '언어: JS'].map((item, index) => (
                        <Badge key={item + Number(index)} color="white" bg="black">
                          {item}
                        </Badge>
                      ))}
                    </HStack>
                    <Text>2021.05 ~ 2021.09</Text>
                  </Box>
                ))}
              </VStack>
            </TabPanel>
            <TabPanel p="0">
              <VStack align="flex-start">
                {['##lw1', '##lw2', '##lw3'].map((item, index) => (
                  <Box key={item}>
                    <Text mt="12" mb="1">
                      학력
                    </Text>
                    <UnorderedList ml="0" styleType="none">
                      {['##zc11', '##zc12', '##zc13', '##zc14'].map((item, index) => (
                        <ListItem mb="1.5">
                          <Flex key={item}>
                            <Text w="220px" fontSize="sm">
                              ~ 2000 년 2월
                            </Text>
                            <Text>ㅇㅇㅇ</Text>
                          </Flex>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                ))}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <ButtonGroup
        justifyContent="center"
        w="full"
        mb={{ base: 32, sm: 60 }}
        size={useBreakpointValue({ base: 'sm', sm: 'lg' })}
      >
        <Button colorScheme="buttonBlack" leftIcon={<BsHeart />}>
          인재 스크랩
        </Button>
        <Button colorScheme="buttonBlack">프리랜서 공유</Button>
      </ButtonGroup>
    </Container>
  </BaseLayout>
);

export default FreelancerDetail;
