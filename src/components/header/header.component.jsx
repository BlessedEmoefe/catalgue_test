import React, { useEffect, useContext } from "react";
import {
  HeaderContainer,
  LogoWrapper,
  Logo,
  CartWrapper,
  CartLink,
} from "./header.styles";

// import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

import { useNavigate } from "react-router-dom";
import MainContext from "../../services/context";

const Header = () => {
  // const [displayNav, setDisplayNav] = useState(false);
  const navigate = useNavigate();
  const { totalItemsInCart } = useContext(MainContext);

  const handleCart = () => {
    navigate("/cart");
  };
  // const toggleNav = () => {
  //   setDisplayNav(!displayNav);
  // };

  useEffect(() => {
    console.log("added top cart", totalItemsInCart);
  }, [totalItemsInCart]);
  return (
    <HeaderContainer /*smallDrawer={smallDrawer}*/>
      <LogoWrapper to="/">
        <Logo src={logo} alt="logo" />
      </LogoWrapper>

      <CartWrapper onClick={handleCart}>
        <CartLink>Cart</CartLink>
        <span>{totalItemsInCart}</span>
      </CartWrapper>
    </HeaderContainer>
  );
};

export default Header;
