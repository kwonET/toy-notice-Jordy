import { useEffect, useState } from "react";
import styled from "styled-components";

export const WriteItem = ({regData}) => {
  const [renderList, setRenderList] = useState(null);
  const [inputValue, setInputValue] = useState("");

  let nameList = ["title", "content", "nickName", "password"];
  useEffect(() => {
    let tempRender = [];
    for (let i = 0; i < nameList.length; i++) {
      {
        tempRender.push(
          <WriteWrapper>
            <TitleWrapper>{nameList[i]}</TitleWrapper>
            <DataWrapper
              type="text"
              onChange={(event) =>
                setInputValue({
                  ...inputValue, //기존 인풋벨류를 포함한 상태에서 시작
                  [nameList[i]]: event.target.value,
                })
              }
            ></DataWrapper>
          </WriteWrapper>
        );
      }
    }
    setRenderList(tempRender);
  }, [inputValue]);
  regData(inputValue);
  return <div>{renderList}</div>;
};

const ImgWrapper = styled.div`
  //모바일
  @media screen and (max-width: 499px) {
    width: 80px;
    height: 80px;
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    width: 160px;
    height: 160px;
  }
  & > img {
    /* padding-top: 70px; */
    /* object-fit: contain; */
    @media screen and (max-width: 499px) {
      width: 80px;
      height: 80px;
    }
    @media screen and (min-width: 500px) {
      width: 150px;
      height: 150px;
    }
  }
`;
const WriteImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 40px;

  width: 1140px;
  height: 150px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const WriteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 40px;

  width: 1140px;
  height: 37px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const TitleWrapper = styled.div`
  width: 60px;
  height: 17px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const DataWrapper = styled.input`
  text-align: left;
  width: 860px;
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  outline: none;
  border-radius: 5px;
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
