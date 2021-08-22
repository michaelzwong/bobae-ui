import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar', () => {
    render(<App />);
    expect(screen.getByText('Bobae')).toBeInTheDocument();
});
