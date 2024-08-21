import React from 'react';
import { rectangle, bowl, fact1, fact3 } from '../../assets';
import styles from './Studies.module.css';

const Studies = () => {
  return (
    <div id='studies' className='bg-custom-bg'>
      <div className={styles.container}>
        <img src={bowl} alt="cat bowl" className={styles.bowl} />
        <img src={rectangle} alt="Rectangle box" className={styles.rectangle} />
        <div className={styles.factImages}>
          <div className={`${styles.column} ${styles.columnLeft}`}>
            <img src={fact1} alt="Fact 1" className={`${styles.factImage} ${styles.factImage1}`} />
            <p>Free from artificial colors, flavors, and preservatives, our <br/>
              cat food offers a natural and nutritious diet for your <br/>
              feline friend.</p>
            <img src={fact3} alt="Fact 3" className={`${styles.factImage} ${styles.factImage2}`} />
            <p>Enriched with omega-3 and omega-6 fatty acids,<br/>
              it promotes a shiny coat and healthy skin, making<br/>
              it ideal for cats with sensitive skin.</p>
          </div>
          <div className={`${styles.column} ${styles.columnRight}`}>
            <img src={fact1} alt="Fact 1" className={`${styles.factImage} ${styles.factImage3}`} />
            <p>Packed with high-quality protein, our new cat food<br/>
              supports strong muscles and a healthy heart in cats<br/>
              of all ages.</p>
            <img src={fact3} alt="Fact 3" className={`${styles.factImage} ${styles.factImage4}`} />
            <p>Formulated with prebiotics and probiotics, this cat<br/>
              food aids in digestion and supports a balanced gut<br/>
              microbiome.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;



// import React from 'react';
// import { rectangle, bowl, fact1, fact3 } from '../../assets';

// const Studies = () => {
//   return (
//     <div id='studies' className='bg-custom-bg'>
//       <div className="relative md:h-screen lg:h-screen">
//         <img src={rectangle} alt="Rectangle box" className="absolute w-full h-full" />
//         <img src={bowl} alt="cat bowl" className="absolute top-0 w-1/2 md:w-1/3 lg:w-1/4" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 md:p-20 lg:p-30">
//           <div className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-30">
//             <div className="flex flex-col gap-5 md:gap-10 lg:gap-15">
//               <img src={fact1} alt="Fact 1" className="w-20 md:w-30 lg:w-40" />
//               <p className="text-justify">Free from artificial colors, flavors, and preservatives, our cat food offers a natural and nutritious diet for your feline friend.</p>
//               <img src={fact3} alt="Fact 3" className="w-20 md:w-30 lg:w-40" />
//               <p className="text-justify">Enriched with omega-3 and omega-6 fatty acids, it promotes a shiny coat and healthy skin, making it ideal for cats with sensitive skin.</p>
//             </div>
//             <div className="flex flex-col gap-5 md:gap-10 lg:gap-15">
//               <img src={fact1} alt="Fact 1" className="w-20 md:w-30 lg:w-40" />
//               <p className="text-justify">Packed with high-quality protein, our new cat food supports strong muscles and a healthy heart in cats of all ages.</p>
//               <img src={fact3} alt="Fact 3" className="w-20 md:w-30 lg:w-40" />
//               <p className="text-justify">Formulated with prebiotics and probiotics, this cat food aids in digestion and supports a balanced gut microbiome.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Studies;
