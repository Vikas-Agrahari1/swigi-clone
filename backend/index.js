// const students = [
//     { id: 1, name: "Vikas Agrahari", age: 20, course: "B.Tech CSE" },
//     { id: 2, name: "Amit Kumar", age: 21, course: "B.Tech ECE" },
//     { id: 3, name: "Priya Sharma", age: 19, course: "B.Sc Computer Science" },
//     { id: 4, name: "Rahul Verma", age: 22, course: "B.Tech Mechanical" },
//     { id: 5, name: "Sneha Gupta", age: 20, course: "BBA" }
// ];

// const express = require('express')

// const app = express()

// app.use(express.json())

// app.patch('/students/:id', (req, res)=>{
//     const studentId = parseInt(req.params.id)
//     const {name} = req.body;
//     const index = students.findIndex(s => s.id === studentId)

//     students[index].name = name 

//     console.log("student name replace successfully")
//     res.json({ message: "Student name replaced successfully", student: students[index] });

// })


// app.put('/students/:id', (req, res)=>{
//     const studentId = parseInt(req.params.id)
//     const {name, age, course} = req.body;
//     const index = students.findIndex(s => s.id === studentId)

//     const replaceStudent = {
//         id: studentId,
//         name,
//         age,
//         course
//     }

//     students.splice(index, 1, replaceStudent)

//     console.log("student replace successfully")
//     res.json({ message: "Student replaced successfully", student: students[index] });

// })


// app.post('/students' , (req, res)=>{

//     const {name, age, course} = req.body;

//     const newStudent = {
//         id: students.length+1,
//         name,
//         age,
//         course
//     }

//     students.push(newStudent)

// })

// app.get('/students/:id', (req, res) => {
//     const studentId = parseInt(req.params.id)
//     const student = students.find(s => s.id === studentId)

//     res.json(student)
// })

// app.delete('/students/:id', (req, res) => {
//     const studentId = parseInt(req.params.id)
//     const index = students.findIndex(s => s.id === studentId)
//     students.splice(index, 1)

//     res.json(`Student deleted ${studentId}`)
// })

// app.get('/students', (req, res) => {
//     res.json(students)
// })

// app.use('/', (req, res)=>{
//     res.send("hey welcome!")
// })


// const PORT = 5000;

// app.listen(PORT, ()=>{
//     console.log("Server is ok....")
// })