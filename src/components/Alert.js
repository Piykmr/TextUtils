import React from 'react'

function Alert(props) {
    return (
        props.alert &&
        <div className="container">
        <div className="container alert alert-success" role="alert">
            <h5>{props.alert.type}&nbsp;:&nbsp;{props.alert.msg}</h5>
        </div>
        </div>
    )
}

export default Alert
