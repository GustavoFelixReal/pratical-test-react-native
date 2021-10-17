import React from 'react';
import styled from 'styled-components/native';
import { Foundation  } from '@expo/vector-icons'
import { Image } from 'react-native';
import BookFeaturedDetails from './BookFeaturedDetails';

const BookContainer = styled.Pressable`
  flex-grow: 1;
  margin: 4px;
  padding: 1px;
`;

const BookTitle = styled.Text`
  margin-top: 20px;
  font-size: 24px;
`;

const BookSubtitle = styled.Text`
  font-size: 18px;
`;

const BookRating = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export default function BookItem({ title, author, image, onPress }) {
  return (
    <BookContainer onPress={onPress}>
      <BookFeaturedDetails 
        title={title}
        author={author}
        image={image}
      />
    </BookContainer>
  )
}