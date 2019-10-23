import React, { Component } from "react";
import Product from "../product/product";
import { Jumbotron, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { storeProducts } from "../../Data/data";
import styled from "styled-components";
import img from '../fotter/fotter.png'
import {connect} from 'react-redux'
import { deelete } from '../../action/action'
import { ButtonContainer } from '../Button/Button'
import { ProductConsumer } from "../../contextAPi/context";

  class ProductList extends Component {
 
  card() {
    const element = (
      <Card style={{ height: '30em' }}>
        <Card.Body>
          <Card.Header><h3>Filter Items</h3></Card.Header>
          <Card.Text>
            <p>Category: <b>Regional</b></p>
            <p>Department: <b>French</b></p>
          </Card.Text>

        </Card.Body>
      </Card>)
    return element;

  }
  del(id) {
    console.log(id);
  }
  render() {
    return (
      <React.Fragment>

        <div className="py-5">
          <div className="container">
            <Row className="text-center">
              <Col className="my-3" xs={3} md={3} >
                {this.card()}
              </Col>
              <Col xs={9} md={9}>
                <Row>
                     {
                       this.props.cart.map(products => {

                        return <div className="my-3 col-12">
                                
                          <a href="#" class="text-cenetr list-group-item list-group-item-action active">{<b>Name:</b>}{products.name}<button onClick={() =>  this.props.deleteFromCart(products.product_id)} className="btn btn-warning  float-right">Delete From Cart</button></a>
                          <a href="#" class="list-group-item list-group-item-action">{<b>ID:</b>}{products.product_id}</a>
                          <a href="#" class="list-group-item list-group-item-action">{<b>Price:</b>}{products.price}{<b>$</b>}</a>
                          <a href="#" class="list-group-item list-group-item-action ">{<b>After Discount:</b>}{products.discounted_price}{<b>$</b>}</a>
                        </div>
                      })
                      
                    }
                  
                </Row>

              </Col>
            </Row>
          </div>
        </div>
        <img bodyStyle={{overflow: 'overlay'}} src={img} style={{ width:'100%', height: 250 }} />

      </React.Fragment>
    );
  }
}
const mapStateToProps =(state)=>{
  return{
    cart: state.cart,
  }
}
const mapDispatchToPros=(dispatch)=>{
  return {
    deleteFromCart:(id)=>{dispatch(deelete(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToPros)(ProductList);
const ProductWrapper = styled.section``;

