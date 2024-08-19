import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const GenreCardContainer = ( {children}: Props) => {
  return (
    <Box borderRadius={2} boxSize='50px' paddingY={5} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GenreCardContainer
