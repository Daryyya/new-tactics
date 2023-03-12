import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Success.module.scss'
import { success } from '@/assets/images/widgets'

const Success = () => {
  const blockRef = useRef<any>()

  useEffect(() => {
    blockRef.current.scrollIntoView()
  }, [])

  return (
    <>
    <div ref={blockRef} className={styles.success}>
        <Image src={success} alt="успех" ></Image>
        <h1>Заявка отправлена успешно!!!</h1>
        <Link className={styles.homeLink} href="/" >Вернуться на главную</Link>
    </div>
    </>
    
  )
}

export default Success