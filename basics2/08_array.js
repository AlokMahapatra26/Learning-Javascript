
// const myArr = [0,1,2,3,4,5,true,null,undefined,"Alok"];
// console.log(myArr)
// console.log(myArr.length)

//Array method
// const arr = ["aarti","sagaraika","gouri"];
// console.log(arr); 

//PUSH
// arr.push("Alok");//add from last
// console.log(arr); 

//POP
// arr.pop();//remove from last (return value)
// console.log(arr); 

//SHIFT
// arr.shift();//remove from first (return value)
// console.log(arr);

//UNSHIFT
// arr.unshift("Alok");//add from first 
// console.log(arr);

//JOIN
// const newArr = arr.join(); //convert all value to string
// console.log(newArr)

//INCLUDES AND INDEXOF
// console.log(arr.includes("aarti"));
// console.log(arr.indexOf("sagaraika"));

//SLICE
// console.log("A " , arr);
// console.log( arr.slice(0,1)); //deep copy
// console.log("B " , arr)

//SPLICE
// console.log("A " , arr);
// console.log( arr.splice(0,1)); //shallow copy
// console.log("B " , arr)

//++++++++++++++++++++++++++++MORE+++++++++++++++++++++++

// const Anime = ["Demon slayer","Attack on Titan","Kengan Ashura"]; 
// const Movie = ["Your Name","Grave of the fireflies" , "i want to eat your pancreas"];

//CONCAT AND SPREAD 
// const newShows = Anime.concat(Movie);
// const newShows = [...Anime , ...Movie];
// console.log(newShows);

//FLAT
// const arr = [2,3,4,[1,4,6,3,[6,4,2,[76,43,[32,4,[4]]]]]];
// const newFlatArr = arr.flat(Infinity);
// console.log(newFlatArr);

//ISARRAY AND FROM
// console.log(Array.isArray(Anime));
// console.log(Array.from("ALOK MAHAPATRA"));

//OF
// let s1 = 23;
// let s2 = 45;
// let s3 = 89;
// console.log(Array.of(s1,s2,s3));