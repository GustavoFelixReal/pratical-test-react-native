import React from 'react';
import styled from 'styled-components/native';

export const StyledSubtitle = styled.Text`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 10px;
`;

export default function Subtitle({ children }) {
  return (
    <StyledSubtitle>
      {children}
    </StyledSubtitle>
  )
}