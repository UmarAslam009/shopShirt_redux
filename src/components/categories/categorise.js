import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updatesProducts } from "../../action/actionfetch";
import { ProductConsumer } from "../../contextAPi/context";
import { ButtonContainer } from "../Button/Button";

class category extends Component {

  render() {
   
    return (
      <ProductWrapper className="col-3 col-md-3 col-lg-3 ">
        <div
          className="col-3 col-md-3 col-lg-3  "
          onClick={() => {this.props.updatesProducts(this.props.products.category_id)
            this.props.onClickHandle(this.props.products.category_id)}}
        >
          <Link to="/">
            <ButtonContainer
           
              style={{ width: 150 }}
              className="my-1"
              isProductSelected = {this.props.isProductSelected}
            >
              {this.props.products.name}
            </ButtonContainer>
          </Link>
        </div>
      </ProductWrapper>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    updatesProducts: id => {
      dispatch(updatesProducts(id));
    }
  };
};
export default connect(
  null,
  mapDispatchToPros
)(category);
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
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
    transform: scale(2);
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
