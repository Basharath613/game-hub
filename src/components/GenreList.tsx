import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import GenreCardContainer from './GenreCardContainer';
import GenreCardSkeleton from './GenreCardSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const {data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    //if (isLoading) return<Spinner />;
    if (error) return null;

  return (
    <List>
        {isLoading && skeletons.map(skeleton => 
        <GenreCardContainer key={skeleton}>
            <GenreCardSkeleton  />
        </GenreCardContainer>
        )}
        {data.map(genre => 
        <ListItem key={genre.id} paddingY='6px'>
            <HStack>
                <Image boxSize='40px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal' } onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList