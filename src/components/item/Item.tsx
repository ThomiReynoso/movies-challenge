import {
  Box,
  Center,
  Heading,
  Stack,
  Image,
  chakra,
} from '@chakra-ui/react';
import { NO_IMG_URL } from '../../utils/constants';
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
    <Center py={6} minWidth={"14rem"} minHeight={"20rem"}>
      <chakra.a href={`/details/${id}`}>
        <Box sx={boxContainer}>
          <Box sx={boxInside(imageUrl ? getImageUrl("w200", imageUrl) : NO_IMG_URL )} >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={imageUrl ? getImageUrl("w200", imageUrl) : NO_IMG_URL}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500} whiteSpace={"normal"}>
              {name}
            </Heading>
            {rating &&
              <Stack direction={'row'} align={'center'}>
                <Rating rating={rating} numReviews={totalReviews} />
              </Stack>
            }
          </Stack>
        </Box>
      </chakra.a>
  </Center>
  )
}
