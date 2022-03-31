const message = 'Hello World!'
console.log(message)

let sum = 0;
for (let i = 0; i < 9; i++) {
sum += 1;
}
console.log(sum);
if (sum % 2 == 0) console.log("Sum is even");
else console.log("Sum is odd");

const a = 5
const b = 10
// an ordinary string
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.')
// using a template string - note the back-ticks
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`)

// Exercise 3

let celsius = 32
let fahrenheit = 0
console.log('******Exercise 4*********')
const convertTemp = (TempInCelsius) => {
    fahrenheit = (9 * TempInCelsius + 160)/5
    console.log(fahrenheit)
}

convertTemp(celsius)

console.log('#####******#######Samples#########*********')
let student = {
    name: 'Kwezi',
    studentNumber: 453528
    }
    console.log(student) // print the entire object
    // access the object's properties
    console.log(`${student.name}'s student number is ${student.studentNumber}`)
    // adding a new property to an object
    const addAge = function (theStudent, age) {
        theStudent.age = age // add a new property called age to the student
        }
    addAge(student, 20)
    console.log(student)

    console.log('#####******Exercise 5*********')
    let yearOffered
    const course = {
        courseCode: 'ELEN3010'
    }
    
    const addYear = function(courseType){
        if (course.courseCode.includes('40')){
            let year = 4
            courseType.year = year
        } else if (course.courseCode.includes('30')){
            let year = 3
            courseType.year = year
        } else if (course.courseCode.includes('20')){
            let year = 2
            courseType.year = year
        } else if (course.courseCode.includes('10')){
            let year = 1
            courseType.year = year
        }
        return course
    }
    addYear(course)
    function details(theCourse){
        return `${theCourse.courseCode} is offered in year ${theCourse.year}`
    }
    console.log(details(course))    

    //********************** */
    // const setStudentToEmptyObject = function (theStudent) {
    //     theStudent = {name: 'Kaya'}
    //     theStudent.name = 'Kaya' // assign the reference to an empty object
    //     console.log(theStudent)
    //     console.log(student)
    //     }
    //     setStudentToEmptyObject(student) // has no effect on 'student'

    //     console.log(student)

    console.log('*********Exercise 6*********')

    let account = {
        deposit: 300,
        withdraw: 100,
        balance: 200,
        accountSummary: function(){
            return `This account has a balance of R ${this.balance}. There are deposits totalling R ${this.deposit} and withdrawals totalling R ${this.withdraw}`
        }
    }

    function deposit(theAccount, theDeposit){
        theAccount.deposit = theAccount.deposit + theDeposit
        theAccount.balance = theAccount.balance + theAccount.deposit
        return theAccount
    }
    function withdraw(theAccount, withdrawAmount){
        if (theAccount.balance > withdrawAmount){
            theAccount.balance = theAccount.balance - withdrawAmount
            theAccount.withdraw = withdrawAmount
        } 
        else {
            console.log('balance not enough')
        }
        return theAccount
    }
    console.log(account.accountSummary())
    deposit(account, 300)
    console.log(account.accountSummary())
    withdraw(account, 200)
    console.log(account.accountSummary())

    console.log('*************Exercise 8*********')

    const array1 = [2, 4, 6, 8]
    //  function squareNum(anArray){
    //      for (let i=0; i< anArray.length; i++){
    //          anArray[i] = Math.pow(anArray[i], 2)
    //      }
    //      return anArray
    //  }
    //  console.log(squareNum(array1))

     // MAIN++++++++++++++++++++
     const map1 = array1.map(x => Math.pow(x,2))

     console.log(map1)
     //ANOTHER++++++++++*********************++++++++++
     const map2 = function (square1, someArray){
         for (let i=0;i<someArray.length; i++){
             someArray[i]=square1(someArray[i])
         }
         return someArray
     }
     function square1 (input){
         return Math.pow(input, 2)
     }
     
     console.log(map2(square1, array1))

     console.log('*************Exercise 9*********')
     let students = [
        {
        name: 'Kwezi',
        studentNumber: 453528,
        yearOfStudy: 4
        },
        {
        name: 'Pieter',
        studentNumber: 454345,
        yearOfStudy: 3
        },
        {
        name: 'Jade',
        studentNumber: 678343,
        yearOfStudy: 4
        },
        {
        name: 'Kiren',
        studentNumber: 567893,
        yearOfStudy: 4
        }
        ]

        // console.log(students.findIndex(function (element) { // prints 1
        //     return element.name === 'Jade' &&
        //     element.yearOfStudy === 4
        //     }))
        // ********************************************
            // console.log(students)
            // students.splice(students.findIndex(function (element) { // prints 1
            // return element.name === 'Jade' &&
            // element.yearOfStudy === 4
            // }),1)
            // console.log(students)
            // *****************************************

           function deleteStudent({
                name,
                studentNumber,
                yearOfStudy
                },studentArray){
                    studentArray.splice(studentArray.findIndex(function (studentArray) { // prints 1
                    console.log(students)
                    studentArray.name == name &&
                    studentArray.studentNumber === studentNumber &&
                    studentArray.yearOfStudy === yearOfStudy
                        }),1)
                        
                        return studentArray
                //   studentArray.name == name 
                //   studentArray.studentNumber === studentNumber
                //   studentArray.yearOfStudy === yearOfStudy
                  
                }
    
                const modifiedArray = deleteStudent({
                name: 'Kiren',
                studentNumber: 567893,
                yearOfStudy: 4
                }, students)

                console.log(modifiedArray)
                console.log(students)

// ************************************************************************
                console.log('***********^^^^^^Exercise 10^^^^**************')
                const electiveOne = {
                    courseCode: 'ELEN4010',
                    yearOffered: 4
                    }
                    const electiveTwo = {
                    courseCode: 'ELEN4001',
                    yearOffered: 4
                    }
                    const electiveThree = {
                    courseCode: 'ELEN4020',
                    yearOffered: 4
                    }
                    const electiveFour = {
                    courseCode: 'ELEN4017',
                    yearOffered: 4
                    }
                    let students1 = [
                    {
                    name: 'Kwezi',
                    studentNumber: 453528,
                    yearOfStudy: 4,
                    electives: [electiveOne, electiveTwo, electiveThree]
                    },
                    {
                    name: 'Pieter',
                    studentNumber: 454345,
                    yearOfStudy: 3,
                    electives: [electiveOne, electiveTwo, electiveFour]
                    },
                    {
                    name: 'Jade',
                    studentNumber: 678345,
                    yearOfStudy: 4,
                    electives: [electiveTwo, electiveThree, electiveFour]
                    },
                    {
                    name: 'Kiren',
                    studentNumber: 567893,
                    yearOfStudy: 4,
                    electives: [electiveOne, electiveTwo, electiveThree]
                    }
                    ]
                
                const filteredItems = students1.filter(stud => {
                    return stud.electives.includes(electiveOne);
                })
                console.log(filteredItems)
                console.log('Check 1')

                const filteredItems1 = students1.filter(stud => {
                    ret = stud.electives.includes(electiveOne);
                    return ret
                })
                console.log(filteredItems1[0])
                console.log('Check 2')
                filteredItems.forEach((ddd) => {
                    console.log(ddd)})
                //     console.log('Check 3')
                // console.log(students1[0])
                