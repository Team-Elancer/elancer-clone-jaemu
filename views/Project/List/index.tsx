import React, { useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { DarkMode, useColorMode } from '@chakra-ui/system';

import BaseLayout from 'layouts/BaseLayout';

const ProjectList = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');

    return () => setColorMode('light');
  }, []);

  return (
    <BaseLayout>
      <DarkMode>
        <Box>asdfffffffffffff</Box>
      </DarkMode>
      asd
    </BaseLayout>
  );
};

export default ProjectList;
