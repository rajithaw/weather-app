import { render, screen } from '@testing-library/react';
import VisibilityWidget from '../components/weather/VisibilityWidget';

test('renders visibility data', () => {
  render(<VisibilityWidget visibility={3150} clouds={14} />);
  
  const visibilityElement = screen.getByText(/3150/);
  const cloudsElement = screen.getByText(/14%/);

  expect(visibilityElement).toBeInTheDocument();
  expect(cloudsElement).toBeInTheDocument();
});
