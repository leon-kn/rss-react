import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CharacterItem } from 'src/types/CharacterItem';

interface CharacterState {
  input: string;
  character: CharacterItem | null;
  isLoading: boolean;
  isModalOpen: boolean;
}

const initialState: CharacterState = {
  input: '',
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
    characterFetching(state, { payload }: PayloadAction<CharacterItem>) {
      state.character = payload;
      state.isModalOpen = true;
    },
  },
});

export const { setInput, setModal, characterFetching } = CharacterSlice.actions;

export default CharacterSlice.reducer;
