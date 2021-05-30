import { Route } from 'react-router-dom';
import Header from './plugins/header/js/Header';
import Resume from './plugins/resume/js/Resume';
import styles from'./App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Route path="/resume">
        <Resume />
      </Route>
    </div>
  );
}

export default App;
