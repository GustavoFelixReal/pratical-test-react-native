import React from 'react';
import styled from "styled-components/native"

const SearchInput = styled.TextInput`
  background-color: #f2f2f2;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
`;

export default function SearchField(props) {
  return (
    <SearchInput {...props} />
  )
}