import { useState, useEffect } from 'react';
import * as SC from './App.styled';
import { Box } from 'components/Box';
import { getCats } from './Api/catApi';

export const App = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const data = await getCats();
      setCats(data);
    }
    fetchCats();
  }, []);
  console.log(cats);
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
      <div>
        {cats.map((cat, ind) => (
          <div key={ind}>
            <img src={cat.url} alt="" width="320" />
          </div>
        ))}
      </div>
    </Box>
  );
};
