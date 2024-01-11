import { useDispatch} from 'react-redux'

import { login } from 'redux/auth/authOperations'
import * as SC from 'pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        console.log(form.email.value);
        console.log(form.password.value);
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
          }))
        form.reset()
    }
    return (
    
        <SC.Form onSubmit={handleSubmit} autoComplete="off">
          <SC.Label >
           Email
            <input type="email" name="email" />
          </SC.Label>
       
          <SC.Label >
           Password
           <input type="password" name="password" />
          </SC.Label>
         
            <button type="submit"> Log in  </button>
        </SC.Form>
    
    )
}

export default LoginPage

