import React from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import Category from './Category';

const CategoryListContainer = styled.View`
  height: 150px;
`;

export default function CategoryList({ categories, id, navigation }) {
  return (
    <CategoryListContainer>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={item => String(item.list_name_encoded) + id}
        renderItem={({ item }) => (
          <Category 
            categoryName={String(item.display_name)}
            onPress={() => navigation.push('Books', { 
              categoryName: item.list_name_encoded,
              categoryTitle: item.display_name,
            })}
          />
        )}
      />
    </CategoryListContainer>
    
  )
}