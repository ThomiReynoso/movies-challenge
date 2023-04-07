import {
  Box,
  Center,
  Heading,
  Stack,
  Image,
  chakra,
} from '@chakra-ui/react';
import { Rating } from '../Rating';
import { boxContainer, boxInside } from './styles';

export const Item = ({name, imageUrl, rating, id}) => {
  return (
    <Center py={6}>
    <chakra.a href={`/details/${id}`}>
    <Box sx={boxContainer}>
      <Box sx={boxInside(imageUrl)} >
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
          <Rating rating={rating} numReviews={12} num size="sm" />
        </Stack>
      </Stack>
    </Box>
    </chakra.a>
  </Center>
  )
}
