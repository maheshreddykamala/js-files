const numbers = [1,2,3,4,1,1,2];

const output = except(numbers,[3]);

console.log(output);

function except(numbers,excluded){
    const final = numbers.filter( (number) => {
        for(let value of excluded){
            if(number === value){
                return false;
            }
        }
        return true;
    })

    return final;
}