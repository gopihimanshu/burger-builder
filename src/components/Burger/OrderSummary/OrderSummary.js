import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>
        {/* <li>Salad : {ingredientSummary.salad}</li>
        <li>Bacon : {ingredientSummary.bacon}</li>
        <li>Cheese : {ingredientSummary.cheese}</li>
        <li>Meat : {ingredientSummary.meat}</li> */}
        {ingredientSummary}
      </ul>
    </Auxiliary>
  );
};

export default orderSummary;
