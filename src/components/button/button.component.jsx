import React from "react";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors.js";
import { fontWeights, fontSizes } from "../../infrastructure/theme/fonts";
import { Text } from "../typography/text.component.js";
// import { Loader } from "../loaders/loaders.component";

export const ButtonStyles = styled.button`
  cursor: pointer;
  width: ${({ width }) => (width ? width : " 100%")};
  min-width: max-content;
  background: ${({ background, outline }) =>
    background ? background : outline ? "transparent" : "#fff"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "0px 15px 50px rgba(222, 95, 143, 0.12)"};
  border: ${({ border, outline }) =>
    border ? border : outline ? "1.5px" : "1.5px"};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "12px"};
  padding: ${({ paddingVertical }) =>
      paddingVertical ? paddingVertical : "0.7rem"}
    ${({ paddingHorizontal }) =>
      paddingHorizontal ? paddingHorizontal : "1.5rem"};
  color: ${({ btnColor }) => (btnColor ? btnColor : colors.white)};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
`;

export const BtnText = styled(Text)`
  padding: 0 0.5rem;
  color: ${({ btnColor, outline }) =>
    btnColor ? btnColor : outline ? colors.white : colors.primary};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : fontWeights.bold};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.button)};
  font-family: ${({ fontfamily }) => (fontfamily ? fontfamily : "inherit")};

  /* @media (max-width: 500px) {
    display: ${({ btnText }) => (btnText ? "none" : "inline")};
  } */
`;

export const Button = ({
  btnText,
  background,
  border,
  borderRadius,
  boxShadow,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  onClick,
  loading,
  RightIcon,
  LeftIcon,
  iconSize,
  paddingHorizontal,
  paddingVertical,
  disabled,
  width,
  outline,
  fontfamily,
  justifyContent,
}) => {
  return (
    <ButtonStyles
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      boxShadow={boxShadow}
      width={width}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      outline={outline}
      justifyContent={justifyContent}
    >
      {LeftIcon ? (
        <LeftIcon
          color={btnColor ? btnColor : colors.white}
          size={iconSize ? iconSize : fontSizes.smallTitle}
        />
      ) : null}
      <BtnText
        btnColor={btnColor}
        textTransform={textTransform}
        fontWeight={fontWeight}
        fontSize={fontSize}
        outline={outline}
        fontfamily={fontfamily}
        // btnText={btnText == "Log Out" && btnText}
      >
        {btnText}
      </BtnText>

      {RightIcon ? (
        <RightIcon
        // color={btnColor ? btnColor : colors.white}
        // size={iconSize ? iconSize : fontSizes.smallTitle}
        />
      ) : null}
    </ButtonStyles>
  );
};
