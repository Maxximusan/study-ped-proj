import * as SC from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <SC.Link to="/">HOME</SC.Link>
      <SC.Link to="/findcat">FIND CAT</SC.Link>
    </nav>
  );
};
