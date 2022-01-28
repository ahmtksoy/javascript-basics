const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer == 'Honda');
};

const averageAge = people => {
  const ages = people.map(person => person.age);
  const sum = ages.reduce((a, b) => a + b, 0);
  return sum / ages.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name,
    age,
    introduce: name => {return `Hi ${name}, my name is ${talkingPerson.name} and I am ${talkingPerson.age}!` 
  }, 
}; return talkingPerson 
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
