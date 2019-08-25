import {GET_PRODUCT} from "../actions/products";

export default (state = [], {type, payload}) => {
    if (type === GET_PRODUCT) {
        return payload;
    } else {
        return state
    }
}
