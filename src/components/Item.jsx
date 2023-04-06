import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  chakra,
} from '@chakra-ui/react';
import { Rating } from './Rating'

export const Item = (props) => {
  const { product } = props
  const { name, imageUrl, rating, id } = product
  return (
    <Center py={12}>
    <chakra.a href={`/details/${id}`}>
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      bg={"white"}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      _hover={{
        transform: 'translateY(10px)',
        boxShadow: 'lg',
      }}
      >
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${imageUrl})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}>
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'contain'}
          src={imageUrl}
        />
      </Box>
      <Stack pt={10} align={'center'}>
        <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
          {name}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Rating defaultValue={rating} size="sm" />
        </Stack>
      </Stack>
    </Box>
    </chakra.a>
  </Center>
  )
}
