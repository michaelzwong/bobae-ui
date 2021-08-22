import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders learn react link', () => {
    render(<Navbar />);
    expect(screen.getByText('Bobae')).toBeInTheDocument();
});