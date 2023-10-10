import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  label: '',
  description: '',
  origin: '',
  temperament: '',
  countryCode: '',
  lifeSpan: '',
  wikipedia: '',
  detailedDescription: '',
  affectionLevel: '',
  adaptability: '',
  childFriendly: '',
  dogFriendly: '',
  energyLevel: null,
  grooming: '',
  healthIssues: '',
  hypoallergenic: '',
  intelligence: '',
  sheddingLevel: '',
  socialNeeds: '',
  strangerFriendly: '',
};

// const generalStateChange = (state, action) => {
//   state = action.payload;
// };
export const breedOptionsSlice = createSlice({
  name: 'breedOptions',
  initialState,
  reducers: {
    takeId(state, action) {
      state.id = action.payload;
    },

    takeLabel(state, action) {
      state.label = action.payload;
    },

    takeDescription(state, action) {
      state.description = action.payload;
    },

    takeOrigin(state, action) {
      state.origin = action.payload;
    },

    takeTemperament(state, action) {
      state.temperament = action.payload;
    },

    takeCountryCode(state, action) {
      state.countryCode = action.payload;
    },

    takeLifeSpan(state, action) {
      state.lifeSpan = action.payload;
    },

    takeWikipedia(state, action) {
      state.wikipedia = action.payload;
    },

    takeDetailedDescription(state, action) {
      state.detailedDescription = action.payload;
    },

    takeAffectionLevel(state, action) {
      state.affectionLevel = action.payload;
    },

    takeAdaptability(state, action) {
      state.adaptability = action.payload;
    },

    takeChildFriendly(state, action) {
      state.childFriendly = action.payload;
    },

    takeDogFriendly(state, action) {
      state.dogFriendly = action.payload;
    },

    takeEnergyLevel(state, action) {
      state.energyLevel = action.payload;
    },

    takeGrooming(state, action) {
      state.grooming = action.payload;
    },

    takeHealthIssues(state, action) {
      state.healthIssues = action.payload;
    },

    takeHypoallergenic(state, action) {
      state.hypoallergenic = action.payload;
    },

    takeIntelligence(state, action) {
      state.intelligence = action.payload;
    },

    takeSheddingLevel(state, action) {
      state.sheddingLevel = action.payload;
    },

    takeSocialNeeds(state, action) {
      state.socialNeeds = action.payload;
    },

    takeStrangerFriendly(state, action) {
      state.strangerFriendly = action.payload;
    },
  },
});

export const {
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
} = breedOptionsSlice.actions;

// SELECTORS
export const getId = state => state.breedOptions.id;
export const getLabel = state => state.breedOptions.label;
export const getDescription = state => state.breedOptions.description;
export const getOrigin = state => state.breedOptions.origin;
export const getTemperament = state => state.breedOptions.temperament;
export const getCountryCode = state => state.breedOptions.countryCode;
export const getLifeSpan = state => state.breedOptions.lifeSpan;
export const getWikipedia = state => state.breedOptions.wikipedia;
export const getDetailedDescription = state =>
  state.breedOptions.detailedDescription;
export const getAffectionLevel = state => state.breedOptions.affectionLevel;
export const getAdaptability = state => state.breedOptions.adaptability;
export const getChildFriendly = state => state.breedOptions.childFriendly;
export const getDogFriendly = state => state.breedOptions.dogFriendly;
export const getEnergyLevel = state => state.breedOptions.energyLevel;
export const getGrooming = state => state.breedOptions.grooming;
export const getHealthIssues = state => state.breedOptions.healthIssues;
export const getHypoallergenic = state => state.breedOptions.hypoallergenic;
export const getIntelligence = state => state.breedOptions.intelligence;
export const getSheddingLevel = state => state.breedOptions.sheddingLevel;
export const getSocialNeeds = state => state.breedOptions.socialNeeds;
export const getStrangerFriendly = state => state.breedOptions.strangerFriendly;
