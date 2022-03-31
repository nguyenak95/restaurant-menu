import { RESTAURANT_API } from "../constants/url"
import handleErrors from "../helpers/handle-api-error"
import { MenuData } from "../types"

export const getMenuItems = async (): Promise<MenuData> => {
    const result = await fetch(`${RESTAURANT_API}menu`).then(handleErrors).then(res => res.json()).catch((errorMessage) => {
        alert(errorMessage)
        return null
    })
    return result
}