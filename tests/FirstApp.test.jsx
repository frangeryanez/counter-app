import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test on file <FirstApp />', () => {
  const greeting = 'Hello World';
  
  // test('Must match the snapshot', () => {
  //   const { container } = render(<FirstApp greetings={greeting} />);
  //   expect(container).toMatchSnapshot();
  // });
  
  test('Should show the message "Hello World" and display the message in an h1', () => {
    const { getByText, getByTestId } = render(<FirstApp greetings={ greeting } />);

    expect(getByText(greeting)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(greeting);

    expect(getByTestId('test-title')).toBeTruthy();
    // toBe --> performs comparison by type and value
    expect(getByTestId('test-title').innerHTML).toBe(greeting);
    expect(getByTestId('test-title').innerHTML).toContain(greeting);
  });

  test('Should display the subtitle sent by props', () => {
    const subTitle = 'SubTitle';
    const { getAllByText, getAllByTestId } = render(
      <FirstApp 
        greetings={ greeting } 
        subTitle={ subTitle }
      />
    );

    expect(getAllByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
    expect(getAllByTestId('test-subtitle')).toBeTruthy();
    //expect(getByTestId('test-subtitle').innerHTML).toBe(subTitle);
  });
});