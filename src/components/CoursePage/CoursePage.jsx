import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from './../../assets/videos/intro.mp4';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLectures } from '../../redux/actions/courseAction';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../Layout/Loader/Loader';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  console.log(user);
  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }
  console.log('loading', loading);
  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              width={'100%'}
              controls
              src={lectures[lectureNumber].video.url}
              controlsList='nodownload  noremoteplayback'
              disablePictureInPicture
              disableRemotePlayback
            ></video>
            <Heading m={'4'}>{`#${lectureNumber + 1} ${
              lectures[lectureNumber].title
            }`}</Heading>
            <Heading m={'4'}>Description</Heading>
            <Text>{lectures[lectureNumber].description}</Text>
          </Box>
          <VStack>
            {lectures.map((item, index) => {
              return (
                <button
                  onClick={e => setLectureNumber(index)}
                  key={item._id}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    textAlign: 'center',
                    margin: '0',
                    borderBottom: '1px solid rgba(0,0,0,2)',
                  }}
                >
                  <Text noOfLines={1}>{`#${index + 1} ${item.title}`}</Text>
                </button>
              );
            })}
          </VStack>
        </>
      ) : (
        <Heading children='No Lectures' />
      )}
    </Grid>
  );
};

export default CoursePage;
