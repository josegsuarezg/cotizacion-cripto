import {useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  display: block;
  margin: 10px 0;
  font-family: 'lato', sans-serif;
  font-size: 18px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Select = styled.select`
  display: block;
  font-size: 14px;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  background-color: #ccc;
  @media (min-width: 768px){
    font-size: 18px;
  }
`

const useSelectMonedas = (label, opciones) => {
  
  const [state, setState] = useState('');

  const selectMonedas = () => (
    <>
      <Label> {label} </Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value="">Seleccione</option>

        {opciones.map(opcion => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, selectMonedas]
}

export default useSelectMonedas
