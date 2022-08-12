import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData: boolean;
}
export function Profile ({showProfileData = true}:ProfileProps) {
    return (
    <Flex align="center">
        {showProfileData && (<Box mr="4" textAlign="right">
            <Text>David Silva</Text>
            <Text color="gray.300" fontSize="small">davidlsilva.sp@gmail.com</Text>
        </Box>)}
       
        <Avatar size="md" name="David Silva" src="https://github.com/delkz.png" />
    </Flex>)
}