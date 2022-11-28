import React, { useState } from "react";
import * as S from "./Main_Style.js";
import X from "../Assets/X.png";
import QatarC from "./Countrys/catar.js";
import EquadorC from "./Countrys/equador.js";
import FrancaC from "./Countrys/franca.js";
import UruguaiC from "./Countrys/uruguai.js";
import EUAC from "./Countrys/eua.js";
import InglaterraC from "./Countrys/inglaterra.js";
import ArabiaC from "./Countrys/arabia.js";
import EspanhaC from "./Countrys/espanha.js";
import SenegalC from "./Countrys/senegal.js";
import MexicoC from "./Countrys/inglaterra.js";
import SuicaC from "./Countrys/suica.js";
import ServiaC from "./Countrys/servia.js";
import brasilFlag from "../Assets/brasil.png";
import argentinaFlag from "../Assets/argentina.png";
import coreiaSFlag from "../Assets/coreia.png";
import alemanhaFlag from "../Assets/alemanha.png";
import qatarFlag from "../Assets/qatar.png";
import equadorFlag from "../Assets/equador.png";
import francaFlag from "../Assets/franca.png";
import uruguaiFlag from "../Assets/uruguai.png";
import euaFlag from "../Assets/eua.png";
import inglaterraFlag from "../Assets/inglaterra.png";
import arabiaFlag from "../Assets/arabia.png";
import espanhaFlag from "../Assets/espanha.png";
import senegalFlag from "../Assets/senegal.png";
import mexicoFlag from "../Assets/mexico.png";
import suicaFlag from "../Assets/dinamarca.png";
import serviaFlag from "../Assets/servia.png";
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
                    <S.FlagsHeader onClick={() => {setLg("BOLA PRA FRENTE")}} className="brasil" src={brasilFlag} alt="" />
                    <S.FlagsHeader onClick={() => {setLg("SIGAMOS ENFRENTE")}} className="argentina" src={argentinaFlag} alt="" />
                    <S.FlagsHeader onClick={() => {setLg("계속하자")}} className="coreia" src={coreiaSFlag}  alt="" />
                    <S.FlagsHeader onClick={() => { setLg("Lass uns weiter gehen")}} className="alemanha" src={alemanhaFlag} alt="" />
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
                        }} alt=""/>
                    <img src={equadorFlag} onClick={() => {
                            setOpen(true);
                            setOpenE(true);
                            setOn(true);
                        }} alt="" />
                    <img src={francaFlag}  onClick={() => {
                            setOpen(true);
                            setOpenF(true);
                            setOn(true);
                        }} alt="" />
                    <img src={uruguaiFlag} onClick={() => {
                            setOpen(true);
                            setOpenU(true);
                            setOn(true);
                        }} alt="" />
                    <img src={euaFlag} onClick={() => {
                            setOpen(true);
                            setOpenEua(true);
                            setOn(true);
                        }} alt="" />
                    <img src={inglaterraFlag} onClick={() => {
                            setOpen(true);
                            setOpenI(true);
                            setOn(true);
                        }} alt="" />
                    <img src={arabiaFlag} onClick={() => {
                            setOpen(true);
                            setOpenA(true);
                            setOn(true);
                        }} alt="" />
                    <img src={espanhaFlag} onClick={() => {
                            setOpen(true);
                            setOpenSP(true);
                            setOn(true);
                        }} alt="" />
                    <img src={senegalFlag} onClick={() => {
                            setOpen(true);
                            setOpenSE(true);
                            setOn(true);
                        }} alt="" />
                    <img
                        src={mexicoFlag} onClick={() => {
                            setOpen(true);
                            setOpenM(true);
                            setOn(true);
                        }} alt="" />
                    <img src={suicaFlag} onClick={() => {
                        setOpen(true);
                        setOpenSW(true);
                        setOn(true);
                    }} alt="" />
                    <img src={serviaFlag} onClick={() => {
                        setOpen(true);
                        setOpenSB(true);
                        setOn(true);
                    }} alt="" />
                </S.FlagsBoxMain>
            </S.Main>
            <S.Footer isOn={on}>
                <S.FlagBoxFooter>
                    <S.FlagsHeader onClick={() => { setLg("BOLA PRA FRENTE")}} className="brasil" src={brasilFlag} alt="" />
                    <S.FlagsHeader onClick={() => {setLg("SIGAMOS ENFRENTE")}} className="argentina" src={argentinaFlag} alt="" />
                    <S.FlagsHeader onClick={() => {setLg("계속하자")}} className="coreia" src={coreiaSFlag} alt="" />
                    <S.FlagsHeader onClick={() => {setLg("Lass uns weiter gehen")}} className="alemanha" src={alemanhaFlag} alt="" />
                </S.FlagBoxFooter>
            </S.Footer>
            {openC && <QatarC />}
            {openE && <EquadorC />}
            {openF && <FrancaC />}
            {openU && <UruguaiC />}
            {openEUA && <EUAC />}
            {openI && <InglaterraC />}
            {openA && <ArabiaC />}
            {openSP && <EspanhaC />}
            {openSE && <SenegalC />}
            {openM && <MexicoC />}
            {openSW && <SuicaC />}
            {openSB && <ServiaC />}
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
            }} alt="" /> }
        </>
    );
}
