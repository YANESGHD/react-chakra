import { FunctionComponent } from 'react';
import { Stack, Heading } from '@chakra-ui/react';

interface BenefitProps {
  title: string
}

export const Benefit: FunctionComponent<BenefitProps> = ({ title }) => {
  return (
    <Stack width='311px' height='27px' bg='#ECEAF2' borderRadius='24px' px='17px' justify='center'>
      <Heading fontSize='16px' fontWeight='bold'  color='#7B5BE4'>{title}</Heading>
    </Stack>
  );
};
