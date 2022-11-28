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
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    border: solid;
    width: 100%;
    height:70vh
}
`
export const ImageCountry = styled.img`
height:50vh;
border: solid;
border-radius: 15px 30px 10px 30px;
`

export const CountryDescription = styled.p`
color: #fff;
`