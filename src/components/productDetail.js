import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getProduct} from "../actions/products";
import {getProductVideo} from "../actions/productVideo";

class ProductDetail extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            productId: Number((window.location.href).split('/').pop())
        }
    }

    componentDidMount() {
        this.props.getProduct(this.state.productId);
        this.props.getProductVideo(this.state.productId);
    }

    componentWillUnmount() {
    }

    render() {
        const {product, video} = this.props;
        console.log(video)
        return (
            <div className="section-product-detail">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={video} type='video/mp4'/>
                    </video>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        video: state.productVideo,
        product: state.product
    }
};

export default connect(mapStateToProps, {getProduct, getProductVideo})(ProductDetail)
