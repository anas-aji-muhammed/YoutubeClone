import styled from "styled-components";

export const AppBarContainer = styled.div`
  height: 5vh;
  background-color: ${({theme})=>theme.bgColorLighter};
  //width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //position: relative;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h1{
    font-size: 20px;
    margin: 0;
    color: ${({theme})=>theme.text};
  }
`;

export const SearchContainer = styled.div`
  height: 3vh;
  background-color: ${({theme})=>theme.bgColorLighter};
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme})=>theme.textSoft};
  border-radius: 20px;
  border: 1px ${({theme})=>theme.bgcolor} solid;
  padding: 1px 10px ;
  
  input{
    width: 100%;
    height: fit-content;
    background-color: transparent;
    border: none;
    color: ${({theme})=>theme.text};
  }
  // div{
  //   height: 100%;
  //   width: 5%;
  //   background-color: ${({theme})=>theme.bgColor};
  // }
`;

export const verticalLine = styled.div`
  border-left:1px solid #000;
  height:100%;
  padding: 0 8px;
`;

