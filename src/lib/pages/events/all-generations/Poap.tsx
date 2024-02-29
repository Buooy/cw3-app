import { Flex, Heading, Image, Text } from '@chakra-ui/react';

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
      <Text>Congratulations, you have received the</Text>
      <Heading fontSize="lg" fontWeight="bold">
        CW3: All Generations POAP #{poap.tokenId}
      </Heading>
    </Flex>
  );
};

export default Poap;
