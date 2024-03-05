import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";

export const MultipurposeCardContainer = styled(FlexibleDiv)`
  padding: 0;
  width: 22%;
  flex-direction: column;
  background: ${colors.bg.lightBg};
  border-radius: 24px;
  overflow: hidden;
  height: max-content;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    min-width: 200px;
  }

  @media only screen and (max-width: 900px) {
    min-width: 220px;
    width: 30%;
  }

  @media only screen and (max-width: 700px) {
    // min-width: 220px;
    width: 45%;
  }

  @media only screen and (max-width: 480px) {
    // min-width: 220px;
    width: 95%;
  }
`;
export const TopSection = styled(FlexibleDiv)`
  padding: 0;
  /* gap: 2rem; */
  background: ${({ background }) => (background ? background : `#4c63b6`)};
  position: relative;
  justify-content: center;
  overflow: hidden;
  height: 160px;
  border-radius: 18px;

  @media only screen and (max-width: 800px) {
  }
`;
export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  height: max-content;
  width: 100%;
  // background: green;
  align-items: flex-start;
  flex-direction: column;
`;
export const CardImage = styled.img`
  padding: 0;
  width: auto;
  height: 60%;
  object-fit: contain;

  @media only screen and (max-width: 800px) {
  }
`;

export const BottomSection = styled(FlexibleDiv)`
  padding: 0.8rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 30%;
  gap: 0.1rem;

  @media only screen and (max-width: 800px) {
  }
`;
export const ProductName = styled(Text)`
  padding: 0;
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: #0af;
  text-align: left;
  font-family: "Lato", sans-serif;
  @media only screen and (max-width: 800px) {
  }
`;

export const Field = styled(Text)`
  padding: 0;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  gap: 0.5rem;
  color: #1f2223;
  font-family: "Lato", sans-serif;
  width: 100%;
  @media only screen and (max-width: 800px) {
  }
`;

export const SellingPrice = styled(Text)`
  padding: 0;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: #1f2223;
  font-style: italic;
  font-family: "Lato", sans-serif;
  @media only screen and (max-width: 800px) {
  }
`;

export const StockQuantity = styled(Text)`
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #1f2223;
  font-style: italic;
  font-family: "Lato", sans-serif;
  @media only screen and (max-width: 800px) {
  }
`;

export const ExpDate = styled(Text)`
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #1f2223;
  font-style: italic;
  font-family: "Lato", sans-serif;
  @media only screen and (max-width: 800px) {
  }
`;
export const ButtonWrapper = styled(FlexibleDiv)`
  padding: 0;
  height: max-content;
  width: 100%;
  // background: green;
  align-items: center;
`;
