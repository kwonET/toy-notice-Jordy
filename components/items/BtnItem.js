import { Router, useRouter } from "next/router";
import styled from "styled-components";
import { dummyData } from "../../util/dummy";
import { wrtData } from "../../util/postman";

export const BtnItem = ({ BtnName, WriteData }) => {
  //pagination
  const { push } = useRouter();
  const onClickData = () => {
    const date = new Date();
    date = date.toLocaleDateString("ko-kr");
    WriteData.regDate = date;
    wrtData.push(WriteData);
    console.log(wrtData);
  };
  const onClickMoveTo = (page) => {
    if (page == "작성하기") push(`../board/write`);
    if (page == "등록하기") {
      const temp = async () => {
        await wrtData(WriteData);
      };
      temp();
      push(`../post`);
      // onClickData();
    }
    if(page=="수정하기"){

    }
  };

  return (
    <BtnWrapper onClick={() => onClickMoveTo(BtnName)}>
      {/* // <BtnWrapper onClick={(() => onClickMoveTo(BtnName), () => onClickData())}> */}
      <BtnTextWrapper>{BtnName}</BtnTextWrapper>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  //버튼 초기화
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
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
