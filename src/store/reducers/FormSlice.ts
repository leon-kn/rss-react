import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormItem } from 'src/types/FormItem';

interface FormState {
  formItems: FormItem[];
  isPopupOpen: boolean;
}

const initialState: FormState = {
  formItems: [],
  isPopupOpen: false,
};

const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormItem(state, { payload }: PayloadAction<FormItem>) {
      state.formItems.push(payload);
    },
    setModal(state, { payload }: PayloadAction<boolean>) {
      state.isPopupOpen = payload;
    },
  },
});

export const { addFormItem, setModal } = FormSlice.actions;

export default FormSlice.reducer;
