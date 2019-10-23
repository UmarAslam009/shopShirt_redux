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

export const cart = (id) => {
    return {
        type: 'CART',
        payload: id

    }
}
export const chkCart = (id) => {
    return {
        type: 'CHKCART',
        payload: id

    }
}
