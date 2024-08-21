// import React from 'react';
// import { Element } from 'react-scroll';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import OurFood from './components/OurFood/OurFood';
// import Studies from './components/Studies/Studies';
// import Header from './components/Header/Header';
// import Ingredients from './components/Ingredients/Ingredients';
// import styles from './App.module.css';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Element name="header">
//         <Header />
//       </Element>
//       <Element name="ourfood">
//         <OurFood />
//       </Element>
//       <Element name="ingredients">
//         <Ingredients />
//       </Element>
//       <Element name="studies">
//         <Studies />
//       </Element>
//       <Element name="footer">
//         <Footer />
//       </Element>
//       </div>
//   );
// };

// export default App;


import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import OurFood from './components/OurFood/OurFood';
import Studies from './components/Studies/Studies';
import Header from './components/Header/Header';
import Ingredients from './components/Ingredients/Ingredients';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <div className={styles.content}>
        <Element name="header">
          <Header />
        </Element>
        <Element name="ourfood">
          <OurFood />
        </Element>
        <Element name="ingredients">
          <Ingredients />
        </Element>
        <Element name="studies">
          <Studies />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    </div>
  );
};

export default App;
