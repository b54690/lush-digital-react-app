import {GET_PRODUCTS} from "../actions/products";

export default (state = [], {type, payload}) => {
    if (type === GET_PRODUCTS) {
        return payload;
    } else {
        return state
    }
}
