import { Alert, AlertIcon, Flex, Heading, Image, Text } from '@chakra-ui/react';

export type PoapData = {
  event: {
    id: number;
    name: string;
    image_url: string;
  };
  tokenId: string;
  statusCode?: number;
};

const Poap = ({ poap }: { poap: PoapData }) => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image
        src={poap.event.image_url}
        alt="CW3 Conference"
        width={200}
        height={200}
        borderRadius="full"
        mb={4}
      />

      <Alert
        status="success"
        display="flex"
        flexDirection="column"
        textAlign="center"
        px={{
          base: 5,
          md: 10,
        }}
        py={5}
      >
        <Text display="flex" flexDirection="row">
          Congratulations, you have received the
        </Text>
        <Heading fontSize="lg" fontWeight="bold">
          CW3: All Generations POAP #{poap.tokenId}
        </Heading>
      </Alert>
    </Flex>
  );
};

export default Poap;
