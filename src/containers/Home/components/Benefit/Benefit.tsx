import { FunctionComponent } from 'react';
import { Stack, Text } from '@chakra-ui/react';

export const Benefit: FunctionComponent = () => {
  return (
    <Stack w='311px' h='27px' bg='#ECEAF2' borderRadius='24px' px='17px' justifyContent='center'>
      <Text fontSize='16px' fontWeight='700' color='#7B5BE4'>Lender Benefit</Text>
    </Stack>
  );
};
