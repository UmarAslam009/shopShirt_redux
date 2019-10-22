import React, { Component } from "react";
import { ProductConsumer } from "../context";
import {connect} from 'react-redux'
import { cart } from '../action/action'
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
 class Details extends Component {
  render() {
      {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = this.props.detailProduct;

          {
            console.log("Render",this.props);
          }

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{this.props.detailProduct.title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={img}
                    style={{ height: 500, width: 500 }}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer>Go to Cart</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        this.props.addToCart(id);
                        
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }  
  }
}

const mapStateToProps =(state)=>{
  return{
    detailProduct: state.detailProduct,
  }
}

const mapDispatchToPros=(dispatch)=>{
  return {
    addToCart:(id)=>{dispatch(cart(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToPros)(Details);
