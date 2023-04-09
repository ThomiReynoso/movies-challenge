import { Text, HStack, StackDivider, Box } from '@chakra-ui/react'
import { getYearFromDate, toHoursAndMinutes } from '../utils/datetime';
import { Rating } from './Rating';

interface ExtraInfoProps {
    voteAverage: number;
    totalVotes: number;
    runtime: number;
    releaseDate: string;
    genres: any[];
    amountSeasons: number;
}

export const ExtraInfo = ({voteAverage, totalVotes, runtime, releaseDate, genres, amountSeasons}: ExtraInfoProps ) => {
    return (
    <HStack divider={<StackDivider borderColor='gray.300' />} boxShadow={"lg"} padding={"0.5rem"} spacing={4} borderColor={"gray.300"} borderWidth={"thin"} rounded={"lg"}>
        <Rating rating={voteAverage} numReviews={totalVotes}/>
        {runtime && <Text>{toHoursAndMinutes(runtime)}</Text>}
        <Text>{getYearFromDate(releaseDate)}</Text>
        <Text>{genres.map(g => g.name).join(', ')}</Text>
        {amountSeasons && <Text>{amountSeasons} {amountSeasons === 1 ? "Season" : "Seasons"}</Text>}
    </HStack>
    )
}