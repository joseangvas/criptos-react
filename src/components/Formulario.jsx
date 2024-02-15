import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #7A7BFE;
    cursor: pointer;
  }
`

const Division = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  color: #FFF;
`

const Seleccion = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;

`

const Formulario = () => {

  const [moneda, SelectMonedas] = useSelectMonedas();

  return (
    <form>
        <Division>
            <label htmlFor="moneda">Elige tu moneda</label>
            <Seleccion name="moneda" id="moneda">
            <option value="" disabled defaultValue>Elige tu moneda</option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="EUR">Euro</option>
            <option value="GBP">Libra Esterlina</option>
            </Seleccion>
        </Division>

      <InputSubmit
        type="submit" 
        value="Cotizar" 
        className="button" 
      />
    </form>
  );
}

export default Formulario