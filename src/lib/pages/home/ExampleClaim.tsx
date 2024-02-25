import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import {
  Web3Button,
  useOwnedNFTs,
  useAddress,
  useContract,
  useClaimNFT,
} from '@thirdweb-dev/react';

import { editionDropAddress } from '@config/constants';
import styles from '@lib/styles/Home.module.css';

const ExampleClaim = () => {
  const address = useAddress();
  const { contract } = useContract(editionDropAddress);

  const { data, isLoading } = useOwnedNFTs(contract, address);
  const { mutateAsync: claim, isLoading: isClaiming } = useClaimNFT(contract);

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Thank you for participating in CW3: All Generations Conference!
      </Heading>

      <Text textAlign="center" mb={10}>
        You can claim a POAP NFT for attending the conference. This NFT will be
        minted to your wallet and will be available to claim until the end of
        conference.
      </Text>
      {data &&
        data?.map((nft) => (
          <Flex
            className={styles.container}
            key={nft.metadata.id}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/cw3/conference-logo.webp"
              alt="CW3 Conference"
              width={200}
              height={200}
              borderRadius="full"
              mb={4}
            />
            <Text>Congratulations, you have received the</Text>
            <Heading fontSize="lg" fontWeight="bold">
              CW3: All Generations POAP
            </Heading>

            {Number(nft.quantityOwned) === 0 && (
              <Flex mb={10}>
                <Web3Button
                  contractAddress={editionDropAddress}
                  action={() =>
                    claim({
                      tokenId: 0,
                      quantity: 1,
                    })
                  }
                >
                  Claim POAP NFT
                </Web3Button>
              </Flex>
            )}
          </Flex>
        ))}

      {address && isLoading ? <p>Loading Owned NFTs...</p> : null}

      {address && !isLoading && data && data.length === 0 ? (
        <p>{isClaiming && 'Deploying your account and claiming...'}</p>
      ) : null}
    </Flex>
  );
};

export default ExampleClaim;
