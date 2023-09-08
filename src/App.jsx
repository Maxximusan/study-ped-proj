import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import * as SC from './App.styled';
import { Box } from 'components/Box';
// import { getRandomCats } from './Api/catApi';
import { getBreedsCats, getCatsByBreed } from './Api/catApi';

export const App = () => {
  // const [randomcats, setRandomCats] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [cats, setCats] = useState([]);
  const [des, setDes] = useState(null);

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

  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name,
    description: breed.description,
  }));

  const handleChange = option => {
    setSelectedBreed(option.value);
    setDes(option.description);
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
          // onChange={option => console.log(option)}
        />
      )}
      <p>{des}</p>
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
