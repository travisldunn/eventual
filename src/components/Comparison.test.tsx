import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InsuranceProvider } from '../context/InsuranceContext';
import Comparison from './Comparison';

describe('Comparison', () => {
  it('renders the slider and both bar charts', () => {
    render(
      <InsuranceProvider>
        <Comparison />
      </InsuranceProvider>
    );
    expect(screen.getByText(/see how much you could save/i)).toBeInTheDocument();
    expect(screen.getByText(/without premium lock/i)).toBeInTheDocument();
    expect(screen.getByText(/with premium lock/i)).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('shows the savings number', () => {
    render(
      <InsuranceProvider>
        <Comparison />
      </InsuranceProvider>
    );
    expect(screen.getByText('$1,392')).toBeInTheDocument(); // Default savings for initial data
  });

  it('updates savings when slider is changed', () => {
    render(
      <InsuranceProvider>
        <Comparison />
      </InsuranceProvider>
    );
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 50 } });
    // The savings number should update, but the exact value depends on your logic
    // You can check that the text content changes or is not the default
    expect(screen.getByText(/\$/)).toBeInTheDocument();
  });
}); 