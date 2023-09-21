import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [students, setStudents] = useState([])

  useEffect(()=>{
    async function getAllStudent(){
      try{
       const students = await axios.get("http://localhost:8000/api/student")
       console.log(students.data)
       setStudents(students.data)
      } catch (error) {
        
        console.log(error)
      }
    }

    getAllStudent();
  }, [])

  return (
    <>
    <h1>Connect react jsx. to Express jsx</h1>
    {
      students.map((student, i)=>{
         return (
          <h2 key={i}>{student.stuname} {student.email}</h2>
         )
         })
    }
    </>
  )
}

export default App
