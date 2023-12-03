import {
  Container,
  Heading,
  VStack,
  Box,
  FormLabel,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <Container h='90vh'>
      <VStack h={"100%"} justifyContent={"center"} spacing={"16"}>
        <Heading children='Contact Us' />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor='name' children={'Name'} />
            <Input
              required
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Your Name'
              type='text'
              focusBorderColor='yellow.500'
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor='email' children={'Email Address'} />
            <Input
              required
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='abc@gmail.com'
              type='email'
              focusBorderColor='yellow.500'
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor='message' children={'Message'} />
            <Textarea
              required
              id='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder='Your Message'
              focusBorderColor='yellow.500'
            />
          </Box>
          <Button my={'4'} colorScheme='yellow' type='submit'>
            Send Mail
          </Button>
          <Box my='4'>
            Request for a Course?{' '}
            <Link to={'/request'}>
              <Button colorScheme='yellow' variant={'link'}>
                Click
              </Button>
            </Link>{' '}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default ContactUs;
