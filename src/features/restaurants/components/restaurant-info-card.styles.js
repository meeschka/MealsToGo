import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RowEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
