import { useSelector } from 'react-redux';

import * as SC from 'components/BreedAdditionalInfo/BreedAdditionalInfo.styled';
import {
  getDetailedDescription,
  getWikipedia,
} from '../../redux/breedOptionsSlice';

export const BreedAdditionalInfo = () => {
  //  breed links
  const wiki = useSelector(getWikipedia);
    const detailedDescription = useSelector(getDetailedDescription);
    
  return (
    <SC.AdditionalInfoBox>
      <SC.LinkDescription>
        if you need more information about your chosen cat, please visit next
        sorces
      </SC.LinkDescription>
      <SC.BothLinkBox>
        <SC.LinkBox>
          <SC.Link href={wiki}>wikipedia</SC.Link>
        </SC.LinkBox>
        <SC.LinkBox>
          <SC.Link href={detailedDescription}>vetstreet</SC.Link>
        </SC.LinkBox>
      </SC.BothLinkBox>
    </SC.AdditionalInfoBox>
  );
};
