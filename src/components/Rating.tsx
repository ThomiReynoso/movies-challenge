import { Box, VStack, HStack } from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';


interface RatingProps {
  rating: number;
  numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
  return (
    <VStack display="flex" alignItems="center">
      <Box>
        <HStack>
          {Array(5)
            .fill('')
            .map((_, i) => {
              const roundedRating = Math.round(rating) / 2;
              if (roundedRating - i >= 1) {
                return (
                  <BsStarFill
                    key={i}
                    style={{ marginLeft: '1' }}
                    color={i < rating ? 'teal.500' : 'gray.300'}
                  />
                );
              }
              if (roundedRating - i === 0.5) {
                return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
              }
              return <BsStar key={i} style={{ marginLeft: '1' }} />;
            })}
        </HStack> 
      </Box>
      <Box ml="2" color="gray.600" fontSize={"sm"}>
        {rating} avg of {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </VStack>
  );
}
