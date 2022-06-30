import { Router, useRouter } from "next/router";
import styled from "styled-components";
import { dummyData } from "../../util/dummy.js";
import Image from "next/image";

export const PostItm = () => {
  return (
    <PostWrapper>
      <ImgWrapper>
        <Image src="/image.png" width={160} height={160} />
      </ImgWrapper>

      <PostContentsWrapper>
        <PostTitleWrapper> {dummyData[0].title} </PostTitleWrapper>
        <PostTextWrapper> {dummyData[0].content} </PostTextWrapper>
        <PostDateWrapper> {dummyData[0].regDate} </PostDateWrapper>
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
