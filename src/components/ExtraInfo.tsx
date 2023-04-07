import { Text, HStack, StackDivider, Box } from '@chakra-ui/react'
import { getYearFromDate, toHoursAndMinutes } from '../utils/datetime';
import { Rating } from './Rating';

interface ExtraInfoProps {
    voteAverage: number;
    runtime: number;
    releaseDate: string;
    genres: any[];
}

export const ExtraInfo = ({voteAverage, runtime, releaseDate, genres}: ExtraInfoProps ) => {
    return (
    <HStack divider={<StackDivider borderColor='gray.300' />} spacing={4} borderColor={"gray.300"} borderWidth={"thin"} rounded={"lg"}>
        <Rating rating={voteAverage} numReviews={12}/>
        <Text>{toHoursAndMinutes(runtime)}</Text>
        <Text>{getYearFromDate(releaseDate)}</Text> {/*first_air_date para tv shows*/}
        <Text>{genres.map(g => g.name).join(', ')}</Text>
    </HStack>
    )
}