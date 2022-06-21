import { getUser, getUserActive } from '../../src/base/05-functions';

describe('Test on file 05-functions.js', () => {
  test('getUser should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    //expect(user).toEqual(userTest);
    expect(user).toStrictEqual(userTest);
  });

  // Homework 
  // getUserActive should return an object
  test('getUserActive should return an object', () => { 
    // 1 - Initialization
    const nameTest = 'Carlos';
    const userTest = {
      uid: 'ABC567',
      username: nameTest
    };

    // 2 - Stimulus
    const user = getUserActive(nameTest);

    // 3 - Observe the behavior
    expect(user).toEqual(userTest);
  });
});