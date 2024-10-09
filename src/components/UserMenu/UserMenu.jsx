import { useDispatch } from 'react-redux';

import * as SC from 'components/UserMenu/UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <SC.Container>
      <SC.UserName>Welcome, Dear {user}</SC.UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </SC.Container>
  );
};
