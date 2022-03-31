import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import { getMenuItems } from "../../apis/menu-api"
import { ProductDetails, Section, SubSection } from "../../components"
import DisabledSection from "../../components/disabled-section"
import MenuItem from "../../components/menu-item"
import { MenuContext } from "../../context/menu-context"
import { ItemData, MenuData, SectionData } from "../../types"
import styles from "./menu-page.module.scss"

const MenuPage = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [modalData, setModalData] = useState<ItemData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("")

  const fetchMenuData = async () => {
    const menuItems = await getMenuItems()
    setMenuData(menuItems)
    const { sections } = menuItems
    if (menuItems.sections.length > 0) {
      setActiveMenu(sections[0].id.toString())
    } else {
      setActiveMenu(`${sections[0].id}${sections[0].subSections[0].id}`)
    }
    setIsLoading(false)
  }
  const toggleModal = () => setIsModalOpen((s) => !s)
  const renderSection = (data: SectionData) => {
    return !data.disabled ? (
      <Section sectionData={data} key={data.id} setActiveMenu={setActiveMenu} />
    ) : (
      <DisabledSection sectionData={data} key={data.id} setActiveMenu={setActiveMenu} />
    )
  }

  useEffect(() => {
    fetchMenuData()
  }, [])

  if (isLoading) return <h1>Loading</h1>

  return !menuData ? (
    <h1>Not found menu data</h1>
  ) : (
    <MenuContext.Provider value={{ setModalData, setIsModalOpen }}>
      <Row className={styles.layout}>
        <Col className={styles.menuBar} xl={6} sm={8} xs={12}>
          <MenuItem menuData={menuData} activeMenu={activeMenu} />
        </Col>
        <Col xl={18} className={styles.itemList} sm={16} xs={12}>
          {menuData.sections.map((section) =>
            section.items.length > 0 ? renderSection(section) : (
              section.subSections.map((subSection) => (
                <SubSection
                  subSectionData={subSection}
                  sectionLabel={section.label}
                  sectionId={section.id}
                  setActiveMenu={setActiveMenu}
                />
              ))
            )
          )}
          {isModalOpen && modalData && (
            <ProductDetails
              item={modalData}
              isOpen={isModalOpen}
              toggleModal={toggleModal}
            />
          )}
        </Col>
      </Row>
    </MenuContext.Provider>
  )
}

export default MenuPage
