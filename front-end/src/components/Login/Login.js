import React,{useState} from 'react'
import Style from './Login.module.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [userData,setUserData]=useState({username:"",password:"",email:""})
    const endPoint=process.env.REACT_APP_SERVER_ENDPOINT;
    const history=useHistory();

    const login=()=>{
        console.log(userData)
        axios.get(`${endPoint}/auth/login`,{params:userData})
        .then(res=>{
            if(res.data.verified){
                window.localStorage.setItem("jwt_token",res.data.token)
                history.push('/dashboard')
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
            alert('invalid details please check again')
        })
    }

    return (
        <div>
            <h2 className={Style.form_heading} style={{textAlign:'center'}}>Log in</h2>
            <div className={Style.form_element_container}>
                <label className={Style.LoginLabel} forHtml="email">Email:</label>
                <input onChange={(e)=>setUserData({...userData,email:e.target.value})} className={Style.LoginInput} name="email" type="text"/>
            </div>
            <div className={Style.form_element_container}>
                <label  className={Style.LoginLabel} forHtml="password">Password:</label>
                <input onChange={(e)=>setUserData({...userData,password:e.target.value})} className={Style.LoginInput} name="password" type="text"/>
            </div>
            <button onClick={()=>login()} className={Style.form_submit}>Login</button>
        </div>
    )
}

export default Login
