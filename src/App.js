/* import { Route } from 'react-router-dom'; */
import { useState } from 'react';
import Header from './plugins/header/js/Header';
import Resume from './plugins/resume/js/Resume';
import styles from'./App.module.scss';

function App() {
  const [navPath, setNavPath] = useState("");

  const navigationHandeler = (path) => {
    setNavPath(path);
  }

  return (
    <div className={styles.App}>
      <Header navigationHandeler={navigationHandeler}/>
      {/*Routing is not working in gh-pages <Route path="/resume">
        <Resume />
      </Route> */}
      {navPath === "#resume" && (
        <Resume />
      )}

    </div>
  );
}

export default App;
