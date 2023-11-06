import styled from "styled-components";


export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({theme}) => theme.bgColor};
  gap: 15px;
`;

export const HomePageContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
        padding: 20px;
  background-color: ${({theme}) => theme.bgColor};
        //align-items: center;
        gap: 15px;
`;