import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

export const PostItm = ({title, content, regDate}) => {
  const [dateVisible, setDateVisible] = useState(null); // 실제로 보이게 될 가공된 날짜 문자열

  useEffect(()=>{
    document.dateVisible=regDate;
    // regDate -> dateVisible로 보여주고싶은 형태로 날짜를 가공
  }, [regDate]);

  return (
    <PostWrapper>
      <ImgWrapper>
        <Image src="/image.png" width={160} height={160} />
      </ImgWrapper>

      <PostContentsWrapper>
        <PostTitleWrapper> {title} </PostTitleWrapper>
        <PostTextWrapper> {content} </PostTextWrapper>
        <PostDateWrapper> {document.dateVisible} </PostDateWrapper>
      </PostContentsWrapper>
    </PostWrapper>
  );
};
const ImgWrapper = styled.div`
  border: 1px solid #000000;
`;

const PostWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  width: 446px;
  height: 201px;

  border: 1px solid #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PostContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 20px;

  width: 100px;
  height: 141px;
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

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PostTextWrapper = styled.div`
  height: 51px;

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

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
