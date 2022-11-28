import styled from "styled-components";

export const MainBox = styled.section`
position: absolute;
top: 0;
width: 100%;
height: 240vh;
background-color: black;
opacity: 0.5;
z-index: -1;
`
export const ContainerCountry = styled(MainBox)`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
z-index: 10;
opacity: 1;
background-color:transparent;
div{
    position:relative;
    top:24vh;
    display: flex;
    align-items: center;
    justify-content:center;
    gap:2vw;
    width: 95%;
    height:80vh
}
`
export const ImageCountry = styled.img`
height:60vh;
border: solid;
border-radius: 15px 30px 10px 30px;
`

export const CountryDescription = styled.p`
color: #fff;
font-family:"Roboto", sans-serif;
font-size:1.8vw;
line-height:5vh;
padding:12px;
width: 42%;
background-color: black;
border-radius:10px;
text-align:justify;
`