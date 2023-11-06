import styled from "styled-components";

export const VideoPageContainer = styled.div`
    background-color:  ${({theme}) => theme.bgColor};
    display: flex;
    //height: 100vh;
    justify-content: center;
    padding-top: 30px;
  gap: 15px;
  
`;
export const VideoContentContainer = styled.div`
  //background-color:  blue;
  //width: 45%;
  width: 50vw;
  //display: flex;
  //flex-direction: column;
  iframe{
    border-radius: 10px;
  }

`;
export const RecommendationContainer = styled.div`
    //background-color:  red;
  width: 20vw;
  h1{
    margin-bottom: 10px;
    color: ${({theme}) =>theme.text};
    font-size: 16px;
  }

`;