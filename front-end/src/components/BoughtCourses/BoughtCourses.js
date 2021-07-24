import {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Style from './BoughtCourses.module.css';

function BoughtCourses(){
    const [coursesList,setCoursesList]=useState([])
    const [boughtCourses,setBoughtCourses]=useState([])
    const [courses,setCourses]=useState([]);

    const history=useHistory();
    useEffect(()=>{
        if(!window.localStorage.getItem('jwt_token')){
            history.push('/login')
        }
    },[])
    useEffect(()=>{
        const endPoint=process.env.REACT_APP_SERVER_ENDPOINT;

        axios.get(`${endPoint}/course/getCourses`,{params:{login_token:window.localStorage.getItem('jwt_token')}})
        .then(res=>{
            console.log(res)
            setBoughtCourses(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    useEffect(()=>{
        if(boughtCourses.length>0){
            const array=[]
            boughtCourses.forEach(element1=>{
                const course=coursesList.find(element=>element.id==element1.course_id)
                if(course){
                    array.push(course)
                }
                console.log(element1)
            })
            setCourses(array)
        }
    },[boughtCourses,coursesList])

    useEffect(()=>{
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json')
        .then(res=>{
            console.log(res)
            setCoursesList(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return (
        
        <div className={Style.boughtCoursesContainer}>
            {courses.map(element=>{
               
               return( <div>
                   <video width="320" height="240" controls autoPlay>
                        <source src={element.videoLink[0]} />
                        
                        
                        </video>
                </div>
               )
            })}
        </div>
    )
}

export default BoughtCourses;