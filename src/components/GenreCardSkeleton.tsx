import { Card, CardBody, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GenreCardSkeleton = () => {
  return (
    <Card>
      <HStack>
        <Skeleton />
          <CardBody>
              <SkeletonText />
          </CardBody>
      </HStack>
    </Card>
  )
}

export default GenreCardSkeleton