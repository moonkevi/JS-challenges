// --- result predict
// 2 1 1 ;

// ---

function createBankAccount (initial){
    let money = initial;
    return{
        deposit: function(amount){
            money += amount;
        },

        withdrawal: function(amount){
            if(amount <= money){
                money -= amount;
            }
            else{
                console.log("insufficient");
            }
        },
         balance: function() {
            return money;
        }
    };
}

let account = createBankAccount(10000);
amount.deposit(5000)
amount.withdrawal(3000)
console.log(account.balance());
console.log();

// --- high order

function applyDiscount(prices, rule) {
    let result = [];

    for (let i = 0; i < prices.length; i++) {
        result.push(rule(prices[i]));
    }

    return result;
}

let prices = [10000, 60000, 80000];

// 10% off everything
let tenPercent = applyDiscount(prices, function(price) {
    return price * 0.9;
});

console.log(tenPercent); 

let fiveThousand = applyDiscount(prices, function(price) {
    if (price > 50000) {
        return price - 5000;
    }
    return price;
});

console.log(fiveThousand); 

// --- level 5: debugging

// original codes

function makeGreeting(greeting) {
    return function(name) {
        `${greeting}, ${name}!`;
    }
}

const hello = makeGreeting("Muraho");
setTimeout(hello("Aline"), 1000);

// --- correct codes

function makeGreeting(greeting) {
    return function(name) {
       return `${greeting}, ${name}!`;
    };
}

const Hello = makeGreeting("Muraho");
setTimeout(function(){
    console.log(Hello("Aline"));
}, 1000);

