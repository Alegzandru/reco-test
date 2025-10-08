import { Box, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const NavItem = ({ route }: { route: { name: string; path: string } }) => {
  return (
    <Link asChild>
      <StyledNavLink to={route.path}>
        {({ isActive }) => (
          <>
            <Box h="1.75rem" w="2.25px" bg={isActive ? 'accent.bright' : 'transparent'} />
            <Text color="white">{route.name.toUpperCase()}</Text>
          </>
        )}
      </StyledNavLink>
    </Link>
  );
};
