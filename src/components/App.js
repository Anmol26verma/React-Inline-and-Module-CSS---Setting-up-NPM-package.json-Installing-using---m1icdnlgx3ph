import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyles.module.css';
const App = () => {
const heading ={


}
  return (
    <div id="main">
      <h1 className={styles.success}>Success</h1> {/* Using CSS Modules */}
      <h1 style={{ fontSize: '50px', color: 'red' }}>Error</h1> {/* Using Inline CSS */}
    </div>
  )
}


export default App;
