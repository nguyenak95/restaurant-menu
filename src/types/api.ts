export type SubSectionData = {
  description: string
  disabled: boolean
  disabledReason: string | null
  displayOrder: number
  id: number
  items: ItemData[]
  label: string
}

export type ItemData = {
  currency: string
  description: string
  displayOrder: number
  id: number
  imageUrl: string
  itemStock: { quantityLeft: number }
  label: string
  unitPriceFractional: number
}

export type SectionData = {
  description: string
  disabled: boolean
  disabledReason: string | null
  displayOrder: number
  id: number
  items: ItemData[]
  label: string
  subSections: SubSectionData[]
}

export type MenuData = {
  endDate: string
  id: number
  sections: SectionData[]
  startDate: string
}
