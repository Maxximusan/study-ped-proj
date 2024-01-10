import * as SC from 'pages/LoginPage/LoginPage.styled';

const LoginPage = () => {
    return (
    
        <SC.Form autoComplete="off">
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

