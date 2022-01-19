import React from 'react'
import styled from '@emotion/styled';

const Contenido = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25%;
    display: block;
    margin: 0 auto;
  }
`;

const Precio = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 700;

  span {
    font-weight: 300;
  }
`;

const Texto = styled.h2`
  color: #c3c3c3;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  span {
    font-weight: 300;
  }
`;

const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;
  
  return (
    <Contenido>
      <img
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="imagen de criptomoneda"
      />
      <div>
        <Precio>
          <span>Precio actual: </span>
          {PRICE}
        </Precio>
        <Texto>
          <span>Precio mas alto del día:</span> {HIGHDAY}
        </Texto>
        <Texto>
          <span>Precio mas bajo del día: </span> {LOWDAY}
        </Texto>
        <Texto>
          <span>Variación de las últimas 24 horas: </span> {CHANGEPCT24HOUR}
        </Texto>
        <Texto>
          <span>Última actualización: </span> {LASTUPDATE}
        </Texto>
      </div>
    </Contenido>
  );
}

export default Resultado
