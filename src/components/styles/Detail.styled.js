import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
  }

  .note {
    text-align: center;
    line-height: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  .closeIcon {
    cursor: pointer;
    align-self: flex-end;
  }
`;
