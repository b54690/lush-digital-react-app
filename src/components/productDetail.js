import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getProduct} from "../actions/products";

class ProductDetail extends PureComponent {

    state = {
        productId: Number((window.location.href).split('/').pop()),
        edit: false
    };

    componentWillMount() {
        this.props.getProduct(this.state.productId);
    }

    getProduct() {
    }

    render() {
        const {product} = this.props;
        console.log(product);
        return(
            <div>
                <div key={product.id}>
                    PRODUCT ID {product.id}
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        product: state.product
    }
};

export default connect(mapStateToProps, {getProduct})(ProductDetail)
