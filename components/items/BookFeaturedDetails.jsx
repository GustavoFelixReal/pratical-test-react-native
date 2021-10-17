import React from 'react';
import styled from 'styled-components/native';
import { Foundation  } from '@expo/vector-icons'
import { Image, View } from 'react-native';


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

export default function BookFeaturedDetails({ title, author, image }) {
  return (
    <View>
      <Image
        style={{ 
          width: '100%', 
          height: undefined, 
          aspectRatio: 331 / 550,
          borderRadius: 8
        }} 
        source={{
          uri: image
        }}
      />
      <BookTitle>{title}</BookTitle>
      <BookSubtitle>{author}</BookSubtitle>
      <BookRating>
        {[1,2,3,4,5].map(star => (
          <Foundation key={star} name="star" size={20} color="orange" />
        ))}
      </BookRating>
    </View>
  )
}