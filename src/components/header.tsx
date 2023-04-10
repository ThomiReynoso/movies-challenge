import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Text,
    Button,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { Link } from "react-router-dom";

  export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
        <Box bg={"black"} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Link to='/'> <Text fontWeight={'bold'} color={"white"}>MOVIES & TV SHOWS</Text></Link>
              <Link to='/'> <Button variant={"outline"} size={"sm"} color={"white"} _hover={{ bg:"white", color: "black" }}>Home</Button></Link>
            </HStack>
          </Flex>
        </Box>
    );
  }