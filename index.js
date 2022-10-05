const address = {
    street : "cherlopalle",
    city : "chittoor",
    zipcode : "517129",
}

function showAddress(address){
    for(let key in address)
         console.log(key + ":" + address[key]);
}

showAddress(address);