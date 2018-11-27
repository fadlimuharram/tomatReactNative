import {
  ADD_PROBABILITY,
  SELECT_PROBABILITY_BY_CURRENT_KEY,
  EDIT_KEY_CURRENT_PROBA,
  EDIT_KEY_SELECTED_HISTORY_PROBA
} from "../actions/actionTypes";

const initialState = {
  probaPenyakit: [], // list kemungkinan penyakit
  selectedProba: null, // belum di pakai
  keyCurrentProba: null, // dapatkan key sebelum ke halaman hasil
  keySelectedHistoryProba: null // dari list history dapatkan key ketika di klik
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROBABILITY:
      let data = {
        ...state,
        probaPenyakit: state.probaPenyakit.concat({
          key: action.placekey,
          data: action.probaPenyakit
        })
      };
      console.log("ini di reducer", data);
      return data;

    case SELECT_PROBABILITY_BY_CURRENT_KEY:
      return {
        ...state,
        selectedProba: state.probaPenyakit.find(
          proba => proba.key === state.keyCurrentProba
        )
      };

    case EDIT_KEY_CURRENT_PROBA:
      return {
        ...state,
        keyCurrentProba: action.placekey
      };

    /*  */
    case EDIT_KEY_SELECTED_HISTORY_PROBA:
      return {
        ...state,
        keySelectedHistoryProba: action.placekey
      };

    default:
      return state;
  }
};

export default reducer;
