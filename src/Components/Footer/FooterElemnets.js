import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
background-color: #99e6ff;
margin-top: 40px;
padding: 30px 0px;
height: auto;

`

export const FLogo = styled.img`
height: 100px;
justify-content:center; 
align-items:center;
margin-left: 50px;
@media screen and (max-width:960px){
       height:60px;
    }
`
export const Para = styled.p`
    color: "#000";
    margin-top: 20px;
    text-decoration: none;
    text-align:justify;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align:center;
    width: 300px;
    box-sizing: border-box;
    color: #000;

    @media screen and (max-width:960){
        margin: 0;
        padding:10px;
    }
`

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
    text-align:center;
    font-size: 25px;
    @media screen and (max-width:960){
        font-size: 20px;
    }
`

export const FooterLink = styled(Link)`
    color: #000;
    text-decoration: none;
    margin-bottom: 0.7rem;
    &:hover {
        color: #000;
        transition: 0.3s ease-out;
        text-decoration: none;
    }
`
export const Copyright = styled.p`
    color: "#000";
    text-decoration: none;
    text-align:center;
`