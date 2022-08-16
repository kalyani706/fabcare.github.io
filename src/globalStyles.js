import styled , {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family:Arial, Helvetica, sans-serif;
    
}
`

export const Container = styled.div`
z-index: 1;
width: 100% !important;
max-width: 1500px;
margin-right:auto;
margin-left: auto;
padding-right: 50px;
padding-left:50px;

@media screen and (max-width:960px){
    padding-right: 30px;
    padding-left: 30px;
}
`

export default GlobalStyle