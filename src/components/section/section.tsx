import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { Product } from ".."
import useOnScreen from "../../hooks/use-on-screen"
import { SectionData } from "../../types"
import styles from './section.module.scss'

type SectionProps = {
  sectionData: SectionData
  setActiveMenu: Dispatch<SetStateAction<string>>
}
const Section = (props: SectionProps) => {
  const { sectionData, setActiveMenu } = props

  const sectionRef = useRef<HTMLHeadingElement>(null)

  const isOnScreen = useOnScreen(sectionRef)

  useEffect(() => {
    if (isOnScreen) {
      setActiveMenu(sectionData.id.toString())
    }
  }, [isOnScreen])

  return (
    <div id={`section__${sectionData.id}`} style={{ marginBottom: '1rem'}}>
      <h1 style={{ marginTop: '1rem' }} ref={sectionRef}>{sectionData.label}</h1>
      <p>{sectionData.description}</p>
      <div className={styles.itemList}>
        {sectionData.items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Section
