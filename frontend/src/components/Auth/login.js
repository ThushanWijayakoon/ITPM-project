import React, { useState } from 'react';
import './login.css';
import login from "./../image/login.png"
import {showErrMsg, showSuccessMsg} from './../Notification'
import {Link , useNavigate} from "react-router-dom"
import {FormInput , FormSelect , MultiFormSelect} from '../../components/Form/Form'


import axios from "axios";

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

 function Login(props) {
  let navigate = useNavigate()
  const [user, setUser] = useState(initialState)
 
  

  const {email, password, err, success} = user


  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
  }


  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const res = await axios.post("/user/login", {email, password})
          setUser({...user, err: '', success: res.data.message})
          if(res.data.success){
            sessionStorage.setItem('token' , res.data.document)
            localStorage.setItem('firstLogin', true)
            setTimeout(() => {
              navigate('/home')
            }, 1000);
          }

      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  

  
 

  return (

    <div className='login-page'>
      
      {err && showErrMsg(err)}
     {success && showSuccessMsg(success)}

    <form  >
    <div className="main">
     <div className='sub-main'>
       <div>
         <div className='imgs'>
           <div className='container-image'>
             <img src={login} alt="login" className='login'/>

           </div>
           

         </div>
         <div>
           <h1>Login</h1>
           <div>
             
           <FormInput type="text" placeholder="Enter email" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
           </div>

           <div className='second-input'>
           
           <FormInput type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} /> 
           </div>
           <div className='login-button'>
           <div className="button" >
            <Link to={"update/"+user._id}></Link><button type="submit" onClick={handleSubmit}> Login</button>
           
                    </div>
                    </div>
                    <br></br>
           <p className='link'>
             <a href='#'>Forgot Password ?</a>Or <a href='/add'>Sign Up</a>
           </p>
         </div>
       </div>

     </div>
    </div>

    </form>

    </div>
  );
}

export default Login

