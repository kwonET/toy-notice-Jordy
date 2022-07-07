import { Router, useRouter } from "next/router";
import styled from "styled-components";

export const BtnItem = ({ BtnName }) => {
  return (
    <BtnWrapper>
      <BtnTextWrapper>{BtnName}</BtnTextWrapper>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  width: 85px;
  height: 35px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BtnTextWrapper = styled.div`
  /* 작성하기 */

  width: 45px;
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
