import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../__fixtures__/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render(
    <Restaurants />,
  );

  it('renders Restaurants', () => {
    const { container } = renderRestaurants();

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
