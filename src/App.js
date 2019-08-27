import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './sass/main.scss';
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";
import NavBar from './components/layout/topBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div >
                    <main>
                        <nav>
                            <NavBar/>
                        </nav>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/productList" component={ProductList}/>
                        <Route exact path="/productList/:id" component={ProductDetail}/>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
