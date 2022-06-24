import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test on file <FirstApp />', () => {
  test('Must match the snapshot', () => {
    const greeting = 'Hello World';
    const { container } = render(<FirstApp greetings={greeting} />);

    expect(container).toMatchSnapshot();
  });
  
  test('Should show the message "Hello World" and display the message in an h1', () => {
    const greeting = 'Hello World';
    const { container, getByText } = render(<FirstApp greetings={greeting} />);
    const h1 = container.querySelector('h1');

    expect(getByText(greeting)).toBeTruthy();
    expect(h1.innerHTML).toContain(greeting);
  });
});