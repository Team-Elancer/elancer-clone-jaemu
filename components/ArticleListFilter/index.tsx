import React from 'react';

import { HStack, Select, ButtonGroup, Button } from '@chakra-ui/react';

const ArticleListFilter = () => (
  <>
    <HStack flexWrap="wrap" gap="2" mb={4}>
      <Select maxW={36} placeholder="지역">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select maxW={36} placeholder="근무 위치">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select maxW={36} placeholder="지역">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select maxW={36} placeholder="관련기술">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HStack>

    <ButtonGroup flexWrap="wrap" gap="1.5" mb="8">
      {['⚙️ 개발 프로젝트', '🛠 퍼블리싱', '🎨 디자인', '📝 기획', '🕹 기타 프로젝트'].map((item, index) => (
        <Button key={item + Number(index)} top="0" h="12" border="2px solid #ccc" rounded="full" variant="outline">
          {item}
        </Button>
      ))}
    </ButtonGroup>
  </>
);

export default ArticleListFilter;
