import styled from "styled-components";

export const VideoPlayerComponentContainer = styled.div`
    height: 65vh;
    //background-color: green;
  color: ${({theme})=>theme.text};
  iframe{
    height: 65%;
  }
`;

export const VideoPlayerDescription = styled.div`
  display: flex;
  justify-content: space-between;
  //width: 100%;
  //background-color: blue;
`;

export const ChannelInfoContainer = styled.div`
    display: flex;
    img{
      border-radius: 50%;
      height: 45px;
      cursor: pointer;
    }
  button{
    padding: 5px 30px;
    border-radius: 20px;
    margin-left: 20px;
    background-color: ${({theme}) => theme.bgColorLighter};
    border:  ${({theme}) => theme.bgColor} 1px solid;
    color:  ${({theme}) => theme.text};
    cursor: pointer;

  }
`;
export const ChannelInfo = styled.div`
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  h1{
    font-size: 16px;
    margin: 0;
  }
  p{
    font-size: 14px;
    margin: 0;
  }


`;
export const VideoActionsContainer = styled.div`
    display: flex;
  
`;
export const ActionButtonContainer = styled.div`
  margin-left: 5px;
  padding: 5px 20px;
  background-color: ${({theme}) => theme.bgColorLighter};
  border:  ${({theme}) => theme.bgColor} 1px solid;
  color:  ${({theme}) => theme.text};
  cursor: pointer;
  border-radius: 20px;
  div{
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
export const VerticalLine = styled.div`
  border-left:${({theme}) => theme.textSoft} 1px solid ;
  height:20px;
  padding-left: 5px;
`;

export const DescriptionAndViewsContainer = styled.div`
  background-color: ${({theme}) => theme.bgColorLighter};
  padding: 5px 20px;
  margin-top: 10px;
  border-radius: 10px;
  h1{
    font-weight: bold;
    font-size: 14px;
  }
  p{
    font-size: 14px;
  }

`;
