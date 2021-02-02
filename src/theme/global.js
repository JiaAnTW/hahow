import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
`;

export const color = {
    black: 'rgba(61,61,63,1)',
    darkGreen: 'rgba(40,183,141,1)',
    lightGreen: 'rgba(125,206,148,1)',
    whiteGreen: 'rgba(40,183,141,0.2)',
    white: 'rgba(249,248,253,1)',
    darkWhite: 'rgba(246,245,243,1)',
};

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: ${color.darkGreen};
    color: white;
    font-size: 16px;

    :hover {
        background-color: ${color.lightGreen};
    }
`;

//---------以下為全局設定---------
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Microsoft JhengHei';
    color: ${color.black};
  }

  #root{
    width: 100%;
    min-height: 100vh;
    background-color: ${color.white};
  }
`;

export default GlobalStyle;
