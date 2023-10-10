import { useSelector } from 'react-redux';

import { BreedStarRanking } from 'components/BreedStarRanking/BreedStarRanking';
import * as SC from 'components/BreedStarRankingList/BreesStarRankingList.styled';
import {
  getAdaptability,
  getAffectionLevel,
  getChildFriendly,
  getDogFriendly,
  getEnergyLevel,
  getGrooming,
  getHealthIssues,
  getHypoallergenic,
  getIntelligence,
  getSheddingLevel,
  getSocialNeeds,
  getStrangerFriendly,
} from '../../redux/breedOptionsSlice';

export const BreedStarRankingList = () => {
  // breed rankings
  const affectionLevel = useSelector(getAffectionLevel);
  const adaptability = useSelector(getAdaptability);
  const childFriendly = useSelector(getChildFriendly);
  const dogFriendly = useSelector(getDogFriendly);
  const energyLevel = useSelector(getEnergyLevel);
  const grooming = useSelector(getGrooming);
  const healthIssues = useSelector(getHealthIssues);
  const hypoallergenic = useSelector(getHypoallergenic);
  const intelligence = useSelector(getIntelligence);
  const sheddingLevel = useSelector(getSheddingLevel);
  const socialNeeds = useSelector(getSocialNeeds);
  const strangerFriendly = useSelector(getStrangerFriendly);

  return (
    <SC.UL>
      <BreedStarRanking
        individuality="Affection Level"
        rankIndividuality={affectionLevel}
      />
      <BreedStarRanking
        individuality="Adaptability"
        rankIndividuality={adaptability}
      />
      <BreedStarRanking
        individuality="Child Friendly"
        rankIndividuality={childFriendly}
      />
      <BreedStarRanking
        individuality="Dog Friendly"
        rankIndividuality={dogFriendly}
      />
      <BreedStarRanking
        individuality="Energy Level"
        rankIndividuality={energyLevel}
      />
      <BreedStarRanking individuality="Grooming" rankIndividuality={grooming} />
      <BreedStarRanking
        individuality="Health Issues"
        rankIndividuality={healthIssues}
      />
      <BreedStarRanking
        individuality="Hypoallergenic"
        rankIndividuality={hypoallergenic}
      />
      <BreedStarRanking
        individuality="Intelligence"
        rankIndividuality={intelligence}
      />
      <BreedStarRanking
        individuality="Shedding Level"
        rankIndividuality={sheddingLevel}
      />
      <BreedStarRanking
        individuality="Social Needs"
        rankIndividuality={socialNeeds}
      />
      <BreedStarRanking
        individuality="Stranger Friendly"
        rankIndividuality={strangerFriendly}
      />
    </SC.UL>
  );
};
