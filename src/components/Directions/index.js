import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBKKHyGkO5ZQGvgd2DR2KPO6Fd9G-5sEqc"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
