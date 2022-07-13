import { WriteItem } from "./items/WriteItem";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const WriteList = ({regData}) => {
//   const [keyData, setKeyData] = useState(null);
//   const [renderList, setRenderList] = useState(null);
//   let flag = true;
//   useEffect(() => {
//     let tempKeyData = [];
//     tempKeyData = Object.keys(WriteData);
//     setKeyData(tempKeyData);
//   }, [WriteData]); //빈 조건이 아닌, 들어오는 값을 바라봐야

//   useEffect(() => {
//     let tempRender = [];

//     if (keyData) {
//       // for (let i = 0; i < tempKeyData.length; i++) {
//       tempRender.push(<WriteItem name={keyData} />);
//       // }
//       setRenderList(tempRender);
//     }
//   }, [keyData]);

  return (
    <BoxWrapper>
      <BorderWrapper>
        <WriteItem regData={regData}/>
      </BorderWrapper>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: 1160px;
  height: 674px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
`;

const BorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  width: 1080px;
  height: 559px;

  background: #ffffff;
  border: 1px solid #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;
