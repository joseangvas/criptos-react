import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';
import {monedas} from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 20px;

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
    border-radius: 10px;
    border: none;
    font-size: 1rem;
`

const Formulario = () => {
  const [SelectMonedas] = useSelectMonedas('Selecciona tu Moneda', monedas)

  return (
    <form>

        <Division>
              <SelectMonedas />
            {/* <Seleccion name="moneda" id="moneda">
            </Seleccion> */}
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