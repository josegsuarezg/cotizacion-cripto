import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './Components/Formulario';
import Resultado from './Components/Resultado';
import Spiner from './Components/Spiner';
import ImagenCripto from './img/imagen-criptos.png';


//Style Components
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 50px auto 0 auto;
  display: block;
  @media (min-width: 768px) {
    margin: 100px auto 0 auto;
  }
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  margin: 12px auto 0 auto;
  
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
  
  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;
    font-size: 30px;
  }
`;  

function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  
  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        
        const {moneda, criptomoneda} = monedas;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        
        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();
      
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      }
      
      cotizarCripto();
    }
  }, [monedas]);
  
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen Criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        
        <Formulario setMonedas={setMonedas}/>
        {cargando && <Spiner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
        
      </div>
    </Contenedor>
  );
}

export default App
