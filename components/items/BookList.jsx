import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Book from './Book';

const BookListContainer = styled.View`
`;

export default function BookList({ books = []}) {
  return (
    <BookListContainer>
      {books.map(book => (
        <Book key={book.book_id}>
          <Text>Book</Text>
        </Book>
      ))}
    </BookListContainer>
  )
}