import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterItem } from 'src/types/CharacterItem';

interface CharacterState {
  input: string;
  characters: CharacterItem[];
  character: CharacterItem | null;
  isLoading: boolean;
  isModalOpen: boolean;
}

const initialState: CharacterState = {
  input: '',
  characters: [],
  character: null,
  isLoading: true,
  isModalOpen: false,
};

export const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setInput(state, { payload }: PayloadAction<string>) {
      state.input = payload;
    },
    setModal(state, { payload }: PayloadAction<boolean>) {
      state.isModalOpen = payload;
    },
    charactersFetching(state) {
      console.log('start');
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, { payload }: PayloadAction<CharacterItem[]>) {
      console.log('success');
      state.isLoading = false;
      state.characters = payload;
    },
    charactersFetchingError(state, { payload }: PayloadAction<CharacterItem[]>) {
      state.isLoading = false;
      state.characters = payload;
    },
    characterFetching(state, { payload }: PayloadAction<CharacterItem>) {
      state.character = payload;
    },
  },
});

export const {
  setInput,
  setModal,
  characterFetching,
  charactersFetching,
  charactersFetchingSuccess,
  charactersFetchingError,
} = CharacterSlice.actions;

export default CharacterSlice.reducer;
