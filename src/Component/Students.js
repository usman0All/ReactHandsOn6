import React,{useContext}  from 'react'
import { Link,useNavigate} from "react-router-dom";
import datastore from './ContextStore';

export function Students() {
    const ContextData = useContext(datastore);
    const Navi = useNavigate();

      return (
    <>
    <div className='Student-Heading'>Students Details</div>
   <button className='New-Student-Button Button-Text' onClick={() => {Navi('/AddStudentData')}}>Add New Student</button>

    <div className='Data-Container'>
    <table>
    <thead>
    <tr className='Table-Head'>
        <td>Name</td>
        <td>Age</td>
        <td>Course</td>
        <td>Batch</td>
        <td>Change</td>
    </tr>
    </thead>
    <tbody>
    {ContextData.entries.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td><Link to="/UpdateStudentData" state={{data: index}} >Edit</Link> </td>

    </tr>
    )
    })}
    </tbody>
    </table>
    </div>
    </>
  )
}