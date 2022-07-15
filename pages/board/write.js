import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BodyWrapper, CenterWrapper } from "../../components/styled";
import { WriteList } from "../../components/WriteList";
import { BtnItem } from "../../components/items/BtnItem";
import { useRecoilState } from "recoil";
import { displayAtom } from "../../components/items/Modal";

const write = () => {
  const [transValue, setTransValue] = useState();

  const [displayFlag, setDisplayFlag] = useRecoilState(displayAtom);
  const showModal = () => {
    setDisplayFlag(true);
  };

  return (
    <BodyWrapper>
      <CenterWrapper>
        <WriteWrapper>
          <WriteList regData={setTransValue}></WriteList>
          <BtnItem isPwd={false} BtnName={"등록하기"} WriteData={transValue} />
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
