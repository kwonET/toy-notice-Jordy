import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/items/Modal"
import { atom, useRecoilState } from "recoil";
export const countAtom=atom({
  key:'countState',
  default:0,
});

export const Header = () => {
  const [count, setCount]=useRecoilState(countAtom);
  const increaseCount=()=>{
    setCount(count+1);
  }

  //모바일 토글바 설정
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    // setToggleBar(!toggleBar);
  };
  // const onMenuClick = () => {
  //   setToggleMenu(!toggleMenu);
  //   setToggleBar(!toggleBar);
  // };
  return (
    <HeaderWrapper>
      <CenterWrapper>
        {count}
        <ThreeBar onClick={toggleChange}>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </ThreeBar>
      </CenterWrapper>

      {toggleMenu && (
        <Modal></Modal>
      )}

    </HeaderWrapper>
  );
};
const ThreeBar = styled.button`
  //버튼 초기화
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    display: none;
  }
  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3px;
  gap: 3px;

  margin-right: 30px;
  width: 30px;
  height: 21px;

  /* @media screen and (min-width: 376px) {
    left:430px;
  }
  @media screen and (max-width: 375px) {
    right:90px;
  } */

  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.05));
`;
const Bar = styled.div`
  width: 22px;
  height: 3px;

  background: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //데스크탑
  @media screen and (max-width: 1199px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

const CenterWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 1200px;
  height: 80px;

  //모바일
  @media screen and (max-width: 499px) {
    width: 100vw;
    height: 50px;
    background-color: #b8ebcd;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    background-color: #b8ebcd;
  }

  /* //데스크탑
  @media screen and (min-width: 1199px) {
    background-color: #b8ebcd;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    background-color: #b8ebcd;
    justify-content: center;
  } */
`;
