import { getHeroeByIdAsync } from '../../src/base/09-promise';
import heroes from '../../src/data/heroes';

describe('Test on file 09-promise.js', () => {
  test('getHeroeByIdAsync should return a hero', (done) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBe(heroes[0]);
        done();
      });
  });

  test('getHeroeByIdAsync should return an error message', (done) => {
    const id = 10;

    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe('Hero could not be found');
        done();
      });
  });
});