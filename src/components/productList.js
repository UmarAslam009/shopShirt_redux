import React, { Component } from "react";
import Product from "./product";
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
import { storeProducts } from "../data";
import styled from "styled-components";
import img from './fotter.png'
import { ProductConsumer } from "../context";

class ProductList extends Component {
  card() {
    const element = (
      <Card style={{ height: "30em" }}>
        <Card.Body>
          <Card.Header>
            <h3> Filter Items </h3>
          </Card.Header>
          <Card.Text>
            <p>
              Category: <b> Regional </b>
            </p>
            <p>
              
              Department: <b> French </b>
            </p>
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
                  
                  {console.log("my name", this.props.myname)}
                  {this.props.myname.map(products => {
                    return <Product products={products} key={products.id} />;
                  })}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <fotter className="my-3 col-xs-12">
         
          <img bodyStyle={{overflow: 'overlay'}} src={img} style={{ width:'100%', height: 250 }} />
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
export default connect(
  mapStateToProps,
  null
)(ProductList);
const ProductWrapper = styled.section``;
