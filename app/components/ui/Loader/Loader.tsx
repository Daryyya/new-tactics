import React, { useEffect, useRef } from 'react'

import styles from './Loader.module.scss'



const Loader = () => {

  const loaderRef = useRef<any>()

  useEffect(() => {
    loaderRef.current.scrollIntoView()
  }, [])

  return (
    <div ref={loaderRef} className={styles.loader}>
      <div className={styles.ldsFacebook}>
        <div />
        <div />
        <div />
      </div>
    </div>
    
  )
}

export default Loader