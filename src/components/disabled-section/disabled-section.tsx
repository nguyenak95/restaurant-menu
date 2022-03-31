import React, { Dispatch, SetStateAction, useEffect, useRef } from "react"
import useOnScreen from "../../hooks/use-on-screen"
import { SectionData } from "../../types"
import OpacityProduct from "../opacity-product"
import styles from './disabled-section.module.scss'

type DisabledSectionProps = {
  sectionData: SectionData
  setActiveMenu: Dispatch<SetStateAction<string>>
}
const DisabledSection = (props: DisabledSectionProps) => {
  const { sectionData, setActiveMenu } = props

  const sectionRef = useRef<HTMLHeadingElement>(null)

  const isOnScreen = useOnScreen(sectionRef)

  useEffect(() => {
    if (isOnScreen) {
      setActiveMenu(sectionData.id.toString())
    }
  }, [isOnScreen])

  return (
    <div id={`section__${sectionData.id}`} className={styles.disabledSection}>
      <h1 style={{ marginTop: '1rem' }} ref={sectionRef}>{sectionData.label}</h1>
      <p style={{ color: '#c33e38'}}>{sectionData.disabledReason}</p>
      <div>
      <OpacityProduct item={sectionData.items[0]} />
      </div>
    </div>
  )
}

export default DisabledSection
