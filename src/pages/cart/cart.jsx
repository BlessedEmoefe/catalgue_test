import React, { useState, useContext } from "react";
import { CartContainer, CardContainer } from "./cart.styles";
import Header from "../../components/header/header.component";
import { MultipurposeCard } from "../../components/multipurposeCard/multipurposeCard.component";
import { PageLoader } from "../../components/loaders/loaders.component";
import MainContext from "../../services/context";

const Cart = () => {
  const [loading] = useState(false);

  const { cartArray, cartItems } =
    useContext(MainContext);

  return (
    <CartContainer>
      <Header cartItems={cartItems} />

      {loading ? (
        <PageLoader small />
      ) : (
        <CardContainer justifyContent="flex-start">
          {cartArray?.length > 0 &&
            cartArray.map(
              ({ id, name, store_product_properties, is_service }) => (
                <MultipurposeCard
                  id={id}
                  name={name}
                  store_product_properties={store_product_properties}
                  is_service={is_service}
                  key={id}
                />
              )
            )}
        </CardContainer>
      )}
    </CartContainer>
  );
};

export default Cart;
