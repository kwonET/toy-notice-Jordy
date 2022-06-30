import React from "react";
import styled from "styled-components";
import { CtgrList } from '../components/CtgrList';
import { PostList } from '../components/PostList';

const index = () => {
  return (
    <BodyWrapper>
        <LeftWrapper>
            <CtgrList></CtgrList>
        </LeftWrapper>

      <CenterWrapper>
        <RightWrapper>
            <PostList></PostList>
        </RightWrapper>
      </CenterWrapper>
    </BodyWrapper>
  );
};
export default index;

const BodyWrapper = styled.div`
  display: flex;
  top: 80px;
    //데스크탑
    @media screen and (max-width: 1199px) {
        justify-content: flex-start;
    }
        //데스크탑
    @media screen and (min-width: 1200px) {
        justify-content: center;
    }
`;

const CenterWrapper = styled.div`
  /* width:100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;

  //모바일
  @media screen and (max-width: 499px) {
    width: 100vw;
  }
  //데스크탑
  @media screen and (max-width: 1199px) {
    justify-content: flex-start;
  }
`;

const LeftWrapper = styled.div`
    padding-top: 40px;
    //모바일
    @media screen and (max-width: 499px) {
        display: none;
    }

`;

const RightWrapper = styled.div`
    padding-top: 20px;
  display: flex;
  justify-content: center;
`;
