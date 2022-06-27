import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Test on file <CounterApp />', () => {
  const value = 100;
  
  test('Must match the snapshot', () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });
  
  test('Should display the default value of 100', () => {
    render(<CounterApp value={ value } />);
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(String(value));
  });

  test('Must increment with the +1 button', () => {
    render(<CounterApp value={ value } />);
    // fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test('Must decrease with the -1 button', () => {
    render(<CounterApp value={ value } />);
    // fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-subtract' }));
    // screen.debug()
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test('Must reset with the button', () => {
    render(<CounterApp value={ value } />);
    // Must first increase or decrease to then perform the reset
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    fireEvent.click(screen.getByRole('button', { name: 'btn-add' }));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(value)).toBeTruthy();
  });
});