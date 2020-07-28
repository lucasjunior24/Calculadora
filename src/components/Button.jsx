import React from 'react'
import './Button.css'

export default props =>
    <button
        onClick={e => props.click && props.click(props.label)}
        className={
            // dentro de uma template string é possivel usar javaScript puro 
            `
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        
 
    `}>

        {props.label}
    </button>
