import * as SC from 'components/AuthNav/AuthNav.styled';
import { Box } from 'components/Box'

export const AuthNav = () => {
    return(
        <Box >
        <SC.Link to="/Login">Log in</SC.Link>
        <SC.Link to="/Register">Register</SC.Link>
        </Box>
    )
}