import { IconButton } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
import { useRouter } from 'next/navigation';
import { RiAccountCircleLine } from 'react-icons/ri';

const ProfileButton = () => {
  const address = useAddress();
  const router = useRouter();

  const goToProfile = () => {
    if (address) {
      router.push(`/profile/${address}`);
    }
  };

  return (
    <IconButton
      icon={<RiAccountCircleLine />}
      onClick={goToProfile}
      fontSize="20px"
      aria-label="Profile"
    />
  );
};

export default ProfileButton;
