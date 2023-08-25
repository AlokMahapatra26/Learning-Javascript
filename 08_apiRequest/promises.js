//  const promiseOne = new Promise((resolve , reject)=>{
//     //Do an async task
//     setTimeout(()=>{
//         console.log("Async task is complete");
//         resolve()
//     },1000)
//  });



//  promiseOne.then(function(){
//     console.log("Promise consumed");
//  })

//  new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     },1000)
//  }).then(()=>{
//     console.log("Async2 resolved")
//  })



//  const promiseThree = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve({username : "Alok" , email : "Alok@gmail.com"})
//     },1000)
//  })

//  promiseThree.then(function(user){
//     console.log(user);
//  })



//  const promiseFour = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username : "alok" , password :'23'})
//         }else{
//             reject("something went wrong");
//         }
//     })
//  })

//  promiseFour
//  .then((user)=>{
//     console.log(user)
//  })
//  .then((username)=>{
//     console.log(username)
//  })
//  .catch((error)=>{
//     console.log(error)
//  })
//  .finally(()=>{
//     console.log("the promise is either resolve or rejeted")
//  })



// const promiseFive = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username : "aarti",age:32})
//         }else{
//             reject("rejected.")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(e){
//         console.log(e)
//     }
    
// }

// consumePromiseFive();


// async function getUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/alokMahapatra26');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
    
// }

// getUser();



// fetch('https://api.github.com/users/alokMahapatra26').then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.name);
// })
// .catch((error)=>{
//     console.log(error);
// })

