import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

import styles from './Reviews.module.scss'

import { reviewPlaceholder, yandexLogo } from '@/assets/images/home'

import { IReviewItem } from '@/utils/reviews.data'



const ReviewsItem: FC<IReviewItem> = ({name, text, imageUrl}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={styles.review}
  >
    <div className={styles.reviewTop}>
      <div className={styles.reviewer}>
        <Image 
          className={styles.image}
          src={imageUrl ? imageUrl : reviewPlaceholder}
          alt="клиент"
        />
        <h4>{name}</h4>
      </div>
      <Link target="_bla" className={styles.yandexLink} href="https://yandex.ru/maps/org/program_tactics/105364278197/reviews/?ll=37.683053%2C55.746464&z=14">
        <span>Смотреть отзыв</span>
        <Image src={yandexLogo} alt="Яндекс" />
      </Link>
    </div>
    <div className={styles.reviewsContent}>
      <p>
      {text}
      </p>
    </div>
  </motion.div>
  )
}

export default ReviewsItem