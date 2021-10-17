import React from 'react';
import styled from "styled-components/native"

const SearchInput = styled.TextInput`
  
`;

export default function SearchField(props) {
  return (
    <SearchInput {...props} />
  )
}