import React, {useState} from "react";
import * as S from "./Main_Style.js"
import Catar from "./Countrys/catar.js"
import Brasil from "../Assets/brasil.png"
import Argentina from "../Assets/argentina.png"
import CoreiaS from "../Assets/coreia.png"
import Alemanha from "../Assets/alemanha.png"
import Qatar from "../Assets/qatar.png"
import Equador from "../Assets/equador.png"
import Franca from "../Assets/franca.png"
import Uruguai from "../Assets/uruguai.png"
import EUA from "../Assets/eua.png"
import Inglaterra from "../Assets/inglaterra.png"
import Arabia from "../Assets/arabia.png"
import Espanha from "../Assets/espanha.png"
import Senegal from "../Assets/senegal.png"
import Mexico from "../Assets/mexico.png"
import Dinamarca from "../Assets/dinamarca.png"
import Servia from "../Assets/servia.png"

import '../App.css'
export default function Main(){
const [lg, setLg] = useState("BOLA PRA FRENTE")
    return(
        <>
        <S.Header>
            <S.FirsTitle>COPA DO MUNDO</S.FirsTitle>
            <S.FlagBoxHeader>
                <S.FlagsHeader onClick={()=>{setLg("BOLA PRA FRENTE")}} className="brasil" src={Brasil} alt=""/>
                <S.FlagsHeader onClick={()=>{setLg("SIGAMOS ENFRENTE")}} className="argentina" src={Argentina} alt=""/>
                <S.FlagsHeader onClick={()=>{setLg("계속하자")}} className="coreia" src={CoreiaS} alt=""/>
                <S.FlagsHeader onClick={()=>{setLg("Lass uns weiter gehen")}} className="alemanha" src={Alemanha} alt=""/>
            </S.FlagBoxHeader>
        </S.Header>
        <S.Main>
            <S.BackgroundStadium>
               <h2>{lg} </h2>
            </S.BackgroundStadium>
            <S.FlagsBoxMain>
                <img src={Qatar} alt=""/>
                <img src={Equador} alt=""/>
                <img src={Franca} alt=""/>
                <img src={Uruguai} alt=""/>
                <img src={EUA} alt=""/>
                <img src={Inglaterra} alt=""/>
                <img src={Arabia} alt=""/>
                <img src={Espanha} alt=""/>
                <img src={Senegal} alt=""/>
                <img src={Mexico} alt=""/>
                <img src={Dinamarca} alt=""/>
                <img src={Servia} alt=""/>
            </S.FlagsBoxMain>
        </S.Main>
        <S.Footer>
        <S.FlagBoxFooter>
                <S.FlagsHeader onClick={()=>{setLg("BOLA PRA FRENTE")}} className="brasil" src={Brasil} alt=""/>
                <S.FlagsHeader onClick={()=>{setLg("SIGAMOS ENFRENTE")}} className="argentina" src={Argentina} alt=""/>
                <S.FlagsHeader onClick={()=>{setLg("계속하자")}} className="coreia" src={CoreiaS} alt=""/>
                <S.FlagsHeader onClick={()=>{setLg("Lass uns weiter gehen")}} className="alemanha" src={Alemanha} alt=""/>
            </S.FlagBoxFooter>
        </S.Footer>
        <Catar/>
        </>
    )
}