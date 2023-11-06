import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: flex-start;
  //width: 100%;
  color: white;
  margin-bottom: 10px;
  img{
    height: 50px;
    border-radius: 50%;
  }
`;

export const CommentDetailsContainer = styled.div`
  margin-left: 10px;
      display: flex;
      flex-direction: column;
  justify-content: center;
  
  h1{
    font-size: 14px;
    margin: 0;
  }
`;