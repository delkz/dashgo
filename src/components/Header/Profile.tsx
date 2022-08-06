import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile () {
    return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>David Silva</Text>
            <Text color="gray.300" fontSize="small">davidlsilva.sp@gmail.com</Text>
        </Box>
        <Avatar size="md" name="David Silva" src="https://github.com/delkz.png" />
    </Flex>)
}