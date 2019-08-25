import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getProduct} from "../actions/products";
import {Link} from "react-router-dom";

class ProductDetail extends PureComponent {

    state = {
        productId: Number((window.location.href).split('/').pop())
    };

    UNSAFE_componentWillMount() {
        this.props.getProduct(this.state.productId);
    }

    render() {
        const {product} = this.props;
        console.log(product);
        return(
            <div>
                <Link to={`/productList`}>
                    <div key={product.id}>
                        PRODUCT ID {product.id}
                    </div>
                </Link>
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
