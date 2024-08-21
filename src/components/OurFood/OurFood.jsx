// import React from 'react';
// import { human_circle, human, bgcolor_circle } from '../../assets';
// import styles from './OurFood.module.css'

// const OurFood = () => {
//   return (
//     <div id="ourfood">
//     <div className='bg-custom-bg z-10'>
//       <div className='container'>
//         <div className="flex justify-center items-center h-screen relative top-60">
//           <p className={styles.font}>
//             Veterinarians go bonkers for our <br />
//             tasty kitty formula.
//           </p>
//           <div className={styles['cat-paw-line']}></div>
//           <img
//   src={human_circle}
//   alt="Outer"
//   className="absolute w-[700px] h-[700px] md:w-[500px] md:h-[500px] sm:w-[350px] sm:h-[50px] top-[0px]"
// />

//           <img
//             src={human}
//             alt="Inner"
//             className="absolute w-[450px] h-[450px] z-10 bottom-56.5"
//           />
//           <img
//             src={bgcolor_circle}
//             alt="Inner"
//             className="absolute w-[400px] h-[400px] top-20"
//           />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default OurFood;


import React from 'react';
import { human_circle, human, bgcolor_circle, cat_paw } from '../../assets';

const OurFood = () => {
  return (
<div id="ourfood" className="bg-custom-bg z-10 ">
<div className="relative top-10 h-screen">
        <div className="flex justify-center items-center h-screen relative">
        <p className="
  font-bold text-center z-10 absolute
  top-[-5%] sm:top-[-5%] md:top-[-45%] lg:top-[-51%]
  text-[25px] sm:text-[30px] md:text-[40px] lg:text-[55px]
  font-[Inter, Sans-serif]
  w-full text-center
  flex items-center justify-center
">
  Veterinarians go bonkers for our <br />
  tasty kitty formula.
</p>
          <div
  className="absolute top-[26%] h-[9%] sm:h-[12%] left-0 h-[21%] w-full z-10 md:top-[5%] md:h-[14.5%] lg:top-[10%] lg:h-[20%]"
  style={{
    backgroundImage: `url(${cat_paw})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
  }}
></div>          <img src={human_circle} alt="Outer" className="absolute w-[320px] top-20 h-[320px] md:top-[-23%] md:w-[500px] md:h-[500px] lg:w-[560px] lg:h-[610px] top-0 sm:top-[10%]" />
          <img src={human} alt="Inner" className="absolute w-[220px] top-[18%] h-[210px]  sm:top-30 sm:w-[270px] sm:h-[250px] md:top-[-6%] md:w-[320px] md:h-[310px] lg:w-[450px] lg:h-[450px] z-10 lg:top-[-10%]" />
          <img src={bgcolor_circle} alt="Inner" className="absolute w-[230px] h-[220px] sm:top-[13%] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] md:top-[-15%] lg:w-[420px] lg:h-[440px] top-20 sm:top-[40%]" />

        </div>
      </div>
    </div>
  );
}

export default OurFood;

