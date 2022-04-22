import React from "react";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

const Header = ({ user, logout, isLoggingOut }) => {
  return (
    <div>
      <Flex justifyContent="space-between" p="5" bg="purple.400" color="white">
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            Dashboard3
          </Text>
        </Center>
        <Center>
          {user && <Text> {user.getUsername()} </Text>}
          <Button
            ml="4"
            colorScheme="purple"
            onClick={logout}
            disabled={isLoggingOut}
          >
            Logout
          </Button>
        </Center>
      </Flex>
    </div>
  );
};
export default Header;
