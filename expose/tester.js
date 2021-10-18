
function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;

    for(let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(finalPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    //console.log(discount);
    //console.log(prices);
    console.log(discounted);
    return discounted;
}

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year' : '2022',
    greeting: function(){console.log('hello'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}

printNums();

