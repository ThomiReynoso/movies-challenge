import { Flex, Heading, Button, Text } from "@chakra-ui/react"
import { ItemKind } from "../interfaces/itemKind.enum"

interface TitleButtonListProps {
	itemKind: ItemKind.Kind;
	toggleList: () => void;
}

export const TitleButtonList = ({itemKind, toggleList}: TitleButtonListProps) => {
	return (
		<Flex justifyContent={"space-between"} marginBottom={"1rem"}>
			<Heading>Popular
				<Text as={"span"} color={"green.500"}>{itemKind === ItemKind.Kind.Movies ? " Movies" : " TV Shows"}</Text>
			</Heading>
			<Button onClick={toggleList} variant={"outline"} colorScheme={'green'} rounded={'full'} px={6} _hover={{ bg: 'green.500', color: 'white'}}>
				{itemKind === ItemKind.Kind.Movies ? "List TV Shows" : "List Movies"}
			</Button>
		</Flex>
	)
}