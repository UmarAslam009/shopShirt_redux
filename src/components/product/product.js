import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Deatils } from "../../action/action";
import { ProductConsumer } from "../../contextAPi/context";
class Product extends Component {
  render() {
    const { product_id, name, thumbnail, price } = this.props.products;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-9 col-lg-4 my-3">
        <div className="card">
          {
            <div
              className="img-container p-5"
              onClick={() => this.props.Details(product_id)}
            >
              <Link to="/Details">
                <img
                  src={
                    `https://raw.githubusercontent.com/zandoan/turing-fullstack/master/Images/product_images/` +
                    thumbnail
                  }
                  alt=""
                  className="card-img-top"
                />
              </Link>
              <Link to="/Details">
              <button
                    className="cart-btn"
                  >
                  View Details
                  </button>
                  </Link>
            </div>
          }
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0"> {name} </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1"> $ </span> {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    Details: id => {
      dispatch(Deatils(id));
    }
  };
};
export default connect(
  null,
  mapDispatchToPros
)(Product);
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
     background-color: white;
    
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      
      box-shadow: 3px 20px 11px 4px rgba(161,161,161,0.72);
      
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
    
  }
  .img-container {
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    opacity: 0.1
    background-color: black;
    transform: scale(1.7);
  }
  .cart-btn {
  
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 25px;
    transform: translate(1000%, 100%);
    background-color: #ED2446;
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    
    transform: translate(0, 0);
  
  }
  .cart-btn:hover .card {
    background-color: black;
}
addButtonContainer: {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0,
  backgroundColor: "white",
  transition: ".5s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  '&:hover': {
      opacity: 0.8
  }
 
`;
