
//OBJECT DESTRUCTURING
const course = {
    courseName : "Python with ML",
    price : "3000",
    courseInstructor : "Alok"
}

const {courseInstructor : instructor} = course;
console.log(instructor);