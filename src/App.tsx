import React from 'react';
import styles from './App.module.scss';
import AppRoute from './route';

function App() {
  return (
    <div className={styles.app}>
      <AppRoute />
    </div>
  );
}

export default App;
