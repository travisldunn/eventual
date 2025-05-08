import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  it('renders all testimonial cards', () => {
    render(<Testimonials />);
    expect(screen.getByText(/jon w\./i)).toBeInTheDocument();
    expect(screen.getByText(/renee m\./i)).toBeInTheDocument();
    expect(screen.getByText(/marlon b\./i)).toBeInTheDocument();
  });

  it('renders the correct quotes', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Premium Lock helped my family/i)).toBeInTheDocument();
    expect(screen.getByText(/Without Premium Lock, I would have been paying/i)).toBeInTheDocument();
    expect(screen.getByText(/I didn't know this product existed/i)).toBeInTheDocument();
  });
}); 