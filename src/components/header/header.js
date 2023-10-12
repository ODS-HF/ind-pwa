import React from 'react'
import indusInd from '../../assets/images/home/IndusInd_Bank_SVG_Logo 1.svg'
import cardGrad from '../../assets/images/home/Logo.svg'
import pattern from '../../assets/images/home/Patterns.svg'
import '../header/header.css'

const header = () => {
  const data = {
    rewardPoints: 1565
  }

  return (
    <>
        <div className='header-top'>
              <div className='header-content'>
                  <div>
                      <img src={indusInd} className="header-name" alt='headerName'/>
                  </div>
                  
                  <div className='action-container'>
                    <div className='action-button'>
                        <div className='gradient'>
                          <img src={cardGrad} alt='card'/>
                        </div>
                        <div className='action-text'>Aura Edge</div>
                    </div>
                  </div>
              </div>
        </div>
        
        {/* <div className='header-body'>
              <div className='Background'>
                  <div className='pattern'>
                      <img src={pattern} alt='pattern'/>
                  </div> 
              </div>

              <div className='card-content'>
                    <div className='reward-point-container'>
                          <div className='reward-point'>
                              <div className='point-content'>
                                    {data.rewardPoints}
                              </div>
                          </div>
                    </div>
              </div>
        </div> */}

          
        
    </>
     
  )
}

export default header
