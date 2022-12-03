import { FunctionComponent } from 'react';
import { FmdGoodOutlined } from '@mui/icons-material';
import { Stack, HStack, Text } from '@chakra-ui/react';

export const Intro: FunctionComponent = () => {
  return (
    <Stack
      width='100%'
      border='2.25px solid #868686'
      borderRadius='12px'
      boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
    >
      <Stack py='18px' px='24px'>
        <Text fontSize='24px' fontWeight='700' pb='10px'>
          Revenue Based Financing
        </Text>
        <Text fontSize='16px' fontWeight='600'>
          By Lendistry
        </Text>

        <HStack>
          <FmdGoodOutlined />
          <Text fontSize='16px' fontWeight='600'>
            Location
          </Text>
        </HStack>

        <Text fontSize='14px' fontWeight='600'>
          Get funded in <b>12 days.</b>
        </Text>
      </Stack>

      <Stack borderTop='2.25px solid #868686' py='15px' px='24px'>
        <Text fontSize='22px' fontWeight='700' color='#7B5BE4'>
          $10,000 - $1,000,000
        </Text>
      </Stack>
    </Stack>
  );
};
