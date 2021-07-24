import Style from './SingleCourse.module.css';
import {useHistory} from 'react-router-dom';

function SingleCourse({course}){

    const history=useHistory();

    const redirectToLoginPaymentGateWay=(id)=>{
        history.push(`/payment/${id}`)
    }
    return (
        <div className={Style.singleCourseContainer}>
            <img className={Style.singleCourseImage} src={course.thumbnailURL}/>
            <p>{course.title}</p>
            <p>price {course.price}</p>
            <button onClick={()=>redirectToLoginPaymentGateWay(course.id)} className={Style.buyButton}>Buy Now</button>
        </div>
    )
}

export default SingleCourse;