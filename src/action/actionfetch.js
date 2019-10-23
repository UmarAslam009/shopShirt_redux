export const anotherName = () => {
  return dispatch => {
    fetch("https://backendapi.turing.com/departments")
      .then(res => res.json())
      .then(res2 => {
        dispatch({
          type: "Departments",
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
