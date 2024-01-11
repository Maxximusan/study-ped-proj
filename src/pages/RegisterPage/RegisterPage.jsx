// import { useState} from 'react'
import { useDispatch} from 'react-redux'

import { register } from 'redux/auth/authOperations'
import * as SC from 'pages/RegisterPage/RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    console.log(form.email.value);
    console.log(form.password.value);
    console.log(form.name.value);
    
    dispatch(register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))
    form.reset()
}
    return (
    
        <SC.Form onSubmit={handleSubmit} autoComplete="off">
        <SC.Label >
        Username
        <input type="text" name="name" />
      </SC.Label>
      <SC.Label >
        Email
        <input type="email" name="email" />
      </SC.Label>
      <SC.Label >
        Password
        <input type="password" name="password" />
      </SC.Label>
            <button type="submit"> Register  </button>
        </SC.Form>
    
    )
}

export default RegisterPage


