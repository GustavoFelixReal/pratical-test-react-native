import React from 'react';
import { Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Book from './Book';


const BookListContainer = styled.View`
  width: 100%;
`;

export default function BookList({ books }) {
  return (
    <BookListContainer>
      <FlatList
        data={books}
        keyExtractor={item => item.title + item.author}
        renderItem={({ item }) => (
          <Book 
            title={item.title}
            author={item.author}
            image={item.book_image}
            onPress={() => console.log('teste')}
          />
        )}
      />
    </BookListContainer>
  )
}