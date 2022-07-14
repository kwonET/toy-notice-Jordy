import styled from "styled-components";

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top:80px;
`;

const CenterWrapper = styled.div`
    /* width:100%; */
    width: 1200px;
    /* height: 1000px; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;

    //모바일
    @media screen and (max-width: 499px) {
        width:375px;
    }
`;

// const BorderWrapper = styled.div<{width?:number}>`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 40px;

//   width: ${({width})=>width??1080}px;
//   height: 559px;

//   background: #ffffff;
//   border: 1px solid #000000;

//   /* Inside auto layout */

//   flex: none;
//   order: 0;
//   align-self: stretch;
//   flex-grow: 1;
// `;
// 
export {BodyWrapper,CenterWrapper};