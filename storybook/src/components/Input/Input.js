import React from 'react'
import "./Input.css"

const Input = (props) => {
    const {variant,type,place,children,...rest} = props;
  return (
    <input type={type} placeholder={place} className={`input ${variant}`} {...rest}/>
  )
}

export default Input