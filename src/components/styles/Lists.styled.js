import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  border-radius: 5%;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
  cursor: pointer;

  .note {
    text-align: center;
    line-height: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .call {
    border: 1px solid #fafafa;
    position: relative;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.8rem;
    cursor: pointer;
    background-color: #f0f8ff;

    .to {
      font-size: 1rem;
      margin-block-start: 0.5rem;
      margin-block-end: 0.5rem;
    }
    .missed {
      color: red;
    }

    &:hover {
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    }

    .date {
      position: absolute;
      top: 0;
      right: 0;
      top: 1.2rem;
      right: 1.6rem;
      color: grey;
    }
  }
`;
