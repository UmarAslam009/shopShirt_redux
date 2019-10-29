import React, { Component } from 'react';
import "./header.css";
import CatList from "../categories/catlist";
class Header extends Component {
    state = {}
    render() {
        return ( <header class="masthead  margin: 0 0 50px 0;">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <CatList/>
            </div>
          </div>
        </div>
      </header>);
        }
    }

    export default Header;