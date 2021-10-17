import React from 'react';
import styled from 'styled-components/native';
import { Foundation  } from '@expo/vector-icons'

const BookContainer = styled.View`
  margin: 20px;
  display: flex;
  align-items: center;
  font-weight: 900;
  flex-grow: 1;
`;

const BookImage = styled.Image`
  height: 550px;
  width: 331px;

`;

const BookTitle = styled.Text`

`;

const BookSubtitle = styled.Text`

`;

export default function Book({ title, author, image, onPress }) {
  console.log(title)
  return (
    <BookContainer onPress={onPress}>
      <BookImage 
        source={{
          uri: image
        }}
      />
      <BookTitle>{title}</BookTitle>
      <BookSubtitle>{author}</BookSubtitle>
      {[1,2,3,4,5].map(star => (
        <Foundation key={star} name="star" size={2} color="yellow" />
      ))}
    </BookContainer>
  )
}