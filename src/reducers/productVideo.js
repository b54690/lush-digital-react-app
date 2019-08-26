import {GET_PRODUCT_VIDEO} from "../actions/productVideo";

export default (state = [], {type, payload}) => {
    if (type === GET_PRODUCT_VIDEO) {
        return payload;
    } else {
        return state
    }
}
