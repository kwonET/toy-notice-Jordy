import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BodyWrapper, CenterWrapper } from "../../components/styled";
import { DetailList } from "../../components/DetailList";
import { dummyData } from "../../util/dummy";
import { BtnItem } from "../../components/items/BtnItem";

const detail = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let tempData = dummyData[0];
    setData(tempData);
  }, []);
  return (
    <BodyWrapper>
      <CenterWrapper>
        <DetailWrapper>
          <DetailList detailData={data} />
          <BtnItem BtnName={"수정하기"} />
        </DetailWrapper>
      </CenterWrapper>
    </BodyWrapper>
  );
};
export default detail;
const DetailWrapper = styled.div`
display: flex;
flex-direction: column-reverse;
  align-items: center;

`;
