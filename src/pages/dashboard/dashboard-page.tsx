import React from "react"
import { Link } from "react-router-dom"
import styles from './dashboard-page.module.scss'

const Dashboard = () => {
  return (
    <div className={styles.wrapper} style={{ fontSize: 40 }}>
      <h1>Welcome to my project</h1>
      <p>Author: Khang Nguyen</p>
      <p>Email: nguyenak95@gmail.com</p>
      <Link to="menu">Navigate to Menu page</Link>
    </div>
  )
}

export default Dashboard
