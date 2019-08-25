import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getProducts} from "../actions/products";
import {Link} from "react-router-dom";

class ProductList extends PureComponent {

    UNSAFE_componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        this.props.getProducts()
    }

    renderProducts = (product) => {
        return (
            <div>
                <Link to={`/productList/${product.id}`}>
                    <div key={product.id}>
                        PRODUCT ID {product.id}
                    </div>
                </Link>
            </div>
        )
    };

    render() {
        const {products} = this.props;

        return (
            <div>
                {products.map((product, index) =>
                    this.renderProducts(product, index))}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, {getProducts})(ProductList);
