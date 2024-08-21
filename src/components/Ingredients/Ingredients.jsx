import React from 'react';
import { comp2 } from '../../assets';
import styles from './Ingredients.module.css';

const Ingredients = () => {
  return (
    <div id='ingredients' className='bg-custom-bg'>
<div className="flex justify-center mt-[-55%] sm:mt-[-38%] md:mt-[-40%] lg:mt-[-15%] h-[40%] w-[25%] ml-[37%] top-[-30%] ">
<img src={comp2} alt="Ingredient" />
        <img src={comp2} alt="Ingredient" />
        <img src={comp2} alt="Ingredient" />
        <img src={comp2} alt="Ingredient" />
      </div>
    </div>
  );
};

export default Ingredients;
