import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactStars from 'react-rating-stars-component';

import { getBreedsCats, getCatsByBreed } from '../../Api/catApi';
import { BreedPhoto } from 'components/BreedPhoto/BreedPhoto';

export const BreedCharacteristics = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [cats, setCats] = useState([]);
  const [des, setDes] = useState(null);
  const [wiki, setWiki] = useState(null);
  const [orig, setOrig] = useState(null);
  const [choseBreed, setChosebreed] = useState(false);
  const [intelligence, setIntelligence] = useState(null);

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
  console.log(intelligence);

  const options = breeds.map(breed => ({
    // main
    value: breed.id,
    label: breed.name,
    description: breed.description,
    origin: breed.origin,
    temperament: breed.temperament,
    countryCode: breed.country_codes,
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
    // string rating
    lifeSpan: breed.life_span,
  }));

  const handleChange = option => {
    setChosebreed(true);

    setSelectedBreed(option.value);
    setDes(option.description);
    setWiki(option.wikipedia);
    setOrig(option.origin);
    setIntelligence(option.energyLevel);
  };
  console.log(des);

  return (
    <>
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

      <p>{des}</p>
      <p>{orig}</p>
      {choseBreed ? (
        <div>
          <a href={wiki}>wikipedia</a>
        </div>
      ) : null}

      {choseBreed ? (
        <ReactStars
          count={5}
          size={24}
          value={intelligence}
          edit={false}
          activeColor="#ffd700"
        />
      ) : null}
    </>
  );
};
