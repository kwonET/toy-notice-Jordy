import { PostItm } from "./items/PostItem";
import styled from "styled-components";
import { dummyData } from "../util/dummy.js";
import { postData } from "../util/postman.js";

import { useEffect, useState } from "react";

export const PostList = ({ postData }) => {
  const items = postData;
  const [renderList, setRenderList] = useState(null);
  useEffect(() => {
    let tempRender = [];
    for (let i = 0; i < items.length; i++) {
      if (i != 0 && i % 2 === 0) {
        //i가 0이 아닌 2의 배수 - 2,4,6,8
        tempRender.push(
          <PostListWrapper>
            <PostItm
              thumb={items[i - 2].thumbUrl}
              title={items[i - 2].title}
              content={items[i - 2].content}
              regDate={items[i - 2].regDate}
            />
            <PostItm
              thumb={items[i - 2].thumbUrl}
              title={items[i - 1].title}
              content={items[i - 1].content}
              regDate={items[i - 1].regDate}
            />
          </PostListWrapper>
        );
      }
    }
    setRenderList(tempRender);
  }, [items]);

  return <div>{renderList}</div>;
};

const PostSixWrapper = styled.div``;

const PostListWrapper = styled.div`
  //모바일
  @media screen and (max-width: 499px) {
    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 355px;
    padding: 5px 0px 5px 15px;
    gap: 7.5px;
    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  //데스크탑
  @media screen and (min-width: 500px) {
    /* Auto layout */
    width: 950px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 0px 10px 10px;
    gap: 10px;
  }
`;
