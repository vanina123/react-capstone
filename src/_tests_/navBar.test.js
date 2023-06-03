import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/navBar';

describe('NavBar', () => {
  it('should render the navbar with the correct text', () => {
    render(<NavBar />);

    expect(screen.getByText('Star Wars Characters')).toBeTruthy();
  });
});
