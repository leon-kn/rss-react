import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterItem } from 'src/types/CharacterItem';

interface CharacterState {
  input: string;
  characters: CharacterItem[];
  character: CharacterItem | null;
  isFetching: boolean;
}

const initialState: CharacterState = {
  input: '',
  characters: [],
  character: null,
  isFetching: true,
};

export const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setIsFetch(state, { payload }: PayloadAction<boolean>) {
      state.isFetching = payload;
    },
  },
});

export const { setIsFetch } = CharacterSlice.actions;

export default CharacterSlice.reducer;
