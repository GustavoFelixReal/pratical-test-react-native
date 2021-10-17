import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import BookItem from './BookItem';


const BookListContainer = styled.View`
  width: 100%;
`;

export default function BookList({ books, navigation }) {
  return (
    <BookListContainer>
      <FlatList
        data={books}
        keyExtractor={item => item.title + item.author}
        renderItem={({ item }) => (
          <BookItem 
            title={item.title}
            author={item.author}
            image={item.book_image}
            onPress={() => navigation.push('BookDescription', { 
              book: item
            })}
          />
        )}
      />
    </BookListContainer>
  )
}