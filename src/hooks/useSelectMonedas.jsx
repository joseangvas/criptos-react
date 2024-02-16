import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    margin: 0.5rem;
    display: block;
`

const useSelectMonedas = (label) => {
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    const SelectCriptomonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    return [SelectMonedas]
}

export default useSelectMonedas