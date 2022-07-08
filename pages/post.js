import React, { useState } from "react";
import styled from "styled-components";
import { CtgrList } from "../components/CtgrList";
import { PostList } from "../components/PostList";
import { PaginationList } from "../components/PaginationList";
import { BtnItem } from "../components/items/BtnItem";
import { useEffect } from "react";
import { postData } from "../util/postman";

const index = ({pageProps}) => {  
  const {id}= pageProps;

  const [renderData, setRenderData] = useState([]);
  const [page,setPage]=useState([]);
  useEffect(() => {
    let tempRender;

    const temp = async () => {
      tempRender = await postData(id); //현재페이지를 전달
      // tempPage=await postData(id);
      setRenderData(tempRender.data.list);
      setPage(tempRender.data.pagination);
    };
    temp();
  },[id]); //렌더링 끝난 시점에서 한번만 실행

  return (
    <BodyWrapper>
      <LeftWrapper>
        <CtgrList postData={renderData} />
      </LeftWrapper>

      <CenterWrapper>
        <RightWrapper>
          <PostList postData={renderData} />
        </RightWrapper>

        <RightWrapper>
          <PaginationWrapper>
            <PaginationList postData={page}/>
          </PaginationWrapper>
          <PaginationWrapper>
            <BtnItem BtnName={"작성하기"} />
          </PaginationWrapper>
        </RightWrapper>
      </CenterWrapper>
    </BodyWrapper>
  );
};

index.getInitialProps = (context) => { //SSR
  const {curPage} = context.query;
  return { id: curPage };
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
  flex-direction: column;

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

  //모바일
  @media screen and (max-width: 499px) {
    flex-direction: column;
  }
`;

const PaginationWrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 50px;
  gap: 10px;

  height: 55px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;

  //모바일
  @media screen and (max-width: 499px) {
    padding: 0px 10px 10px 10px;
  }
`;
