import React,{useContext} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import datastore from './ContextStore'

export function UpdateStudentData() {
    const store = useContext(datastore);
   const Navi = useNavigate();
   const index = useLocation().state.data;

   const Updatedobj = {
    Name: store.entries[index].Name,
    Age: store.entries[index].Age,
    Course: store.entries[index].Course,
    Batch: store.entries[index].Batch
  }

   const handleChange = (e) => {
    Updatedobj[e.target.name] = e.target.value;
   }

   const handleUpdate = () =>{
    store.entries[index]=(Updatedobj)
    Navi('/Students')
} 


  return (
    <>
    <div>

<form className='Form-Container'>
<input type='text' placeholder= {store.entries[index].Name}     name="Name"     className='Form-Data' onChange={handleChange }/>
<input type='text' placeholder= {store.entries[index].Age}     name="Age"       className='Form-Data' onChange={handleChange }/>
<input type='text' placeholder= {store.entries[index].Course}     name="Course" className='Form-Data' onChange={handleChange }/>
<input type='text' placeholder= {store.entries[index].Batch}     name="Batch"    className='Form-Data' onChange={handleChange }/>
<div className='Submit-Data-Buttons'>
    <Link to={'/Students'}><button className='Cancel-Button'>Cancel</button></Link>
    <button className='Submit-Button'onClick={handleUpdate}>Update</button>
   
</div>
</form>



    </div>
    </>
  )
}