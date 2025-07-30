import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Interactive UI Accordion', () => {
  test('renders FAQ title', () => {
    render(<App />);
    const titleElement = screen.getByText(/frequently asked questions/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders theme toggle button', () => {
    render(<App />);
    const themeButton = screen.getByRole('button', { name: /switch to dark theme/i });
    expect(themeButton).toBeInTheDocument();
  });

  test('renders accordion items', () => {
    render(<App />);
    const firstQuestion = screen.getByText(/Q1\. Lorem ipsum dolor sit amet consectetur\?/);
    expect(firstQuestion).toBeInTheDocument();
  });

  test('toggles accordion item on click', () => {
    render(<App />);
    const firstButton = screen.getByRole('button', { expanded: true });
    
    // Click to collapse
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    
    // Click to expand
    fireEvent.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('toggles theme on theme button click', () => {
    render(<App />);
    const themeButton = screen.getByRole('button', { name: /switch to dark theme/i });
    
    // Click to switch to dark theme
    fireEvent.click(themeButton);
    
    // Should now show light theme option
    expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument();
  });

  test('supports keyboard navigation', () => {
    render(<App />);
    const firstButton = screen.getByRole('button', { expanded: true });
    
    // Test Enter key
    fireEvent.keyDown(firstButton, { key: 'Enter' });
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    
    // Test Space key
    fireEvent.keyDown(firstButton, { key: ' ' });
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });
});