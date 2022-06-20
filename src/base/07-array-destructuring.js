const characters = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = characters;
// console.log(p3);

export const returnArray = () =>{
  return ['ABC', 123];
}

const [letters, numbers] = returnArray(); 
// console.log(letters, numbers);

// Homework
// 1. value of the arr will be called nameUser
// 2. setNameUser
const usState = ( value ) => {
  //return [ value, () => { console.log('Hello World') } ];
  return [ value, () => { 'Hello World' } ];
}

const [nameUser, setNameUser] = usState('Goku');

// console.log( nameUser );
setNameUser();