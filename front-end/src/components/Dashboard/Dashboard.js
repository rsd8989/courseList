import {React,useState,useEffect} from 'react';
import axios from 'axios';
import SingleCourse from '../SingleCourse/SingleCourse';
import Style from './Dashboard.module.css';

function Dashboard(){
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json')
        .then(res=>{
            setCourses(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div className={Style.courseContainer}>
            {courses.map((course)=>{
                return (
                    <div >
                        <SingleCourse course={course}/>
                    </div>
                )
            })}
        </div>
    )
}
export default Dashboard;