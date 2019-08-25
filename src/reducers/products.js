import {GET_PRODUCT, GET_PRODUCTS} from "../actions/products";

export default (state = [], {type, payload}) => {
    switch (type) {
        case GET_PRODUCT:
            return payload;

        case GET_PRODUCTS:
            return payload;

        default:
            return state
    }
}
