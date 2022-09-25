import styled from "styled-components";
import { Div, screenSizes } from "../../styles/BaseStyles";

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  margin: 200px -40px;
  @media screen and screen and (min-width: 450px) {
    margin: 190px 40px;
  }
  list-style: none;
`;

const LI = styled.li`
  grid-column-end: span 2;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-top: -50%;

  &:nth-child(2n) {
    grid-column-start: 2;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-size: 50% 100%, 50% 100%;
    background-position: left, right;
  }

  &::before {
    z-index: -10;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    background-repeat: no-repeat;
    background-image: linear-gradient(
        -45deg,
        var(--mandarin-100) 53.5%,
        var(--matcha-100) 53.5%,
        var(--matcha-100) 60%,
        var(--mandarin-100) 60%
      ),
      linear-gradient(
        45deg,
        var(--mandarin-100) 53.5%,
        var(--matcha-100) 53.5%,
        var(--matcha-100) 60%,
        var(--mandarin-100) 60%
      );
  }

  &::after {
    clip-path: polygon(100% 50%, 50% 100%, 0 50%, 20% 50%, 50% 80%, 80% 50%);
    -webkit-clip-path: polygon(
      100% 50%,
      50% 100%,
      0 50%,
      20% 50%,
      50% 80%,
      80% 50%
    );
    background-repeat: no-repeat;
    background-image: linear-gradient(
        45deg,
        var(--mandarin-100) 40%,
        var(--matcha-100) 40%
      ),
      linear-gradient(-45deg, var(--mandarin-100) 40%, var(--matcha-100) 40%);
  }

  &:nth-child(2n)::before {
    background-image: linear-gradient(
        -45deg,
        var(--grey-100) 53.5%,
        var(--ocean-100) 53.5%,
        var(--ocean-100) 60%,
        var(--grey-100) 60%
      ),
      linear-gradient(
        45deg,
        var(--grey-100) 53.5%,
        var(--ocean-100) 53.5%,
        var(--ocean-100) 60%,
        var(--grey-100) 60%
      );
  }

  &:nth-child(2n)::after {
    background-image: linear-gradient(45deg, var(--grey-100) 40%, var(--ocean-100) 40%),
      linear-gradient(-45deg, var(--grey-100) 40%, var(--ocean-100) 40%);
  }

  &:nth-child(5n)::before {
    background-image: linear-gradient(
        -45deg,
        var(--matcha-100) 53.5%,
        var(--grey-100) 53.5%,
        var(--grey-100) 60%,
        var(--matcha-100) 60%
      ),
      linear-gradient(
        45deg,
        var(--matcha-100) 53.5%,
        var(--grey-100) 53.5%,
        var(--grey-100) 60%,
        var(--matcha-100) 60%
      );
  }

  &:nth-child(5n)::after {
    background-image: linear-gradient(45deg, var(--matcha-100) 40%, var(--grey-100) 40%),
      linear-gradient(-45deg, var(--matcha-100) 40%, var(--grey-100) 40%);
  }

  &:nth-child(7n)::before,
  &:nth-child(7n-4)::before {
    background-image: linear-gradient(
        -45deg,
        var(--ocean-100) 53.5%,
        var(--carmine-100) 53.5%,
        var(--carmine-100) 60%,
        var(--ocean-100) 60%
      ),
      linear-gradient(
        45deg,
        var(--ocean-100) 53.5%,
        var(--carmine-100) 53.5%,
        var(--carmine-100) 60%,
        var(--ocean-100) 60%
      );
  }

  &:nth-child(7n)::after,
  &:nth-child(7n-4)::after {
    background-image: linear-gradient(45deg, var(--ocean-100) 40%, var(--carmine-100) 40%),
      linear-gradient(-45deg, var(--ocean-100) 40%, var(--carmine-100) 40%);
  }

  &:nth-child(9n)::before,
  &:nth-child(9n-5)::before {
    background-image: linear-gradient(
        -45deg,
        var(--carmine-100) 53.5%,
        var(--matcha-100) 53.5%,
        var(--matcha-100) 60%,
        var(--carmine-100) 60%
      ),
      linear-gradient(
        45deg,
        var(--carmine-100) 53.5%,
        var(--matcha-100) 53.5%,
        var(--matcha-100) 60%,
        var(--carmine-100) 60%
      );
  }

  &:nth-child(9n)::after,
  &:nth-child(9n-5)::after {
    background-image: linear-gradient(45deg, var(--carmine-100) 40%, var(--matcha-100) 40%),
      linear-gradient(-45deg, var(--carmine-100) 40%, var(--matcha-100) 40%);
  }

  img {
    position: absolute;
    width: 43%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-60%);
    box-shadow: 5px -5px 10px rgba(0, 0, 0, 0.3);
    transition-property: transform;
    transition-duration: 0.3s;
  }

  img:hover {
    transform: translateX(-40%) translateY(-70%) rotatez(25deg);
  }

  @media screen and (min-width: 600px) {
    &:nth-child(2n){
      grid-column-start:auto;
    }
    &:nth-child(4n-1){
      grid-column-start:2;
    }
  }
  @media screen and (min-width: 900px) {
    &:nth-child(4n-1){
      grid-column-start:auto;
    }
    &:nth-child(6n-2){
      grid-column-start:2;
    }
  }
  @media screen and (min-width: 1200px) {
    &:nth-child(6n-2){
      grid-column-start:auto;
    }
    &:nth-child(8n-3){
      grid-column-start:2;
    }
  }
  @media screen and (min-width: 1500px) {
    &:nth-child(8n-3){
      grid-column-start:auto;
    }
    &:nth-child(10n-4){
      grid-column-start:2;
    }
  }
  @media screen and (min-width: 1800px) {
    &:nth-child(10n-4){
      grid-column-start:auto;
    }
    &:nth-child(12n-5){
      grid-column-start:2;
    }
  }
  @media screen and (min-width: 2100px) {
    &:nth-child(12n-5){
      grid-column-start:auto;
    }
    &:nth-child(14n-6){
      grid-column-start:2;
    }
  }
`;
const GalleryList = () => {
  return (
    <Div>
      <UL>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book10.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book02.jpg"
            alt=""
          ></img>
        </LI>
        <LI>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/book03.jpg"
            alt=""
          ></img>
        </LI>
      </UL>
    </Div>
  );
};

export default GalleryList;