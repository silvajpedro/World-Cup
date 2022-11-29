import React, { useState } from "react";
import * as S from "./Main_Style.js";
import X from "../Assets/X.png";
import QatarComponent from "./Countrys/catar.js";
import EquadorComponent from "./Countrys/equador.js";
import FrenchComponent from "./Countrys/franca.js";
import UruguaiComponent from "./Countrys/uruguai.js";
import EuaComponent from "./Countrys/eua.js";
import EnglandComponent from "./Countrys/inglaterra.js";
import ArabiaComponent from "./Countrys/arabia.js";
import SpainComponent from "./Countrys/espanha.js";
import SenegalComponent from "./Countrys/senegal.js";
import MexicoComponent from "./Countrys/mexico.js";
import SwitzerlandComponent from "./Countrys/suica.js";
import SerbiaComponent from "./Countrys/servia.js";
import brazilFlag from "../Assets/brasil.png";
import argentinaFlag from "../Assets/argentina.png";
import koreaFlag from "../Assets/coreia.png";
import germanFlag from "../Assets/alemanha.png";
import qatarFlag from "../Assets/qatar.png";
import equadorFlag from "../Assets/equador.png";
import frenchFlag from "../Assets/franca.png";
import uruguaiFlag from "../Assets/uruguai.png";
import euaFlag from "../Assets/eua.png";
import englandFlag from "../Assets/inglaterra.png";
import arabiaFlag from "../Assets/arabia.png";
import spainFlag from "../Assets/espanha.png";
import senegalFlag from "../Assets/senegal.png";
import mexicoFlag from "../Assets/mexico.png";
import switzerlandFlag from "../Assets/dinamarca.png";
import serbiaFlag from "../Assets/servia.png";
import "../App.css";

export default function Main() {
    const [lg, setLg] = useState("BOLA PRA FRENTE");
    const [open, setOpen] = useState(false);
    const [openC, setOpenC] = useState(false);
    const [openE, setOpenE] = useState(false);
    const [openF, setOpenF] = useState(false);
    const [openU, setOpenU] = useState(false);
    const [openEUA, setOpenEua] = useState(false);
    const [openI, setOpenI] = useState(false);
    const [openA, setOpenA] = useState(false);
    const [openSP, setOpenSP] = useState(false);
    const [openSE, setOpenSE] = useState(false);
    const [openM, setOpenM] = useState(false);
    const [openSW, setOpenSW] = useState(false);
    const [openSB, setOpenSB] = useState(false);
    const [on, setOn] = useState(false);
    return (
        <>
            <S.Header isOn={on}>
                <S.FirsTitle>COPA DO MUNDO</S.FirsTitle>
                <S.FlagBoxHeader>
                    <S.FlagsHeader onClick={() => {setLg("BOLA PRA FRENTE")}} className="brasil" src={brazilFlag} alt="bandeira do Brasil" />
                    <S.FlagsHeader onClick={() => {setLg("SIGAMOS ENFRENTE")}} className="argentina" src={argentinaFlag} alt="bandeira da Argentina" />
                    <S.FlagsHeader onClick={() => {setLg("화이팅")}} className="coreia" src={koreaFlag}  alt="bandeira da coreia" />
                    <S.FlagsHeader onClick={() => { setLg("Lass uns weiter gehen")}} className="alemanha" src={germanFlag} alt="bandeira da Alemanha" />
                </S.FlagBoxHeader>
            </S.Header>
            <S.Main isOn={on}>
                <S.BackgroundStadium>
                    <h2>{lg} </h2>
                </S.BackgroundStadium>
                <S.FlagsBoxMain isOn={on}>
                    <img src={qatarFlag} onClick={() => {
                            setOpen(true);
                            setOpenC(true);
                            setOn(true);
                        }} alt="bandeira do qatar"/>
                    <img src={equadorFlag} onClick={() => {
                            setOpen(true);
                            setOpenE(true);
                            setOn(true);
                        }} alt="bandeira do equador" />
                    <img src={frenchFlag}  onClick={() => {
                            setOpen(true);
                            setOpenF(true);
                            setOn(true);
                        }} alt="bandeira da franca" />
                    <img src={uruguaiFlag} onClick={() => {
                            setOpen(true);
                            setOpenU(true);
                            setOn(true);
                        }} alt="bandeira do uruguai" />
                    <img src={euaFlag} onClick={() => {
                            setOpen(true);
                            setOpenEua(true);
                            setOn(true);
                        }} alt="bandeira do eua" />
                    <img src={englandFlag} onClick={() => {
                            setOpen(true);
                            setOpenI(true);
                            setOn(true);
                        }} alt="bandeira da inglaterra" />
                    <img src={arabiaFlag} onClick={() => {
                            setOpen(true);
                            setOpenA(true);
                            setOn(true);
                        }} alt="bandeira da arabia" />
                    <img src={spainFlag} onClick={() => {
                            setOpen(true);
                            setOpenSP(true);
                            setOn(true);
                        }} alt="bandeira da espanha" />
                    <img src={senegalFlag} onClick={() => {
                            setOpen(true);
                            setOpenSE(true);
                            setOn(true);
                        }} alt="bandeira do senegal" />
                    <img
                        src={mexicoFlag} onClick={() => {
                            setOpen(true);
                            setOpenM(true);
                            setOn(true);
                        }} alt="bandeira do mexico" />
                    <img src={switzerlandFlag} onClick={() => {
                        setOpen(true);
                        setOpenSW(true);
                        setOn(true);
                    }} alt="bandeira da suica" />
                    <img src={serbiaFlag} onClick={() => {
                        setOpen(true);
                        setOpenSB(true);
                        setOn(true);
                    }} alt="bandeira da servia" />
                </S.FlagsBoxMain>
            </S.Main>
            <S.Footer isOn={on}>
                <S.FlagBoxFooter>
                    <S.FlagsHeader onClick={() => { setLg("BOLA PRA FRENTE")}} className="brasil" src={brazilFlag} alt="bandeira do brasil" />
                    <S.FlagsHeader onClick={() => {setLg("SIGAMOS ENFRENTE")}} className="argentina" src={argentinaFlag} alt="bandeira da argentina" />
                    <S.FlagsHeader onClick={() => {setLg("계속하자")}} className="coreia" src={koreaFlag} alt="bandeira da coreia" />
                    <S.FlagsHeader onClick={() => {setLg("Lass uns weiter gehen")}} className="alemanha" src={germanFlag} alt="bandeira da alemanha" />
                </S.FlagBoxFooter>
            </S.Footer>
            {openC && <QatarComponent/>}
            {openE && <EquadorComponent />}
            {openF && <FrenchComponent />}
            {openU && <UruguaiComponent />}
            {openEUA && <EuaComponent />}
            {openI && <EnglandComponent />}
            {openA && <ArabiaComponent />}
            {openSP && <SpainComponent />}
            {openSE && <SenegalComponent />}
            {openM && <MexicoComponent />}
            {openSW && <SwitzerlandComponent />}
            {openSB && <SerbiaComponent />}
            {open && <S.X src={X} onClick={() => {
                setOn(false);
                setOpen(false);
                setOpenC(false);
                setOpenE(false);
                setOpenF(false)
                setOpenU(false)
                setOpenEua(false)
                setOpenI(false)
                setOpenA(false)
                setOpenSP(false)
                setOpenSE(false)
                setOpenM(false)
                setOpenSW(false)
                setOpenSB(false)
            }} alt="X para fechar" /> }
        </>
    );
}
