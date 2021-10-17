import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const CategoryContainer = styled.View`
  margin: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;

const CategoryPressable = styled.Pressable`
  width: 200px;
  height: 100px;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

export default function Category({ categoryName, onPress}) {
  return (
    <CategoryContainer>
      <CategoryPressable onPress={onPress}/>
      <Text>{categoryName}</Text>
    </CategoryContainer>
  )
}