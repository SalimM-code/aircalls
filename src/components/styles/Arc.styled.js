import styled from "styled-components";
import { Wrapper } from "./Lists.styled";

export const Wrap = styled(Wrapper)`
  display: flex;
  flex-direction: column;

  .closeIcon {
    align-self: flex-end;
    margin-bottom: 1em;
  }
  .arc {
    align-self: center;
    margin-bottom: 6px;
  }
`;
