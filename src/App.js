import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";
import TopBar from './layout/topBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <TopBar/>
                    </nav>
                    <main className="App">
                        <Route exact path="/productList" component={ProductList}/>
                        <Route exact path="/productList/:id" component={ProductDetail}/>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
