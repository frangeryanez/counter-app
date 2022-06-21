import { getHeroeById, getHeroesByOwner } from '../../src/base/08-import-export';
import heroes from '../../src/data/heroes';

describe('Test on file 08-import-export.js', () => {
  test('Should return a hero based on an id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((hero) => hero.id === id)

    expect(hero).toBe(heroData);
  });

  test('Should return undefined if hero does not exist', () => {
    const id = 10;
    const hero = getHeroeById(id);

    //expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  // Homework
  // Should return an array with DC heroes with filtered array
  test('Should return an array with DC heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((hero) => hero.owner === owner);

    expect(heroes).toEqual(heroesData);
    expect(heroes.length).toBe(3);
  });

  // Should return an array with Marvel heroes with length 2
  test('Should return an array with DC heroes', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((hero) => hero.owner === owner);

    expect(heroes).toEqual(heroesData);
    expect(heroes.length).toBe(2);
  });
});