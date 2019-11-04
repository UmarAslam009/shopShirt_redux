export const deelete = (id) => {
    return {
        type: 'DELETE',
        payload: id

    }
}
export const Deatils = (id) => {
    return {
        type: 'DETAILS',
        payload: id

    }
}
export const pulsNUM = (id) => {
    return {
        type: 'plus',
        payload: id

    }
}
export const NegNUM = (id) => {
    return {
        type: 'minus',
        payload: id

    }
}



export const saveCatName = (id) => {
    return {
        type: 'save',
        payload: id

    }
}

export const cart = (id) => {
    return {
        type: 'CART',
        payload: id

    }
}

export const pricefilter = (data) => {
    return {
        type: 'FIlter',
        payload: data

    }
}
export const chkCart = (id) => {
    return {
        type: 'CHKCART',
        payload: id

    }
}