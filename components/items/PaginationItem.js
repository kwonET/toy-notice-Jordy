import { Router, useRouter } from "next/router";
import styled from "styled-components";
import { useState, useEffect } from "react";

export const PageItem = ({ pageNum }) => {
  //pagination
  const router = useRouter();
  function onClickMoveTo(page) {
    router.push(`/post?curPage=${page}`);
  }

  const items = pageNum;
  const [renderList, setRenderList] = useState(null);
  useEffect(() => {
    let tempRender = [];
    for (let i = 1; i < pageNum + 1; i++) {
      tempRender.push(
        <PageWrapper onClick={() => onClickMoveTo(i)}>
          <PageTextWrapper>{i}</PageTextWrapper>
        </PageWrapper>
      );
    }
    setRenderList(tempRender);
  }, [items]);

  return <TempWrapper>{renderList}</TempWrapper>;
};



const TempWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const PageWrapper = styled.button`
  /* Auto layout */
  //버튼 초기화
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 24px;
  height: 24px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 12px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const PageTextWrapper = styled.div`
  width: 8px;
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;

  color: #494949;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
