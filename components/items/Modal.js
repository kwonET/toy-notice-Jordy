import styled from "styled-components";

import { CtgrList } from "../CtgrList";
import { useEffect } from "react";
import { postData } from "../../util/postman";

export const Modal = () => {
      //카테고리 가져오기
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    let tempRender,tempPage;

    const temp = async () => {
      tempRender = await postData();
      tempPage=await postData();
      setRenderData(tempRender.data.list);
    };
    temp();
  },[]); //렌더링 끝난 시점에서 한번만 실행

  return (
    <BackWrapper>
      <ModalWrapper>
      
          <CtgrList
            postData={renderData}
            // inlineCollapsed={toggleBar}
            // onClick={onMenuClick}
          />
        
      </ModalWrapper>
    </BackWrapper>
  );
};
const ModalWrapper = styled.div``;
const BackWrapper = styled.div``;
