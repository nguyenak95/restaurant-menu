import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Col, Modal, Row } from "antd"
import { ItemData } from "../../types"
import { BodoniText } from "../bodoni-text"
import styles from "./product-details.module.scss"

type ProductDetailsProps = {
  item: ItemData
  isOpen: boolean
  toggleModal: () => void
}

const ProductDetails = (props: ProductDetailsProps) => {
  const { item, isOpen, toggleModal } = props
  return (
    <Modal
      visible={isOpen}
      bodyStyle={{ height: 700, padding: 0 }}
      footer={null}
      width={1000}
      onCancel={toggleModal}
    >
      <Row style={{ height: "100%" }}>
        <Col span={12}>
          <img
            className={styles.itemImg}
            src={item.imageUrl}
            alt={item.label}
          />
        </Col>
        <Col className={styles.infoLayout} span={12}>
          <div className={styles.info}>
            <p className={styles.label}>
              <BodoniText>{item.label}</BodoniText>
            </p>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </div>
          <Row className={styles.actionButton}>
            <Col span={5}>
              <div className={styles.quantity}>
                <PlusOutlined/>
                <div>1</div>
                <MinusOutlined/>
              </div>
            </Col>
            <Col span={18}>
              <Button block type="primary" danger>
                <span>{`${item.currency} ${
                  item.unitPriceFractional / 1000
                }`}</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

export default ProductDetails
