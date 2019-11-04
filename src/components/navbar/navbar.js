import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "../Button/Button";
import Popup from "reactjs-popup";
import Cart from "../Cart/cart"
import CatList from "../categories/catlist";
import Header from "../header/header";
import  './style.css';
export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
      
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      
        <Link to="/">
          <div className="navbar-header">
            <a className="text-danger navbar-brand" href="#">
              <b><h4>S H O P M A T E</h4></b>
            </a>
          </div>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">

              Regional

            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/Nature" className="nav-link">
              Nature

            </Link>
          </li>
        </ul>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/Seasonal" className="nav-link">
              Seasonal
            </Link>
          </li>
        </ul>
          <div  className="ml-auto">    
          <Popup class="popup-content"  trigger={<ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
          </ButtonContainer>} >
            <div><Cart/></div>
          </Popup>
            </div>   
      </Nav>

      </React.Fragment>
  
      
    );
    
  }
}

const Nav = styled.nav`
  background: var(--mainDark);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
    &:hover {
      background: var(--lightBlue);
      border-radius: 15px 50px 30px
    }
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;


