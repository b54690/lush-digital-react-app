import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getProduct} from "../actions/products";
import {getProductVideo} from "../actions/productVideo";
import VideoHeader from "./videoHeader";

class ProductDetail extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            productId: Number((window.location.href).split('/').pop())
        }
    }

    componentDidMount() {
        this.props.getProduct(this.state.productId);
    }


    render() {
        const {product} = this.props;

        return (
            <div>
                <header>{product.name}</header>
                <VideoHeader/>
            </div>

        )
    }
}

const mapStateToProps = function (state) {
    return {
        product: state.product
    }
};

export default connect(mapStateToProps, {getProduct, getProductVideo})(ProductDetail)
