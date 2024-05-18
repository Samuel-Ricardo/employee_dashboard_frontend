import { Box } from '@chakra-ui/react';

export const NavBarItem = async ({ children }: { children: any }) => {
  return (
    <Box backgroundColor="white" padding={2} borderRadius="0.75rem">
      {children}
    </Box>
  );
};
