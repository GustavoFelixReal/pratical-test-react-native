import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const BookContainer = styled.View`
  
`;

export default function Book(props) {
  return (
    <BookContainer>
      <Text>Livro</Text>
    </BookContainer>
  )
}