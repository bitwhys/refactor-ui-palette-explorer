import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'

export type EcommerceProps = {}

const Ecommerce = ({}: EcommerceProps) => {
  return (
    <Box shadow="md" rounded="md" borderWidth={1} w="95%" bg="white">
      <Box h={2} borderTopLeftRadius="md" borderTopRightRadius="md" w="full" bg="green.500" />
      <HStack p={4} borderBottomWidth={1} pb={3}>
        <Box h={6} w={6} rounded="full" bg="gray.400" />
        <VStack align="start">
          <Box h={3} w="32" bg="gray.500" rounded="sm" />
          <HStack>
            <Box h={4} w={4} rounded="full" bg="gray.300" />
            <Box h={4} w={4} rounded="full" bg="gray.300" />
            <Box h={4} w={4} rounded="full" bg="gray.300" />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}

export default Ecommerce
