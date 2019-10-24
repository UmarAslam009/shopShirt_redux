export const Categories = () => {
    return dispatch => {
        fetch("https://backendapi.turing.com/categories")
            .then(res => res.json())
            .then(res2 => {
                dispatch({
                    type: "categories",
                    payload: res2
                   
                });
            });
    };
};

export const updatesProducts = (id) => {
  return dispatch => {
      fetch(`https://backendapi.turing.com/products/inCategory/`+id)
          .then(res => res.json())
          .then(res2 => {
              console.log(res2);
              dispatch({
                  type: "PRODUCTS",
                  payload: res2
              });
          });
  };
};

export const Products = () => {
    return dispatch => {
        fetch("https://backendapi.turing.com/products")
            .then(res => res.json())
            .then(res2 => {
                console.log(res2);
                dispatch({
                    type: "PRODUCTS",
                    payload: res2
                });
            });
    };
};