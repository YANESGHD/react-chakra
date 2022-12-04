import { FunctionComponent } from 'react';
import { Button, Stack, HStack, Heading, Text } from '@chakra-ui/react';
import { Benefit } from '..';
import { useLender } from '../../../../contexts';

export const About: FunctionComponent = () => {
  const { isLoading, lender } = useLender();

  return (
    <>
      {isLoading && (
        <Stack width='432px' height='350px' justify='center' align='center'>
          <Text>Loading...</Text>
        </Stack>
      )}
      {!isLoading && (
        <Stack px='24px' py='35px'>
          <HStack justify='space-between' align='center' pb='15px'>
            <Heading fontSize='20px' fontWeight='bold'>
              About the Lender
            </Heading>
            <Button variant='primary'>
              Learn More
            </Button>
          </HStack>

          <Text fontSize='16px' fontWeight='normal' pb='20px'>
            {lender?.about?.description}
          </Text>

          <Stack spacing={5} pt='10px'>
            {lender?.about?.benefits?.map((benefit) => (
              <Benefit key={benefit.title} title={benefit.title} />
            ))}
          </Stack>
        </Stack>
      )}
    </>
  );
};
