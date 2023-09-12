import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import ReactStars from 'react-rating-stars-component';

import * as SC from './App.styled';
import { Box } from 'components/Box';
// import { getRandomCats } from './Api/catApi';
import { getBreedsCats, getCatsByBreed } from './Api/catApi';
// 

export const App = () => {
  // const [randomcats, setRandomCats] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [cats, setCats] = useState([]);
  const [des, setDes] = useState(null);
  const [wiki, setWiki] = useState(null);
  const [orig, setOrig] = useState(null);
  const [choseBreed, setChosebreed] = useState(false);
  const [intelligence, setIntelligence] = useState(null);

  useEffect(() => {
    // async function fetchCats() {
    //   const data = await getRandomCats();
    //   setRandomCats(data);
    // }
    // fetchCats();

    async function fetchCats() {
      const data = await getBreedsCats();
      setBreeds(data);
    }
    fetchCats();
  }, []);
  console.log(breeds);

  // console.log(randomcats);

  useEffect(() => {
    if (selectedBreed === null) return;

    async function fetchCats() {
      const data = await getCatsByBreed(selectedBreed);
      setCats(data);
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
    vocalisation: breed.vocalisation,
    countryCode: breed.country_codes,
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
    <Box as="main">
      <Box>
        <SC.MainTitle> Hello my pet project</SC.MainTitle>
        <SC.SecondTitle> this font is different</SC.SecondTitle>
        <SC.ThirdTitle> what is this font?</SC.ThirdTitle>
      </Box>
      <Box bg="muted" p={3} display="flex">
        <SC.FirstDiv></SC.FirstDiv>
        <SC.SecDiv></SC.SecDiv>
        <SC.ThirdDiv></SC.ThirdDiv>
      </Box>
      {/* <div>
        {randomcats.map((cat, ind) => (
          <div key={ind}>
            <img src={cat.url} alt="" width="320" />
          </div>
        ))}
      </div> */}
      {breeds.length > 0 && (
        <Select
          options={options}
          onChange={handleChange}
          onMenuOpen={() => setChosebreed(false)}
          // onChange={option => console.log(option)}
        />
      )}
      <p>{des}</p>
      <p>{orig}</p>
      {choseBreed ? (
        <div>
          <a href={wiki}>wikipedia</a>
        </div>
      ) : null}

      {choseBreed ? (
        // <SC.Raiting>
        //   <SC.RaitingBody>
        //     <SC.RaitingActive></SC.RaitingActive>
        //     <SC.RaitingStars>
        //       <SC.StarInput type="radio" value="1" name="stars" />
        //       <SC.StarInput type="radio" value="2" name="stars" />
        //       <SC.StarInput type="radio" value="3" name="stars" />
        //       <SC.StarInput type="radio" value="4" name="stars" />
        //       <SC.StarInput type="radio" value="5" name="stars" />
        //     </SC.RaitingStars>
        //   </SC.RaitingBody>
        //   <SC.RaitingValue>{intelligence}</SC.RaitingValue>
        // </SC.Raiting>
        <ReactStars
          count={5}
          // onChange={intelligence}
          size={24}
          value={intelligence}
          edit={false}
          activeColor="#ffd700"
        />
        
      ) : null}

      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <img src={cat.url} alt="" width="320" />
          </li>
        ))}
      </ul>
    </Box>
  );
};
