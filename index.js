const address = {
    street : "cherlopalle",
    city : "chittoor",
    zipcode : "517129",
}

function AddressGenerator(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

function addressSynthesizer(street,city,zipcode){
    return {
        street,
        city,
        zipcode

    };
}