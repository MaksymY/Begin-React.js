import React from 'react'
import './Button.css'

const Button = ({ vieillir }) =>{
    return(
    <button onClick={vieillir}>
        Vieillir de 2 ans
    </button>
    )
}
export default Button