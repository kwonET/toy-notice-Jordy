import { Router, useRouter } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";
import { wrtData, pwdCheck } from "../../util/postman";
import { useRecoilState } from "recoil";
import { displayAtom } from "./Modal";
import { textAtom } from "./Modal";

export const BtnItem = ({ pageProps, BtnName, WriteData, isPwd, id }) => {
  console.log("비번좀,,,,,", pageProps);
  // const { pwd } = pageProps;
  const [displayFlag, setDisplayFlag] = useRecoilState(displayAtom);
  const [text, setText] = useRecoilState(textAtom);

  const showModal = () => {
    setDisplayFlag(true);
  };
  const disappearModal = () => {
    setDisplayFlag(false);
  };
  const writeText = () => {
    text = "작성하겠습니까?";
    setText(text);
  };
  const pwdText = () => {
    text = "비밀번호를 입력하세요.";
    setText(text);
  };

  //pagination
  const { push } = useRouter();
  const onClickData = () => {
    const date = new Date();
    date = date.toLocaleDateString("ko-kr");
    WriteData.regDate = date;
    wrtData.push(WriteData);
    console.log(wrtData);
  };

  //버튼 작동 처리 관련
  const onClickMoveTo = useCallback(
    (page) => {
      if (page == "작성하기") {
        push(`../board/write`);
      }
      if (page == "등록하기") {
        showModal();
        writeText();
        // push(`../post`);
        // onClickData();
      }
      if (page == "수정하기") {
        showModal();
        pwdText();
      }
      //등록하기 버튼
      if (text == "작성하겠습니까?" && page == "확인") {
        disappearModal();

        const temp = async () => {
          await wrtData(WriteData);
        };
        temp();

        push(`../../post`);
      }
      if (page == "취소") {
        disappearModal();
      }
      let tempRender;
      if (text == "비밀번호를 입력하세요." && page == "확인") {
        disappearModal();
        const temp = async () => {
          tempRender = await pwdCheck(id, pwd);
        };
        temp();

        push(`../board/write`);
      }
    },
    [WriteData, wrtData]
  );

  return (
    <BtnWrapper onClick={() => onClickMoveTo(BtnName)}>
      {/* // <BtnWrapper onClick={(() => onClickMoveTo(BtnName), () => onClickData())}> */}
      {isPwd == false && <BtnTextWrapper>{BtnName}</BtnTextWrapper>}
      {isPwd == true && <input class="pwdInput"></input>}
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
  & > .pwdInput {
    width: 85px;
    height: 35px;
    border: 1px solid #000000;
    border-radius: 20px;
    outline: none;
  }
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
