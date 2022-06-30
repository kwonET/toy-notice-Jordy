import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <CenterWrapper>헤더</CenterWrapper>
    </HeaderWrapper>
  );
};

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
  width: 1200px;
  height: 80px;

  //모바일
  @media screen and (max-width: 499px) {
    width: 100vw;
    background-color: aliceblue;
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    background-color: #c5ffa1;
    justify-content: center;
  }

  //데스크탑
  @media screen and (min-width: 1199px) {
    background-color: #c5ffa1;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    background-color: #c5ffa1;
    justify-content: center;
  }
`;
