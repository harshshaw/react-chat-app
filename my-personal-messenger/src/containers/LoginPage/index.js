import React,{useState} from 'react'
import Layout from '../../components/layout'
import Card from '../../components/layout/UI/Card/index'
import './style.css'
/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');





  return(
   <Layout> 
     <div className="loginContainer">
       <Card>
         <form>
              <input
              name="email"
              value='email'
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

            <div>
              <button>Login</button>
            </div>
         </form>
       </Card>
     </div>
   </Layout>
   )

 }

export default LoginPage