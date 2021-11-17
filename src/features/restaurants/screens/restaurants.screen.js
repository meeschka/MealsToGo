import React from 'react';
import styled from 'styled-components';
import { StatusBar, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const ScreenSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[4]};
`;
const CardView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => (
  <ScreenSafeAreaView>
    <SearchView>
      <Searchbar />
    </SearchView>
    <CardView>
      <RestaurantInfoCard />
    </CardView>
  </ScreenSafeAreaView>
);
