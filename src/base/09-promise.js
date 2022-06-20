import { getHeroeById } from './08-import-export';

// const promise = new Promise( (resolve, reject) => {
//     setTimeout(() =>  {
//         // Homework
//         // importen el 
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject('Hero could not be found');
//     }, 2000)

// });

// promise.then((hero) => {
//     console.log('hero', hero)
// })
// .catch( err => console.warn(err));

export const getHeroeByIdAsync = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () =>  {
      // Homework
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('Hero could not be found');
      }
    }, 1000 );
  });
};

/*
getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);
*/