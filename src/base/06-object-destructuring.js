// Destructuring
// Destructuring Assignment
const person = {
  name: 'Tony',
  age: 45,
  key: 'Ironman'
};

// const { age, key, name, } = person;
// console.log(name);
// console.log(age);
// console.log(key);

const usContext = ({ key, age, range='Captain' }) => {
  // console.log(name, age, range);
  return {
    nameKey: key,
    age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  };
};

const { nameKey, age, latlng: { lat, lng } } = usContext(person);
// console.log(nameKey, age);
// console.log(lat, lng);