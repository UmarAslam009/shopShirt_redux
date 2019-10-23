import React, { Component } from "react";
import { ProductConsumer } from "../../contextAPi/context";
import {connect} from 'react-redux'
import { cart,chkCart } from '../../action/action'
import { ButtonContainer } from "../Button/Button";
import { Link } from "react-router-dom";
 class Details extends Component {
  render() {
      {
          const {
            product_id,
            name,
            thumbnail,
            description,
            price,
            discounted_price,
            

          } = this.props.detailProduct;

          {
            console.log("Render",this.props);
          }

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{this.props.detailProduct.name}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={`https://raw.githubusercontent.com/zandoan/turing-fullstack/master/Images/product_images/`+thumbnail}
                    style={{ height: 500, width: 500 }}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>Discount : {discounted_price}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{name}</span>
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
                  <p className="text-muted lead">{description}</p>
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
                      p={this.props.inCart(product_id)}
                      disabled={this.props.chk ? true : false}
                      onClick={() => {
                        this.props.addToCart(product_id);  
                        this.props.inCart(product_id)                   
                      }}
                    >
                   
                    {this.props.chk ? "in cart" : "add to cart"}
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
    chk:state.chk
  }
}

const mapDispatchToPros=(dispatch)=>{
  return {
    inCart:(id)=>{dispatch(chkCart(id))},
    addToCart:(id)=>{dispatch(cart(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToPros)(Details);
