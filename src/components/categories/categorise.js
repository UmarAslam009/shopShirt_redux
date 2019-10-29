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
          <Link to="/" >
            {/*<ButtonContainer
           
              style={{ width: 150 }}
              className="my-1"
              isProductSelected = {this.props.isProductSelected}
          >*/}
              <h5>{this.props.products.name}</h5>
            {/*</ButtonContainer>*/}
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
 
`;
