import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Features from './Features';

describe('Features', () => {
  it('renders both feature cards', () => {
    render(<Features />);
    expect(screen.getByText(/how does it work/i)).toBeInTheDocument();
    expect(screen.getByText(/any limitations/i)).toBeInTheDocument();
  });

  it('renders the correct icons', () => {
    render(<Features />);
    expect(screen.getByAltText(/building icon/i)).toBeInTheDocument();
    expect(screen.getByAltText(/chart icon/i)).toBeInTheDocument();
  });

  it('renders the correct feature text', () => {
    render(<Features />);
    expect(screen.getByText(/Eventual predicts what your homeowners insurance/i)).toBeInTheDocument();
    expect(screen.getByText(/Continue paying your homeowners insurance as usual/i)).toBeInTheDocument();
  });
}); 