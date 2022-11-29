import React from "react";
import * as S from "./Country_style.js"
export default function Country({Description, Image}) {
  return (
    <>
    <S.MainBox>
    </S.MainBox>
      <S.ContainerCountry>      
        <div>
          <S.ImageCountry src={Image} alt="imagem do país" />
            <S.CountryDescription>{Description}</S.CountryDescription>
        </div>
      </S.ContainerCountry>
    
    </>
  )
}

