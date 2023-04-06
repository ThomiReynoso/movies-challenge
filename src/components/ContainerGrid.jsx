import { SimpleGrid } from '@chakra-ui/react'

export const ContainerGrid = (props) => {
  return (
    <SimpleGrid
      columns={4}
      columnGap={{
        base: '4',
        md: '6',
      }}
      rowGap={{
        base: '8',
        md: '10',
      }}
      {...props}
    />
  )
}
