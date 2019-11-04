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
import CatList from "../categories/catlist";
import { Slider } from "material-ui-slider";
import Close from "@material-ui/icons/Close";
import './style.css'
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import classes from "../product/styles";
import {
  withStyles,
  Paper,
  Radio,
  Checkbox,
  Fab,
  TextField
} from "@material-ui/core";

export  class Cartitem extends Component {
  
    updateValue = (event, newValue) => {
    //console.log(newValue);
    console.log(newValue)
  };
 
  
  del(id) {
    console.log(id);
  }
  render() {
    return (
      <React.Fragment >

        
        
                {/*<button onClick={() =>  this.props.deleteFromCart(products.product_id)} className="btn btn-warning  d-inline">Delete From Cart</button>*/}
                     {
                       
                         <div  className=" col-12 ">
                           {console.log(this.props)}  
                           <div  className="d-inline-block col-2">   
                           <img className="d-inline-block"
                           src={`https://raw.githubusercontent.com/zandoan/turing-fullstack/master/Images/product_images/`+this.props.product.thumbnail}
                           style={{ height: 100, width: 100, borderRadius: "25px" }}
                           alt=""
                         />
                
                         </div>
                         <p className="d-inline-block col-4 text-dark ">{this.props.product.name}{<br/>}Men BK 64350{<br/>}<a onClick={() =>  this.props.onClickHandle(this.props.product.product_id)} className="text-danger d-inline"><b>X</b></a></p>
                          <div className="d-inline-block  col-2 text-center text-dark">
                          <button onClick={() =>  this.props.updatesateonpuls(this.props.product.product_id)} className="btn mr-1 btn-warning text-dark d-inline">+</button>
                          <button className="btn mr-1 btn-text text-dark d-inline">{ this.props.count}</button>
                          <button onClick={() =>  this.props.updatestateonmiuns(this.props.product.product_id)} className="btn btn-warning text-dark d-inline">-</button>
                          </div>
                          <p href="#" className="d-inline-block col-2 text-dark ">{this.props.product.product_id}{<b>$</b>}</p>
                          <p href="#" className="d-inline-block col-2 text-dark ">{this.props.product.discounted_price}{<b>$</b>}</p>
                        </div>
                      
                      
                    }
                  
            
      </React.Fragment>
    );
  }
}


export default Cartitem;


