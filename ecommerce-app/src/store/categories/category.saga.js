import { takeLatest, all, call, put } from 'redux-saga/effects'
import { CATEGORIES_ACTION_TYPES } from './category.types'
import { getCategoriesAndDocuments } from '../../utils/firebase.utils'
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action'


export function* fetchCategoriesAsync() {
    try {
        const categoryArray = yield call(getCategoriesAndDocuments, 'categories')
        yield put(fetchCategoriesSuccess(categoryArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))

    }
}


export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIE_START, fetchCategoriesAsync)
}




export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}