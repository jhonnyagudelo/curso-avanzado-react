import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
from {
  filter:blur(5px);
  opacity:0;
}
to {
  filter(0);
  opacity:1;
}
`;

const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`animation ${time} ${fadeInKeyframes} ${type};`;

export { fadeIn };
