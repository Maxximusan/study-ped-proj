import * as SC from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <SC.Link to="/">HOME</SC.Link>
      { isLoggedIn  && (
        <>
      <SC.Link to="/findcat">FIND CAT</SC.Link>
      <SC.Link to="/favorite">FAVORITE</SC.Link>
      </>
      )}
      <SC.Link to="/testing"> TESTING </SC.Link>
    </nav>
  );
};
