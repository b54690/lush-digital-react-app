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

    renderProducts = (product, index) => {
        return (
            <div className="row" key={index}>
                <div className="col-1-of-5">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture"
                                 style={{backgroundImage: `url(${product.media.hero_image})`}}>&nbsp;</div>
                            <h4 className="card__heading"><span
                                className="card__heading-span">{product.title}</span></h4>
                            <div className="card__details">
                                <ul>
                                    <li><strong>{product.product_type}</strong></li>
                                    <li><i>{product.description}</i></li>
                                    <li>{product.certification}</li>
                                    <li>{product.average_rating}</li>
                                    <li>{product.average_rating_percentage}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$297</p>
                                </div>
                                <Link to={`/productList/${product.id}`}>
                                    <a href="#" className="btn btn--white">Find out more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        const {products} = this.props;

        return (
            products.map((product, index) =>
                this.renderProducts(product, index))
        )
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, {getProducts})(ProductList);
