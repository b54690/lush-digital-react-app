import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {ReactComponent as Search} from '../../images/SVG/search.svg';
import logo from '../../images/logo.png'

const NavBar = (props) => {
    const {location, history} = props;

    return (
        <header className="nav">
            <img src={logo} alt="nav image" className="logo"/>
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search products"/>
                <button className="search__button">
                    <div className="search__icon">
                        <Search/>
                    </div>
                </button>
            </form>
        </header>
    )
};

export default withRouter(
    connect()(NavBar)
)
