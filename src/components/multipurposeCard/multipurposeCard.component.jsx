import React, {  useContext } from "react";
import Book from "../../assets/svg/Book.svg";
import { Button } from "../button/button.component.jsx";
import MainContext from "../../services/context";

import {
  MultipurposeCardContainer,
  TopSection,
  CardImage,
  Wrapper,
  BottomSection,
  ProductName,
  Field,
  SellingPrice,
  StockQuantity,
  ExpDate,
  ButtonWrapper,
} from "./multipurposeCard.styles";
import { colors } from "../../infrastructure/theme/colors.js";

export const MultipurposeCard = ({
  id,
  name,
  store_product_properties,
  is_service,
  stock_quantity,
}) => {
  const { addToCart, cartItems } = useContext(MainContext);

  return (
    <MultipurposeCardContainer>
      <TopSection background={colors.primary}>
        <CardImage src={Book} alt={`Product Image`} />
      </TopSection>
      <BottomSection>
        {name ? <ProductName>{name ? name : ""}</ProductName> : null}
        {store_product_properties.length > 0 &&
          store_product_properties.map(
            ({ selling_price, stock_quantity, expiry_date }) => (
              <Wrapper>
                <Field>
                  Selling Price:
                  <SellingPrice>${selling_price}</SellingPrice>
                </Field>
                <Field>
                  Stock Quantity:
                  <StockQuantity>{stock_quantity}</StockQuantity>
                </Field>
                <Field>
                  Expiry Date:
                  <ExpDate> {expiry_date}</ExpDate>
                </Field>
              </Wrapper>
            )
          )}
        <ButtonWrapper>
          <Button
            btnText={
              cartItems[id] && cartItems[id] === 1
                ? `${cartItems[id]} Item Selected`
                : cartItems[id] && cartItems[id] > 1
                ? `${cartItems[id]} Items Selected`
                : "Add to Cart"
            }
            btnColor="#fff"
            textTransform="capitalize"
            // fontSize={}
            // onClick={handleSubscribe}
            onClick={
              stock_quantity > cartItems[id]
                ? () => {
                    addToCart(id);
                  }
                : null
            }
            paddingHorizontal="1rem"
            size="large"
            background={colors.primary}
          />
        </ButtonWrapper>
      </BottomSection>
    </MultipurposeCardContainer>
  );
};
