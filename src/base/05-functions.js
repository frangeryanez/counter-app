// Functions in JS
// const greeting = function( nameUser ) {
//     return `Hello, ${nameUser}`;
// }

const greeting = (nameUser) => {
  return `Hello, ${nameUser}`;
};
  
const greeting3 = (nameUser) => `Hello, ${nameUser}`;
const greeting4 = () => `Hello World`;

// console.log(greeting('Goku'))
// console.log(greeting2('Vegeta'));
// console.log(greeting3('Goku'));
// console.log(greeting4());

export const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});

const user = getUser();
// console.log(user);

// Homework
export const getUserActive = (nameUser) =>({
  uid: 'ABC567',
  username: nameUser
})

const userActive = getUserActive('Fernando');
// console.log(userActive);