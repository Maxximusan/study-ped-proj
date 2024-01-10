import * as SC from 'pages/RegisterPage/RegisterPage.styled';

const RegisterPage = () => {
    return (
    
        <SC.Form autoComplete="off">
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


