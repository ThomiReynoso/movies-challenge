import { Grid, GridItem, Box } from '@chakra-ui/react'

const TvMovieDetails = () => {
    return (
			<Grid 
				paddingX={10}
				paddingY={10}
				height={"60vh"}
				gridTemplateColumns={"20% 80%"} gridTemplateRows={"repeat(3, 1fr)"} gap={4} 
				templateAreas={`
					"image title"
					"image extra_info"
					"image description"
				`}
			>
				<GridItem area={'image'}>
					imagen
				</GridItem>
				<GridItem area={'title'}>
					tituloo
				</GridItem>
				<GridItem area={'extra_info'}>
					infoo
				</GridItem>
				<GridItem area={'description'}>
					descrip
				</GridItem>
				
			</Grid>
    )
}

export default TvMovieDetails;