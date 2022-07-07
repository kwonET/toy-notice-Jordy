import { PageItem } from "./items/PaginationItem";
import styled from "styled-components";
import { PaginationNum } from "../util/dummy.js";

export const PaginationList = () => {
  // const itemTexts = ["normal", "usual", "unusal"];
  // const items = itemTexts.map((text) => {
  //     return <CtgrItm text={text}/>
  // });
  // const items = [<CtgrItm text={normal}/>, <CtgrItm text={usual}/>, <CtgrItm text={unusal}/>];
 
  const items = PaginationNum;
  return (
    <PaginationListWrapper>
      {items.map((pageNum) => {
        return <PageItem pageNum={pageNum} />;
      })}
    </PaginationListWrapper>
  );
};

const PaginationListWrapper = styled.div`
  /* Auto layout */
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 296px;
  height: 55px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
