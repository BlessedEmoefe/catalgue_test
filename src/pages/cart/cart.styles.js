import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";

export const CartContainer = styled(FlexibleDiv)`
  padding: 0;
  padding-bottom: 2rem;
  height: max-content;
  width: 100%;
  gap: 2rem;
  // background: teal;

  flex-direction: column;
  @media only screen and (max-width: 500px) {
    padding: 0 0.7rem;
    padding-bottom: 6rem;
  }
`;

export const CardContainer = styled(FlexibleDiv)`
  padding: 1rem 4%;
  height: max-content;
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
  // background: pink;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: row;
    padding: 1%;
  }
`;
