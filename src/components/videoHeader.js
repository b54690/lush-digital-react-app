import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getProductVideo} from "../actions/productVideo";
import {getProduct} from "../actions/products";

class VideoHeader extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            productId: Number((window.location.href).split('/').pop())
    }
    }

    componentDidMount() {
        this.props.getProductVideo(this.state.productId);
    }

    render() {
        const {video, product} = this.props;

        return (
            <div className="bg-video">
                <video id="vid" className="bg-video__content" autoPlay muted loop>
                    <source src={video} type='video/mp4'/>
                </video>
                <div className="u-center-text">
                    <h2 className="heading-primary">
                        <span className="heading-primary__span">
                            {product.title}
                        </span>
                    </h2>
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

export default connect(mapStateToProps, {getProductVideo, getProduct})(VideoHeader)
