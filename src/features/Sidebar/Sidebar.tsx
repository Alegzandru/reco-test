import { Box, Flex, Image } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { ROUTES } from '@/constants';

import { NavItem } from './NavItem';

export const Sidebar = () => {
  return (
    <Flex bg="dark" w="100vw" h="100vh" fontSize="xs">
      <Box w={40} h="full" px="1.5625rem" py="0.875rem" flexShrink={0}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          h={12}
          w="6.25rem"
          objectFit="contain"
          mb="1.25rem"
        />
        {ROUTES.map((route) => (
          <NavItem key={route.path} route={route} />
        ))}
      </Box>
      <Outlet />
    </Flex>
  );
};
