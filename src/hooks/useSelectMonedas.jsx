import React from 'react'
import styled from '@emotion/styled'

const useSelectMonedas = (label) => {
    const SelectMonedas = () => {
        <>
            <label>{label}</label>
        </>
    }

    return [SelectMonedas]
}

export default useSelectMonedas