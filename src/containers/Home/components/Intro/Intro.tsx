import { FunctionComponent } from 'react';
import { FmdGoodOutlined } from '@mui/icons-material';
import { Stack, HStack, Heading, Text } from '@chakra-ui/react';
import { useLender } from '../../../../contexts';

export const Intro: FunctionComponent = () => {
  const { isLoading, lender } = useLender();

  return (
    <Stack
      w='100%'
      border='2.25px solid #868686'
      borderRadius='12px'
      boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
    >
      {isLoading && (
        <Stack width='432px' height='200px' justify='center' align='center'>
          <Text>Loading...</Text>
        </Stack>
      )}
      {!isLoading && (
        <>
          <Stack py='18px' px='24px'>
            <Heading fontSize={[16, 20, 24]} fontWeight='700' pb='10px'>
              {lender?.name}
            </Heading>
            <Text fontSize='16px' fontWeight='semibold'>
              By {lender?.lendistry}
            </Text>

            <HStack>
              <FmdGoodOutlined />
              <Text fontSize='16px' fontWeight='semibold'>
                {lender?.location}
              </Text>
            </HStack>

            <Text fontSize='14px' fontWeight='semibold'>
              Get Funded in <b>{lender?.fundedIn}.</b>
            </Text>
          </Stack>

          <Stack borderTop='2.25px solid #868686' py='15px' px='24px'>
            <Text fontSize='22px' fontWeight='bold' color='#7B5BE4'>
              ${lender?.fundMinimum} - ${lender?.fundMaximum}
            </Text>
          </Stack>
        </>
      )}
    </Stack>
  );
};
