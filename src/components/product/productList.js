import React, { Component } from "react";
import Product from "./product";
import { Products } from "../../action/actionfetch";
import { connect } from "react-redux";
import CatList from '../categories/catlist'
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

class ProductList extends Component {
  componentDidMount() {
    {
      this.props.Product();
    }
  }
  card() {
    const element = (
      <Card style={{ height: "86em" }}>
        <Card.Body>
          <Card.Header style={{backgroundColor:"Blue"}}>
            <h3> Filter Items </h3>
          </Card.Header>
          <Card.Text> 
          < CatList />
          </Card.Text>
        </Card.Body>
      </Card>
    );
    return element;
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Row className="text-center">
              <Col className="my-3" xs={3} md={3}>
                {this.card()}
              </Col>
              <Col xs={9} md={9}>
                <Row>
                  {this.props.myname.map(products => {
                    return (
                      <Product products={products} key={products.product_id} />
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <fotter className="my-3 col-xs-12">
          <img
            bodyStyle={{ overflow: "overlay" }}
            src={img}
            style={{ width: "100%", height: 250 }}
          />
        </fotter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myname: state.productOfshop
  };
};
const mapDispatchToPros = dispatch => {
  return {
    Product: () => {
      dispatch(Products());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToPros
)(ProductList);
const ProductWrapper = styled.section``;
