import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsuranceProvider } from '../context/InsuranceContext';
import Prediction from './Prediction';

describe('Prediction', () => {
  it('renders the main heading', () => {
    render(
      <InsuranceProvider>
        <Prediction />
      </InsuranceProvider>
    );
    expect(screen.getByText(/we predict your insurance/i)).toBeInTheDocument();
  });

  it('shows the correct premium prediction for year 3', () => {
    render(
      <InsuranceProvider>
        <Prediction />
      </InsuranceProvider>
    );
    expect(screen.getByText(/\$5,763/)).toBeInTheDocument();
  });
}); 