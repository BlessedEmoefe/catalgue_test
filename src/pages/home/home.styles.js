import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";

export const HomeContainer = styled(FlexibleDiv)`
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
export const Wrapper = styled(FlexibleDiv)`
  padding: 0;
  height: max-content;
  width: 100%;
  background: green;
  flex-direction: column;
`;
export const CardContainer = styled(FlexibleDiv)`
  padding: 1rem 4%;
  height: max-content;
  width: 100%;
  justify-content: space-around;
  gap: 1rem;
  // background: pink;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
    padding: 1%;
  }
`;
