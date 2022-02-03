import React from 'react'
import styles from "./PRedux.module.scss"

const PRedux = () => {
  return (
    <>
      <div className={styles.add_user}>
        <input type="text" placeholder="Name..."/>
        <input type="text" placeholder="Username..."/>
        <button>Add User</button>
      </div>
      <div className={styles.display_users}></div>
    </>
  )
}

export default PRedux
