import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
  const {onOpen} = useSideBarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >

      {!isWideVersion && (
        <IconButton
        aria-label="Open Navigation"
        icon={<Icon as={RiMenuLine}/>} 
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
        mr="2"
        mt="2"
        >
        </IconButton>
      )}


      <Logo/>

      {isWideVersion && <SearchBox/>}

      <Flex align="center" ml="auto">
        <NotificationNav/>
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}
