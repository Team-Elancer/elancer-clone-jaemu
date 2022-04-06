import { Center, Box, ChakraProps } from '@chakra-ui/react';

import ArticleListFilter from '@components/ArticleList/Filter';
import HomeArticleListItem from '@components/ArticleList/HomeItem';
import CKLink from '@components/CKLink';

const FilterArticleList = (props: ChakraProps) => (
  <>
    <Box {...props}>
      <ArticleListFilter hasSelectFilter={false} />
      {['##HomeArticleListItem1', '##HomeArticleListItem2', '##HomeArticleListItem3'].map((item, index) => (
        <HomeArticleListItem className="item" key={item + Number(index)} />
      ))}

      <Center>
        <CKLink
          component="button"
          variant="outline"
          href="/"
          mt="6"
          px={{ base: 2, sm: 4 }}
          py={{ base: 2, sm: 5 }}
          fontSize={{ base: 'xs', sm: 'md' }}
          border="2px solid #ddd"
          _hover={{ borderColor: 'black' }}
          rounded="full"
        >
          더보기
        </CKLink>
      </Center>
    </Box>
  </>
);

export default FilterArticleList;
