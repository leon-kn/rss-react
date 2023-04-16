import { HomeApi } from 'src/api';
import { AppDispatch } from '..';
import { characterFetching } from './CharacterSlice';

export const fetchCharacterThunk = (id: number) => async (dispatch: AppDispatch) => {
  try {
    console.log('thunk');
    const response = await HomeApi.getCharacter(id);
    console.log(response);
    dispatch(characterFetching(response));
  } catch {}
};
