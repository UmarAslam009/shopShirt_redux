import React, { Component } from "react";
import Product from "../product/product";
import { Jumbotron, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { storeProducts } from "../../Data/data";
import styled from "styled-components";
import img from '../fotter/fotter.png'
import {connect} from 'react-redux'
import { deelete,NegNUM,pulsNUM } from '../../action/action'
import { ButtonContainer } from '../Button/Button'
import { ProductConsumer } from "../../contextAPi/context";
import CatList from "../categories/catlist";
import { Slider } from "material-ui-slider";
import Close from "@material-ui/icons/Close";
import './style.css'
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import classes from "../product/styles";
import Itemcart from "./itemcart"
import './style.css'
import {
  withStyles,
  Paper,
  Radio,
  Checkbox,
  Fab,
  TextField
} from "@material-ui/core";

export  class Cart extends Component {
  state = {
    selectedID: null
  };
  updatesateonpuls =(selectedID) =>{
    this.setState({ selectedID });
    this.props.plusNum(selectedID);
  }
  updatestateonmiuns=(selectedID)=> {
    this.setState({ selectedID });
    this.props.negNm(selectedID);
  }
  updateValue = (event, newValue) => {
    //console.log(newValue);
    console.log(newValue)
  };
  onClickHandler=(id)=>{
    console.log("my id ",id );
    this.props.deleteFromCart(id);

  }
 


  
  del(id) {
    console.log(id);
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment >
      <div className="py-5">
      <div className="container">
        <ul className="my_ul">
        <li className="col-6"><b>Item</b></li>
        <li className="col-2"><b>ID</b></li>
        <li className="col-2"><b>Price</b></li>
        <li className="col-2"><b>Discount</b></li>
      </ul>
        <Row >
          <Col xs={12} md={12}>
            <Row>
      {
        this.props.cart.map((products, i) => {
         return <Itemcart key={products.id} product={products}
                onClickHandle = { (product_id) => this.onClickHandler(product_id) }  
                updatesateonpuls = { (product_id) => this.updatesateonpuls(product_id) }  
                updatestateonmiuns = { (product_id) => this.updatestateonmiuns(product_id) }  
                isProductSelected = {this.state.selectedID === products.product_id}
                count={this.props.cart[i].count}
              />
       })
       
     }
   
     </Row>

     </Col>
   </Row>
 </div>
</div>

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
    deleteFromCart:(id)=>{dispatch(deelete(id))},
    plusNum:(id)=>{dispatch(pulsNUM(id))},
    negNm:(id)=>{dispatch(NegNUM(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToPros)(Cart);
const ProductWrapper = styled.section``;

