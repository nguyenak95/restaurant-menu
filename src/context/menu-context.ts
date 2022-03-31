import { createContext, Dispatch, SetStateAction } from "react"
import { ItemData } from "../types"

type ContextType = {
    setModalData: Dispatch<SetStateAction<ItemData | null>>
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
} | null
export const MenuContext = createContext<ContextType>(null)
