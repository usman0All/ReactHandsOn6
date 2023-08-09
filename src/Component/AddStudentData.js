import React, {useContext } from 'react'
import datastore from './ContextStore'
import { useNavigate,Link,} from 'react-router-dom'

export function AddStudentData() {

const store = useContext(datastore) 
const navi = useNavigate()


const newobj = {
Name: "",
Age: "",
Course:"" ,
Batch: "",
}

const handleChange = (event)=>{
    newobj[event.target.name]=event.target.value
}

const handleAdd = (event) =>{
    store.entries.push(newobj)
    navi('/Students')
} 
  return (
    <>
    <div>

<form className='Form-Container'>
<input type='text' placeholder= "Name"    name="Name"  className='Form-Data' onChange={handleChange }/>
<input type='text' placeholder= "Age"     name="Age" className='Form-Data' onChange={handleChange }/>
<input type='text' placeholder= "Course"  name="Course" className='Form-Data' onChange={handleChange }/>
<input type='text' placeholder= "Batch"   name="Batch" className='Form-Data' onChange={handleChange }/>

<div className='Submit-Data-Buttons'>
    <Link to={'/Students'}><button className='Cancel-Button'>Cancel</button></Link>
    <button className='Submit-Button' onClick={handleAdd}>Submit</button>
</div>
</form>



    </div>
    </>
  )
}