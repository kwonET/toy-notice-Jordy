import { Router, useRouter } from "next/router";
import styled from "styled-components";

export const CtgrItm = ({ categoryDummyDate }) => {
  return (
      <CtgrWrapper>
        <CtgrTextWrapper> 
         {/* {categoryDummyDate} */
          categoryDummyDate.id
         }
        </CtgrTextWrapper>
      </CtgrWrapper>
  );
};


const CtgrWrapper = styled.div`
  /* Auto layout */
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
`;

const CtgrTextWrapper = styled.div`
  box-sizing: border-box;

  width: 200px;
  height: 35px;
  border: 1px solid #000000;

  text-align: center;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  gap: 10px;
  box-shadow: -3px 4px 3px rgba(0, 0, 0, 0.15);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #000000;
`;
