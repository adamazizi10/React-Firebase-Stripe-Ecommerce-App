import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from "./categories-preview/categories-preview.route";
import Category from './category/category.route';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch()

    
        useEffect(() => {
            const getCategoriesMap = async () => {
                const category = await getCategoriesAndDocuments()
                dispatch(setCategories(category))
            }
            getCategoriesMap()
        }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=':category' element={<Category />}/>
        </Routes>
    )
}

export default Shop;