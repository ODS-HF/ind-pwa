import React from 'react'
import './loginPopup.css'
import cardTiny from '../../assets/images/home/cardGrad.svg'
import arrowRectangle from '../../assets/images/homeHeroSection/arrowRectangle.svg'
import { useState,useEffect } from 'react'

const LoginPopup = () => {
  
  const [mobileNumber, setMobileNumber ] = useState('');
  const [lastFourDigit,setLastFourDigit] = useState('');
  
  const handleMobileNumberChange = (e) =>{
    if((e.target.value.length<=10 && Number(e.target.value)) || e.target.value === "")
        setMobileNumber(e.target.value)
    
  }

  const handleLastFourDigit = (e) =>{
    if((e.target.value.length<= 4 && Number(e.target.value)) || e.target.value === "")
    setLastFourDigit(e.target.value)
    
  }

  return (
    <div className='loginModal'>
        <div className='loginFrame'>
            
            <div className='dividerLine'>
                <svg width="27" height="2" viewBox="0 0 27 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L25.5 1" stroke="#989898" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>

            <div className='loginContainer'>

                <div className='loginContainer-topRegion'>
                        <div className='loginText'>
                                enter your details
                        </div>
                </div>

                <div className='loginContainer-bodyRegion'>
                        <div className='mobileNumber-region'>
                                <div className='mobileNumber-text'>
                                    Enter your registered mobile number
                                </div>

                                <div className='mobileNumber-inputField-container'>
                                    
                                    <label htmlFor='mobileNumber' className='mobileCodeLabel'>
                                        +91
                                    </label>

                                    <input
                                        type='text'
                                        className='mobileNumber-inputField'
                                        id='mobileNumber'
                                        value={mobileNumber}
                                        name='mobileNumber'
                                        onChange={(e) => handleMobileNumberChange(e)}
                                        placeholder='9452145678'/>

                                </div>
                                
                        </div>

                        <div className='creditcard-region'>
                                <div className='creditcard-text'>
                                    Enter last 4 digits of your credit card
                                </div>

                                <div className='creditcard-inputField-container'>
                                    
                                    <label htmlFor='creditcard' className='creditcardLabel'>
                                        <img src={cardTiny} alt='cardTiny'/> 
                                    </label>

                                    <input
                                        type='text'
                                        className='creditcard-inputField'
                                        id='creditcard'
                                        name='creditcard'
                                        value={lastFourDigit}
                                        onChange={(e) => handleLastFourDigit(e)}
                                        placeholder='Type here'/>
                                </div>
                        </div>

                </div>
            </div>
        </div>

        <div className='loginCTA' style={{background: (mobileNumber.length === 10 && lastFourDigit.length ===4)? '#FFF' : 'rgb(255 255 255 / 50%)'}}>
           <div className='loginCTA-button'>
                <div className='loginCTA-text'>
                        confirm
                </div> 

                <div className='loginCTA-arrow'>
                        <img src={arrowRectangle} alt='arrowRectangle'/>
                </div>
           </div>    
        </div>
    </div>
  )
}

export default LoginPopup
