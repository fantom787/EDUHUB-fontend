import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profileAction';
import { loadUser } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };
  const { loading } = useSelector(state => state.profile);
  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          Update profile
        </Heading>
        <VStack spacing={'8'}>
          <Input
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Name'
            type='text'
            focusBorderColor='yellow.500'
          />
          <Input
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            focusBorderColor='yellow.500'
          />
          <Button
            w={'full'}
            colorScheme='yellow'
            type='submit'
            isLoading={loading}
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
