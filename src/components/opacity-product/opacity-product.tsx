import { Button, Col, Row } from "antd"
import React from "react"
import { ItemData } from "../../types"
import { BodoniText } from "../bodoni-text"
import styles from "./opacity-product.module.scss"

type ProductProps = {
  item: ItemData
}

const OpacityProduct = (props: ProductProps) => {
  const { item } = props

  return (
    <Row className={styles.itemWrapper}>
      <Col span={12}>
        <img className={styles.itemImg} src={item.imageUrl} alt={item.label} />
      </Col>
      <Col className={styles.infoLayout} span={12}>
        <div>
          <p className={styles.label}>
            <BodoniText>{item.label}</BodoniText>
          </p>
          <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </div>
        <Col className={styles.itemPrice}>
          <div>{`${item.currency} ${item.unitPriceFractional / 1000}`}</div>
          <div>
            <Button danger type="primary">
              Not available
            </Button>
          </div>
        </Col>
      </Col>
    </Row>
  )
}

export default OpacityProduct
