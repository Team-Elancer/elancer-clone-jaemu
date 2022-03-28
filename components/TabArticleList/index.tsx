import { Tabs, TabList, Tab, TabPanels, TabPanel, Center } from '@chakra-ui/react';

import CKLink from '@components/CKLink';

import TabArticleListItem from './TabArticleListItem';

const FilterArticleList = () => (
  <>
    <Tabs colorScheme="black" variant="unstyled">
      <TabList flexWrap="wrap" gap="3" mt={{ base: 20, sm: 36 }} mb="7">
        {['⚙️ 개발 프로젝트', '🛠 퍼블리싱', '🎨 디자인', '📝 기획', '🕹 기타 프로젝트'].map((item, index) => (
          <Tab
            key={item + Number(index)}
            border="2px solid #ccc"
            _selected={{ borderColor: 'black', background: '#E7E7E7', shadow: 'none' }}
            rounded="full"
          >
            {item}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {['##tabArticleList1', '##tabArticleList2', '##tabArticleList3', '##tabArticleList4'].map((item, index) => (
          <TabPanel key={item + Number(index)} p="0">
            {['##tabArticleListItem1', '##tabArticleListItem2', '##tabArticleListItem3'].map((item, index) => (
              <TabArticleListItem key={item + Number(index)} />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>

    <Center>
      <CKLink
        component="button"
        variant="outline"
        href="/"
        mt="6"
        px="2"
        fontSize="xs"
        border="2px solid #ddd"
        _hover={{ borderColor: 'black' }}
        rounded="full"
      >
        더보기
      </CKLink>
    </Center>
  </>
);

export default FilterArticleList;
