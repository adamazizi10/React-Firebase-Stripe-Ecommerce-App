import { createContext } from "react";

export const CategoriesContext = createContext({
    categoriesMap: [],
    setCategoriesMap: () => null
})