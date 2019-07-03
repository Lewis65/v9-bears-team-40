import React from "react";
import styled from "../utils/theme";

const ChildDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Child = () => {
  return (
    <ChildDiv>
      <button>Click!</button>
    </ChildDiv>
  );
};

export default Child;