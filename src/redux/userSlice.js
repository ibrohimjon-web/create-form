import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  value: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.value = [...state.value, action.payload];
      toast.success("Qo‘shildi");
    },
    removeUsers: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      toast.error("O‘chirildi");
    },
  },
});

export const { addUsers, removeUsers } = userSlice.actions;

export default userSlice.reducer; // Bu joyda default eksport qilinyapti
