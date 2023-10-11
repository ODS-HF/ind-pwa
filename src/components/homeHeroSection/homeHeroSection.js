import React from 'react'
import '../../components/homeHeroSection/homeHeroSection.css'
import arrowCircle from '../../assets/images/homeHeroSection/ArrowCircleUpRight.svg'
import card from '../../assets/images/homeHeroSection/Rectangle.svg'
import arrowRectangle from '../../assets/images/homeHeroSection/arrowRectangle.svg'
const homeHeroSection = () => {

  const data = {
    rewardPoint: 12381
  }

  return (
    <>
        <div className='heroSection'>
            <div className='heroSection-top'>
                <div className='heroSection-top-container'>
                    <div className='rewardPoint-container'>
                         <div className='rewardPoint'> 
                            {data.rewardPoint.toLocaleString('en-IN')}
                         </div>

                         <div className='arrow'>
                             <img src={arrowCircle} alt='arrowCircle'/>
                         </div>
                    </div>

                    <div className='rewardPoint-name'>
                        Reward Points
                    </div>
                </div>
            </div>

            <div className='heroSection-body'>

                <div className='card-container'>
                    <div className='your-card-button'>
                        
                        <div className='your-text'>
                            your
                        </div>

                        <div className='card-text'>
                            card
                        </div>

                        <div className='arrowRectangle'>
                            <img src={arrowRectangle} alt='arr'/>
                        </div>

                    </div>
                    <img src={card} className='card' alt='card'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default homeHeroSection
