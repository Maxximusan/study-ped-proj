import { useSelector } from 'react-redux';
import * as SC from 'components/BreedMainInfo/BreedMainInfo.styled';
import {
  getLabel,
  getDescription,
  getLifeSpan,
  getOrigin,
  getTemperament,
} from '../../redux/breedOptionsSlice';

export const BreedMainInfo = () => {
  // breed main deccription
  const label = useSelector(getLabel);
  const description = useSelector(getDescription);
  const temperament = useSelector(getTemperament);
  const origin = useSelector(getOrigin);
  // const countryCode = useSelector(getCountryCode)
  const lifeSpan = useSelector(getLifeSpan);

  return (
    <>
      <SC.H3>{label}</SC.H3>
      <SC.H4> Origin: {origin}</SC.H4>

      <SC.P>{description}</SC.P>

      {/* <img src={origin} alt={countryCode} /> */}

      <SC.P>Life span: {lifeSpan}</SC.P>

      <SC.P>{temperament}</SC.P>
    </>
  );
};
