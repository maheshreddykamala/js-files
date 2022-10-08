const numbers = [1,2,3,4,5,6,7];

const output = move(numbers,3,20);

console.log(output);

function move(numbers,index,offset){
  
    const final = [...numbers];
    if(index+offset < 0 || index+offset >= numbers.length){
        console.error("invalid offset");
        return;
    }
   final.splice(index,1);
   final.splice(index+offset,0,numbers[index]);
   return final;
}