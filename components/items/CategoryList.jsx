import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Category from './Category';

const CategoryListContainer = styled.FlatList`
`;

export default function CategoryList({ categories = [] }) {
  return (
    <CategoryListContainer
      horizontal={true}
      data={categories}
      keyExtractor={category => category.list_id}
      renderItem={category => (
        <Category>
          <Text>Categoria</Text>
        </Category>
      )}
    />
  )
}