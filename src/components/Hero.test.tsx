import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsuranceProvider } from '../context/InsuranceContext';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the address and monthly cost', () => {
    render(
      <InsuranceProvider>
        <Hero />
      </InsuranceProvider>
    );
    expect(screen.getByText(/123 Appleseed Drive, New York, NY/)).toBeInTheDocument();
    expect(screen.getByText('$18.12')).toBeInTheDocument();
  });

  it('shows the dynamic savings amount', () => {
    render(
      <InsuranceProvider>
        <Hero />
      </InsuranceProvider>
    );
    expect(screen.getByText(/you could save/i)).toBeInTheDocument();
  });

  it('renders the Next button and is accessible', () => {
    render(
      <InsuranceProvider>
        <Hero />
      </InsuranceProvider>
    );
    const button = screen.getByRole('button', { name: /next/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
}); 