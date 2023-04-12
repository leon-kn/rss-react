import { HomeApi } from 'src/api';
import { AppDispatch } from '..';
import {
  characterFetching,
  charactersFetching,
  charactersFetchingError,
  charactersFetchingSuccess,
} from './CharacterSlice';

export const fetchCharactersThunk = (name: string) => async (dispatch: AppDispatch) => {
  console.log('thunk');
  try {
    dispatch(charactersFetching);
    let response = [];
    if (name) {
      response = await HomeApi.searchCharacters(name);
    } else {
      response = await HomeApi.getAllCharacters();
    }
    dispatch(charactersFetchingSuccess(response));
  } catch {
    dispatch(charactersFetchingError([]));
  }
};

export const fetchCharacterThunk = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await HomeApi.getCharacter(id);
    dispatch(characterFetching(response));
  } catch {}
};
