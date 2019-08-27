import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const {location, history} = props;

    return (
        <nav className="nav">
            <div className="nav__container">
                <Link to='/' className="nav__container-logo">LUSH</Link>
                {
                    location.pathname.indexOf('productList') > 0 &&
                    <button onClick={() => history.go(-1)}>All Products</button>
                }
            </div>
        </nav>
    )
};

export default withRouter(
    connect()(NavBar)
)
