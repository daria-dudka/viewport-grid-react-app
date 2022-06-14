import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from './../Sidebar';

describe('Sidebar Component', () => {
  it('renders Sidebar component', () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });

  describe('testing button', () => {
    it('renders button in Sidebar', () => {
      render(<Sidebar />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
    it('should hide the inputs if the button was clicked', () => {
      render(<Sidebar />);
      const button = screen.getByRole('button');
      const inputsWrapper = screen.getByTestId('inputs-wrapper');
      fireEvent.click(button);
      expect(inputsWrapper).not.toBeVisible();
    });
    it('should make the Sidebar thin if the button was clicked', () => {
      render(<Sidebar />);
      const button = screen.getByRole('button');
      const sidebar = screen.getByTestId('sidebar');
      fireEvent.click(button);
      expect(sidebar).toHaveStyle('width: 30px');
    });
  });

  describe('testing inputs', () => {
    it('renders 2 inputs in Sidebar', () => {
      render(<Sidebar />);
      const inputs = screen.getAllByTestId('input');
      expect(inputs.length).toBe(2);
    });
    it('should be able to change the number of rows in the input', () => {
      render(<Sidebar />);
      const rowInput = screen.getAllByTestId('input')[0];
      fireEvent.change(rowInput, { target: { value: '3' } });
      expect(rowInput.value).toBe('3');
    });
    it('should be able to change the number of columns in the input', () => {
      render(<Sidebar />);
      const columnInput = screen.getAllByTestId('input')[1];
      fireEvent.change(columnInput, { target: { value: '4' } });
      expect(columnInput.value).toBe('4');
    });
  });
});
