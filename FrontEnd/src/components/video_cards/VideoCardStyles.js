import styled from "styled-components";


export const VideoCardContainer = styled.div`
  width: ${(props) => props.width || 16}%;
  height: 23vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //background-color: aquamarine;
  //border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: ${(props) => props.margin || 0}%;
  
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 65%;
  border-radius:  ${(props) => props.radius}px;
`;

export const VideoCardDescriptionContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ChannelImage = styled.img`
  //width: 20%;
  height: 40%;
  border-radius: 50%;
`;

export const VideoCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  h1{
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: ${({theme}) => theme.text};
  }
  h2{
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: ${({theme}) => theme.textSoft};
  }
  p{
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    color: ${({theme}) => theme.textSoft};
  }
`;