import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import axios from "axios";

import './Currency.css'

export const Currency = () => {

    const urls = [
        {label: 'ARG', value: 'https://pydolarlibre.francis.center/api/v1/argcurrency/json'},
        {label: 'COL', value: 'https://pydolarlibre.francis.center/api/v1/cop/json'},
        {label: 'BRA', value: 'https://pydolarlibre.francis.center/api/v1/brl/json'},
    ]

    const [currencies, setCurrencies] = useState([]);
    const getCurrency = (value = 'https://pydolarlibre.francis.center/api/v1/argcurrency/json') => {
       axios
           .get(value)
           .then((response) => setCurrencies(response.data))
    }

    useEffect(() => {
        getCurrency()
    }, [])

    const handleSelectChange = ( value ) => {
        getCurrency(value.value)
    }

return (
    <>
        <div className="Currency-container">
            <Select
                defaultValue = { { label: 'ARG', value: 'https://pydolarlibre.francis.center/api/v1/argcurrency/json' } }
                options = { urls }
                onChange = { handleSelectChange }
            />
            <div className="Currencies">
                <p>BUY: {currencies.Compra}$</p>
                <p>SELL: {currencies.Venta}$</p>
            </div>
        </div>


    </>
    )
}
export default Currency