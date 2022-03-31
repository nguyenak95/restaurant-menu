import { Button, Col } from "antd"
import React, { useContext } from "react"
import { MenuContext } from "../../context/menu-context"
import { ItemData } from "../../types"
import { BodoniText } from "../bodoni-text"
import styles from "./product.module.scss"

type ProductProps = {
  item: ItemData
}

const Product = (props: ProductProps) => {
  const modalMethods = useContext(MenuContext)
  const { item } = props
  const handleClickItem = () => {
    if (modalMethods) {
      modalMethods.setModalData(item)
      modalMethods.setIsModalOpen(true)
    }
  }
  const ellipsisText = item.description
    ? item.description.replaceAll("<br />", "\n").slice(0, 70)
    : ""
  return (
    <div className={styles.productCard} onClick={handleClickItem}>
      <Col>
        <img className={styles.itemImg} src={item.imageUrl} alt={item.label} />
      </Col>
      <Col className={styles.itemInfo}>
        <div>
          <p className={styles.label}>
            <BodoniText>{item.label}</BodoniText>
          </p>
          <p dangerouslySetInnerHTML={{ __html: ellipsisText }} />
        </div>
        <div className={styles.itemPrice}>
          <div>{`${item.currency} ${item.unitPriceFractional / 1000}`}</div>
          <div>
            <Button danger type="primary">
              Add
            </Button>
          </div>
        </div>
      </Col>
    </div>
  )
}

export default Product
