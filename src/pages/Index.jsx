import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaRoad, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.700">
          Welcome to Road Explorer
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">
          Discover the most scenic and adventurous roads around the world.
        </Text>
        <Box width="100%" borderRadius="md" overflow="hidden">
          <Image src="https://source.unsplash.com/featured/?road" alt="Scenic Road" objectFit="cover" width="100%" height="300px" />
        </Box>
        <Flex width="100%" justifyContent="space-around">
          <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="solid">
            Learn More
          </Button>
          <Button leftIcon={<FaPhone />} colorScheme="teal" variant="outline">
            Contact Us
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;