import { useFirestoreConnect } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProductPaginated } from '../store/actions/productAction';


const useFetchProducts = (fbQueryFn, { brand, search }) => {
    const dispatch = useDispatch();
    useFirestoreConnect(fbQueryFn);

    const state = useSelector(({ firestore: { ordered }, product }) => {
        const stateObj = {
            products: [...(ordered.products || [null]), ...product.products],
            isLoading: product.fetch_progress
        };
        const productLength = stateObj.products.length;

        return { 
            ...stateObj,
            isProductPagEmpty: product.isProductPagEmpty, 
            productLength        
        }
    });

    const handleLoadMore = () => (
        dispatch(
            fetchProductPaginated(
                state.products[state.products.length-1].timestamp,
                brand,
                search
            )
        )
    );

    return {
        ...state,
        fetchMore: handleLoadMore
    };
}

export default useFetchProducts;
