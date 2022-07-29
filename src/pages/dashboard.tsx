import { Flex } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";

// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header></Header>
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar/>
      </Flex>

    </Flex>
  );
};

export default pages;
