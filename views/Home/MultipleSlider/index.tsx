import { useRef } from 'react';

import {
  Box,
  useColorModeValue,
  Flex,
  Badge,
  HStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  ButtonGroup,
  Center,
  Button,
} from '@chakra-ui/react';
import { Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import CKIcon from '@components/CKIcon';
import Image from '@components/CKImage';
import CKLink from '@components/CKLink';
import CKSwiper from '@components/CKSwiper';
import companyLogoNoneImg from '@images/company-logo-none.png';
import 'swiper/css/navigation';
import 'swiper/css';

const BADGE_STYLE = {
  HIGHLIGHT: 'highlight',
  OUTLINE: 'outline',
} as const;

type BadgeStyle = typeof BADGE_STYLE[keyof typeof BADGE_STYLE];

interface BadgeType {
  styleType?: BadgeStyle;
  text: string;
}

interface MultipleSliderProps {
  moreLink?: string;
  badgeList?: BadgeType[];
}

const MultipleSlider = ({ moreLink, badgeList }: MultipleSliderProps) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box>
      <ButtonGroup d="block" mt="-42px" mb={{ base: 8, sm: 10 }} textAlign="right">
        <Button ref={navigationPrevRef}>
          <CKIcon name="chevron-left" />
        </Button>
        <Button ref={navigationNextRef}>
          <CKIcon name="chevron-right" />
        </Button>
      </ButtonGroup>
      <CKSwiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 'auto',
          },
          768: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          /* eslint no-param-reassign: "error" */
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.update();
        }}
      >
        {['##ac1', '##ac2', '##ac3', '##ac4'].map((item, index) => (
          <SwiperSlide style={{ maxWidth: '260px' }} key={item + Number(index)}>
            <Box bg={useColorModeValue('white', 'gray.900')}>
              <Flex pos="relative" w="full" h={{ base: 28, sm: '168px' }} bg="black" borderTopRadius="xl">
                <Image src={companyLogoNoneImg} d="flex" alignItems="center" py="2" w="86%" mx="auto" />
              </Flex>
              <Box p="4" bg="blackAlpha.800" borderBottomRadius="xl">
                <HStack wrap="wrap" mb={{ base: 1, sm: 2 }} shouldWrapChildren>
                  {badgeList?.map((item) => {
                    if (item.styleType === BADGE_STYLE.HIGHLIGHT) {
                      return (
                        <Badge key={item.text} mb="2" colorScheme="red" variant="outline">
                          ??????14??????
                        </Badge>
                      );
                    }
                    if (item.styleType === BADGE_STYLE.OUTLINE) {
                      return (
                        <Badge key={item.text} mb="2" color="#fff" variant="outline">
                          Javascript
                        </Badge>
                      );
                    }
                    return (
                      <Badge key={item.text} mb="2" color="#fff" bg="#707070">
                        Javascript
                      </Badge>
                    );
                  })}
                </HStack>
                <Text mb="5" color="white" fontSize={{ base: 'xs', sm: 'md' }} noOfLines={2}>
                  [??????~??????/??????/3??????/????????????] ??????????????? GA(General Agent) ???????????? EDA_UI ??????
                </Text>
                <HStack>
                  <Breadcrumb
                    overflow="hidden"
                    color="#a5a5a5"
                    fontSize="sm"
                    fontWeight="400"
                    whiteSpace="nowrap"
                    spacing="1"
                  >
                    <BreadcrumbItem>
                      <Text>??????</Text>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Text>4??????</Text>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Text>??????</Text>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Text>2,310 ??????</Text>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </HStack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </CKSwiper>
      {moreLink && (
        <Center>
          <CKLink
            component="button"
            variant="outline"
            href="/"
            mt="10"
            px={{ base: 2, sm: 4 }}
            py={{ base: 2, sm: 5 }}
            fontSize={{ base: 'xs', sm: 'md' }}
            border="2px solid #ddd"
            _hover={{ borderColor: 'black' }}
            rounded="full"
          >
            ?????????
          </CKLink>
        </Center>
      )}
    </Box>
  );
};

MultipleSlider.defaultProps = {
  moreLink: '',
  badgeList: [],
};

export default MultipleSlider;
