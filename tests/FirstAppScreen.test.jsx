import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test on file <FirstApp />', () => {
  const greeting = 'Hello World';
  const subTitle = 'SubTitle';
  
  test('Must match the snapshot', () => {
    const { container } = render(<FirstApp greetings={greeting} />);
    expect(container).toMatchSnapshot();
  });
  
  test('Should show the message "Hello World"', () => {
    render(<FirstApp greetings={ greeting } />);
    expect(screen.getByText(greeting)).toBeTruthy();
  });

  test('Should show the message in an h1', () => {
    render(<FirstApp greetings={ greeting } />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(greeting);
  });

  test('Should display the subtitle sent by props', () => {
    render(<FirstApp greetings={ greeting } subTitle={ subTitle } />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});