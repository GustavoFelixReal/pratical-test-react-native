import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Book from './Book';
import { Foundation  } from '@expo/vector-icons'

const BookListContainer = styled.View`
`;

export default function BookList({ books = []}) {
  return (
    <BookListContainer>
      {books.map(book => (
        <Book key={book.book_id}>
          <Text>Book</Text>
          {[1,2,3,4,5].map(star => (
            <Foundation key={star} name="star" size={2} color="yellow" />
          ))}
        </Book>
      ))}
    </BookListContainer>
  )
}