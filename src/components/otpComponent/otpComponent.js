import React, { useState } from 'react'
import "./otpComponent.css"
import OtpInput from 'react-otp-input';
import arrowRectangle from '../../assets/images/homeHeroSection/arrowRectangle.svg'

const OtpComponent = () => {

const [otp, setOtp] = useState('');
const mobileNumber = "9988776655";
const maskedMobileNumber = "*".repeat(5) +"  "+"*".repeat(2)+mobileNumber.substring(7);

return (
    <div className='otpModal'>
        <div className='otpFrame'>

            <div className='dividerLine'>
                    <svg width="27" height="2" viewBox="0 0 27 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1L25.5 1" stroke="#989898" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
            </div>

            <div className='otpContainer-topRegion'>
                        <div className='otpText'>
                            verify with OTP
                        </div>

                        <div className='otpDescription'>
                            Please enter the 4 digit code sent to +91 &nbsp;
                            <span className='mobileSecureDisplay'>{maskedMobileNumber}</span>
                        </div>
            </div>

            <div className='otpContainer-bodyRegion'>
                        <div className='otp-inputField'>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span></span>}
                                renderInput={(props) => <input {...props} />}
                            />

                            
                        </div>

                        <div className='otp-inputField-description'>
                            <div className='otp-inputField-description-text1'>
                                    Didn’t recieve a code? 
                            </div>
                            <div className='otp-inputField-description-text2'>
                                    Resend SMS
                            </div>
                        </div>
            </div>

            <div className='otpContainer-footerRegion'>
                        By entering OTP and proceeding, I agree to the <br/>
                        <span className='underline'>Terms of Use</span> 
                        &nbsp; and &nbsp;
                        <span className='underline'>Privacy Policy</span> 
                        associated with IndusInd <br/>
                        Bank Credit Card setup
            </div>
           

        </div>

        <div className='CTA-frame'>
            <div className='CTA-text'>
                    confirm
            </div>
            <div className='CTA-arrow'>
                <img src={arrowRectangle} alt='arrow'/>
            </div>
        </div>
    </div>
  )
}

export default OtpComponent
