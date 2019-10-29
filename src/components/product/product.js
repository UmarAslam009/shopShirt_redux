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
     background-color: #f3f3f3;
    
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0.9, 0.9);
      box-shadow: 6px 0px 5px 0px rgba(0, 0, 0.9, 0.9);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.7);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
