import React, { useState, useEffect } from 'react';
import Select from 'react-select';
// import ReactStars from 'react-rating-stars-component';

import { getBreedsCats, getCatsByBreed } from '../../Api/catApi';
import { Box } from 'components/Box';
import { BreedPhoto } from 'components/BreedPhoto/BreedPhoto';
import { BreedStarRanking } from 'components/BreedStarRanking/BreedStarRanking';

export const BreedCharacteristics = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [cats, setCats] = useState([]);
  const [choseBreed, setChosebreed] = useState(false);
  //  breed links
  const [wiki, setWiki] = useState(null);
  const [detailedDescription, setDetailedDescription] = useState(null);

  // breed main deccription
  const [label, setLabel] = useState(null);
  const [description, setDescription] = useState(null);
  const [temperament, setTemperament] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [lifeSpan, setLifeSpan] = useState('');

  // breed rankings
  const [affectionLevel, setAffectionLevel] = useState(null);
  const [adaptability, setAdaptability] = useState(null);
  const [childFriendly, setChildFriendly] = useState(null);
  const [dogFriendly, setDogFriendly] = useState(null);
  const [energyLevel, setEnergyLevel] = useState(null);
  const [grooming, setGrooming] = useState(null);
  const [healthIssues, setHealthIssues] = useState(null);
  const [hypoallergenic, setHypoallergenic] = useState(null);
  const [intelligence, setIntelligence] = useState(null);
  const [sheddingLevel, setSheddingLevel] = useState(null);
  const [socialNeeds, setSocialNeeds] = useState(null);
  const [strangerFriendly, setStrangerFriendly] = useState(null);

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
  console.log(breeds);

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

  console.log(selectedBreed);
  console.log(cats);

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

    setSelectedBreed(option.value);

    setWiki(option.wikipedia);
    setDetailedDescription(option.detailedDescription);
    setLabel(option.label);
    setDescription(option.description);
    setTemperament(option.temperament);
    setOrigin(option.origin);
    setCountryCode(option.countryCode);
    setAffectionLevel(option.affectionLevel);
    setAdaptability(option.adaptability);
    setChildFriendly(option.childFriendly);
    setDogFriendly(option.dogFriendly);
    setEnergyLevel(option.energyLevel);
    setGrooming(option.grooming);
    setHealthIssues(option.healthIssues);
    setHypoallergenic(option.hypoallergenic);
    setIntelligence(option.intelligence);
    setSheddingLevel(option.sheddingLevel);
    setSocialNeeds(option.socialNeeds);
    setStrangerFriendly(option.strangerFriendly);
    setLifeSpan(option.lifeSpan);
  };
  console.log(description);
  console.log(intelligence);

  return (
    <Box as="section">
      {breeds.length > 0 && (
        <Select
          options={options}
          onChange={handleChange}
          onMenuOpen={() => setChosebreed(false)}
          // onMenuClose={() => setChosebreed(true)}
          placeholder="Choose breed"
        />
      )}

      <BreedPhoto cats={cats} choseBreed={choseBreed} />

      <h3>{label}</h3>
      <p>{description}</p>

      <p>{origin}</p>
      <p>{countryCode}</p>

      <p>{temperament}</p>

      {choseBreed ? (
        <div>
          <p>Life span: {lifeSpan}</p>
          <div>
            <a href={wiki}>wikipedia</a>
          </div>
          <div>
            <a href={detailedDescription}>vetstreet.com</a>
          </div>

          <ul>
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
            <BreedStarRanking
              individuality="Grooming"
              rankIndividuality={grooming}
            />
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
          </ul>
        </div>
      ) : null}
    </Box>
  );
};
