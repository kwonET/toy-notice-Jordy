import { useEffect, useState } from "react";
import styled from "styled-components";

export const DetailItem = ({ name, data }) => {
  const [renderList, setRenderList] = useState(null);
  
  useEffect(() => {
    let tempRender = [];

    for (let i = 0; i < data.length; i++) {
      if (i < 5) {
        tempRender.push(
          <DetailWrapper>
            <TitleWrapper>{name[i]}</TitleWrapper>
            <DataWrapper>{data[i]}</DataWrapper>
          </DetailWrapper>
        );
      } else if (i==5) {
        tempRender.push(
          <DetailImgWrapper>
            <TitleWrapper>{name[i]}</TitleWrapper>
            <ImgWrapper>
              <img src={`${data[i]}`} />
            </ImgWrapper>
          </DetailImgWrapper>
        );
      }
    }

    setRenderList(tempRender);
  },[name]);

  return <div>{renderList}</div>;
};

const ImgWrapper=styled.div`
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
      width:80px;
      height:80px;
    }
    @media screen and (min-width: 500px) {
    width: 150px;
    height: 150px;
    }
  }
`;
const DetailImgWrapper = styled.div`
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
const DetailWrapper = styled.div`
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
const DataWrapper = styled.div`
  text-align: left;
  width: 860px;
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
