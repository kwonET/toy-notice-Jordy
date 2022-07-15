import { Router, useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";

export const PostItm = ({ id,thumb, title, content, regDate }) => {
  const [dateVisible, setDateVisible] = useState(null); // 실제로 보이게 될 가공된 날짜 문자열
  const {push} = useRouter();

  const onClickMoveTo=useCallback((id)=> {
    push(`/board/detail?id=${id}`);
  },[]);

  useEffect(() => {
    // regDate -> dateVisible로 보여주고싶은 형태로 날짜를 가공
    //"2022-06-30T04:33:54.000Z"
    const newData = new Date(regDate);
    let tempDate = `${newData.getFullYear()}년${newData.getMonth()}월${newData.getDay()}일`;

    setDateVisible(tempDate);
  }, [regDate]);

  return (
    <PostWrapper onClick={()=>onClickMoveTo(id)}>
      <ImgWrapper>
        <img src={`${thumb}`} />
        {/* <Image src={thumb} layout="fill" objectFit="cover" /> */}
      </ImgWrapper>

      <PostContentsWrapper>
        <PostTitleWrapper> {title} </PostTitleWrapper>
        <PostTextWrapper> {content} </PostTextWrapper>
        <PostDateWrapper> {dateVisible} </PostDateWrapper>

        {/* <PostDateWrapper> {document.dateVisible} </PostDateWrapper> */}
      </PostContentsWrapper>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  //버튼 초기화
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  //모바일
  @media screen and (max-width: 499px) {
    width: 335px;
    height: 110px;
    align-self: stretch;
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    width: 446px;
    height: 201px;
  }

  border: 1px solid #000000;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

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

    border: 1px solid #000000;
  }
  & > img {

    object-fit: contain;
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

const PostContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  //모바일
  @media screen and (max-width: 499px) {
    gap: 10px;
    width: 100px;
    height: 90px;
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    gap: 15px;
    width: 200px;
    height: 141px;
  }

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
const PostTitleWrapper = styled.div`
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  text-align: left;

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PostTextWrapper = styled.div`
  //모바일
  @media screen and (max-width: 499px) {
    height: 30px;
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    height: 90px;
  }
  width:230px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  text-align: left;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #000000;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const PostDateWrapper = styled.div`
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  text-align: left;
  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
