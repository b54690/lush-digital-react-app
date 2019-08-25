import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/productList" component={ProductList}/>
                    <Route exact path="/productList/:id" component={ProductDetail}/>
                </div>
            </Router>
        );
    }
}

export default App;
