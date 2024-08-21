// import React from 'react';
// import { cat_circle, cat, Bonkers } from '../../assets';

// const Header = () => {
//   return (
//     <header >
//       <div className="bg-custom-bg p-6 relative font-inter ">
//         <div className='mt-[100px] ml-[100px]'>
//         <h1 className="font-inter font-bold text-[100px] leading-[1.2] z-10 relative">Your cat will go</h1>
//         <img src={Bonkers} 
//         alt='Bonkers'/>
//         <p className="mt-10">
//           ...for the world's best testing cat food, sourced with <br />
//           the finest ingredients. Made with love from the <br />
//           heart of Mississippi.
//         </p>
//         <button className='bg-custom-accent p-[10px] rounded mt-14 font-inter font-bold text-[25px]' >Get Bonkers</button>
//         </div>
//         <img
//           src={cat_circle}
//           alt="Outer"
//           className="absolute top-0 right-1 w-[700px] h-[700px]"
//         />
//         <img
//           src={cat}
//           alt="Inner"
//           className="absolute top-10 right-20 w-[550px] h-[550px]"
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { cat_circle, cat, Bonkers } from '../../assets';

const Header = () => {
  return (
    <header className='mt-0'>
      <div className="bg-custom-bg p-6 relative font-inter">
        <div className="relative text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-inter font-bold text-[80px] leading-[1.2] z-10 relative md:top-[0px]">
            Your cat will go
          </h1>
          <img
            src={Bonkers}
            alt="Bonkers"
            className="w-[200px] h-[90px] lg:w-[250px] lg:h-[100px] mx-auto md:mx-0 mb-10 z-10 relative"
          />
          <p className="mt-10 md:text-[16px] lg:text-[19px]">
            ...for the world's best testing cat food, sourced with <br />
            the finest ingredients. Made with love from the <br />
            heart of Mississippi.
          </p>
          {/* Button */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20  mt-10">
            <div className="flex justify-center md:justify-end">
              <button
                className="bg-custom-accent p-[10px] rounded font-inter font-bold text-[20px] lg:text-[28px]"
              >
                Get Bonkers
              </button>
            </div>
          </div>
          {/* Image Positioning */}
          <div className="relative md:flex justify-center md:justify-end mt-10">
            <img
              src={cat}
              alt="Inner"
              className="cat-image sm:ml- ms-40 md:translate-y-[-400px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] md:ml-20"
              />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

