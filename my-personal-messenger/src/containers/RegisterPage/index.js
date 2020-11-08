import React, { useState } from 'react'
import Layout from '../../components/layout'
import Card from '../../components/layout/UI/Card/index'

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  return(
    <Layout>
      <div className='registerContainer'></div>
      <Card>
        <form>
        <input
            name="firstname"
            value='firstname'
            onChange={e=>setFirstName(e.target.value)}
            placeholder="firstname"
            type='text'>
            </input>

            <input
            name="lastname"
            value='lastname'
            onChange={e=>setLastName(e.target.value)}
            placeholder="lastname"
            type='text'>
            </input>

            <input
            name="email"
            value='email'
            onChange={e=>setEmail(e.target.value)}
            placeholder="email"
            type='text'>
            </input>

            <input
            name="password"
            value='password'
            onChange={e=>setPassword(e.target.value)}
            placeholder="password"
            type='password'>
            </input>

        </form>
      </Card>
    </Layout>
   )

 }

export default RegisterPage