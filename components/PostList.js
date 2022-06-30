import { PostItm }  from './items/PostItem';
import styled from "styled-components";

export const PostList = () => {
    const items = [<PostItm/>, <PostItm/>];
    
    return (
        <PostSixWrapper>
        <PostListWrapper>
            {items}
        </PostListWrapper>
        <PostListWrapper>
            {items}
        </PostListWrapper>
        <PostListWrapper>
            {items}
        </PostListWrapper>
        </PostSixWrapper>
    );
  };

const PostSixWrapper=styled.div``;
  const PostListWrapper = styled.div`
    /* Auto layout */
    /* Auto layout */
    width:950px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 0px 10px 10px;
    gap: 10px;

  `;