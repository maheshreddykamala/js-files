const numbers = [1,2,3,4,5,1,1,1,4,7];

const output = countOccurances(numbers,1);

console.log(output);

function countOccurances(numbers,searchElement){
  
  return numbers.reduce((ocuurance,currentValue) => {
          return currentValue === searchElement ? ++ocuurance : ocuurance;
  },0);
   
}