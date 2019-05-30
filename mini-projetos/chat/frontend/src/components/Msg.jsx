import React from 'react'
import './msg.css'

export default props => {
    return(
        <div className = "component-msg">
            <p className = 'nick'><strong>{props.nick}:</strong> </p>
            <p className = 'msg'>{props.msg}</p>
            <hr className = "separador-de-msg"/>
        </div>
    )
}