Lets try with an example. Assume we have a list of grades from a classroom. Our classroom has 5 girls, 5 boys and each of them has a grade between 0 and 20.
var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]
// I want to know a few things about this:

// The average grade of this classroom
// The average grade of the boys
// The average grade of the girls
// The higher note among the boys
// The higher note among the girls
// We will try to use higher-order functions to get a program that is simple and easy to read. Let's start by writing simple functions that can work together:
let isBoy = student => student.sex === 'M'

let isGirl = student => student.sex === 'F'

let getBoys = grades => (
    grades.filter(isBoy)
)

let getGirls = grades => (
    grades.filter(isGirl)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
)

let maxGrade = grades => (
    Math.max(...grades.map(student => student.grade))
)

let minGrade = grades => (
    Math.min(...grades.map(student => student.grade))
)

// I wrote 7 functions, and each of them has one job, and one job only.

// isBoy and isGirl are responsible for checking if one student is a boy or a girl.

// getBoys and getGirls are responsible for getting all the boys or girls from the classroom.

// maxGrade and minGrade are responsible for getting the greatest and lowest grade in some data.

// Finally, average is responsible to calculate the average grade of some data.

// Notice that the average function doesn't know anything about the type of data it's suppose to process yet. That's the beauty of composition. We can re-use our code in different places. I can just plug this function with others.

// Now, we have what we need to write higher-order functions:

let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
let girlsAverage = average(getGirls(grades)) // 13.4
let highestGrade = maxGrade(grades) // 18
let lowestGrade = minGrade(grades) // 2
let highestBoysGrade = maxGrade(getBoys(grades)) // 16
let lowestBoysGrade = minGrade(getBoys(grades)) // 2
let highestGirlsGrade = maxGrade(getGirls(grades)) // 18
let lowestGirlsGrade = minGrade(getGirls(grades)) // 9
// Notice that the outer functions, average for example, always take as an input the output from the inner functions. Therefore, the only condition to composition is to make sure that the output and input match.

// And because each function is responsible for only one thing, it makes our code that much easier to debug and to test.