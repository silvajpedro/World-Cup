import styled, {createGlobalStyle} from "styled-components";
import Brasil from "../Assets/brasil.cur"
import Argentina from "../Assets/argentina.cur"
import Coreia from "../Assets/coreia.cur"
import Alemanha from "../Assets/alemanha.cur"
import Stadium from "../Assets/estadio.png"
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`
export const Header = styled.header`
position: relative;
z-index: -2;
display: flex;
align-items: center;
justify-content: space-between;
height: 10.5vh;
`
export const FirsTitle = styled.h1`
display: flex;
justify-content: flex-end;
font-family: "Roboto", sans-serif;
width: 23vw;
font-size: 2.5vw;
`
export const FlagBoxHeader = styled.div`

display: flex;
align-items: center;
justify-content: flex-start;
width: 26.5vw;
gap: 16px;
.brasil{
    position: relative;
    top: -0.4vh;
    cursor: url(${Brasil}), auto;
}
.argentina{
    cursor:url(${Argentina}), auto;
}
.coreia{
    cursor: url(${Coreia}), auto;
}
.alemanha{
    cursor: url(${Alemanha}), auto;
}
`
export const FlagsHeader = styled.img`
width: 5vw;
`
export const Main = styled.main`
position: relative;
z-index: -2;
height:210vh;
`
export const BackgroundStadium = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-image: url("https://static.corinthians.com.br/uploads/1560193829afdec7005cc9f14302cd0474fd0f3c96.jpg");
background-repeat: no-repeat;
background-position: 0 -35vh;
background-size:100%;
height: 78vh;
h2{
    position: relative;
    top: -3vh;
    right: 23vw;
    font-size: 6.2vw;
    font-family: "Roboto", sans-serif;
    color: #fff;
    width:45vw;
}
`
export const FlagsBoxMain = styled.section`
position: relative;
z-index: -2;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
height: 130vh;
img{
    width: 21vw;
}
img:hover{
    transform: scale(105%);
    cursor: pointer;
}
`
export const Footer = styled.footer`
position: relative;
z-index: -2;
display: flex;
/* border: solid; */
height: 16vh;
background-color: #D9D9D9;
`
export const FlagBoxFooter = styled(FlagBoxHeader)`
justify-content: center;
width: 35vw;

`