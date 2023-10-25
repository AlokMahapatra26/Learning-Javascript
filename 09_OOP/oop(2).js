//Object litrel (Simple way to design an object) (not a good way to create an object)
// let circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();

//Factories
// function createCircle(radius){
//     return {
//         radius,
//         draw : function(){
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(5);
// console.log(circle.radius)


//Constructor

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(5);
// console.log(circle);

//Class and constructor
class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }


}


const  alok = new User("alok007","alok@gmail.com","123")

console.log(alok.changeusername())