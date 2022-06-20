const nameUser = 'Franger';
const lastNameUser = 'Yanez';

// const fullNameUser = nameUser + ' ' + lastNameUser;
const fullNameUser = `${nameUser} ${lastNameUser}`;
//console.log(fullNameUser);

export function getGreeting(nameUser='Carlos') {
  return 'Hello ' + nameUser;
};

//console.log(`This is a text: ${getGreeting(nameUser)}`);