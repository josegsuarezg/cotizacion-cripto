import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import Error from './Error'
import {monedas} from '../data/monedas.js';

const InputSubmit = styled.input`
  background-color: #9497ff;
  padding: 10px;
  margin: 25px 0;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  display: block;
  width: 100%;
  border: none;
  transition: background-color 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);
  
  useEffect(() => {
    const consultarApi = async () => {
      const URL =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        
        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();
        
        const arrayCriptos = resultado.Data.map( cripto => {
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }
          return objeto
        })
        setCriptos(arrayCriptos)
      }
      consultarApi();
  }, [])
  
  const handleSubmit = e => {
    e.preventDefault();
    
    if([moneda, criptomoneda].includes('')){
      setError(true);
      return
    }
    setError(false)
    setMonedas({moneda,criptomoneda})
  }
  
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type="submit" value="Cotizar" onClick={handleSubmit} />
      </form>
    </>
  );
}

export default Formulario
