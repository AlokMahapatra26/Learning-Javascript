//Map

//Q1 - Squaring Number

// const numArray = [21,34,56,23,21,89,34,23,54,56];

// const newArray = numArray.map((num)=>{
//     return num * num;
// })

// console.log(newArray);


//Q2 - Uppercase Names

// const nameArray = ["alok" , "aarti","gauri","sagaraika"];

// const newNameArray = nameArray.map((name)=>{
//     return name.toUpperCase();
// })

// console.log(newNameArray);

//Q3 - Object Transformation 
// const userDB = [
//     {
//         name : "alok",
//         age : 12
//     },
//     {
//         name : "aarti",
//         age : 8
//     }
// ]

// const newUserArray = userDB.map((user)=>({
//     name : user.name,
//     initial : user.name[0]
// }))

// console.log(newUserArray);


//Filter

// Q-4 Even Number
// const numArray = [34,45,23,45,80,24,78,544];

// const newNumArray = numArray.filter((num)=>{
//     return num%2==0;
// })

// console.log(newNumArray)

// Q-5 Long Words
// const wordArray = ["monitor" , 'cpu' , 'happiness' ,'sad','joy'];

// const newWordArray = wordArray.filter((word)=>{
//     return word.length > 5;
// })

// console.log(newWordArray);


//Reduce

//Q-5 Sum of Number
// const cart = [299,999,399,49,129,490,499,998];

// const total = cart.reduce((acc , curVal)=>{
//     return acc + curVal
// },0)

// console.log(total);