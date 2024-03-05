import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Title } from "../typography/text.component";
import { Link } from "react-router-dom";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const HeaderContainer = styled(FlexibleDiv)`
  background-color: #d2e3f0;
  padding: 1rem 4%;
  /* z-index: 100; */
  /* transition: 300ms ease-in-out; */
  /* height: 60px; */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LogoWrapper = styled(Link)`
  width: auto;
  height: 2rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 50px;
    display: none;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
  }
`;

export const CartWrapper = styled(FlexibleDiv)`
  padding: 0;
  width: max-content;
  cursor: pointer;
  /* background: teal; */
  // gap: 0.6rem;
  @media (max-width: 800px) {
    flex-direction: row;
  }

  span {
    // margin-left: 0.5rem;
    background: red;
    color: #fff;
    padding: 0.2rem 0.3rem;
    border-radius: 0.5rem;
    font-size: 7px;
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const CartLink = styled(Title)`
  padding: 0;
  width: max-content;
  font-size: ${fontSizes.title};
  line-height: ${fontSizes.h3};
  color: ${colors.secondary};
  font-weight: 500;
  @media (max-width: 900px) {
  }
`;
