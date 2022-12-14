import React from "react";
import styled from "styled-components";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
  width?: string;
  height?: string;
  bg?: string;
  color?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  fontWeight?: string;
  fontSize?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

interface PropStyle {
  w: string;
  h: string;
  bg: string;
  color: string;
  borderRadius: string;
  borderWidth: string;
  borderColor: string;
}

interface TextStyle {
  fontWeight: string;
  fontSize: string;
}

const Square = styled.button<PropStyle>`
  background: var(${(props) => props.bg});
  color: var(${(props) => props.color});
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;

  font-size: 2rem;
  padding: 0px, 16px;
  gap: 16px;
  border-radius: ${(props) => props.borderRadius};
  user-select: none;
  border: ${(props) => props.borderWidth} solid
    var(${(props) => props.borderColor});

  &:hover {
    background: var(${(props) => props.color});
    color: var(${(props) => props.bg});
    border: ${(props) => props.borderWidth} solid
      var(${(props) => props.borderColor});
  }
`;

const TextBox = styled.div<TextStyle>`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: var(${(props) => props.fontWeight});
  font-size: var(${(props) => props.fontSize});
  line-height: 140%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: center;
`;

function SharpButton({
  onClick,
  children,
  width = "130px",
  height = "42px",
  bg = "--grey-750",
  color = "--grey-100",
  borderRadius = "4px",
  borderWidth = "0px",
  borderColor = "--grey-750",
  fontWeight = "--semi-bold",
  fontSize = "--body",
  type = "submit",
}: Props) {
  return (
    <Square
      onClick={onClick}
      type={type}
      w={width}
      h={height}
      bg={bg}
      color={color}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
    >
      <TextBox fontWeight={fontWeight} fontSize={fontSize}>
        {children ? children : "??????"}
      </TextBox>
    </Square>
  );
}

export default SharpButton;
