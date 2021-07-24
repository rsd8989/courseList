import React from 'react'
import Style from './TopBar.module.css'
import {useHistory} from 'react-router-dom'


function TopBar(props) {
    const history=useHistory();
    const boughtCourses=()=>{
        history.push('/boughtCourses')
    }
    
   
    return (
        <div>
            <div className={Style.topbar_container}>
                <div className={Style.topbar_brand }>
                    CoursesApp
                </div>
                <div className={Style.topbar_item_container}>
                    <div onClick={()=>boughtCourses()} className={Style.topbar_items}>bought courses</div>
                    {/* <div className={Style.topbar_items}></div>
                    <div className={Style.topbar_items}></div>
                    <div className={Style.topbar_items}></div> */}

                </div>
            </div>
        </div>
    )
}


export default  TopBar
