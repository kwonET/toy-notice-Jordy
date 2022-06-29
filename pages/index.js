import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <HeaderWrapper>
    <CenterWrapper>
        <LeftWrapper>ctgr</LeftWrapper>
        <RightWrapper>list</RightWrapper>
    </CenterWrapper>
    </HeaderWrapper>
  );
};
export default index;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top:80px;
`;

const CenterWrapper = styled.div`
    width: 1200px;
    height: 1000px;
    text-align: center;

`;

const LeftWrapper = styled.div`
    width: 100px;
`;
const RightWrapper = styled.div`
    width:200px;
`;


