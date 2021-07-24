import {useState} from 'react';
import Style from './PaymentCard.module.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function PaymentCard(props){
    const [cardDetails,setCardDetails]=useState({cardNumber:"",cvc:"",expiry:""})
    const [showPaymentCard,setShowPaymentCard]=useState(true)
    const [paymentCardError,setShowPaymentCardError]=useState("")
    const [otp,setOtp]=useState("")
    const history=useHistory();

    const paymentValidation=()=>{
        console.log(cardDetails)
        setShowPaymentCardError("")
        
        if(cardDetails.cardNumber && /^\d+$/.test(cardDetails.cardNumber) && cardDetails.cvc && /^\d+$/.test(cardDetails.cvc) && cardDetails.expiry && /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(cardDetails.expiry) ){
            //alert('lji')
            setShowPaymentCard(false)
        }else{
            setShowPaymentCardError("invalid details")
        }
       
       
        
    }

    const otpValidation=()=>{
        const endPoint=process.env.REACT_APP_SERVER_ENDPOINT;
        if(otp=="123456"){
            axios.post(`${endPoint}/course/register`,{login_token:window.localStorage.getItem('jwt_token'),course_id:props.match.params.id})
                .then(res=>{
                    console.log(res)
                    history.push('/boughtCourses')
                   // navigateForm();
                }).catch(err=>{
                    console.log(err)
                })
        }else{
            alert('invalid otp')
        }
    }
    return (
        <div>
        {paymentCardError && <h2 style={{color:'red'}}>{paymentCardError}</h2>}
        {showPaymentCard &&
            <div className={Style.cardPaymentContainer}>
                <div className={Style.form_inputContainer}>
                    <label>Enter Card Details</label>
                    <input onChange={(e)=>setCardDetails({...cardDetails,cardNumber:e.target.value})} placeholder="Card Number" type="text"/>
                </div>
                <div className={Style.cv_details_Container}>
                    <input onChange={(e)=>setCardDetails({...cardDetails,cvc:e.target.value})} placeholder="CVC" type="text"/>
                    <input onChange={(e)=>setCardDetails({...cardDetails,expiry:e.target.value})}  placeholder="expiry" type="text"/>
                </div>
                <button onClick={()=>paymentValidation()} className={Style.payButton}>Pay</button>
            
            </div>
        }
        {!showPaymentCard &&
           <div className={Style.otp_container}>
            <label>Enter Otp</label>
            <input onChange={(e)=>setOtp(e.target.value)} type="text"/>
            <button onClick={()=>otpValidation()} className={Style.payButton}>submit</button>

            </div>
        }
       </div>
    )
}

export default PaymentCard;