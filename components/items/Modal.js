import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import { BtnItem } from "./BtnItem";
import { BodyWrapper, CenterWrapper } from "../styled";

export const textAtom = atom({
  key: "comment",
  default: "비밀번호를 입력하세요.",
});
export const displayAtom = atom({
  key: "display",
  default: false,
});
export const Modal = () => {
  const [text, setText] = useRecoilState(textAtom);
  const [displayFlag, setDisplayFlag] = useRecoilState(displayAtom);
  const writeText = () => {
    text = "작성하겠습니까?";
    setText(text);
  };
  const pwdText = () => {
    text = "비밀번호를 입력하세요.";
    setText(text);
  };
  const showModal = () => {
    setDisplayFlag(true);
  };
  const disappearModal = () => {
    setDisplayFlag(false);
  };
  return (
    <BodyWrapper>
      <CenterWrapper>
        <ModalVirWrapper isDisplay={displayFlag}>
          <BackWrapper>
            <ModalWrapper>
              <div class="notice">
                <div class="text">{text}</div>
              </div>

              <div class="row">
                <div class="Rbtn">
                  {text == "비밀번호를 입력하세요." && (
                    <BtnItem isPwd={true} />
                  )}
                  {text == "작성하겠습니까?" && <BtnItem isPwd={false} BtnName={"취소"} />}
                </div>

                <div class="Lbtn">
                  <BtnItem isPwd={false} BtnName={"확인"} />
                </div>
              </div>
            </ModalWrapper>
          </BackWrapper>
        </ModalVirWrapper>
      </CenterWrapper>
    </BodyWrapper>
  );
};
const ModalVirWrapper = styled.div`
  display: ${(props) =>
    props.isDisplay ? `block` : `none`}; //display가 있으면 모달창 띄움 -> block
`;
const BackWrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(73, 73, 73, 0.5);
`;

const ModalWrapper = styled.div`
  z-index: 200;
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

  & > .notice {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    /* gap: 10px; */

    width: 153px;
    height: 37px;
  }
  & > .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px;

    padding: 0px;
    height: 55px;
    & > .Lbtn {
      height: 55px;
    }
    & > .Rbtn {
      height: 55px;
    }
  }
`;
