import React from 'react';
import styled from 'styled-components';
import { Image, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
  Info,
  Row,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  RowEnd,
  Icon,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Food R Us',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['http://via.placeholder.com/150/0000FF/808080'],
    address = '123 Easy Street',
    isOpen = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <RowEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpen && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Icon source={{ uri: icon }} />
          </RowEnd>
        </Row>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
