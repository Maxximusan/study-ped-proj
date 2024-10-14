import { useDispatch } from 'react-redux';

import * as SC from 'components/UserMenu/UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(logOut());
  };

  return (
    <SC.Container>
      <SC.UserName>Welcome, Dear {user}</SC.UserName>
      <button type="button" onClick={logoutHandler}>
        Logout
      </button>
    </SC.Container>
  );
};
