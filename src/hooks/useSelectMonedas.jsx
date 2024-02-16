import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    font-weight: bold;
    font-size: 1rem;
    margin: 0.5rem;
    display: block;
`

const useSelectMonedas = (label, opciones) => {
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id} 
                        value={opcion.id}
                        >{opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )

    return [SelectMonedas]
}

export default useSelectMonedas