import { Router, useRouter } from "next/router";
import styled from "styled-components";

export const PageItem = ({ pageNum }) => {
  return (
    <PageWrapper>
      <PageTextWrapper>{pageNum}</PageTextWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  /* Auto layout */
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 24px;
  height: 24px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 12px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const PageTextWrapper = styled.div`
  width: 8px;
  height: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;

  color: #494949;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;