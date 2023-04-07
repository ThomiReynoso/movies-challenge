import {
  Box,
  Center,
  Heading,
  Stack,
  Image,
  chakra,
} from '@chakra-ui/react';
import { getImageUrl } from '../../utils/images';
import { Rating } from '../Rating';
import { boxContainer, boxInside } from './styles';

interface ItemProps {
  name: string;
  imageUrl: string;
  rating: number;
  totalReviews: number;
  id: number;
}

export const Item = ({name, imageUrl, rating, totalReviews, id}: ItemProps) => {
  return (
    <Center py={6}>
      <chakra.a href={`/details/${id}`}>
        <Box sx={boxContainer}>
          <Box sx={boxInside(getImageUrl("w200", imageUrl))} >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={getImageUrl("w200", imageUrl)}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Rating rating={rating} numReviews={totalReviews} />
            </Stack>
          </Stack>
        </Box>
      </chakra.a>
  </Center>
  )
}
