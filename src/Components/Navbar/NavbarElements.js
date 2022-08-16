import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from '../../globalStyles'

export const Nav = styled.div `
 background: #99e6ff;
 height: 100px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1.2rem;
 position: sticky;
 top: 0;
 z-index: 999;
 @media screen and (max-width:960px){
      height: 100px;
    }
`
export const Mail = styled.div`
    height: 40px;
    background-color: #000;
    color:#fff;
    padding-top:6px;

`
export const Phone = styled.p`
    text-align:right;
    margin-right: 13%;
    @media screen and (max-width:960px){
        text-align:center;
        font-size: 13px;
        margin-top: 4px;
        margin-right: auto;
    }
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`
export const NavLogo = styled(Link)`
  color: #fff;
  justify-content: flex-start;
  text-decoration: none;
  display:flex;
  align-items: center;
`
export const Logo = styled.img`
height: 100px;
margin-right: 0%.5rem;
@media screen and (max-width:960px){
       height:60px;
    }
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px) {
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align:center;
    padding-top:50px ;
    margin-right: 20vh ;

    @media screen and (max-width:960px){
        display: flex;
        flex-direction: column;
        width:100%;
        height:90vh;
        position: absolute;
        top:100px;
        left:${({click}) =>(click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #00334d;
        padding-top: 0px;
    }
`
export const NavItem = styled.li`
    height: 80px;
    border: none;
    @media screen and (max-width:960px){
        width: 100%;
        &:hover{
        border:none;
    }
    }
`

export const NavLinks = styled(Link)`
   color: #000;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding:1vh 5vh;
   height: 100%;
   font-size: 23px;
   &:hover{
       text-decoration: none;
       color: #0040ff;
       transition: 0.5s ease;
       font-size: 24px;
   }
    @media screen and (max-width:960px){
        text-align: center;
        padding-top:10px;
        width: 100%;
        display: table;

        &:hover{
            color: #000;
            transition: all 0.3s ease;
        }
    }
`