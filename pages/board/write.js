import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BodyWrapper, CenterWrapper } from "../../components/styled";
import { WriteList } from "../../components/WriteList";
import { dummyData } from "../../util/dummy";
import { BtnItem } from "../../components/items/BtnItem";
import { useRecoilState } from "recoil";
import { countAtom } from "../../components/Header";

const write = () => {
  const [count, setCount]=useRecoilState(countAtom);
  const increaseCount=()=>{
    setCount(count+1);
  }
  const [transValue, setTransValue]=useState();
  useEffect(()=>{
    increaseCount();
    // console.log(transValue); //값 확인용 useEffect
  },[transValue]);
  return (
    <BodyWrapper>
      <CenterWrapper>
        <WriteWrapper>
          <WriteList regData={setTransValue}></WriteList>
          <BtnItem BtnName={"등록하기"} WriteData={transValue} />
        </WriteWrapper>
      </CenterWrapper>
    </BodyWrapper>
  );
};
export default write;
const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;
