// function greeting(name){
//     console.log(`Hello ${name}`);
// }
// greeting("Alok");


// function add(a,b){
//     return a + b;
// }
// const result  = add(23,43);
// console.log(`Result : ${result}`);


// function loginUserMessage(username = "sam"){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


// function calculateCartPrice(...num1){
//     let sum = 0;
//     for(let i = 0; i < num1.length; i++){
//         sum += num1[i];
//     }
//     return sum;
// }

// console.log(calculateCartPrice(23,32,34))

const user = {
    username : "Alok",
    price : 199
}

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${user.price}`)
}

handleObj(user);