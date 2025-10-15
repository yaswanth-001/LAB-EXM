

import React, { useState } from 'react'
import "./RegistrationForm.css"

const RegisterForm = () => {
  //declare useState to store formData
  const [formData,setFormData] = 
      useState({
        uname:"",
        email:"",
        pwd:""})
   //declare users to store registered users
   const [users,setUsers] = useState([])

  //handle changes in the form fields
  const handleChange = (event) => {
     const {name,value} = event.target;
     setFormData((prevData)=>({
        ...prevData,
        [name]:value
     }))
  }
  //handle form submission
  const handleSubmit = (e) => {
     e.preventDefault(); //stops browsers default behaviour
     //console.log("Submitted Form:",formData)
     //form field validations (all fields required)
     if( !formData.uname || !formData.email || !formData.pwd ){
        alert("All fields are mandatory!")
        return;
     }

     //add a new registered user to the users state variable
     setUsers((prevData) => [...prevData,formData])

     //to provide new registered data, we must set formData to empty
     setFormData({uname:"",email:"",pwd:""})
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='registration-form'>
        <div className='form-group'>
            <label htmlFor='uname'>User Name:</label>
            <input
               type='text' 
               id="uname"
               name="uname"
               value={formData.uname}
               onChange={handleChange} 
               placeholder='Enter Username'/>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
               type='email'
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder='Enter Email'/>
        </div>
        <div className='form-group'>
            <label htmlFor='pwd'>Password:</label>
            <input 
             type='password'
             id="pwd"
             name="pwd"
             value={formData.pwd}
             onChange={handleChange}
             placeholder='Enter Password'/>
        </div>
        <button type='submit' className='submit-btn'>Register</button>
      </form>
      <div className='registrations'>
        <h2>Registerd users</h2>
        {users.length == 0 ? (
            <p>No users Registered yet!</p>
        ) : (
        <ul>
            {
                users.map((user,index) => (
                    <li key={index}>{user.uname} --- {user.email}</li>
                ))
            }
        </ul>
        )}
      </div>
    </div>
  )
}

export default RegisterForm