import { getGreeting } from '../../src/base/02-template-string';

describe('Test on file 02-template-string.js', () => {
  test('getGreeting should return Hello Fernando', () => { 
    // 1 - Initialization
    const nameUser = 'Fernando';

    // 2 - Stimulus
    const greeting = getGreeting(nameUser);

    // 3 - Observe the behavior
    expect(greeting).toBe(`Hello ${nameUser}`);
  });

  // Homework 
  // getGreeting should return Hello Carlos if no argument is given
  test('getGreeting should return Hello Carlos', () => { 
    // 1 - Initialization
    const nameUser = 'Carlos';

    // 2 - Stimulus
    const greeting = getGreeting();

    // 3 - Observe the behavior
    expect(greeting).toBe(`Hello ${nameUser}`);
  });
});