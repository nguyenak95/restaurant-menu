import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { Product } from ".."
import useOnScreen from "../../hooks/use-on-screen"
import { SubSectionData } from "../../types"
import styles from './sub-section.module.scss'

type SubSectionProps = {
  subSectionData: SubSectionData
  setActiveMenu: Dispatch<SetStateAction<string>>
  sectionLabel: string
  sectionId: number
}

const SubSection = (props: SubSectionProps) => {
  const { subSectionData, setActiveMenu, sectionLabel, sectionId } = props

  const sectionRef = useRef<HTMLHeadingElement>(null)

  const isOnScreen = useOnScreen(sectionRef)

  useEffect(() => {
    if (isOnScreen) {
      setActiveMenu(`${sectionId}${subSectionData.id}`)
    }
  }, [isOnScreen])


  return (
    <div id={`section__${sectionId}${subSectionData.id}`} style={{ paddingBottom: '1rem'}}>
      <h1 style={{ marginTop: '1rem' }} ref={sectionRef}>{`${sectionLabel} / ${subSectionData.label}`}</h1>
      <p>{subSectionData.description}</p>
      <div className={styles.itemList}>
        {subSectionData.items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default SubSection