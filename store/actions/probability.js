import {
  ADD_PROBABILITY,
  SELECT_PROBABILITY_BY_CURRENT_KEY,
  EDIT_KEY_CURRENT_PROBA,
  EDIT_KEY_SELECTED_HISTORY_PROBA
} from "./actionTypes";

export const addProba = (penyakit, keynya) => {
  return {
    type: ADD_PROBABILITY,
    probaPenyakit: penyakit,
    placekey: keynya
  };
};

export const selectProbaByCurrKey = () => {
  return {
    type: SELECT_PROBABILITY_BY_CURRENT_KEY
  };
};

export const editKeyCurrentProba = key => {
  return {
    type: EDIT_KEY_CURRENT_PROBA,
    placekey: key
  };
};

export const editKeySelectedHistoryProba = key => {
  return {
    type: EDIT_KEY_SELECTED_HISTORY_PROBA,
    placekey: key
  };
};

// export const selectLastProba = () => {
//   return {
//     type: SELECT_LAST_PROBABILITY
//   };
// };
