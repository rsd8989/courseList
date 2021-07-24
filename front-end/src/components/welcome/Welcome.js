import React,{useState} from 'react'
import Style from './welcome.module.css';
import Login from './../Login/Login';
import Register from './../Register/Register';
function Welcome() {
    const [showLogin,setLogin]=useState(true);

    const navigateForm=()=>{
        setLogin(!showLogin)
    }
    return (
        <div>
            <div className={Style.greetingContainer}>
                <h2>Welcome to onlineCourses</h2>
                <p>Login or SignUp</p>
            </div>
        
        <div className={Style.welcomeContainer}>
            
            <div className={Style.formContainer}>
                {showLogin ?
                <Login/>
                :<Register navigateForm={navigateForm}/>}
                <p>Don't have an account <span onClick={()=>navigateForm()} className={Style.form_navigator}>{showLogin?'Sign up': 'Sign In'}</span></p>

            </div>
            <div className={Style.formImageContainer} >
                <img className={Style.formImage}  src='./assets/formImage.jpg'/>
            </div>
        </div>
        </div>
    )
}

export default Welcome
