import React, { useState } from "react";
import * as S from "./Main_Style.js";
import X from "../Assets/X.png";
import CountryComponent from "./Countrys/Country.js";
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
                        }} alt="bandeira da equador" />
                    <img src={frenchFlag}  onClick={() => {
                            setOpen(true);
                            setOpenF(true);
                            setOn(true);
                        }} alt="bandeira da franca" />
                    <img src={uruguaiFlag} onClick={() => {
                            setOpen(true);
                            setOpenU(true);
                            setOn(true);
                        }} alt="bandeira do argentina" />
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
            {openC && <CountryComponent Image="https://free4kwallpapers.com/uploads/originals/2015/10/01/doha-qatar.jpg" Description="O Catar é um país peninsular árabe cuja paisagem abrange um deserto árido e um longo litoral no Golfo Pérsico (Árabe) repleto de praias e dunas. Também na costa, fica a capital Doha, conhecida pelos arranha-céus futuristas e pela arquitetura ultramoderna inspirada no antigo design islâmico, com exemplos como o Museu de Arte Islâmica, feito de calcário e localizado no calçadão à beira-mar da cidade, chamado de Corniche." />}
            {openE && <CountryComponent Image="https://images8.alphacoders.com/121/1211840.jpg" Description="O Equador é um país dividido pela linha do equador, situado na costa oeste da América do Sul. Sua paisagem diversificada abrange a floresta amazônica, as montanhas andinas e as Ilhas Galápagos, ricas em vida selvagem. Localizada nos contrafortes andinos e com uma elevação de 2.850 m."  />}
            {openF && <CountryComponent Image="https://c4.wallpaperflare.com/wallpaper/1014/843/831/4k-eiffel-tower-france-8k-wallpaper-preview.jpg" Description="A França, na Europa Ocidental, tem cidades medievais, aldeias alpinas e praias mediterrâneas. Paris, sua capital, é famosa pelas casas de alta costura, museus de arte clássica, como o Louvre, e monumentos como a Torre Eiffel. O país também é conhecido pelos vinhos e pela cozinha sofisticada." />}
            {openU && <CountryComponent Image="https://www.xtrafondos.com/en/descargar.php?id=4273&resolucion=3840x2160" Description="A Argentina é um país da América do Sul com uma área extensa que abrange montanhas dos Andes, lagos glaciais e pradarias nos Pampas, ocupadas tradicionalmente por seu famoso gado. O país é conhecido também por sua dança e sua música, o tango. A capital cosmopolita, Buenos Aires, tem como centro a Praça de Maio, cercada por edifícios imponentes do século XIX, como a Casa Rosada, o emblemático palácio presidencial."/>}
            {openEUA && <CountryComponent Image="https://conteudo.imguol.com.br/c/noticias/42/2020/04/06/o-estado-e-a-cidade-de-nova-york-nos-estados-unidos-eua-durante-a-pandemia-do-novo-coronavirus-1586222280704_v2_900x506.jpg" Description="Os EUA são um país com 50 estados que cobrem uma vasta faixa da América do Norte, com o Alasca ao noroeste e o Havaí no Oceano Pacífico, estendendo a presença do país. As principais cidades da costa atlântica são Nova York, um centro financeiro e cultural global, e a capital, Washington, DC." />}
            {openI && <CountryComponent Description="A Inglaterra, local de nascimento de Shakespeare e dos Beatles, é um país nas ilhas britânicas que faz fronteira com a Escócia e o País de Gales. A capital, Londres, situada às margens do rio Tâmisa, abriga o Parlamento, o Big Ben e a Torre de Londres, do século XI. A cidade é também um moderno centro multicultural de artes e negócios."   Image="https://besthqwallpapers.com/Uploads/21-7-2018/60029/thumb2-london-4k-evening-city-big-ben-english-landmarks.jpg" />}
            {openA && <CountryComponent Image="https://wallpaperaccess.com/full/45870.jpg" Description="A Arábia Saudita é um país no deserto que abrange a maior parte da Península Arábica, com litorais no Mar Vermelho e no Golfo Pérsico (Árabe). Conhecida como o local de nascimento do islamismo, a nação é sede das 2 mesquitas mais sagradas da religião: Masjid al-Haram, em Meca, destino da peregrinação anual Hajj, e Masjid an-Nabawi, em Medina, local de sepultamento do profeta Maomé." />}
            {openSP && <CountryComponent Image="https://c4.wallpaperflare.com/wallpaper/610/698/366/spain-seville-seville-plaza-de-espana-i-wallpaper-preview.jpg" Description="A Espanha, país europeu da península Ibérica, tem 17 regiões autônomas com geografia e cultura diversas. Madri, a capital, abriga o Palácio Real e o Museu do Prado, obras erigidas por mestres europeus. Segóvia tem um castelo medieval (Alcázar) e um aqueduto romano intacto." />}
            {openSE && <CountryComponent  Description="O Senegal é um país da costa ocidental da África com uma rica herança colonial francesa e muitas atrações naturais. Dacar, a capital, abriga a antiga área da Medina e o estimado Musée Théodore-Monod, que expõe arte africana. Dacar também é conhecida pela vida noturna, que gira em torno da música mbalax nativa. Saint-Louis, antiga capital da África Ocidental Francesa, tem uma cidade antiga com arquitetura colonial. " Image="https://c0.wallpaperflare.com/preview/332/1018/505/senegal-dakar-goree-beach.jpg" />}
            {openM && <CountryComponent Image="https://media.istockphoto.com/id/539002142/photo/mexico-citys-downtown-at-twilight.jpg?b=1&s=170667a&w=0&k=20&c=ADrs4jbJY9Z1fZf1CDGkTqsl4ED3-dor-MddSF4S2DQ=" Description="O México é um país situado entre os Estados Unidos e a América Central, conhecido pelas praias no Pacífico e no Golfo do México e pela paisagem diversificada que inclui montanhas, desertos e selvas. Ruínas antigas, como Teotihuacán e a cidade maia de Chichén Itzá, estão espalhadas pelo país, assim como cidades da era colonial espanhola. Na capital, Cidade do México, lojas elegantes, museus renomados e restaurantes gourmet atendem às necessidades da vida moderna." />}
            {openSW && <CountryComponent Image="https://i.pinimg.com/originals/9d/81/c0/9d81c0a60c39925ce3de3677f33c9c84.png" Description="A Suíça é um país montanhoso da Europa Central com um grande número de lagos, vilas e picos elevados dos Alpes. Suas cidades têm bairros medievais e monumentos como a torre do relógio Zytglogge, na capital Berna, e a ponte de madeira de Lucerna. O país também é conhecido por suas estações de esqui e trilhas. Os setores bancário e financeiro são muito importantes para a economia do país, e os chocolates e relógios suíços têm fama no mundo todo." />}
            {openSB && <CountryComponent  Image="https://wallpaperaccess.com/full/1271059.jpg" Description="A Sérvia é um país da península dos Bálcãs, no sudeste da Europa, com planaltos ao norte e montanhas com resorts de esqui ao sul. A capital Belgrado ostenta uma arquitetura da era comunista e o Parque Kalemegdan, que abriga a Fortaleza de Belgrado, ocupada sucessivamente pelos impérios romano, bizantino e otomano. Stari Grad, a cidade antiga, tem mansões do século XIX, além de ópera e balé no teatro nacional Narodno Pozorište." />}
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
