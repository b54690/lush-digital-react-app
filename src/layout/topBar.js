import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const TopBar = (props) => {
    const {location, history} = props;

    return (
        <nav>
            <div>
                {
                    location.pathname.indexOf('productList') > 0 &&
                    <button onClick={() => history.go(-1)}>All Products</button>
                }
            </div>
        </nav>
    )
};

export default withRouter(
    connect()(TopBar)
)
