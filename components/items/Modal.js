import styled from "styled-components";

import { CtgrList } from "../CtgrList";
import { useEffect } from "react";
import { postData } from "../../util/postman";

export const Modal = () => {
  return (
    <BackWrapper>
      <ModalWrapper>
        <noticeWrapper>
          <textWrapper>
          비밀번호를 입력하세요
          </textWrapper>
          </noticeWrapper>
        <pwdWrapper>
          <inputWrapper></inputWrapper>
          <BtnItem BtnName={"확인"} />
        </pwdWrapper>
      </ModalWrapper>
    </BackWrapper>
  );
};
const ModalWrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 132px;
  gap: 10px;

  width: 474px;
  height: 144px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 30px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const BackWrapper = styled.div`
  position: absolute;
  width: 1200px;
  height: 1000px;
  left: 360px;
  top: 80px;

  background: rgba(73, 73, 73, 0.5);
`;
const noticeWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;

width: 153px;
height: 37px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;`;
const textWrapper=styled.div`
`;
const pwdWrapper = styled.div``;
const inputWrapper = styled.div``;
