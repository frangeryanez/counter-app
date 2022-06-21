import { getImage } from '../../src/base/11-async-await';

describe('Test on file 11-async-await.js', () => {
  test('getImage should return an url of image', async() => {
    const url = await getImage();

    expect(typeof url).toBe('string');
    expect(url.includes('https://')).toBe(true);
  });
});