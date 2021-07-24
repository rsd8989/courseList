import React,{useState} from 'react'
import Style from './Register.module.css';
import axios from 'axios';


function Register({navigateForm}) {
    const [userData,setUserData]=useState({password:"",email:""})
    const endPoint=process.env.REACT_APP_SERVER_ENDPOINT;

    const register=()=>{
        axios.post(`${endPoint}/auth/register`,userData)
        .then(res=>{
            console.log(res)
            navigateForm();
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>                                                              
        <h2 className={Style.form_heading} style={{textAlign:'center'}}>Sign up</h2>
        
        <div className={Style.form_element_container}>
            <label className={Style.LoginLabel} forHtml="email">Email:</label>
            <input onChange={(e)=>setUserData({...userData,email:e.target.value})} className={Style.LoginInput} name="email" type="text"/>
        </div>
        <div className={Style.form_element_container}>
            <label  className={Style.LoginLabel} forHtml="password">Password:</label>
            <input onChange={(e)=>setUserData({...userData,password:e.target.value})} className={Style.LoginInput} name="password" type="text"/>
        </div>
        <button onClick={()=>register()} className={Style.form_submit}>Submit</button>
    </div>
    )
}

export default Register
