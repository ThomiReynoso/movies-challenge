import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  
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
              <Link href='/' fontWeight={'bold'} color={"white"}>MOVIES & TV SHOWS</Link>
            </HStack>
          </Flex>
        </Box>
    );
  }