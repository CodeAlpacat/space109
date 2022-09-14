import React from "react";
import styled, { css } from "styled-components";


interface Props {
  width?: any,
  height?: any,
  fontSize?: any,
  color?: any,
  fontWeight?: any,
  isBorder?: any,
  isReadOnly?: any,
  placeholder?: any,
  borderColor?: any,
  value?: any,
};

const StyledInput = styled.input<Props>`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: var(${({fontSize}) => fontSize});
  font-weight: var(${({fontWeight}) => fontWeight});
  :focus {
    outline: none;
  }

  ${({isReadOnly}) => {
    if (isReadOnly) {
      return css`color: var(--grey-100);`
    } else {
      return css`color: var(--grey-650);`
    }
  }}
`;

// 패딩을 폰트 크기에 맞춰서 비율로 줘야할 것 같음
const BorderDiv = styled.div<Props>`
  box-sizing: border-box;
  
  ${({fontSize}) => {
    return css`padding: calc(var(${fontSize}) / 2.5) calc(var(${fontSize}) / 1.5);`
  }}

  width: ${({width}) => width};

  ${({isBorder, borderColor}) => {
    if (isBorder) {
      return css`border: 3px solid var(${borderColor});`
    } else {
      return css`border: 3px solid transparent);`
    }
  }}

  ${({isReadOnly}) => {
    if (isReadOnly) {
      return css`background-color: var(--grey-650);`
    } else {
      return css`background-color: var(--grey-100);`
    }
  }}
`

function Input({width, fontSize, fontWeight, isBorder, borderColor, isReadOnly, placeholder, value}: Props) {
  return (
    <>
      <BorderDiv width={width} fontSize={fontSize} isBorder={isBorder} borderColor={borderColor} isReadOnly={isReadOnly}>
        <StyledInput 
          fontSize={fontSize} fontWeight={fontWeight}
          isReadOnly={isReadOnly} readOnly={isReadOnly} placeholder={placeholder}
          value={value}
        />
      </BorderDiv>
    </>
  );
};

Input.defaultProps = {
  width: "100%",
  fontSize: "--body",
  fontWeight: "--regular",
  isBorder: true,
  borderColor: "--grey-650",
  isReadOnly: false,
  placeholder: "메세지를 입력해주세요.",
}

export default Input;