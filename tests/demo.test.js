// https://jestjs.io/

describe('Test on file demo.test.js', () => {
  test('The strings must be equal', () => { 
    // 1 - Initialization
    const message = 'Hello World';
  
    // 2 - Stimulus
    const message2 = message.trim();
    // const message2 = `Hello World`;
  
    // 3 - Observe the behavior
    expect(message).toBe(message2);
  });
});