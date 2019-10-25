import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Data/data";

const istate = {
    productOfshop: [{}],
    Allpro:[{}],
    productOfshop: [{}],
    detailProduct: {},
    cart: [],
    category: []
};

const getItem = (id, state) => {
    console.log("in fuvtion", istate);
    const product = state.productOfshop.find(item => item.product_id == id);
    return product;
};

const handleDetail = (id, state) => {
    const product = getItem(id, state);
    return {...state, detailProduct: product };
};

const findindex = (id, state) => {
    const obj = state.productOfshop;
    console.log("my obj", obj);
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].product_id == id) {
            return i;
        }
    }
};
const addToCart = (id, state) => {
    const product = getItem(id, state);
    let tempProduct = state.productOfshop;
    let tempdProduct = state.detailProduct;
    const index = findindex(id, state);
    console.log(index);
    return {
        ...state,
        cart: [...state.cart, product]
    };
};

const chkCart = (id, state) => {
    const obj = state.cart;
    console.log("my obj", obj);
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].product_id == id) {

            return true;
        }
    }
    return false;

};

const deleteFromCart = (id, state) => {
    const product = getItem(id, state);
    console.log(id, "newcart");
    let products = state.productOfshop;
    const index = findindex(id, state);
    const newCart = state.cart.filter(c => c.product_id != id);
    return {...state, cart: newCart };
};

const product = (state = istate, action) => {
    if (action.type == "DETAILS") {
        const id = action.payload;
        console.log("isate", state);
        return handleDetail(id, state);
    }
    if (action.type == "CART") {
        const id = action.payload;
        console.log(id);
        return addToCart(id, state);
    }
    if (action.type == "CHKCART") {
        const id = action.payload;
        console.log(id);
        return {...state, chk: chkCart(id, state) };
    }
    if (action.type == "DELETE") {
        const id = action.payload;
        console.log(id);
        return deleteFromCart(id, state);
    }
    if (action.type == "PRODUCTS") {
        const obj = action.payload;
        return {...state, productOfshop: obj.rows ,Allpro:obj.rows};
    }

    if (action.type == "FIlter") {
        const obj = action.payload;
        return {...state, productOfshop: obj };

    }
    if (action.type == "categories") {
        const obj = action.payload;
        return {...state, category: obj.rows };

    } else {
        return state;
    }
};

export default product;