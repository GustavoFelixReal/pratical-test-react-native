import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const CategoryContainer = styled.View`
  margin: 20px;
  height: 100px;
`;

const CategoryPressable = styled.Pressable`
  width: 74px;
  height: 74px;
  background-color: #303030;
`;

export default function Category(props) {
  return (
    <CategoryContainer>
      <CategoryPressable />
      <Text>Categoria</Text>
    </CategoryContainer>
  )
}