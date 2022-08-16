import styled from "styled-components";

export const Hr = styled.div`
width: 100%; 
text-align: center; 
border-bottom: 1px solid #000;
height: 80px;
background-color: #ccf2ff;
margin:30px 0 0 0px; 
`
export const Span = styled.span`
background:#fff; 
margin-top: 10px;
padding:5px 20px;
font-size: 35px;
font-weight: bold;
box-shadow:4px 4px 4px #000;
@media screen and (max-width:960px){
    font-size: 25px;
    padding: 10px 10px;
}
`

export const CarD = styled.div`
  padding: 16px;
  height: 100px;
  text-align: center;
  margin-bottom: 160px;
@media screen and (max-width: 960px) {
   align-items: center;
   height: 50px;

}
`


export const CarDImg = styled.img`
height: 12vh;
cursor: pointer;
box-shadow: 3px 3px 3px #000;
margin-top:30px ;
margin-bottom: 30px;
&:hover{
     height: 13vh;
     transition: 2ms ease-out;
 }
@media screen and (max-width: 960px) {
    height: 150px;
    &:hover{
     height: 160px;
     transition: 2s ease-out;
 }
}
`

export const CarDBody = styled.div`
text-align: center;
font-size: 34px;
color: #00334d;
cursor: pointer;
@media screen and (max-width: 960px) {
    font-size: 22px;
    margin: 10px auto;
}
`
export const AboutImg = styled.img`
margin-top: 30px;
margin-left:50px;
 height: 60vh;
 cursor: pointer;
 width: 60vh;
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

export const AboutInfo = styled.p`
text-align:justify;
padding-top: 30px;
font-size: 25px;
@media screen and (max-width:960px){
    font-size: 20px;
}
`
export const Projects = styled.div`
 margin-top:50px;
 background-color: rgb(0, 85, 128,0.8);
 font-size: 25px;
`

export const ProjectCarD = styled.div`
padding: 16px;
text-align: center;
padding-top: 50px;
padding-bottom: 50px;
&:hover{
    background-color:#d4f7ff;
    transition: 2s ease-out;
}
`
export const ReadMore = styled.button`
background-color: #00334d;
color: #fff;
height: 50px;
width: 200px;
font-size: 20px;
margin-top: 30px;
border-radius: 50px;
cursor: pointer;
margin-left: 45%;
@media screen and (max-width:960px){
    margin-left: 25%;
}
`
export const Click = styled.div`
    color:#fff;
    padding-top:6px;

`

export const H1 = styled.h1`
 color: #002266;
 text-align:center;
`

export const H3 = styled.h3`
 color: #1a8cff;
 margin-top: 20px;
 text-align:center;
`

export const P = styled.p`
 margin-top:50px;
 color: #0066cc;
 font-size: 22px;
`

export const CH1 = styled.h1`
text-align: center;
padding: 5% 20% 5% 20%;
font-size: 70px;
color: #002266;
cursor: pointer;
@media screen and (max-width: 960px) {
    font-size: 22px;
    margin: 10px auto;
}
`
export const ProcessImg = styled.img`
margin-top: 20px;
justify-content:center;
align-items:center;
 height: 12vh;
 cursor: pointer;
 margin-left:50px ;
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
export const PH3 = styled.h3`
color: #00334d;
 margin-top: 20px;
 text-align:left;
`

export const Que = styled.div`
    color:#00334d;
    border: 2px solid black;
    font-size:22px;

`
export const Ans = styled.div`
    color:#00334d;
    border-left:2px solid black;
    border-bottom:2px solid black;
    border-right:2px solid black;
    font-size: 22px;

`