import React, { Component } from "react";
import Product from "./categorise";
import { Categories } from "../../action/actionfetch";
import { connect } from "react-redux";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Image,
  Card
} from "react-bootstrap";

import { storeProducts } from '../../Data/data';
import styled from "styled-components";
import img from "../fotter/fotter.png";
import { ProductConsumer } from "../../contextAPi/context";


class CatList extends Component {

    state = {
        selectedID: null
    }
  componentDidMount() {
    {
      this.props.Product();

    }
  }

  onClickHandler (selectedID) {
      // I was called from children
      this.setState({ selectedID });
      console.log('selectedID:', selectedID)
  }
 
  render() {
    return (
      <React.Fragment>
     
      {this.props.myname.map(products => {
        return (
          <Product products={products} key={products.product_id}
            onClickHandle = { (product_id) => this.onClickHandler(product_id) }
            isProductSelected = {this.state.selectedID === products.category_id}
          />
        );
      })}
      
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myname: state.category
  };
};
const mapDispatchToPros = dispatch => {
  return {
    Product: () => {
      dispatch(Categories());
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToPros
)(CatList);
const ProductWrapper = styled.section``;
