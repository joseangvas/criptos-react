import React from 'react'

const useSelectMonedas = (label) => {
    const SelectMonedas = () => {
        <>
            <label>{label}</label>
        </>
    }

    return [SelectMonedas]
}

export default useSelectMonedas