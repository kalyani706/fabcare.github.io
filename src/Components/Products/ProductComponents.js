import styled from "styled-components";
 export const ProductImg =styled.img`
 height: 300px;
 width: 100%;
 border: 1px solid black;
 @media screen and (max-width:960px){
     height: 100px;
     width: 70%;
 }
 @media screen and (max-width:1200px){
     height: 300px;
     width: 80%;
 }
 `
 export const H1 = styled.h1`
    @media screen and (max-width:960px){
        font-size: 16px;
    }
 `

  export const H1I = styled.h1`
  box-shadow: 5px 7px 5px #00334d;
  width: 600px;
  padding-bottom: 15px;
  @media screen and (max-width:960px){
      font-size: 15px;
      width: 100%;
      font-weight: bold;
  }
`
export const H5 = styled.h5`
    margin: 25px 0px;
    font-size: 17px;
`
 export const ProductDetailImg=styled.img`
 height: 250px;
 width: 80%;
 margin: 0 10%;
 border-radius: 5px;
 border: 1px solid black;
 @media screen and (max-width:960px){
      width: 100%;
      height: 200px;
      margin: 0%;
  }
 `
