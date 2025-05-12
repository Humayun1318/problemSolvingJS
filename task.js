const getNonFemaleNames = (arrayOfObjects)=>{
    return arrayOfObjects.filter(obj=> obj.gender !== 'female').map(obj=> obj.name);
}
const getBookTitles = arrayOfObjects =>arrayOfObjects.map(obj=>obj.title);

const square = n => n * n;
const double = n => n * 2;
const addFive = n => n + 5;

function processNumber(n) {
  return addFive(double(square(n)));
}

function getSortedCarsAscendingByYear (carsArrayOfObjects) {
    return carsArrayOfObjects.sort((a,b)=> a.year - b.year);
}

const addEvens = num => num.reduce((acc, current) => {
  if (current % 2 === 0) return acc + current;
  return acc;
}, 0);