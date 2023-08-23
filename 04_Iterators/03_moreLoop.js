//+++++++++++++++++++FOR OF++++++++++++++++

// const arr = "ALOK MAHAPATRA"

// for(const val of arr){
//     console.log(val);
// }

/// OBJECTS ARE NOT ITERABLE
// const gameObj = {
//     game1 : "GTA5",
//     game2 : "Need of speed"
// }

// for(const game of gameObj){
//     console.log(game);
// }



//++++++++++++++++++ FOR EACH++++++++++++++++
// const lang = ["hindi","english","marathi","Oria","Bengali"]
// lang.forEach((item , index , arr) => {
//     console.log(item , index , arr);
// })


const allUser = [
    {
        username : "alok007",
        gmail : "alok@gmail.com"
    },
    {
        username : "mrRandom009",
        gmail : "xyz@gmail.com"
    },
    {
        username : "chalakChatur9",
        gmail : "chatur@gmail.com"
    }
]

allUser.forEach((item)=>{console.log(item.username)})


//+++++++++++++++++++MAPS+++++++++++++++++++
//-> store onlu unique key and maintain order
// const map = new Map()
// map.set('IN',"India");
// map.set("USA","UNITED STATE OF AMERICA");
// map.set('FR', "France");

// for(const [key , value] of map){
//     console.log(key , ":-" , value);
// }