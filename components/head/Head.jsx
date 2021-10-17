import React from 'react';
import styled from 'styled-components/native';
import Title from './Title';

const HeadContainer = styled.View`
  width: 100%;
  height: 80px;
  padding: 50px 2px;
`;

export default function Head({ title, navigation }) {
  return (
    <HeadContainer>
      <Title>
        {title}
      </Title>
    </HeadContainer>
  )
}