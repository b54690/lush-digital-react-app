import * as request from "superagent";
import {baseUrl} from "../config/config";

export const GET_PRODUCT_VIDEO = 'GET_PRODUCT_VIDEO';

export const getProductVideo = (productId) => (dispatch) => {

    request
        .get(`${baseUrl}/${productId}`)
        .then(async response => {
            await dispatch({
                type: GET_PRODUCT_VIDEO,
                payload: response.body.media.hero_video
            })
        })
        .catch(err => console.log(err))
};
