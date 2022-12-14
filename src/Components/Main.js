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
                    <S.FlagsHeader onClick={() => {setLg("?????????")}} className="coreia" src={koreaFlag}  alt="bandeira da coreia" />
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
                    <S.FlagsHeader onClick={() => {setLg("????????????")}} className="coreia" src={koreaFlag} alt="bandeira da coreia" />
                    <S.FlagsHeader onClick={() => {setLg("Lass uns weiter gehen")}} className="alemanha" src={germanFlag} alt="bandeira da alemanha" />
                </S.FlagBoxFooter>
            </S.Footer>
            {openC && <CountryComponent Image="https://free4kwallpapers.com/uploads/originals/2015/10/01/doha-qatar.jpg" Description="O Catar ?? um pa??s peninsular ??rabe cuja paisagem abrange um deserto ??rido e um longo litoral no Golfo P??rsico (??rabe) repleto de praias e dunas. Tamb??m na costa, fica a capital Doha, conhecida pelos arranha-c??us futuristas e pela arquitetura ultramoderna inspirada no antigo design isl??mico, com exemplos como o Museu de Arte Isl??mica, feito de calc??rio e localizado no cal??ad??o ?? beira-mar da cidade, chamado de Corniche." />}
            {openE && <CountryComponent Image="https://images8.alphacoders.com/121/1211840.jpg" Description="O Equador ?? um pa??s dividido pela linha do equador, situado na costa oeste da Am??rica do Sul. Sua paisagem diversificada abrange a floresta amaz??nica, as montanhas andinas e as Ilhas Gal??pagos, ricas em vida selvagem. Localizada nos contrafortes andinos e com uma eleva????o de 2.850 m."  />}
            {openF && <CountryComponent Image="https://c4.wallpaperflare.com/wallpaper/1014/843/831/4k-eiffel-tower-france-8k-wallpaper-preview.jpg" Description="A Fran??a, na Europa Ocidental, tem cidades medievais, aldeias alpinas e praias mediterr??neas. Paris, sua capital, ?? famosa pelas casas de alta costura, museus de arte cl??ssica, como o Louvre, e monumentos como a Torre Eiffel. O pa??s tamb??m ?? conhecido pelos vinhos e pela cozinha sofisticada." />}
            {openU && <CountryComponent Image="https://www.xtrafondos.com/en/descargar.php?id=4273&resolucion=3840x2160" Description="A Argentina ?? um pa??s da Am??rica do Sul com uma ??rea extensa que abrange montanhas dos Andes, lagos glaciais e pradarias nos Pampas, ocupadas tradicionalmente por seu famoso gado. O pa??s ?? conhecido tamb??m por sua dan??a e sua m??sica, o tango. A capital cosmopolita, Buenos Aires, tem como centro a Pra??a de Maio, cercada por edif??cios imponentes do s??culo XIX, como a Casa Rosada, o emblem??tico pal??cio presidencial."/>}
            {openEUA && <CountryComponent Image="https://conteudo.imguol.com.br/c/noticias/42/2020/04/06/o-estado-e-a-cidade-de-nova-york-nos-estados-unidos-eua-durante-a-pandemia-do-novo-coronavirus-1586222280704_v2_900x506.jpg" Description="Os EUA s??o um pa??s com 50 estados que cobrem uma vasta faixa da Am??rica do Norte, com o Alasca ao noroeste e o Hava?? no Oceano Pac??fico, estendendo a presen??a do pa??s. As principais cidades da costa atl??ntica s??o Nova York, um centro financeiro e cultural global, e a capital, Washington, DC." />}
            {openI && <CountryComponent Description="A Inglaterra, local de nascimento de Shakespeare e dos Beatles, ?? um pa??s nas ilhas brit??nicas que faz fronteira com a Esc??cia e o Pa??s de Gales. A capital, Londres, situada ??s margens do rio T??misa, abriga o Parlamento, o Big Ben e a Torre de Londres, do s??culo XI. A cidade ?? tamb??m um moderno centro multicultural de artes e neg??cios."   Image="https://besthqwallpapers.com/Uploads/21-7-2018/60029/thumb2-london-4k-evening-city-big-ben-english-landmarks.jpg" />}
            {openA && <CountryComponent Image="https://wallpaperaccess.com/full/45870.jpg" Description="A Ar??bia Saudita ?? um pa??s no deserto que abrange a maior parte da Pen??nsula Ar??bica, com litorais no Mar Vermelho e no Golfo P??rsico (??rabe). Conhecida como o local de nascimento do islamismo, a na????o ?? sede das 2 mesquitas mais sagradas da religi??o: Masjid al-Haram, em Meca, destino da peregrina????o anual Hajj, e Masjid an-Nabawi, em Medina, local de sepultamento do profeta Maom??." />}
            {openSP && <CountryComponent Image="https://c4.wallpaperflare.com/wallpaper/610/698/366/spain-seville-seville-plaza-de-espana-i-wallpaper-preview.jpg" Description="A Espanha, pa??s europeu da pen??nsula Ib??rica, tem 17 regi??es aut??nomas com geografia e cultura diversas. Madri, a capital, abriga o Pal??cio Real e o Museu do Prado, obras erigidas por mestres europeus. Seg??via tem um castelo medieval (Alc??zar) e um aqueduto romano intacto." />}
            {openSE && <CountryComponent  Description="O Senegal ?? um pa??s da costa ocidental da ??frica com uma rica heran??a colonial francesa e muitas atra????es naturais. Dacar, a capital, abriga a antiga ??rea da Medina e o estimado Mus??e Th??odore-Monod, que exp??e arte africana. Dacar tamb??m ?? conhecida pela vida noturna, que gira em torno da m??sica mbalax nativa. Saint-Louis, antiga capital da ??frica Ocidental Francesa, tem uma cidade antiga com arquitetura colonial. " Image="https://c0.wallpaperflare.com/preview/332/1018/505/senegal-dakar-goree-beach.jpg" />}
            {openM && <CountryComponent Image="https://media.istockphoto.com/id/539002142/photo/mexico-citys-downtown-at-twilight.jpg?b=1&s=170667a&w=0&k=20&c=ADrs4jbJY9Z1fZf1CDGkTqsl4ED3-dor-MddSF4S2DQ=" Description="O M??xico ?? um pa??s situado entre os Estados Unidos e a Am??rica Central, conhecido pelas praias no Pac??fico e no Golfo do M??xico e pela paisagem diversificada que inclui montanhas, desertos e selvas. Ru??nas antigas, como Teotihuac??n e a cidade maia de Chich??n Itz??, est??o espalhadas pelo pa??s, assim como cidades da era colonial espanhola. Na capital, Cidade do M??xico, lojas elegantes, museus renomados e restaurantes gourmet atendem ??s necessidades da vida moderna." />}
            {openSW && <CountryComponent Image="https://i.pinimg.com/originals/9d/81/c0/9d81c0a60c39925ce3de3677f33c9c84.png" Description="A Su????a ?? um pa??s montanhoso da Europa Central com um grande n??mero de lagos, vilas e picos elevados dos Alpes. Suas cidades t??m bairros medievais e monumentos como a torre do rel??gio Zytglogge, na capital Berna, e a ponte de madeira de Lucerna. O pa??s tamb??m ?? conhecido por suas esta????es de esqui e trilhas. Os setores banc??rio e financeiro s??o muito importantes para a economia do pa??s, e os chocolates e rel??gios su????os t??m fama no mundo todo." />}
            {openSB && <CountryComponent  Image="https://wallpaperaccess.com/full/1271059.jpg" Description="A S??rvia ?? um pa??s da pen??nsula dos B??lc??s, no sudeste da Europa, com planaltos ao norte e montanhas com resorts de esqui ao sul. A capital Belgrado ostenta uma arquitetura da era comunista e o Parque Kalemegdan, que abriga a Fortaleza de Belgrado, ocupada sucessivamente pelos imp??rios romano, bizantino e otomano. Stari Grad, a cidade antiga, tem mans??es do s??culo XIX, al??m de ??pera e bal?? no teatro nacional Narodno Pozori??te." />}
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
