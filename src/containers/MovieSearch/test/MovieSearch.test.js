import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieSearch from '../MovieSearch.js';

it('renders without crashing', () => {
    const component = render(<MovieSearch />);
    expect(component).not.toBeNull();
});