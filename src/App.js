import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import ProductList from "./components/product/productList";
import category from "./components/categories/catlist";
import Details from "./components/details/Details";
import Default from "./components/product/notFound";
import Seasonal from "./components/Seasonal/Seasonal"
import Nature from "./components/Nature/Nature"
import Cart from "./components/Cart/cart";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/ct" component={category} />
          <Route exact path="/Nature" component={Nature} />
          <Route exact path="/Seasonal" component={Seasonal} />
          
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
