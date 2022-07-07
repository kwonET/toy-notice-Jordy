import { CtgrItm } from "./items/CtgrItem";
import styled from "styled-components";
import { categoryDummyDate } from "../util/dummy.js";
import { useEffect } from "react";

export const CtgrList = ({ postData }) => {
  // const itemTexts = ["normal", "usual", "unusal"];
  // const items = itemTexts.map((text) => {
  //     return <CtgrItm text={text}/>
  // });
  // const items = [<CtgrItm text={normal}/>, <CtgrItm text={usual}/>, <CtgrItm text={unusal}/>];
  
  // const items=postData;
  // const items=[];
  // for(let i=0;i<postData.length();i++){
  //   items.push(postData.list.id[i]);
  // }

  // const items = postData;
  return (
    <CtgrListWrapper>
      {postData.map((item) => {
        return <CtgrItm categoryDummyDate={item} />;
      })}
    </CtgrListWrapper>
  );
};

// export async function getStaticProps(context) {
//   const res = await fetch(`http://124.197.210.234:8188/bulletin/list`);
//   const data=await res.json()
// }
const CtgrListWrapper = styled.div`
  /* Auto layout */
  /* Auto layout */
  width: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;
