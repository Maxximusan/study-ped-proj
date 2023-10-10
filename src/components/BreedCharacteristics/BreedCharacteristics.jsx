import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';

// import ReactStars from 'react-rating-stars-component';
// import { RotatingLines } from 'react-loader-spinner';

import { getBreedsCats, getCatsByBreed } from '../../Api/catApi';
import { Box } from 'components/Box';
import { BreedPhoto } from 'components/BreedPhoto/BreedPhoto';
import { BreedStarRankingList } from 'components/BreedStarRankingList/BreedStarRankingList';
import { BreedMainInfo } from 'components/BreedMainInfo/BreedMainInfo';
import { BreedAdditionalInfo } from 'components/BreedAdditionalInfo/BreedAdditionalInfo';
import { Loader } from 'components/Loader/Loader';
import { setTimeOutForLoader } from 'helpers/setTimeout';
// import * as SC from 'components/BreedCharacteristics/BreedCharacteristics.styled';
import {
  getId,
  getLabel,
  takeAdaptability,
  takeAffectionLevel,
  takeChildFriendly,
  takeCountryCode,
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

export const BreedCharacteristics = () => {
  const [breeds, setBreeds] = useState([]);
  // const [selectedBreed, setSelectedBreed] = useState(null);
  const [cats, setCats] = useState([]);
  const [choseBreed, setChosebreed] = useState(false);
  const [isLoadingBreedPhoto, setIsLoadingBreedPhoto] = useState(false);
  const [onlyOneTime, setOnlyOneTime] = useState(false);

  // //  breed links
  // const [wiki, setWiki] = useState(null);
  // const [detailedDescription, setDetailedDescription] = useState(null);

  // // breed main deccription
  // const [label, setLabel] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [temperament, setTemperament] = useState(null);
  // const [origin, setOrigin] = useState(null);
  // // const [countryCode, setCountryCode] = useState(null);
  // const [lifeSpan, setLifeSpan] = useState('');

  // // breed rankings
  // const [affectionLevel, setAffectionLevel] = useState(null);
  // const [adaptability, setAdaptability] = useState(null);
  // const [childFriendly, setChildFriendly] = useState(null);
  // const [dogFriendly, setDogFriendly] = useState(null);
  // const [energyLevel, setEnergyLevel] = useState(null);
  // const [grooming, setGrooming] = useState(null);
  // const [healthIssues, setHealthIssues] = useState(null);
  // const [hypoallergenic, setHypoallergenic] = useState(null);
  // const [intelligence, setIntelligence] = useState(null);
  // const [sheddingLevel, setSheddingLevel] = useState(null);
  // const [socialNeeds, setSocialNeeds] = useState(null);
  // const [strangerFriendly, setStrangerFriendly] = useState(null);
  const dispatch = useDispatch();
  const selectedBreed = useSelector(getId);
  const label = useSelector(getLabel);

  useEffect(() => {
    async function fetchCats() {
      try {
        const data = await getBreedsCats();
        setBreeds(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCats();
  }, []);
  // console.log(breeds);

  useEffect(() => {
    if (selectedBreed === null) return;

    async function fetchCats() {
      try {
        const data = await getCatsByBreed(selectedBreed);
        setCats(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCats();
  }, [selectedBreed]);

  // console.log(selectedBreed);
  // console.log(cats);

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
  // console.log(description);
  // console.log(intelligence);

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
          {cats.length > 0 && !isLoadingBreedPhoto ? (
            <BreedPhoto cats={cats} label={label} />
          ) : null}
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
