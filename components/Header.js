import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <CenterWrapper>헤덩</CenterWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterWrapper = styled.div`
    width: 1200px;
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
