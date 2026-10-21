// --- Arrays

let cities = ["kigali", "gisenyi", "ngoma", "musanze", "kibuye"];
cities.push("ruhengeri");
cities.shift();
console.log(`The cities list: ${cities}`);
console.log(`The cities lenght is: ${cities.length}`);
console.log();

// --- Array Methods

let numbers = [3, 8, 12, 5, 20, 7];

let overSix = numbers.filter(n => n > 6);
let doubled = numbers.map(n => n*2);
let total = numbers.reduce((sum,n) => sum + n, 0);
let big = Math.max(...numbers);

console.log(`Numbers over six: ${overSix}`)
console.log(`Doubled: ${doubled}`);
console.log(`Total: ${total}`);
console.log(`The maximun number: ${big}`);
console.log()

// --- About objects

let book = {
    tittle: "lt takes mindset",
    author: "Markixx Gandi",
    year: 1988,
    genres: ["historical", "non-fiction"],
    summary: function(){
        console.log(this.tittle + "by" + this.author)
    }
};

book.rating = 7.8;
bookyear = 1986;
book.summary();

for(let enter of Object.entries(book)){
    console.log(enter);
}




let products = [
    {name: "barenciga", price: 27000, stock: 10},
    {name: "flats", price: 25000, stock: 5},
    {name: "Sneakers", price: 18000, stock: 20}
];

let cheap = products.filter(p => p.price < 20000);
console.log(cheap);

let high = products[0];
for(let i = 1; i < products.length; i++){
    if(products[i].stock > highest.stock){
        high = products[i];
    }
}

console.log(high);

let Total = 0;
for(let i = 1; i < products.length; i++){
  Total+=products[i].price;
}

console.log(Total / products.length);
console.log();

// --- debugging

const users = [
    { name: "Aline", age: 24 },
    { name: "Eric", age: 17 }
];

// the right filter
const rightFilter = users.filter(u => u.age >= 18)

// tje right foreach()
const rightForeach = users.filter(u => u.name);

// the right sorted
const sorted = users.sort((a, b) => a.name.localeCompare(b.name));

console.log(adults);
console.log(names);
console.log(sorted[0].name);

