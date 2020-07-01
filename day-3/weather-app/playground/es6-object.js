const label = "Red book";
const name = "kumar";
const age = 29;

const product = {
    label: label,
    name: name,
    productAge: age,
    rating: 5.0
};

console.log("Product : ",product);

// Shorthand syntax is label & name is same as above, we can use like below
const product1 = {
    label,
    name,
    productAge: age,
    rating: 5.0
};

console.log("Product1 : ",product1);

// Destructive function

const product2 = {
    label: "Testing",
    name,
    productAge: age,
    rating: 5.0
};

const prodLabel = product2.label;
const prodName = product2.name;
console.log("Destructive : Label = ",prodLabel,", Name : ", prodName);
// Instead above there is another way  to change name label: prodLabel & assign default value
const {label: destLabel, develop=5} = product2;
console.log("New way  : Label = ",destLabel,", Name : ", name, ", develop : ", develop);

const transaction = (type, product) =>{
    console.log("Inside Object : Label = ",product.label,", Name : ", product.name);
};

const transactionNew = (type, {}) =>{
    console.log("Destructive Object : Label = ",label,", Name : ", name);
};
transaction('order', product);

transactionNew('order', product);

const person = {
    plabel: "Kumar Data",
    pname: "Kumar",
    pAge: 35,
    prating: 5.0,
    address: {
        street: "1234",
        city: "bangalore"
    }
};

const transactionPerson = (type, {plabel}) =>{
    console.log("Destructive Object : address = ",plabel);
};

transactionPerson('Person', person);

