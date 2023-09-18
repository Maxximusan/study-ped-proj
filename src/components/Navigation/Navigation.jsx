import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/findcat">FINDCAT</NavLink>
    </nav>
  );
};
