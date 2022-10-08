const numbers = [1,2,3,4];
console.log(includes(numbers,30));

function includes(numbers,searchElement){
    return numbers.some( (number) => {
        return number === searchElement;
    })
}