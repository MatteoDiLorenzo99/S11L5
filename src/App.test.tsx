import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  
  // Aggiungi il tipo per 'linkElement' se necessario (per TypeScript non è obbligatorio, ma può essere utile)
  const linkElement = screen.getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});
