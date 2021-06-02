/* import { Route } from 'react-router-dom'; */
import { useState } from 'react';
import Header from './plugins/header/js/Header';
import About from './plugins/about/js/About';
import Resume from './plugins/resume/js/Resume';
import ExtraCurricular from './plugins/extra-curricular/js/ExtraCurricular';
import Contact from './plugins/contact/js/Contact';
import styles from'./App.module.scss';

function App() {
  const [navPath, setNavPath] = useState(window.location.hash);

  const navigationHandeler = (path) => {
    setNavPath(path);
  }

  return (
    <div className={styles.App}>
      <Header navigationHandeler={navigationHandeler}/>
      {/*Routing is not working in gh-pages <Route path="/resume">
        <Resume />
      </Route> */}
      {(navPath === "#about" || navPath === "#home") && (
        <About />
      )}
      {navPath === "#resume" && (
        <Resume />
      )}
      {navPath === "#extra-curricular" && (
        <ExtraCurricular />
      )}
      {navPath === "#contact" && (
        <Contact />
      )}
      
    </div>
  );
}

export default App;
