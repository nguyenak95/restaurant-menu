import classNames from "classnames"
import { MenuData } from "../../types"
import styles from "./menu-item.module.scss"

type MenuItemProps = {
  menuData: MenuData
  activeMenu: string
}

const MenuItem = (props: MenuItemProps) => {
  const { menuData, activeMenu } = props


  const renderList = (id: string, label: string) => {
    const handleClick = () => {
      const section = document.getElementById(`section__${id}`)
      if (section) {
        const fromTop = section.offsetTop
        console.log(section, fromTop)
        window.scrollTo({ top: fromTop, behavior: 'smooth' })
      }
    }
    return (
      <li
        onClick={handleClick}
        key={id}
        className={classNames(styles.menuItem, {
          [styles.activeBorder]: activeMenu === id,
        })}
      >
        <div>{label}</div>
      </li>
    )
  }
  return (
    <ul>
      {menuData.sections.map((section) =>
        section.items.length > 0
          ? renderList(String(section.id), section.label)
          : section.subSections.map((subSection) =>
              renderList(`${section.id}${subSection.id}`, `${section.label} / ${subSection.label}`)
            )
      )}
    </ul>
  )
}

export default MenuItem
