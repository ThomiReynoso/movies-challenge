import { Text, HStack, StackDivider, Box } from '@chakra-ui/react'
import { getYearFromDate, toHoursAndMinutes } from '../utils/datetime';
import { Rating } from './Rating';

interface ExtraInfoProps {
    voteAverage: number;
    runtime: number;
    releaseDate: string;
    genres: any[];
    amountSeasons: number;
}

export const ExtraInfo = ({voteAverage, runtime, releaseDate, genres, amountSeasons}: ExtraInfoProps ) => {
    return (
    <HStack divider={<StackDivider borderColor='gray.300' />} spacing={4} borderColor={"gray.300"} borderWidth={"thin"} rounded={"lg"}>
        <Rating rating={voteAverage} numReviews={12}/>
        {runtime && <Text>{toHoursAndMinutes(runtime)}</Text>}
        <Text>{getYearFromDate(releaseDate)}</Text>
        <Text>{genres.map(g => g.name).join(', ')}</Text>
        {amountSeasons && <Text>{amountSeasons} {amountSeasons === 1 ? "Season" : "Seasons"}</Text>}
    </HStack>
    )
}