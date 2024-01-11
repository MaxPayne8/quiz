import { createSlice } from "@reduxjs/toolkit";
const quizSlice = createSlice({
  initialState: { scores: [] },
  name: "quiz",
  reducers: {
    addScore: (state, action) => {
      const { isCorrect, index } = action.payload;
      if (isCorrect) state.scores[index] = 1;
      else state.scores[index] = 0;
    },
    startAgain: (state) => {
      state.scores.length = 0;
    },
  },
});

export const { addScore, startAgain } = quizSlice.actions;
export default quizSlice.reducer;
