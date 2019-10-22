import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../data'

const istate = {
    productOfshop: storeProducts,
    detailProduct: detailProduct,
    cart: []
}

const getItem = (id) => {
    const product = istate.productOfshop.find(item => item.id == id);
    return product;
}

const handleDetail = (id,state) => {
    const product = getItem(id);
    return {...state, detailProduct: product }
};

const findindex=(id)=> {
    const obj = istate.productOfshop;
    for (let i = 0; i <= obj.length; i++) {
        if (obj[i].id == id) {
            return i
        }
    }
}
const addToCart = (id,state) => {
    const product = getItem(id);
    let tempProduct = istate.productOfshop;
    let tempdProduct = istate.detailProduct;
    const index = findindex(id);
    console.log(index);
    tempProduct[index].inCart = true;
        return {
            ...state,
            cart: [...state.cart, product]
            
        }

};

const deleteFromCart = (id,state) => {
    const product = getItem(id);
    let products = state.productOfshop;
    const index = findindex(id);
    products[index].inCart = false;
    const newCart = state.cart.filter(c => c.id != id);
    return { ...state, 
             cart: newCart }
       
    

};


const product = (state = istate, action) => {

    if (action.type == "DETAILS") {
        const id = action.payload;
        return handleDetail(id,state);

    }
    if(action.type == "CART")
    {
        const id = action.payload;
        console.log(id);
       return addToCart(id,state)
    }
    if(action.type == "DELETE")
    {
        const id = action.payload;
        console.log(id);
       return deleteFromCart(id,state)
    }
    else {
        return state;
    }

}

export default product;
