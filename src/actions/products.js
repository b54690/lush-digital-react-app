import {baseUrl} from "../config/config";
import * as request from 'superagent'

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';

export const getProducts = () => (dispatch) => {

    request
        .get(`${baseUrl}`)
        .then(response => dispatch({
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            type: GET_PRODUCTS,
            payload: response.body
        }))
        .catch(error => console.log(error))
};

export const getProduct = (productId) => (dispatch) => {

    request
        .get(`${baseUrl}/${productId}`)
        .then(response => {
            dispatch({
                type: GET_PRODUCT,
                payload: response.body
            })
        })
        .catch(err => console.log(err))
};
