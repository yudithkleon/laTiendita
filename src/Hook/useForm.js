import React, { useState } from 'react'


const useForm = (inicialState={}) => {
   const [formValue, setformValue]= useState

const reset = () =>{
    setformValue(inicialState)
}

const hadleInputChange =({target })=>{
    setformValue({
        ...formValue,
        [target.name]: target.value
    })
}
return[formValue, hadleInputChange, reset]
}

export default useForm
