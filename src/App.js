import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { AddStudentData } from './Component/AddStudentData';
import { UpdateStudentData } from './Component/UpdateStudentData';
import { Home } from './Component/Home';
import { Nav } from './Component/Nav';
import { Students } from './Component/Students';
import { ContactUs } from './Component/ContactUs';
import { Error } from './Component/Error';
import { useState } from 'react';
import datastore from './Component/ContextStore';
function App() {
    const [data, setData] = useState([
        {Name: "John",   Age: 24, Course: "MERN", Batch: "October"},
        {Name: "Doe",    Age: 25, Course: "MERN", Batch: "November"},
        {Name: "Biden",  Age: 26, Course: "MERN", Batch: "October"},
        {Name: "Barar",  Age: 22, Course: "MERN", Batch: "September"},
        {Name: "Christ", Age: 23, Course: "MERN", Batch: "October"},
        {Name: "Elent",  Age: 24, Course: "MERN", Batch: "November"},
    ])

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/AddStudentData'element ={<datastore.Provider value={{entries:data, entriesFunc:setData}}>
        <AddStudentData/>
        </datastore.Provider>}/>

        <Route path='/UpdateStudentData' element ={<datastore.Provider value={{entries:data, entriesFunc:setData}}>
        <UpdateStudentData/>
        </datastore.Provider>}/>

        <Route path='/' element ={<Home/>}/>

        <Route path='/Students' element ={<datastore.Provider value={{entries:data, entriesFunc:setData}}>
          <Students/>
        </datastore.Provider>}/>

        <Route path='/ContactUS' element ={<ContactUs/>}/>

        <Route path='/*' element={<Error/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
