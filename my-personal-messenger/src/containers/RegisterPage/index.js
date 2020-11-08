import React, { useState } from 'react'
import Layout from '../../components/layout'
import Card from '../../components/layout/UI/Card/index'
import './style.css';
import {signup} from '../../actions/'
import { useDispatch } from 'react-redux';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch();

  const registerUser=(e)=>{
    e.preventDefault();
    const user={
      firstname,lastname,email,password
    }

    dispatch(signup(user))
  }


  return(
    <Layout>
      <div className='registerContainer'>
        <h3>Sign Up!</h3>
      <Card>
        <form onSubmit={registerUser}>
        <input
            name="firstname"
            onChange={e=>setFirstName(e.target.value)}
            placeholder="firstname"
            type='text'>
            </input>

            <input
            name="lastname"
            onChange={e=>setLastName(e.target.value)}
            placeholder="lastname"
            type='text'>
            </input>

            <input
            name="email"
         
            onChange={e=>setEmail(e.target.value)}
            placeholder="email"
            type='text'>
            </input>

            <input
            name="password"
           
            onChange={e=>setPassword(e.target.value)}
            placeholder="password"
            type='password'>
            </input>
          <button type='submit'>Sign Up</button>
        </form>
      </Card>
      </div>
    </Layout>
   )

 }

export default RegisterPage