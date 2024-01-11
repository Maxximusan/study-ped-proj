import { useDispatch, useSelector } from 'react-redux';

import * as SC from 'components/UserMenu/UserMenu.styled';
import { getUser} from 'redux/auth/authSelectors'
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUser)
  
    return (
      <SC.Container>
            <SC.UserName >Welcome, {name}</SC.UserName>
           <button type="button" onClick={() => dispatch(logOut())}>
           
          Logout
        </button>
      </SC.Container>
    );
  };