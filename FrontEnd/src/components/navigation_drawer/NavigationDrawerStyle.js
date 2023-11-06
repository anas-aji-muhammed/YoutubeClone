import styled from "styled-components";

export const NavigationDrawerContainer = styled.div`
  height: 100vh;
  flex: .8;
  background-color: ${({theme}) => theme.bgColor};
  color: ${({theme}) => theme.text};
  position: sticky;
  top: 0;
  
  div{
    padding: 18px 20px;
  }
  
`;

export const MenuButton = styled.div`
  //padding: 10px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
  border-radius: 10px;
  h3{
    font-size: 16px;
    margin: 0;
  }
  &:hover{
  background-color:${({theme}) => theme.soft}
}
`;

export const HorizontalLine = styled.hr`
  height:1px;
  border-width:0;
  color:gray;
  background-color:${({theme}) => theme.soft}
`;

