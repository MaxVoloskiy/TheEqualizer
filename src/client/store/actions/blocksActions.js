/* eslint no-case-declarations: "error" */

import fetchRequest from '../../helpers/fetchRequest';
import {
  HOST,
  DEFAULT_PRESET_ARRAY,
  JAZZ_PRESET_ARRAY,
  ROCK_PRESET_ARRAY,
  POP_PRESET_ARRAY,
} from '../../helpers/constants';

import {
  SET_VISIBILITY,
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_POP_PRESET,
  SET_USER_PRESET,
  SET_DEFAULT_PRESET,
} from './types';

export const setVisibility = blockName => ({ type: SET_VISIBILITY, blockName });

export const setPresetValue = chosenPresetName => async (dispatch) => {
  switch (chosenPresetName) {
    case 'Default':
      dispatch({
        type: SET_DEFAULT_PRESET,
        defaultPresetArray: DEFAULT_PRESET_ARRAY,
      });
      break;
    case 'Jazz':
      dispatch({
        type: SET_JAZZ_PRESET,
        jazzPresetArray: JAZZ_PRESET_ARRAY,
      });
      break;
    case 'Rock':
      dispatch({
        type: SET_ROCK_PRESET,
        rockPresetArray: ROCK_PRESET_ARRAY,
      });
      break;
    case 'Pop':
      dispatch({
        type: SET_POP_PRESET,
        popPresetArray: POP_PRESET_ARRAY,
      });
      break;
    default: {
      const response = await fetchRequest
        .get(`${HOST}/effects`, { params: { title: chosenPresetName } });
      const { data: { presets: userPresetArray } } = response;
      dispatch({
        type: SET_USER_PRESET,
        userPresetArray,
      });
    }
  }
};
