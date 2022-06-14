import { render, screen } from '@testing-library/react';
import Grid from '../Grid';

describe('Grid Component', () => {
  it('renders Grid component', () => {
    render(<Grid />);
    const grid = screen.getByTestId('grid-container');
    expect(grid).toBeInTheDocument();
  });
});
