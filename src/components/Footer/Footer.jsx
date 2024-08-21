

import React from 'react'
import { rect2} from '../../assets'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div id='footer' className={styles.footer}>
      <div className="flex flex-col items-center justify-center h-full mt-40">
        <p className='mb-4 mr-40 text-[30px] mt-7'>friskay</p>
        <div className="flex items-center">
        <h2 className="font-extrabold font-inter text-[30px] md:text-[38px] lg:text-[47px]">
  Are you ready to <br /> go bonkers?
</h2>
<button className="bg-custom-accent p-[8px] md:p-[13px] rounded ml-10 md:ml-10 lg:ml-40 font-inter font-bold text-[17px] md:text-[20px] lg:text-[27px]">
            Get Bonkers
          </button>
        </div>
      </div>
      <img src={rect2} className={styles.rect} />
      <div className={styles.overlayText}>Get It Meow!!</div>

    </div>
  )
}

export default Footer
