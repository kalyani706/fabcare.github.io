import styled from "styled-components";

export const H1 = styled.h1`
 color: #002266;
 text-align:center;
`

export const H3 = styled.h3`
 color: #1a8cff;
 margin-top: 20px;
 text-align:center;
`
export const AboutusImg = styled.img`
margin-top: 30px;
margin-left:50px;
 height: 70vh;
 cursor: pointer;
box-shadow: 3px 3px 3px #000;
 &:hover{
     transform: 'rotate(180deg)';
 }
 @media screen and (max-width:960px){
     height:350px ;
     &:hover{
     height: 360px;
 }
 }
`

export const AboutusInfo = styled.p`
text-align:justify;
padding-top: 30px;
font-size: 25px;
@media screen and (max-width:960px){
    font-size: 20px;
}
`
export const P = styled.p`
 margin-top:50px;
 color: #0066cc;
 font-size: 22px;
`