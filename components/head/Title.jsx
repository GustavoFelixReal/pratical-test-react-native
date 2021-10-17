import React from 'react';
import styled from 'styled-components/native';

export const StyledTitle = styled.Text`
  font-weight: 900;
  font-size: 24px;
`;

export default function Title({ children }) {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}