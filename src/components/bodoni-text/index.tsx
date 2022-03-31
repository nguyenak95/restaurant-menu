import { ReactNode } from 'react'
import styles from './bodoni-text.module.scss'

export const BodoniText = ({ children }: { children: ReactNode }) => {
  return (
    <span className={styles.text} >{children}</span>
  )
}
