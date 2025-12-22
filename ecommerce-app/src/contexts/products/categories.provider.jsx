import { useState, useEffect } from "react"
import SHOP_DATA from "../../../shop-data.js"
import { CategoriesContext } from "./categories.context.jsx"
import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js"

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState([])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, []);
    const value = { categoriesMap, setCategoriesMap }
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}