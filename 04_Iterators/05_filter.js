////////+++++++  FOR EACH DONT RETURN ANYTHING +++++
// const array = ["A","B","C","D","E"];

// array.forEach((item)=>{
//     console.log(item)
// });
// console.log(value);
//-> For each dont return anything thats why we have other methods like map reduce and filter


//++++++++++++++++++++++++++FILTER++++++++++++++++++++++++//
const Score = [54,32,89,21,45,78,23,34,65,90];

//USING FILTER
// const passed = Score.filter((num)=> {
//     return num > 4;
// })
// console.log(passed);


//ABOVE THING USING FOR EACH (bit extra work)
// const passed = [];
// Score.forEach((num)=>{
//     if(num >= 33){
//         passed.push(num)
//     }
// })
// console.log(passed);


//OTHER USECASE OF FILTER
const books = [
    {title : "Book 1" , genre : "Non-Fiction" , publish:1981 , edition : 2013},
    {title : "Book 2" , genre : "Fiction" , publish:1976 , edition : 2014},
    {title : "Book 3" , genre : "Fiction" , publish:1986 , edition : 2019},
    {title : "Book 4" , genre : "Non-Fiction" , publish:2001 , edition : 2021},
    {title : "Book 5" , genre : "Non-Fiction" , publish:1945 , edition : 2005},
    {title : "Book 6" , genre : "Fiction" , publish:1981 , edition : 2009},
    {title : "Book 7" , genre : "Fiction" , publish:1965 , edition : 2017},
    {title : "Book 8" , genre : "Non-Fiction" , publish:1987 , edition : 2019},
    {title : "Book 9" , genre : "Fiction" , publish:1981 , edition : 2004},
    {title : "Book 10" , genre : "Non-Fiction" , publish:1981 , edition : 1967},
    {title : "Book 11" , genre : "Fiction" , publish:1981 , edition : 2004},
    {title : "Book 12" , genre : "Non-Fiction" , publish:1956 , edition : 1992},
    {title : "Book 13" , genre : "Fiction" , publish:1987 , edition : 1998},
    {title : "Book 14" , genre : "Fiction" , publish:1980 , edition : 2009},
    {title : "Book 15" , genre : "Non-Fiction" , publish:1990 , edition : 2019},
    {title : "Book 16" , genre : "Non-Fiction" , publish:1981 , edition : 2004},
    {title : "Book 17" , genre : "Fiction" , publish:2000 , edition : 2004},
    {title : "Book 18" , genre : "Non-Fiction" , publish:1999 , edition : 2004},
    {title : "Book 19" , genre : "Fiction" , publish:1981 , edition : 2020},
    {title : "Book 20" , genre : "Non-Fiction" , publish:2003 , edition : 2004},
    {title : "Book 21" , genre : "Fiction" , publish:1980 , edition : 2004},
]

const userBooks = books.filter((book)=>{
    return (book.genre == "Non-Fiction" && book.publish > 2000)
})
console.log(userBooks);