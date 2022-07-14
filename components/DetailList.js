import { DetailItem } from "./items/DetailItem";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const DetailList = ({ detailData }) => {
  const [keyData, setKeyData] = useState(null);
  const [valData, setValData] = useState(null);
  const [renderList, setRenderList] = useState(null);
  useEffect(() => {
    let tempKeyData = [];
    let tempValData = [];
    tempKeyData = Object.keys(detailData);
    tempValData = Object.values(detailData);
    setKeyData(tempKeyData);
    setValData(tempValData);
  }, [detailData]); //빈 조건이 아닌, 들어오는 값을 바라봐야

  useEffect(() => {
    let tempRender = [];
    if (keyData && valData) {
      // for (let i = 0; i < tempKeyData.length; i++) {
      tempRender.push(<DetailItem name={keyData} data={valData} />);
      // }
      setRenderList(tempRender);
    }
  }, [keyData, valData]);

  return (
    <BoxWrapper>
      <BorderWrapper>
        <div>{renderList}</div>
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
  padding: 10px;

  width: 1140px;
  height: 559px;

  background: #ffffff;
  border: 1px solid #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;
