import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';

// import { getCatsByBreed } from '../../Api/catApi';
import * as catsOperations from 'redux/cats/catsOperations';
import { Box } from 'components/Box';
import { BreedPhoto } from 'components/BreedPhoto/BreedPhoto';
import { BreedStarRankingList } from 'components/BreedStarRankingList/BreedStarRankingList';
import { BreedMainInfo } from 'components/BreedMainInfo/BreedMainInfo';
import { BreedAdditionalInfo } from 'components/BreedAdditionalInfo/BreedAdditionalInfo';
import { Loader } from 'components/Loader/Loader';
import { setTimeOutForLoader } from 'helpers/setTimeout';
// import * as SC from 'components/BreedCharacteristics/BreedCharacteristics.styled';
import {
  takeAdaptability,
  takeAffectionLevel,
  takeChildFriendly,
  takeDescription,
  takeDetailedDescription,
  takeDogFriendly,
  takeEnergyLevel,
  takeGrooming,
  takeHealthIssues,
  takeHypoallergenic,
  takeId,
  takeIntelligence,
  takeLabel,
  takeLifeSpan,
  takeOrigin,
  takeSheddingLevel,
  takeSocialNeeds,
  takeStrangerFriendly,
  takeTemperament,
  takeWikipedia,
} from '../../redux/breedOptionsSlice';
import { getBreeds } from 'redux/cats/catsSelectors';

export const BreedCharacteristics = () => {
  const breeds = useSelector(getBreeds);

  const [choseBreed, setChosebreed] = useState(false);
  const [isLoadingBreedPhoto, setIsLoadingBreedPhoto] = useState(false);
  const [onlyOneTime, setOnlyOneTime] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catsOperations.fetchCats());
  }, [dispatch]);
  // console.log(breeds);

  const options = breeds.map(breed => ({
    // main
    value: breed.id,
    label: breed.name,
    description: breed.description,
    origin: breed.origin,
    temperament: breed.temperament,
    countryCode: breed.country_codes,
    lifeSpan: breed.life_span,
    // links
    wikipedia: breed.wikipedia_url,
    detailedDescription: breed.vetstreet_url,
    // rating
    affectionLevel: breed.affection_level,
    adaptability: breed.adaptability,
    childFriendly: breed.child_friendly,
    dogFriendly: breed.dog_friendly,
    energyLevel: breed.energy_level,
    grooming: breed.grooming,
    healthIssues: breed.health_issues,
    hypoallergenic: breed.hypoallergenic,
    intelligence: breed.intelligence,
    sheddingLevel: breed.shedding_level,
    socialNeeds: breed.social_needs,
    strangerFriendly: breed.stranger_friendly,
  }));

  const handleChange = option => {
    setChosebreed(true);

    dispatch(takeId(option.value));

    dispatch(takeWikipedia(option.wikipedia));
    dispatch(takeDetailedDescription(option.detailedDescription));
    dispatch(takeLabel(option.label));
    dispatch(takeDescription(option.description));
    dispatch(takeTemperament(option.temperament));
    dispatch(takeOrigin(option.origin));
    // setCountryCode(option.countryCode);
    dispatch(takeAffectionLevel(option.affectionLevel));
    dispatch(takeAdaptability(option.adaptability));
    dispatch(takeChildFriendly(option.childFriendly));
    dispatch(takeDogFriendly(option.dogFriendly));
    dispatch(takeEnergyLevel(option.energyLevel));
    dispatch(takeGrooming(option.grooming));
    dispatch(takeHealthIssues(option.healthIssues));
    dispatch(takeHypoallergenic(option.hypoallergenic));
    dispatch(takeIntelligence(option.intelligence));
    dispatch(takeSheddingLevel(option.sheddingLevel));
    dispatch(takeSocialNeeds(option.socialNeeds));
    dispatch(takeStrangerFriendly(option.strangerFriendly));
    dispatch(takeLifeSpan(option.lifeSpan));

    if (!onlyOneTime) {
      setTimeOutForLoader(setIsLoadingBreedPhoto);
      setOnlyOneTime(true);
    }
    // loaderForFirstRenderGallery();
  };

  return (
    <Box as="section" height="100vw" bg="#b5a794">
      <h2>
        Choose breed, click on picture if you want like it and add to your
        favorite
      </h2>
      {breeds.length > 0 && (
        <Select
          options={options}
          onChange={handleChange}
          onMenuOpen={() => setChosebreed(false)}
          // onMenuClose={() => setChosebreed(true)}
          placeholder="Choose breed"
          // theme={theme => ({
          //   ...theme,
          //   borderRadius: 10,
          //   colors: {
          //     ...theme.colors,
          //     primary: 'orangered',
          //     primary25: 'yellow',
          //     primary50: 'green',
          //   },
          // })}
        />
      )}

      {isLoadingBreedPhoto ? <Loader /> : null}

      {choseBreed ? (
        <Box>
          {!isLoadingBreedPhoto ? <BreedPhoto /> : null}
          <div>
            <BreedMainInfo />

            <BreedStarRankingList />

            <BreedAdditionalInfo />
          </div>
        </Box>
      ) : null}
    </Box>
  );
};
